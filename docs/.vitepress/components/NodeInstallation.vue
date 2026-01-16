<template>
  <div>
    <p>
      You can install <code>{{ packageName }}</code> using any Node package manager.
    </p>
    <div class="language-bash vp-adaptive-theme">
      <button title="Copy Code" class="copy"></button><span class="lang">bash</span>
      <div v-html="cmd"></div>
    </div>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

export default {
  name: "NodeInstallation",
  props: {
    packageName: { type: String, default: "" },
  },
  data() {
    return {
      cmd: "Loading...",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await fetch(`https://registry.npmjs.org/${this.packageName}/latest`).then((res) => {
        res.json().then((data) => {
          const code = `npm install ${data.name}@${data.version}`;
          codeToHtml(code, { lang: "bash", theme: "github-dark" }).then((value) => {
            this.cmd = value;
          });
        });
      });
    },
  },
};
</script>
