import { generateRegistryPackage, generateOpenApi } from "@lpsmods/docs-generator";
import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

async function resolveCaseInsensitivePageCollisions(output) {
  const pages = [];

  async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) await collect(filename);
      else if (entry.name.endsWith(".md")) pages.push(filename);
    }
  }

  await collect(output);

  const groups = new Map();
  for (const filename of pages) {
    const key = filename.toLowerCase();
    groups.set(key, [...(groups.get(key) ?? []), filename]);
  }
  const renamedPaths = new Map();
  for (const collidingPages of groups.values()) {
    if (collidingPages.length < 2) continue;

    const preferred = collidingPages.find((filename) => filename === filename.toLowerCase()) ?? collidingPages[0];
    let suffix = 1;
    for (const filename of collidingPages) {
      if (filename === preferred) continue;

      const extension = path.extname(filename);
      const discriminator = suffix === 1 ? "case-sensitive" : `case-sensitive-${suffix}`;
      suffix += 1;
      const replacement = `${filename.slice(0, -extension.length)}.${discriminator}${extension}`;
      await rename(filename, replacement);
      renamedPaths.set(
        path.relative(output, filename).replaceAll(path.sep, "/"),
        path.relative(output, replacement).replaceAll(path.sep, "/"),
      );
    }
  }

  if (renamedPaths.size > 0) {
    const manifestPath = path.join(output, "manifest.json");
    let manifest = await readFile(manifestPath, "utf8");
    for (const [original, replacement] of renamedPaths) {
      manifest = manifest.replaceAll(original, replacement);
    }
    await writeFile(manifestPath, manifest, "utf8");
    console.log(`Renamed ${renamedPaths.size} case-colliding page(s) in ${output}`);
  }
}

async function buildLPSMODS() {
  // lpsmods-api
  await generateOpenApi({
    input: "https://api.lpsmods.dev/openapi.json",
    output: "docs/lpsmods-api/reference",
    vitepress: {
      title: "API Reference",
      sidebar: "docs/lpsmods-api/sidebar.json",
      base: `/lpsmods-api/reference/`,
    },
  });
  await generateRegistryPackage({
    registry: "npm",
    package: "lpsmods-api",
    output: `docs/lpsmods-api/node`,
    vitepress: {
      title: "Node Wrapper",
      sidebar: `docs/lpsmods-api/sidebar.json`,
      base: `/lpsmods-api/node/`,
    },
  });
  await generateRegistryPackage({
    registry: "pypi",
    package: "lpsmods-api",
    output: `docs/lpsmods-api/python`,
    vitepress: {
      title: "Python Wrapper",
      sidebar: `docs/lpsmods-api/sidebar.json`,
      base: `/lpsmods-api/python/`,
    },
  });
}

export async function build() {
  await buildLPSMODS();

  // npm packages
  for (const name of [
    "mc-common",
    "mc-build",
    "mc-dev",
    "mc-mixins",
    "mc-superstruct",
    "mc-utils",
    "mcaddon-bridge",
    "docs-generator",
  ]) {
    await generateRegistryPackage({
      registry: "npm",
      package: `@lpsmods/${name}`,
      output: `docs/@lpsmods/${name}/scriptapi`,
      vitepress: {
        title: "Script API",
        sidebar: `docs/@lpsmods/${name}/sidebar.json`,
        base: `/@lpsmods/${name}/scriptapi/`,
      },
    });
    await resolveCaseInsensitivePageCollisions(`docs/@lpsmods/${name}/scriptapi`);
    console.log(`Generated ${name}`);
  }

  // Python packages
  for (const name of [
    "accentcolordetect",
    "datapackutils",
    "geysermc",
    "gitfiles",
    "mcaddon",
    "mcextract",
    "mclang",
    "mcpath",
    "mojangskin",
    "molang",
    "multicraft",
    "tkinterplus",
    "userfolder",
  ]) {
    await generateRegistryPackage({
      registry: "pypi",
      package: name,
      output: `docs/${name}/reference`,
      vitepress: {
        sidebar: `docs/${name}/sidebar.json`,
        base: `/${name}/reference/`,
      },
    });
    await resolveCaseInsensitivePageCollisions(`docs/${name}/reference`);
    console.log(`Generated ${name}`);
  }
}

await build();
