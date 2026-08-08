import { generateRegistryPackage } from "@lpsmods/docs-generator";

export async function build() {
  // npm packages
  for (const name of ["mc-common", "mc-build", "mc-dev", "mc-mixins", "mc-superstruct", "mc-utils", "mcaddon-bridge", "docs-generator"]) {
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
    console.log(`Generated ${name}`);
  }
}

build();
