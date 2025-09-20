<template>
  <div class="pack-format">
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="manifest" class="content">
      <label for="version">Minecraft Version:</label>
      <select name="version" id="version" @change="onChange">
        <option
          v-for="version in manifest.versions"
          :key="version.id"
          :value="version.id"
          :selected="version.id == manifest.latest.release"
        >
          {{ version.id }} {{ getLabel(version.id) }}
        </option>
      </select>

      <div v-if="loading">{{ loading }}</div>

      <div v-else>
        <div class="language-text vp-adaptive-theme">
          <button title="Copy Code" class="copy"></button><span class="lang">text</span>
          <div v-html="output"></div>
        </div>
      </div>
    </div>

    <!-- temp -->
    <!-- {{ manifest }} -->
  </div>
</template>

<script>
import JSZip from "jszip";

export default {
  name: "PackFormat",
  data() {
    return {
      loading: "Loading...",
      error: null,
      post: null,
      manifest: null,
      output: "",
    };
  },
  methods: {
    init() {
      fetch("https://launchermeta.mojang.com/mc/game/version_manifest.json")
        .then((res) => res.json())
        .then((manifest) => {
          this.manifest = manifest;
        })
        .catch((error) => {
          this.error = error;
        });
      this.loading = null;
    },
    onChange(ele) {
      if (ele.target.id != "version") return;
      console.log(ele.target.value);
      var version = this.manifest.versions.find((v) => v.id === ele.target.value);
      this.getFormats(version.url);
    },
    getLabel(versionId) {
      if (versionId == this.manifest.latest.release) return "(latest)";
      return "";
    },
    getFormats(url) {
      this.loading = "Loading...";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          fetch(data.downloads.server.url)
            .then((response) => {
              this.loading = "Extracting server jar...";
              if (!response.ok) {
                this.error = "Network response was not ok";
              }
              return response.blob();
            })
            .then(JSZip.loadAsync)
            .then((zip) => {
              zip
                .file("version.json")
                .async("string")
                .then((content) => {
                  return JSON.parse(content);
                })
                .then((data) => {
                  this.output = JSON.stringify(data.pack_version);
                  this.loading = null;
                });
            })
            .catch((error) => {
              this.error = "Error loading zip file";
            });
        });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.pack-format {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}
</style>
