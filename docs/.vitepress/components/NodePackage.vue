<template>
  <div class="node_package">
    <div>
      <label for="preset">Preset:</label>
      <select name="preset" id="preset" v-model="preset" @change="applyPreset">
        <option :value="id" v-for="[id, preset] in Object.entries(allPresets)" :key="id">{{ preset.name }}</option>
        <option value="custom">Custom</option>
      </select>
    </div>
    <div>
      <label for="devDependencies">Development Dependencies:</label>
      <textarea name="devDependencies" id="devDependencies" v-model="devDependencies" @change="applyCustom"></textarea>
    </div>
    <div>
      <label for="dependencies">Dependencies:</label>
      <textarea name="dependencies" id="dependencies" v-model="dependencies" @change="applyCustom"></textarea>
    </div>
    <div class="language-json vp-adaptive-theme output">
      <button title="Copy Code" class="copy"></button><span class="lang">json</span>
      <div v-if="content === ''" class="loader"></div>
      <div v-else v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

const PRESETS = {
  mc: {
    name: "Minecraft Bedrock",
    scripts: {
      lint: "just-scripts lint",
      build: "just-scripts build",
      clean: "just-scripts clean",
      "local-deploy": "just-scripts local-deploy",
      mcaddon: "just-scripts mcaddon",
      enablemcloopback:
        "CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436",
      enablemcpreviewloopback:
        "CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-424268864-5579737-879501358-346833251-474568803-887069379-4040235476",
    },
    devDependencies:
      "@minecraft/core-build-tasks\n@typescript-eslint/eslint-plugin\neslint-plugin-minecraft-linting\nsource-map\nts-node\ntypescript\nprettier",
    dependencies: "@lpsmods/mc-utils\n@minecraft/server\n@minecraft/server-ui\n@minecraft/math",
  },
  vp: {
    name: "Vitepress",
    scripts: {
      dev: "vitepress dev docs --port 80",
      build: "vitepress build docs",
      preview: "vitepress preview docs",
    },
    devDependencies: "vitepress",
    dependencies: "",
  },
  vue: {
    name: "Vue",
    scripts: {
      dev: "vite --port 80",
      build: "vite build",
      preview: "vite preview",
    },
    devDependencies: "@vitejs/plugin-vue\nvite\nvite-plugin-vue-devtools",
    dependencies: "vite-plugin-sitemap\nvue\nvue-router",
  },
  bb: {
    name: "Blockbench Plugin",
    scripts: {
      build: "node build.mjs",
      rebuild: "npm run build && echo Done!",
      dev: 'chokidar "ts/**/*" -c "npm run rebuild" -d',
    },
    devDependencies: "blockbench-types\nchokidar-cli",
    dependencies: "esbuild\ntypescript",
  },
};

export default {
  name: "NodePackage",
  data() {
    return {
      content: "",
      preset: "mc",
      allPresets: PRESETS,
      scripts: {},
      devDependencies: "",
      dependencies: "",
    };
  },
  methods: {
    async resolveDeps(deps) {
      const result = {};
      if (!deps) return result;
      const packs = deps
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean);
      for (const pack of packs) {
        const encoded = encodeURIComponent(pack);
        try {
          const res = await fetch(`https://registry.npmjs.org/${encoded}/latest`);
          if (!res.ok) {
            console.warn(`Failed to fetch ${pack}: ${res.status}`);
            result[pack] = "latest";
            continue;
          }
          const data = await res.json();
          result[data.name ?? pack] = data.version ?? "latest";
        } catch (err) {
          console.warn(`Error fetching ${pack}:`, err);
          result[pack] = "latest";
        }
      }
      return result;
    },
    async update() {
      this.content = "";
      let content = {
        name: "project_name",
        private: true,
        scripts: this.scripts,
        devDependencies: await this.resolveDeps(this.devDependencies),
        dependencies: await this.resolveDeps(this.dependencies),
      };
      codeToHtml(JSON.stringify(content, null, 2), { lang: "json", theme: "github-dark" }).then((e) => {
        this.content = e;
      });
    },
    applyPreset() {
      const preset = PRESETS[this.preset];
      if (!preset) return;
      this.scripts = preset.scripts ?? {};
      this.devDependencies = preset.devDependencies ?? "";
      this.dependencies = preset.dependencies ?? "";
      this.update();
    },
    applyCustom() {
      this.preset = "custom";
      this.update();
    },
  },
  mounted() {
    this.applyPreset();
  },
};
</script>

<style scoped>
.node_package {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}

.node_package .output {
  min-height: 166px;
}
</style>
