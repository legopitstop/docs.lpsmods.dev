<template>
  <div>
    <p>Install the module with pip:</p>
    <div class="language-bash vp-adaptive-theme">
      <button title="Copy Code" class="copy"></button><span class="lang">bash</span>
      <div v-html="cmd"></div>
    </div>
    <p>
      Update existing installation: <code>pip3 install {{ project }} --upgrade</code>
    </p>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

export default {
  name: "PythonInstallation",
  data() {
    return {
      name: "",
      cmd: "Loading...",
    };
  },
  props: {
    project: String,
  },
  methods: {
    async init() {
      await fetch(`https://pypi.org/pypi/${this.project}/json`).then((res) => {
        res.json().then((data) => {
          const code = `pip3 install ${data.info.name}==${data.info.version}`;
          codeToHtml(code, { lang: "bash", theme: "github-dark" }).then((e) => {
            this.cmd = e;
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
