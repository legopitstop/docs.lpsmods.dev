<template>
  <div class="requirements_dev">
    <div>
      <label for="preset">Preset:</label>
      <select name="preset" id="preset" v-model="preset" @change="applyPreset">
        <option :value="id" v-for="[id, preset] in Object.entries(allPresets)" :key="id">{{ preset.name }}</option>
        <option value="custom">Custom</option>
      </select>
    </div>
    <div>
      <label for="projects">Projects:</label>
      <textarea name="projects" id="projects" v-model="projects" @change="applyCustom()"></textarea>
    </div>

    <div class="language-txt vp-adaptive-theme output">
      <button title="Copy Code" class="copy"></button><span class="lang">txt</span>
      <div v-if="content === ''" class="loader"></div>
      <div v-else v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

const PRESETS = {
  dev: { name: "Development", projects: "flake8\ntox\npytest\npytest-cov\nmypy\nblack" },
};

export default {
  name: "PythonRequirements",
  data() {
    return {
      allPresets: PRESETS,
      content: "",
      preset: "dev",
      projects: "",
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
          const res = await fetch(`https://pypi.org/pypi/${encoded}/json`);
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
      let content = "";
      const projects = await this.resolveDeps(this.projects);
      for (const [project, v] of Object.entries(projects)) {
        content += `${project}==${v}\n`;
      }
      codeToHtml(content, { lang: "text", theme: "github-dark" }).then((e) => {
        this.content = e;
      });
    },
    applyPreset() {
      const preset = PRESETS[this.preset];
      if (!preset) return;
      this.projects = preset.projects;
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
.requirements_dev {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}
</style>
