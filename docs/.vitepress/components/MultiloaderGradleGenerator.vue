<template>
  <div class="multiloader-gradle">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="manifest" class="content">
      <div>
        <label for="version">Minecraft Version</label>

        <select name="version" id="version" @change="onChange" v-model="options.mcversion">
          <option v-for="v in versions" :key="v.id" :value="v.id" :selected="v.id == manifest.latest.release">
            {{ v.id }}{{ getLabel(v.id) }}
          </option>
        </select>
      </div>

      <div>
        <label for="parchment">Parchment MC</label>
        <input type="checkbox" name="parchment" id="parchment" v-model="options.parchment" @change="onChange" />
      </div>

      <div>
        <label for="neoform">Neoform</label>
        <input type="checkbox" name="neoform" id="neoform" v-model="options.neoform" @change="onChange" />
      </div>

      <div>
        <label for="fabric">Fabric</label>
        <input type="checkbox" name="fabric" id="fabric" v-model="options.fabric" @change="onChange" />
      </div>

      <div>
        <label for="forge">Forge</label>
        <input type="checkbox" name="forge" id="forge" v-model="options.forge" @change="onChange" />
      </div>

      <div>
        <label for="neoforge">NeoForge</label>
        <input type="checkbox" name="neoforge" id="neoforge" v-model="options.neoforge" @change="onChange" />
      </div>

      <div>
        <label for="comments">Include Comments</label>
        <input type="checkbox" name="comments" id="comments" v-model="options.comments" @change="onChange" />
      </div>

      <div class="language-gradle vp-adaptive-theme">
        <button title="Copy Code" class="copy"></button><span class="lang">gradle</span>
        <div v-html="output"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gradleGrammar from "../theme/syntaxes/gradle.tmLanguage.json";
import { codeToHtml } from "shiki";

class GradleBuilder {
  constructor(options) {
    this.config = options;
    this.section = "";
    this.sections = {};
    this.options = {};
  }

  add_section(name, comment) {
    this.section = name ?? Math.round(Math.random() * 100);
    this.sections[this.section] = comment;
    this.options[this.section] = {};
  }

  add_option(key, value) {
    this.options[this.section][key] = value; // TODO: include value and new lines.
  }

  build() {
    var result = "";
    for (const section of Object.keys(this.sections)) {
      if (this.config[section] !== undefined && !this.config[section]) continue;
      let content = this.config.comments ? `${this.sections[section]}\n` : "";
      for (const option of Object.keys(this.options[section])) {
        content += `${option}=${this.options[section][option]}\n`;
      }
      result += content + "\n";
    }
    return result;
  }
}

const CACHE = {};

export default {
  name: "MultiloaderGradleGenerator",
  data() {
    return {
      output: "",
      // mappings: ["official", "parchment", "yarn"],
      // multiloaders: multiloaders,
      versions: [],
      manifest: null,
      loading: true,
      options: {
        mcversion: "1.21",
        parchment: true,
        neoform: true,
        fabric: true,
        forge: true,
        neoforge: true,
        comments: true,
      },
    };
  },
  methods: {
    init: function () {
      this.onChange();
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
        });
    },
    getLabel(versionId) {
      if (versionId == this.manifest.latest.release) return " (latest)";
      return "";
    },
    onChange() {
      this.versions = this.manifest.versions.filter((v) => {
        // if (this.snapshots) return true;
        return v.type != "snapshot";
      });

      this.updateGradle();
    },
    getVersions(mcversion) {
      const versions = {
        minecraftVersion: mcversion,
        minecraftVersionRange: mcversion,

        neoFormVersion: "unknown",
        parchmentMinecraft: "unknown",
        parchmentVersion: "unknown",
        fabricVersion: "unknown",
        fabricLoaderVersion: "unknown",
        forgeVersion: "unknown",
        forgeLoaderVersionRange: "unknown",
        neoforgeVersion: "unknown",
        neoforgeLoaderVersionRange: "unknown",

        // neoFormVersion: "1.21-20240613.152323",
        // parchmentMinecraft: "1.21.5",
        // parchmentVersion: "2025.06.01",
        // fabricVersion: "0.127.0+1.21.6",
        // fabricLoaderVersion: "0.16.14",
        // forgeVersion: "56.0.0",
        // forgeLoaderVersionRange: "[54,)",
        // neoforgeVersion: "21.6.5-beta",
        // neoforgeLoaderVersionRange: "[4,)",
      };

      return versions;
    },
    getGradle() {
      const data = this.getVersions(this.options.mcversion);
      const builder = new GradleBuilder(this.options);
      builder.add_section("minecraft", "# Minecraft");
      builder.add_option("minecraft_version", data.minecraftVersion);
      builder.add_option("minecraft_version_range", data.minecraftVersionRange);

      builder.add_section("neoform", "# Neoform https://projects.neoforged.net/neoforged/neoform");
      builder.add_option("neo_form_version", data.neoFormVersion);

      builder.add_section("parchment", "# Parchment MC https://parchmentmc.org/docs/getting-started#choose-a-version");
      builder.add_option("parchment_minecraft", data.parchmentMinecraft);
      builder.add_option("parchment_version", data.parchmentVersion);

      builder.add_section("fabric", "# Fabric https://fabricmc.net/develop");
      builder.add_option("fabric_version", data.fabricVersion);
      builder.add_option("fabric_loader_version", data.fabricLoaderVersion);

      builder.add_section("forge", "# Forge https://files.minecraftforge.net/net/minecraftforge/forge");
      builder.add_option("forge_version", data.forgeVersion);
      builder.add_option("forge_loader_version_range", data.forgeLoaderVersionRange);

      builder.add_section("neoforge", "# NeoForge https://projects.neoforged.net/neoforged/neoforge");
      builder.add_option("neoforge_version", data.neoforgeVersion);
      builder.add_option("neoforge_loader_version_range", data.neoforgeLoaderVersionRange);
      return builder.build();
    },
    updateGradle() {
      codeToHtml(this.getGradle(), {
        lang: gradleGrammar,
        theme: "github-dark",
      }).then((e) => {
        this.output = e;
      });
    },
  },
  mounted() {
    this.cachedFetch("https://launchermeta.mojang.com/mc/game/version_manifest.json").then((manifest) => {
      this.manifest = manifest;
      this.options.mcversion = manifest.latest.release;
      this.init();
      this.loading = false;
    });
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
