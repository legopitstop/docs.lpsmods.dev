<!-- WARN: Not ready for production!! -->

<template>
  <div id="renderer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { BedrockGeoLoader } from "../classes/BedrockGeoLoader.js";

// https://threejs.org/docs/#manual/en/introduction/Installation
export default {
  name: "ArmorStandGenerator",
  data() {
    return {};
  },
  methods: {
    init: function () {
      const armorStand = new BedrockGeoLoader().load(
        "../theme/models/armor_stand.geo.json",
        "geometry.armor_stand"
      );
      let container = document.getElementById("renderer");
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

      // Cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      // Light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const light = new THREE.SpotLight(0xffffff, 200);
      light.position.set(0, 0, 1);
      this.scene.add(ambientLight, light);
      this.lightHolder = new THREE.Group();
      this.lightHolder.add(light);
      this.scene.add(this.lightHolder);

      // Controls
      this.camera.position.set(0, 0, 5);
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;

      this.createPanel();
    },
    createPanel() {
      const gui = new GUI({ container: document.getElementById("renderer") });

      const head = {
        x: 0,
        y: 0,
        z: 0,
      };
      const body = {
        x: 0,
        y: 0,
        z: 0,
      };
      const leftArm = {
        x: 0,
        y: 0,
        z: 0,
      };
      const rightArm = {
        x: 0,
        y: 0,
        z: 0,
      };
      const leftLeg = {
        x: 0,
        y: 0,
        z: 0,
      };
      const rightLeg = {
        x: 0,
        y: 0,
        z: 0,
      };

      const headFolder = gui.addFolder("Head");
      headFolder.add(head, "x", 0, 360, 1);
      headFolder.add(head, "y", 0, 360, 1);
      headFolder.add(head, "z", 0, 360, 1);
      const bodyFolder = gui.addFolder("Body");
      bodyFolder.add(body, "x", 0, 360, 1);
      bodyFolder.add(body, "y", 0, 360, 1);
      bodyFolder.add(body, "z", 0, 360, 1);
      const leftArmFolder = gui.addFolder("Left Arm");
      leftArmFolder.add(leftArm, "x", 0, 360, 1);
      leftArmFolder.add(leftArm, "y", 0, 360, 1);
      leftArmFolder.add(leftArm, "z", 0, 360, 1);
      const rightArmFolder = gui.addFolder("Right Arm");
      rightArmFolder.add(rightArm, "x", 0, 360, 1);
      rightArmFolder.add(rightArm, "y", 0, 360, 1);
      rightArmFolder.add(rightArm, "z", 0, 360, 1);
      const leftLegFolder = gui.addFolder("Left Leg");
      leftLegFolder.add(leftLeg, "x", 0, 360, 1);
      leftLegFolder.add(leftLeg, "y", 0, 360, 1);
      leftLegFolder.add(leftLeg, "z", 0, 360, 1);
      const rightLegFolder = gui.addFolder("Right Leg");
      rightLegFolder.add(rightLeg, "x", 0, 360, 1);
      rightLegFolder.add(rightLeg, "y", 0, 360, 1);
      rightLegFolder.add(rightLeg, "z", 0, 360, 1);
      gui.onChange((event) => {
        console.log(event.property);
      });
      gui.open();
    },
    animate: function () {
      requestAnimationFrame(this.animate);

      //   this.cube.rotation.x += 0.01;
      //   this.cube.rotation.y += 0.01;

      this.lightHolder.quaternion.copy(this.camera.quaternion);
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
#renderer {
  display: block;
  width: 500px;
  height: 500px;
  cursor: move;
}
</style>
