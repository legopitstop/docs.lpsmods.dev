<template>
  <div id="model-renderer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { BedrockGeoLoader } from "../classes/BedrockGeoLoader.js";

export default {
  name: "ModelRenderer",
  props: {
    geometry: String,
    identifier: String,
    texture: String,
    pan: {
      type: Boolean,
      default: false,
    },
    zoom: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Boolean,
      default: false,
    },
    axis: {
      type: Boolean,
      default: false,
    },
    grid: {
      type: Boolean,
      default: false,
    },
    cameraPos: {
      type: Array,
      default: [0, 0, 30],
    },
  },
  data() {
    return {};
  },
  methods: {
    init: function () {
      let container = document.getElementById("model-renderer");
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      // Load geometry
      const loader = new BedrockGeoLoader();
      var scene = this.scene;
      loader.load(
        this.geometry,
        this.identifier,
        this.texture,
        function (e) {
          scene.add(e.scene);
        },
        undefined,
        undefined
      );

      // Sun
      this.sun = new THREE.AmbientLight(0xffffff, 1);
      this.sun.name = "sun";
      this.scene.add(this.sun);

      // Lights
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

      this.lightGroup.add(
        lightNorth,
        lightSouth,
        lightEast,
        lightWest,
        lightTop,
        lightBottom
      );
      this.scene.add(this.lightGroup);

      if (this.axis) {
        this.drawAxis();
      }

      if (this.grid) {
        this.drawGrid();
      }

      // Controls
      this.scene.position.set(0, -13, 0);
      this.camera.position.set(
        this.cameraPos[0],
        this.cameraPos[1],
        this.cameraPos[2]
      );
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.enablePan = this.pan;
      controls.enableZoom = this.zoom;
      controls.enableRotate = this.rotate;
    },
    drawAxis(size = 10) {
      const axesHelper = new THREE.AxesHelper(size);
      axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff);
      this.scene.add(axesHelper);
    },
    drawGrid() {
      const gridHelper = new THREE.GridHelper(16, 16);
      this.scene.add(gridHelper);
    },
    getBone(name) {
      const geo = this.scene.getObjectByName(this.identifier);
      return geo.getObjectByName(name);
    },
    rotateBone(name, rotation) {
      const geo = this.scene.getObjectByName(this.identifier);
      geo.rotateBone(name, rotation);
      this.generate();
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.lightGroup.quaternion.copy(this.camera.quaternion);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style scoped>
#model-renderer {
  display: block;
  width: 500px;
  height: 500px;
  cursor: move;
}
</style>
