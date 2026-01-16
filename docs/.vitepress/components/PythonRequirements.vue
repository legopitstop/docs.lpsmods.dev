<template>
  <div class="requirements_dev">
    <div>
      <label for="preset">Preset:</label>
      <select id="preset" v-model="preset" name="preset" @change="applyPreset">
        <option v-for="[id, v] in Object.entries(allPresets)" :key="id" :value="id">{{ v.name }}</option>
        <option value="custom">Custom</option>
      </select>
    </div>
    <div>
      <label for="python_version">Python Version:</label>
      <select id="python_version" v-model="pythonVer" name="python_version" @change="applyPyVer">
        <option v-for="v in allVersions" :key="v" :value="v">{{ v }}</option>
      </select>
    </div>
    <div>
      <label for="projects">Projects:</label>
      <textarea id="projects" v-model="projects" name="projects" @change="applyCustom"></textarea>
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
import { satisfies } from "semver";

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
      pythonVer: "3.14.2",
      projects: "",
      allVersions: [],
      cache: {},
    };
  },
  mounted() {
    this.applyPreset();
    this.fetchVersions();
  },
  methods: {
    findLatestRelease(data) {
      let lastDate = 0;
      let result = "latest";
      for (const [version, files] of Object.entries(data.releases)) {
        for (const file of files) {
          if (file.yanked) continue;
          if (!satisfies(this.pythonVer, file.requires_python)) continue;
          const date = new Date(file.upload_time);
          if (date > lastDate) {
            lastDate = date;
            result = version;
          }
        }
      }
      return result;
    },
    async resolveDeps(deps) {
      if (!(this.pythonVer in this.cache)) {
        this.cache[this.pythonVer] = {};
      }
      const result = {};
      if (!deps) return result;
      const packs = deps
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean);
      for (const pack of packs) {
        if (this.pythonVer in this.cache) {
          if (pack in this.cache[this.pythonVer]) {
            result[pack] = this.cache[this.pythonVer][pack];
            continue;
          }
        }
        const encoded = encodeURIComponent(pack);
        try {
          const res = await fetch(`https://pypi.org/pypi/${encoded}/json`);
          if (!res.ok) {
            console.warn(`Failed to fetch ${pack}: ${res.status}`);
            result[pack] = "latest";
            continue;
          }
          const data = await res.json();
          const version = this.findLatestRelease(data);
          result[pack] = version;
          this.cache[this.pythonVer][pack] = version;
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
    fetchVersions() {
      fetch("https://endoflife.date/api/python.json")
        .then((res) => res.json())
        .then((data) => {
          this.allVersions = data.map((x) => x.latest);
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
    applyPyVer() {
      this.update();
    },
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
