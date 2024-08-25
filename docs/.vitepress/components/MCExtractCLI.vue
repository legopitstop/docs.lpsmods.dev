<template>
  <div class="mcextract-cli">
    <p>
      Minecraft Version:
      <select name="version" id="version" @change="onChange">
        <option v-for="version in versions" :key="version">
          {{ version.version }}
        </option>
      </select>
    </p>

    <p>
      Client Files:
      <input
        type="checkbox"
        name="client"
        id="client"
        @change="onChange"
        checked
      />
    </p>

    <p>
      Server Files:
      <input
        type="checkbox"
        name="server"
        id="server"
        @change="onChange"
        checked
      />
    </p>

    <div class="language-sh vp-adaptive-theme">
      <button title="Copy Code" class="copy"></button
      ><span class="lang">sh</span>
      <div v-html="output"></div>
    </div>
  </div>
</template>

<script>
import mcextract from "../mcextract.json";
import { codeToHtml } from "shiki";

export default {
  name: "MCExtractCLI",
  data() {
    return {
      output: "",
      versions: mcextract,
    };
  },
  methods: {
    init: function () {
      this.updateCLI(this.versions[0].version);
    },
    onChange() {
      const version = document.getElementById("version");
      const client = document.getElementById("client");
      const server = document.getElementById("server");
      this.updateCLI(version.value, server.checked, client.checked);
      // this.output = this.getCLI(version.value, server.checked, client.checked);
    },
    getCLI(version, server = true, client = true) {
      const ver = this.versions.find((x) => x.version === version);
      if (ver) {
        return `mcextract extract ${ver.jar} ${client ? "--assets " : ""}${
          server ? "--data " : ""
        }-eula\nmcextract map ${
          ver.index
        } -eula\nmcextract generate ${version} ${client ? "--client " : ""}${
          server ? "--server " : ""
        }--reports -eula`;
      }
      return "mcextract -h"; // Version not found.
    },
    updateCLI(version, server = true, client = true) {
      codeToHtml(this.getCLI(version, server, client), {
        lang: "sh",
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
