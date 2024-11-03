<template>
  <div class="multiloader-gradle">
    <p>
      Minecraft Version:
      <select name="version" id="version" @change="onChange">
        <option v-for="(value, key) in multiloaders" :key="key">
          {{ key }}
        </option>
      </select>
    </p>

    <p>
      Mappings:
      <select name="mapping" id="mapping" @change="onChange">
        <option v-for="map in mappings" :key="map">
          {{ map }}
        </option>
      </select>
    </p>

    <div class="language-gradle vp-adaptive-theme">
      <button title="Copy Code" class="copy"></button><span class="lang">gradle</span>
      <div v-html="output"></div>
    </div>
  </div>
</template>

<script>
import multiloaders from "../data/multiloaders.json";
import gradleGrammar from "../theme/syntaxes/gradle.tmLanguage.json";
import { codeToHtml } from "shiki";

export default {
  name: "MultiloaderGradleGenerator",
  data() {
    return {
      output: "",
      mappings: ["official", "parchment", "yarn"],
      multiloaders: multiloaders
    };
  },
  methods: {
    init: function () {
      this.updateGradle(Object.keys(this.multiloaders)[0]);
    },
    onChange() {
      const version = document.getElementById("version");
      this.updateGradle(version.value);
    },
    getGradle(mcVersion) {
      const data = this.multiloaders[mcVersion];
      if (!data) return 'undefined';
      return `minecraft_version=${ mcVersion }\nyarn_mappings=${ data.yarn_mappings }\nminecraft_version_range=${ data.minecraft_version_range }\n\nparchment_minecraft=${ data.parchment_minecraft }\nparchment_version=${ data.parchment_version }\n\n# Fabric\nfabric_version=${ data.fabric_version }\nfabric_loader_version=${ data.fabric_loader_version }\n\n# Forge\nforge_version=${ data.forge_version }\nforge_loader_version_range=${ data.forge_loader_version_range }\n\n# NeoForge\nneo_form_version=${ data.neo_form_version }\nneoforge_version=${ data.neoforge_version }\nneoforge_loader_version_range=${ data.neoforge_loader_version_range }`;
    },
    updateGradle(version) {
      codeToHtml(this.getGradle(version), {
        lang: gradleGrammar,
        theme: "github-dark",
      }).then((e) => {
        this.output = e;
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.multiloader-gradle {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}

select {
  display: inline;
  min-width: 200px;
  border-radius: 8px;
  text-indent: 5px;
}
</style>
