<!-- TODO: cache version data (data fetched from manifest.json) -->

<template>
  <div class="mcextract-cli">
    <div>
      <div v-if="loading" class="loading">Loading...</div>

      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="manifest" class="content">
        <div>
          <label for="version">Minecraft Version:</label>
          <select
            name="version"
            id="version"
            @change="onChange"
            v-model="version"
          >
            <option
              v-for="v in versions"
              :key="v.id"
              :value="v.id"
              :selected="v.id == manifest.latest.release"
            >
              {{ v.id }}{{ getLabel(v.id) }}
            </option>
          </select>
        </div>

        <div>
          <label for="snapshots">Show Snapshots</label>
          <input
            type="checkbox"
            name="snapshots"
            id="snapshots"
            @change="onChange"
            v-model="snapshots"
          />
        </div>

        <div>
          <label for="client">Client Files:</label>
          <input
            type="checkbox"
            name="client"
            id="client"
            @change="onChange"
            v-model="client"
          />
        </div>

        <div>
          <label for="server">Server Files:</label>
          <input
            type="checkbox"
            name="server"
            id="server"
            @change="onChange"
            v-model="server"
          />
        </div>

        <div class="language-sh vp-adaptive-theme">
          <button title="Copy Code" class="copy"></button
          ><span class="lang">sh</span>
          <div v-html="output"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

const CACHE = {};

export default {
  name: "MCExtractCLI",
  data() {
    return {
      loading: true,
      error: null,
      server: true,
      client: true,
      version: "",
      output: "",
      versions: [],
      manifest: null,
      snapshots: false,
    };
  },
  methods: {
    init: function () {
      this.onChange();
      this.loading = false;
    },
    async cachedFetch(url) {
      var cached = CACHE[url];
      if (cached) {
        return new Promise((resolve) => {
          resolve(cached);
        });
      }
      return await fetch(url)
        .then((res) => {
          var data = res.json();
          CACHE[url] = data;
          return data;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
    getLabel(versionId) {
      if (versionId == this.manifest.latest.release) return " (latest)";
      return "";
    },
    onChange() {
      this.versions = this.manifest.versions.filter((v) => {
        if (this.snapshots) return true;
        return v.type != "snapshot";
      });

      var versionManifest = this.manifest.versions.find(
        (v) => v.id == this.version
      );
      this.cachedFetch(versionManifest.url).then((data) => {
        this.updateCLI(data);
      });
    },
    getCLI(versionData) {
      var jar = `${versionData.id}/${versionData.id}.jar`;
      return `mcextract extract ${jar} ${this.client ? "--assets " : ""}${
        this.server ? "--data " : ""
      }-eula\nmcextract map ${
        versionData.assets
      }.json -eula\nmcextract generate ${versionData.id} ${
        this.client ? "--client " : ""
      }${this.server ? "--server " : ""}--reports -eula`;
    },
    updateCLI(versionData) {
      codeToHtml(this.getCLI(versionData), {
        lang: "sh",
        theme: "github-dark",
      }).then((e) => {
        this.output = e;
      });
    },
  },
  mounted() {
    this.cachedFetch(
      "https://launchermeta.mojang.com/mc/game/version_manifest.json"
    ).then((manifest) => {
      this.manifest = manifest;
      this.version = manifest.latest.release;
      this.init();
    });
  },
};
</script>

<style scoped>
.mcextract-cli {
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
