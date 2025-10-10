<template>
  <div>
    <p>
      You can install <code>{{ package }}</code> using any Node package manager.
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
    package: String,
  },
  data() {
    return {
      cmd: "Loading...",
    };
  },
  methods: {
    async init() {
      await fetch(`https://registry.npmjs.org/${this.package}/latest`).then((res) => {
        res.json().then((data) => {
          const code = `npm install ${data.name}@${data.version}`;
          codeToHtml(code, { lang: "bash", theme: "github-dark" }).then((value) => {
            this.cmd = value;
          });
        });
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
