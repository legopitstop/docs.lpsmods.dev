<template>
  <div class="studio">
    <div class="menubar">
      <div class="menu">
        <button class="menu-btn">File</button>
        <div class="menu-items">
          <button @click="state = 'project'">Project...</button>
          <hr />
          <button @click="openProject">Open</button>
          <button @click="newProject">New</button>
          <hr />
          <button @click="saveProject">Save project</button>
          <button>Close project</button>
          <hr />
          <button @click="importProject">Import</button>
          <button @click="exportProject">Download</button>
          <hr />
          <button>Settings</button>
        </div>
      </div>
      <div class="menu">
        <button class="menu-btn">Item</button>
        <div class="menu-items">
          <button @click="newItem">New</button>
          <button>Preset</button>
          <button>Delete</button>
        </div>
      </div>
      <div class="menu">
        <button class="menu-btn">Help</button>
        <div class="menu-items">
          <button @click="state = 'welcome'">Welcome</button>
          <a href="https://discord.gg/JbyTHWW" target="_blank">Discord</a>
          <hr />
          <a
            href="https://github.com/legopitstop/docs.lpsmods.dev/issues"
            target="_blank"
            >Issues</a
          >
          <a
            href="https://github.com/legopitstop/docs.lpsmods.dev/tree/main/docs/.vitepress/components/MusicDiscStudio.vue"
            target="_blank"
            >Source</a
          >
          <hr />
          <button @click="state = 'about'">About</button>
        </div>
      </div>
    </div>
    <div id="tabs" v-if="state == 'item' || state == 'project'">
      <div
        class="tab"
        v-for="item in project.items"
        :id="item.uuid"
        @click="selectItem(item.uuid)"
      >
        <button>
          {{ item.name }}
          <button class="close" @click="removeItem(item.uuid)">X</button>
        </button>
      </div>
    </div>
    <div id="content">
      <div id="about" v-if="state == 'about'">About</div>
      <div id="welcome" v-if="state == 'welcome'">
        <h3>Welcome</h3>
        <h4>Start</h4>
        <button @click="newProject">New Project...</button>
        <button @click="openProject">Open Project...</button>
      </div>
      <div id="project" v-if="state == 'project'">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="project.title" />

        <label for="version">Version</label>
        <input type="text" id="version" v-model="project.version" />

        <label for="namespace">Namespace</label>
        <input type="text" id="namespace" v-model="project.namespace" />

        <label for="icon">Icon</label>
        <img
          class="preview"
          :src="project.icon.source"
          alt="preview"
          id="iconpreview"
        />
        <input
          type="file"
          id="icon"
          accept="image/*"
          @change="selectImage($event, 'icon', 128, 128)"
        />

        <label for="descriptiontype">Description Type</label>
        <select
          name="descriptiontype"
          id="descriptiontype"
          v-model="project.descriptionType"
        >
          <option value="string">String</option>
          <option value="text">Text</option>
        </select>

        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="project.description"
        ></textarea>
      </div>
      <div id="item" v-if="state == 'item' && project.selected != undefined">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="project.selected.name" />

        <label for="artest">Artest</label>
        <input id="artest" type="text" v-model="project.selected.artest" />

        <label for="id">ID</label>
        <input id="id" type="text" v-model="project.selected.id" />

        <label for="powerlevel">Power Level</label>
        <input
          id="powerlevel"
          type="number"
          v-model="project.selected.powerLevel"
        />

        <label for="obtain">Obtain</label>
        <select name="obtain" id="obtain" v-model="project.selected.obtain">
          <option value="none">None</option>
          <option value="creeper">Creeper</option>
        </select>

        <label for="texture">Texture</label>
        <img
          class="preview"
          :src="project.selected.texture.source"
          alt="preview"
          id="texturepreview"
        />
        <input
          id="texture"
          type="file"
          accept="image/*"
          @change="selectImage($event, 'texture', 16, 16)"
        />

        <label for="sound">Sound</label>
        <audio src="/test.ogg" controls></audio>
        <input id="sound" type="file" accept="audio/ogg" />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid4 } from "uuid";
import JSZip from "jszip";
import FileSaver from "file-saver";
import fileDialog from "file-dialog";

const FORMAT = 3;
const MISSING =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEX/AP//AP//AP/9AP0fAB8AAAABAAEAAAD/AP/9AP0fAB8BAAH/AP/+AP4YABgBAAH/AP/+AP4WABYBAAH+AP4XABcBAAH+AP4XABf/AP//AP/+AP4YABgBAAEAAAD/AP/+AP4ZABkDAAP+AP4SABL+AP4UABT+AP7+AP7+AP7+AP7+AP70APRXAFcUABQYABgXABcXABcXABceAB4VABUXABcSABJYAFj0APT+AP7+AP7+AP79AP2J1Tm8AAAAAWJLR0QF+G/pxwAAAAd0SU1FB+EJDhcOFGEzO8MAAAAJdnBBZwAAACIAAAAiAPgEXxQAAADzSURBVDjL1dDZkoIwEAXQy3IBBQVFUVHcd8d9G5f//64pCy0yqQrv3n5LnaTTDWTRdMAwSctmFojAAQpF0lUCDyiVSV8JAqBSJcM8UKuTUR5oNL8SaFlaMdDukEnXzgLd8YJ34h7QH5DDJEoT+q4FKaMx/0cGk6kMjMKsMm8sXtVejlY/681429k1X7WvHoomzGP5VE8PzoPL9Po7ufXv6YXao/Q0IL24WclNJXC5ycBy/fA9VTIkt0ugF38G9xwdwk66CXm+A3FL2J7Ywo7I3QIINMUfvgbs53kgJE+PPOCThxngKYFLHp+AowQWaRqALoI/Q50gLzlZBxIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMTVUMDE6MTQ6MjArMDI6MDDBw4POAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTE1VDAxOjE0OjIwKzAyOjAwsJ47cgAAAABJRU5ErkJggg==";
const PACK = MISSING;

class Resource {
  constructor(path, source) {
    this.path = path;
    this.source = source;
  }

  static fromJSON(data) {
    return new Resource({ path: data.path, source: data.source });
  }

  static create(source) {
    return new Resource({
      path: "",
      source: source === undefined ? MISSING : source,
    });
  }

  toJSON() {
    var data = {
      path: this.path,
      source: this.source,
    };
    return data;
  }
}

class Item {
  constructor(
    uuid,
    name,
    artest,
    id,
    powerLevel,
    customModelData,
    obtain,
    texture,
    nbt,
    sound
  ) {
    this.uuid = uuid;
    this.name = name;
    this.artest = artest;
    this.id = id;
    this.powerLevel = powerLevel;
    this.customModelData = customModelData;
    this.obtain = obtain;
    this.nbt = nbt;
    this.texture = texture;
    this.sound = sound;
  }

  static fromJSON(format, data) {
    switch (format) {
      case 3:
        return new Item({
          uuid: uuid4(),
          title: data.name,
          artest: data.artest,
          id: data.id,
          powerLevel: data.power_level,
          customModelData: data.custom_model_data,
          obtain: data.obtain,
          nbt: data.nbt,
          texture: Resource.fromJSON(data.texture),
          sound: Resource.fromJSON(data.sound),
        });
      case 2:
        return new Item({
          uuid: uuid4(),
          title: data.name,
          artest: data.artest,
          id: data.id,
          powerLevel: data.power_level,
          customModelData: data.custom_model_data,
          obtain: data.obtain==0 ? 'none' : 'creeper',
          nbt: data.nbt,
          texture: Resource.fromJSON(data.texture),
          sound: Resource.fromJSON(data.sound),
        });
    }
  }

  static create(name) {
    var item = new Item({
      uuid: uuid4(),
      name: name == undefined ? "New Disc" : name,
      artest: "None",
      id: "music_disc_new",
      powerLevel: 1,
      customModelData: 0,
      obtain: "none",
      nbt: "{}",
      texture: Resource.create(MISSING),
      sound: Resource.create(""),
    });
    return item;
  }

  toJSON() {
    var data = {
      id: this.id,
      name: this.name,
      artest: this.artest,
      power_level: this.powerLevel,
      custom_model_data: this.customModelData,
      obtain: this.obtain,
      nbt: this.nbt,
      texture: this.texture.toJSON(),
      sound: this.sound.toJSON(),
    };
    return data;
  }
}

class Project {
  constructor(title, version, namespace, icon, descriptionType, description) {
    this.title = title;
    this.version = version;
    this.namespace = namespace;
    this.icon = icon;
    this.descriptionType = descriptionType;
    this.description = description;
    this.items = [Item.create("Item 1")];
    this.__selected = this.items[0].uuid;
  }

  static create(title) {
    var project = new Project({
      title: title == undefined ? "New Project" : title,
      version: "1.0.0",
      namespace: "minecraft",
      icon: Resource.create(PACK),
      descriptionType: "string",
      description: "My custom music discs pack!",
    });
    return project;
  }

  static fromJSON(data) {
    var items = [];
    for (const itemData of data.items) {
      var item = Item.fromJSON(itemData);
      items.push(item);
    }
    switch (data.format) {
      case 3:
        var project = new Project({
          title: data.title,
          version: data.version,
          namespace: data.namespace,
          icon: Resource.create(data.icon),
          descriptionType: descType,
          description: data.description,
        });
        project.items = items;
        return project;
      case 2:
        const descType = data.description_type == 0 ? "text" : "string";
        var project = new Project({
          title: data.name,
          version: data.version,
          namespace: data.namespace,
          icon: Resource.create(data.icon),
          description_type: descType,
          description: data.description,
        });
        project.items = items;
        return project;
      default:
        return Project.create();
    }
  }

  static open(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (e) {
        var project = Project.fromJSON(JSON.parse(e.target.result));
        resolve(project);
      };
    });
  }

  get selected() {
    return this.items.find((x) => x.uuid == this.__selected);
  }

  toJSON() {
    var items = [];
    for (const item of this.items) {
      items.push(item.toJSON());
    }
    var data = {
      format: FORMAT,
      name: this.name,
      version: this.version,
      namespace: this.namespace,
      icon: this.icon.toJSON(),
      description_type: this.descriptionType,
      description: this.description,
      items: items,
    };
    return data;
  }
}

export default {
  name: "MusicDiscStudio",
  data() {
    return {
      state: "welcome",
      project: undefined,
    };
  },
  methods: {
    init: function () {},
    hasProject() {
      return this.project != undefined;
    },
    newProject() {
      this.state = "project";
      this.project = Project.create();
    },
    openProject() {
      fileDialog({ accept: ".mcdisc" }).then((files) => {
        var file = files[0];
        if (!file) {
          return;
        }
        Project.open(file).then((project) => {
          this.project = project;
          this.state = "project";
        });
      });
    },
    selectItem(uuid) {
      for (const e of document.getElementsByClassName("tab")) {
        e.classList.remove("selected");
      }
      const tab = document.getElementById(uuid);
      if (tab) {
        tab.classList.add("selected");
        this.project.__selected = uuid;
        this.state = "item";
      }
    },
    removeItem(uuid) {
      console.log(uuid);
    },
    selectImage(event, name, width = undefined, height = undefined) {
      var texture = this.project.selected.texture;
      var icon = this.project.icon;
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.getElementById("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = width == undefined ? img.width : width;
          canvas.height = height == undefined ? img.height : height;
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(function (blob) {
            const url = URL.createObjectURL(blob);
            const downloadLink = document.getElementById("downloadLink");
            downloadLink.href = url;
            downloadLink.style.display = "block";
          }, "image/png");
        };

        switch (name) {
          case "texture":
            texture = e.target.result;
            document.getElementById("texturepreview").src = texture;
            break;
          case "icon":
            icon = e.target.result;
            document.getElementById("iconpreview").src = icon;
            break;
        }
      };
      reader.readAsDataURL(file);
    },
    newItem() {
      var item = Item.create();
      this.project.items.push(item);
      return item;
    },
    createPack(type) {
      const zip = new JSZip();
      var metadata = {
        pack: {
          format_version: 48,
          description: this.project.description,
        },
      };
      zip.file("pack.mcmeta", JSON.stringify(metadata, null, 4));
      switch (type) {
        case "resource":
          break;
        case "data":
          for (const item in this.project.items) {
            console.log(item);
          }
          break;
      }
      return zip.generateAsync({ type: "blob" });
    },
    exportProject() {
      if (!this.project) {
        return;
      }
      const zip = new JSZip();
      zip.file("resources.zip", this.createPack("resource"));
      zip.file("datapack.zip", this.createPack("data"));
      zip.generateAsync({ type: "blob" }).then(function (content) {
        FileSaver.saveAs(content, "Pack.zip");
      });
    },
    saveProject() {
      if (!this.project) {
        return;
      }
      var data = JSON.stringify(this.project.toJSON());
      var blob = new Blob([data], {
        type: "application/json",
      });
      FileSaver.saveAs(blob, "project.mcdisc");
    },
    importProject() {
      if (!this.project) {
        return;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
a {
  font-weight: normal;
  text-decoration: none;
  display: block;
  color: inherit;
  font-size: 1em;
  padding-block: 1px;
  cursor: pointer;
}

a:hover {
  background-color: var(--vp-c-brand-2);
  color: inherit;
}

hr {
  margin: 2px;
}

.studio {
  background-color: #2b2b2b;
}

.menubar {
  background-color: white;
  color: black;
}

#content {
  padding: 0px 30px 30px 30px;
  min-height: 600px;
  overflow-y: auto;
}

#welcome h4 {
  margin-top: 10px;
}

#welcome button {
  color: var(--vp-c-brand-2);
}

#item,
#project,
#welcome {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.preview {
  width: 5em;
}

.close:hover {
  background-color: red;
}

#welcome button {
  text-align: left;
}

.tab {
  background-color: #2b2b2b;
  border-bottom: 2px solid #2b2b2b;
  display: inline-block;
  padding: 0 5px;
}

.tab.selected {
  border-bottom: 2px solid var(--vp-c-brand-2);
}

#tabs {
  background-color: var(--vp-sidebar-bg-color);
}

/* Menu  */

.menu-btn {
  padding: 0 4px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}

.menu {
  position: relative;
  display: inline-block;
}

.menu-items {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.menu-items button {
  color: black;
  padding: 4px;
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: left;
}

.menu-items button:hover {
  background-color: var(--vp-c-brand-2);
}

.menu-items a:hover {
  background-color: var(--vp-c-brand-2);
}

.menu:hover .menu-items {
  display: block;
}

.menu:hover .menu-btn {
  background-color: var(--vp-c-brand-2);
}
</style>
