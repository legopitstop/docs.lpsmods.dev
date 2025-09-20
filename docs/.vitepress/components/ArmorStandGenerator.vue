<!-- WARN: Not ready for production!! -->
<!-- TODO: Make the render a separate component. "ModelRenderer" with multiple options to configure for most needs. -->

<template>
  <div class="armor-stand-generator">
    <div class="poses-options">
      <label for="id">ID: </label>
      <input type="text" id="id" name="id" v-model="identifier" @change="onChange" />
      <br />
      <label for="power">Power: </label>
      <input type="number" id="power" name="power" v-model="power" @change="onChange" />
      <br />
      <label for="displayname">Display Name: </label>
      <input type="text" id="displayname" name="displayname" v-model="displayName" @change="onChange" />
      <br />

      <label for="edition">Edition: </label>
      <select name="edition" id="edition" v-model="edition" @change="onChange">
        <option value="bedrock">Bedrock</option>
        <option value="fabric">Fabric</option>
        <option value="datapack">Datapack</option>
      </select>
      <br />
      <label for="preset">Preset: </label>
      <select name="preset" id="preset" v-model="preset" @change="setPreset">
        <option value="none">None</option>
        <option value="default">Default</option>
        <option value="athena">Athena</option>
        <option value="brandish">Brandish</option>
        <option value="can_can_a">Can Can A</option>
        <option value="can_can_b">Can Can B</option>
        <option value="entertain">Entertain</option>
        <option value="hero">Hero</option>
        <option value="honor">Honor</option>
        <option value="riposte">Riposte</option>
        <option value="salute">Salute</option>
        <option value="solemn">Solemn</option>
        <option value="zombie">Zombie</option>
      </select>
    </div>

    <div id="renderer"></div>
    <br />
    <button @click="downloadPack">Download pack</button>

    <div :class="'language-' + language + ' p-adaptive-theme'">
      <button title="Copy Code" class="copy"></button><span class="lang">{{ language }}</span>
      <div v-html="output"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { BedrockGeoLoader } from "../classes/BedrockGeoLoader.js";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { Identifier } from "../classes/Identifier.js";
import { v4 as uuid4 } from "uuid";
import { codeToHtml } from "shiki";

// https://threejs.org/docs/#manual/en/introduction/Installation
export default {
  name: "ArmorStandGenerator",
  data() {
    return {
      identifier: "custom:generated",
      displayName: "Custom Pose",
      power: 15,
      edition: "fabric",
      preset: "none",
      output: "",
      language: "json",
    };
  },
  methods: {
    init: function () {
      let container = document.getElementById("renderer");
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      // Load geometry
      const loader = new BedrockGeoLoader();
      var scene = this.scene;
      loader.load(
        "/models/armor_stand.geo.json",
        "geometry.armor_stand",
        "/textures/armor_stand.png",
        function (e) {
          scene.add(e.scene);
          scene.translateY(-5);
          // geo.scene.rotateBone('head', 45, 0, 0);
          // Get bone by name
          // const myGroup = geo.scene.getObjectByName("head");
          // console.log(myGroup)
        },
        undefined,
        undefined,
      );

      // Lights
      // AmbientLight "sun"
      //
      this.sun = new THREE.AmbientLight(0xffffff, 1);
      this.sun.name = "sun";
      this.scene.add(this.sun);

      this.lightGroup = new THREE.Group();
      this.lightGroup.name = "lights";

      const lightNorth = new THREE.DirectionalLight(0xffffff, 0.3);
      lightNorth.position.set(0, 0, -100);

      const lightSouth = new THREE.DirectionalLight(0xffffff, 0.3);
      lightSouth.position.set(0, 0, 100);

      const lightEast = new THREE.DirectionalLight(0xffffff, 0.1);
      lightEast.position.set(100, 0, 0);

      const lightWest = new THREE.DirectionalLight(0xffffff, 0.1);
      lightWest.position.set(-100, 0, 0);

      const lightTop = new THREE.DirectionalLight(0xffffff, 0.46);
      lightTop.position.set(0, 100, 0);

      const lightBottom = new THREE.DirectionalLight(0xffffff, -0.02);
      lightBottom.position.set(0, -100, 0);

      this.lightGroup.add(lightNorth, lightSouth, lightEast, lightWest, lightTop, lightBottom);
      this.scene.add(this.lightGroup);

      // this.drawAxes();
      // this.drawGrid();

      // Controls
      this.scene.position.set(0, -8, 0);
      this.camera.position.set(0, 0, 30);
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;

      this.createPanel();
      this.updateOutput();
    },
    drawAxes(size = 10) {
      const axesHelper = new THREE.AxesHelper(size);
      axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff);
      this.scene.add(axesHelper);
    },
    drawGrid() {
      const gridHelper = new THREE.GridHelper(16, 16);
      this.scene.add(gridHelper);
    },
    getBone(name) {
      const geo = this.scene.getObjectByName("geometry.armor_stand");
      return geo.getObjectByName(name);
    },
    rotateBone(name, rotation) {
      const geo = this.scene.getObjectByName("geometry.armor_stand");
      geo.rotateBone(name, rotation);
      this.generate();
    },
    setPreset(e) {
      switch (e.target.value) {
        case "none":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
          );
        case "default":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: -10, y: 0, z: -10 },
            { x: -1, y: 0, z: -1 },
            { x: -15, y: 0, z: 10 },
            { x: 1, y: 0, z: 1 },
          );
        case "athena":
          return this.setPose(
            { x: 0, y: 0, z: 2 },
            { x: -5, y: 0, z: 0 },
            { x: 10, y: 0, z: -5 },
            { x: -3, y: -3, z: -3 },
            { x: -60, y: 20, z: -10 },
            { x: 3, y: 3, z: 3 },
          );
        case "brandish":
          return this.setPose(
            { x: 0, y: 0, z: -2 },
            { x: -15, y: 0, z: 0 },
            { x: 20, y: 0, z: -10 },
            { x: 5, y: -3, z: -3 },
            { x: -110, y: 50, z: 0 },
            { x: -5, y: 3, z: 3 },
          );
        case "can_can_a":
          return this.setPose(
            { x: 0, y: 22, z: 0 },
            { x: -5, y: 18, z: 0 },
            { x: 8, y: 0, z: -114 },
            { x: -111, y: 55, z: 0 },
            { x: 0, y: 84, z: 111 },
            { x: 0, y: 23, z: -13 },
          );
        case "can_can_b":
          return this.setPose(
            { x: 0, y: -18, z: 0 },
            { x: -10, y: -20, z: 0 },
            { x: 0, y: 0, z: -112 },
            { x: 0, y: 0, z: 13 },
            { x: 0, y: 90, z: 111 },
            { x: -119, y: -42, z: 0 },
          );
        case "entertain":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: -15, y: 0, z: 0 },
            { x: -110, y: -35, z: 0 },
            { x: 5, y: -3, z: -3 },
            { x: -110, y: 35, z: 0 },
            { x: -5, y: 3, z: 3 },
          );
        case "hero":
          return this.setPose(
            { x: 0, y: 8, z: 0 },
            { x: -4, y: 67, z: 0 },
            { x: 16, y: 32, z: -8 },
            { x: 0, y: -75, z: -8 },
            { x: -99, y: 63, z: 0 },
            { x: 4, y: 63, z: 8 },
          );
        case "honor":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: -15, y: 0, z: 0 },
            { x: -110, y: 35, z: 0 },
            { x: 5, y: -3, z: -3 },
            { x: -110, y: -35, z: 0 },
            { x: -5, y: 3, z: 3 },
          );
        case "riposte":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: 16, y: 20, z: 0 },
            { x: 4, y: 8, z: 237 },
            { x: -14, y: -18, z: -16 },
            { x: 246, y: 0, z: 89 },
            { x: 8, y: 20, z: 4 },
          );
        case "salute":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 10, y: 0, z: -5 },
            { x: -1, y: 0, z: -1 },
            { x: -70, y: -40, z: 0 },
            { x: 1, y: 0, z: 1 },
          );
        case "solemn":
          return this.setPose(
            { x: 0, y: 0, z: 2 },
            { x: 15, y: 0, z: 0 },
            { x: -30, y: 15, z: 15 },
            { x: -1, y: 0, z: -1 },
            { x: -60, y: -20, z: -10 },
            { x: 1, y: 0, z: 1 },
          );
        case "zombie":
          return this.setPose(
            { x: 0, y: 0, z: 0 },
            { x: -10, y: 0, z: -5 },
            { x: -105, y: 0, z: 0 },
            { x: 7, y: 0, z: 0 },
            { x: -100, y: 0, z: 0 },
            { x: -46, y: 0, z: 0 },
          );
      }
    },
    setPose(
      body = { x: 0, y: 0, z: 0 },
      head = { x: 0, y: 0, z: 0 },
      leftArm = { x: 0, y: 0, z: 0 },
      leftLeg = { x: 0, y: 0, z: 0 },
      rightArm = { x: 0, y: 0, z: 0 },
      rightLeg = { x: 0, y: 0, z: 0 },
    ) {
      this.headX.setValue(head.x);
      this.headY.setValue(head.y);
      this.headZ.setValue(head.z);
      this.bodyX.setValue(body.x);
      this.bodyY.setValue(body.y);
      this.bodyZ.setValue(body.z);
      this.leftArmX.setValue(leftArm.x);
      this.leftArmY.setValue(leftArm.y);
      this.leftArmZ.setValue(leftArm.z);
      this.leftLegX.setValue(leftLeg.x);
      this.leftLegY.setValue(leftLeg.y);
      this.leftLegZ.setValue(leftLeg.z);
      this.rightArmX.setValue(rightArm.x);
      this.rightArmY.setValue(rightArm.y);
      this.rightArmZ.setValue(rightArm.z);
      this.rightLegX.setValue(rightLeg.x);
      this.rightLegY.setValue(rightLeg.y);
      this.rightLegZ.setValue(rightLeg.z);
    },
    createPanel() {
      this.gui = new GUI({ container: document.getElementById("renderer") });

      this.pose = {
        Head: { x: 0, y: 0, z: 0 },
        Body: { x: 0, y: 0, z: 0 },
        LeftArm: { x: 0, y: 0, z: 0 },
        RightArm: { x: 0, y: 0, z: 0 },
        LeftLeg: { x: 0, y: 0, z: 0 },
        RightLeg: { x: 0, y: 0, z: 0 },
      };

      const headFolder = this.gui.addFolder("Head");
      this.headX = headFolder.add(this.pose.Head, "x");
      this.headY = headFolder.add(this.pose.Head, "y");
      this.headZ = headFolder.add(this.pose.Head, "z");
      const bodyFolder = this.gui.addFolder("Body");
      this.bodyX = bodyFolder.add(this.pose.Body, "x");
      this.bodyY = bodyFolder.add(this.pose.Body, "y");
      this.bodyZ = bodyFolder.add(this.pose.Body, "z");
      const leftArmFolder = this.gui.addFolder("Left Arm");
      this.leftArmX = leftArmFolder.add(this.pose.LeftArm, "x");
      this.leftArmY = leftArmFolder.add(this.pose.LeftArm, "y");
      this.leftArmZ = leftArmFolder.add(this.pose.LeftArm, "z");
      const leftLegFolder = this.gui.addFolder("Left Leg");
      this.leftLegX = leftLegFolder.add(this.pose.LeftLeg, "x");
      this.leftLegY = leftLegFolder.add(this.pose.LeftLeg, "y");
      this.leftLegZ = leftLegFolder.add(this.pose.LeftLeg, "z");
      const rightArmFolder = this.gui.addFolder("Right Arm");
      this.rightArmX = rightArmFolder.add(this.pose.RightArm, "x");
      this.rightArmY = rightArmFolder.add(this.pose.RightArm, "y");
      this.rightArmZ = rightArmFolder.add(this.pose.RightArm, "z");
      const rightLegFolder = this.gui.addFolder("Right Leg");
      this.rightLegX = rightLegFolder.add(this.pose.RightLeg, "x");
      this.rightLegY = rightLegFolder.add(this.pose.RightLeg, "y");
      this.rightLegZ = rightLegFolder.add(this.pose.RightLeg, "z");
      this.gui.onChange((event) => {
        var name = event.controller.parent._title.replace(/\s/gm, "").toLowerCase();
        this.rotateBone(name, event.object);
      });
      this.gui.open();
      this.generate();
    },
    changeEdition(e) {
      this.edition = e.target.value;
      this.generate();
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      // this.getBone('head').rotation.x += 0.1;

      this.lightGroup.quaternion.copy(this.camera.quaternion);
      this.renderer.render(this.scene, this.camera);
    },
    toList(obj) {
      return [obj.x, obj.y, obj.z];
    },
    translationKey(separator = ".") {
      var id = Identifier.fromString(this.identifier);
      return `pose.${id.namespace}${separator}${id.path}`;
    },
    genFabric() {
      var pose = {
        Head: this.toList(this.pose.Head),
        Body: this.toList(this.pose.Body),
        LeftArm: this.toList(this.pose.LeftArm),
        LeftLeg: this.toList(this.pose.LeftLeg),
        RightArm: this.toList(this.pose.RightArm),
        RightLeg: this.toList(this.pose.RightLeg),
      };
      return {
        power: this.power,
        display_name: {
          translate: this.translationKey(),
          fallback: this.displayName,
        },
        Pose: pose,
      };
    },
    genDatapack() {
      var displayName = `{"translate": "${this.translationKey()}", "fallback": "${this.displayName}"}`;
      var head = `[${this.pose.Head.x}f,${this.pose.Head.y}f,${this.pose.Head.z}f]`;
      var body = `[${this.pose.Body.x}f,${this.pose.Body.y}f,${this.pose.Body.z}f]`;
      var leftArm = `[${this.pose.LeftArm.x}f,${this.pose.LeftArm.y}f,${this.pose.LeftArm.z}f]`;
      var leftLeg = `[${this.pose.LeftLeg.x}f,${this.pose.LeftLeg.y}f,${this.pose.LeftLeg.z}f]`;
      var rightArm = `[${this.pose.RightArm.x}f,${this.pose.RightArm.y}f,${this.pose.RightArm.z}f]`;
      var rightLeg = `[${this.pose.RightLeg.x}f,${this.pose.RightLeg.y}f,${this.pose.RightLeg.z}f]`;
      var pose = `{Head: ${head}, Body: ${body}, LeftArm: ${leftArm}, LeftLeg: ${leftLeg}, RightArm: ${rightArm}, RightLeg: ${rightLeg}}`;
      return `data modify storage poses:poses poses append value {power: ${this.power}, id: "${this.identifier}", display_name: '${displayName}', Pose:${pose}}`;
    },
    genBedrock() {
      var head = [this.pose.Head.x, this.pose.Head.y, this.pose.Head.z];
      var body = [this.pose.Body.x, this.pose.Body.y, this.pose.Body.z];
      var leftArm = [this.pose.LeftArm.x, this.pose.LeftArm.y, this.pose.LeftArm.z];
      var leftLeg = [this.pose.LeftLeg.x, this.pose.LeftLeg.y, this.pose.LeftLeg.z];
      var rightArm = [this.pose.RightArm.x, this.pose.RightArm.y, this.pose.RightArm.z];
      var rightLeg = [this.pose.RightLeg.x, this.pose.RightLeg.y, this.pose.RightLeg.z];
      var animation = {
        format_version: "1.8.0",
        animations: {
          "animation.armor_stand.generated_pose": {
            loop: true,
            bones: {
              body: { rotation: body },
              head: { rotation: head },
              leftarm: { rotation: leftArm },
              leftleg: { rotation: leftLeg },
              rightarm: { rotation: rightArm },
              rightleg: { rotation: rightLeg },
            },
          },
        },
      };
      return animation;
    },
    onChange() {
      this.updateOutput();
    },
    generate() {
      var code = undefined;
      var lang = undefined;
      switch (this.edition) {
        case "fabric":
          lang = "json";
          code = JSON.stringify(this.genFabric(), null, 4);
          break;
        case "datapack":
          lang = "mcfunction";
          code = this.genDatapack();
          break;
        case "bedrock":
          lang = "json";
          code = JSON.stringify(this.genBedrock(), null, 4);
          break;
      }
      return [code, lang];
    },
    createPack() {
      const zip = new JSZip();
      var desc = "Your custom pose.";
      var mcmeta = {
        pack: {
          pack_format: 48,
          description: desc,
        },
      };
      var id = Identifier.fromString(this.identifier);
      switch (this.edition) {
        case "fabric":
          zip.file("pack.mcmeta", JSON.stringify(mcmeta));
          zip.file(`data/${id.namespace}/poses/${id.path}.json`, JSON.stringify(this.genFabric()));
          break;
        case "datapack":
          zip.file("pack.mcmeta", JSON.stringify(mcmeta));
          zip.file(
            `data/poses/tags/function/register_poses.json`,
            JSON.stringify({ values: [id.namespace + ":register_poses"] }),
          );
          zip.file(
            `data/${id.namespace}/function/register_poses.mcfunction`,
            "# Generated using https://docs.lpsmods.dev/poses/generator\n\n" + this.genDatapack(),
          );
          break;
        case "bedrock":
          var manifest = {
            format_version: 2,
            header: {
              description: desc,
              name: "Custom Poses",
              uuid: uuid4(),
              version: [1, 0, 0],
            },
            modules: [
              {
                description: desc,
                type: "resources",
                uuid: uuid4(),
                version: [1, 0, 0],
              },
            ],
          };
          zip.file("manifest.json", JSON.stringify(manifest));
          zip.file(`animations/armor_stand.${id.namespace}.json`, JSON.stringify(this.genBedrock()));

          break;
      }
      return zip;
    },
    downloadPack() {
      const pack = this.createPack();
      pack.generateAsync({ type: "blob" }).then(function (content) {
        FileSaver.saveAs(content, "Custom Poses.zip");
      });
    },
    updateOutput() {
      var output = this.generate();

      this.language = output[1];

      codeToHtml(output[0], {
        // lang: output[1],
        theme: "github-dark",
        langs: output[1],
      }).then((e) => {
        this.output = e;
      });
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style scoped>
.armor-stand-generator {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}

#renderer {
  display: block;
  width: 500px;
  height: 500px;
  cursor: move;
}

pre {
  background-color: var(--vp-c-bg-alt);
}
</style>
