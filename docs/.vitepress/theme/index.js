import DefaultTheme from "vitepress/theme";
import { registerFile } from "../theme/mcui.js";
import { setup } from "../theme/custom.js";

import ShapedRecipe from "../components/ShapedRecipe.vue";
import ShapelessRecipe from "../components/ShapelessRecipe.vue";
import SmeltingRecipe from "../components/SmeltingRecipe.vue";
import BrewingRecipe from "../components/BrewingRecipe.vue";
import StonecutterRecipe from "../components/StonecutterRecipe.vue";
import SmithingRecipe from "../components/SmithingRecipe.vue";
import Inventory from "../components/Inventory.vue";
import InvSlot from "../components/InvSlot.vue";

import MCExtractCLI from "../components/MCExtractCLI.vue";
import ModelRenderer from "../components/ModelRenderer.vue";
import ArmorStandGenerator from "../components/ArmorStandGenerator.vue";
import RcoreGenerator from "../components/RcoreGenerator.vue";
import MultiloaderGradleGenerator from "../components/MultiloaderGradleGenerator.vue";
import "./mcui.css";
import "./custom.css";
import MusicDiscStudio from "../components/MusicDiscStudio.vue";

// Items
import items1 from "../data/minecraft.json";
import items2 from "../data/moreblocks.json";
import items3 from "../data/morefood.json";
import items4 from "../data/moregold.json";
import items5 from "../data/morehoney.json";
import items6 from "../data/morepumpkin.json";
import items7 from "../data/bandage.json";
import items8 from "../data/barked.json";
import items9 from "../data/breaker.json";
import items10 from "../data/bright.json";
import items11 from "../data/canned.json";
import items12 from "../data/magnets.json";

export default {
  extends: DefaultTheme,
  setup: setup,
  enhanceApp({ app: e }) {
    e.component("ShapedRecipe", ShapedRecipe);
    e.component("ShapelessRecipe", ShapelessRecipe);
    e.component("SmeltingRecipe", SmeltingRecipe);
    e.component("BrewingRecipe", BrewingRecipe);
    e.component("StonecutterRecipe", StonecutterRecipe);
    e.component("SmithingRecipe", SmithingRecipe);
    e.component("Inventory", Inventory);
    e.component("InvSlot", InvSlot);
    e.component("MCExtractCLI", MCExtractCLI);
    e.component("ModelRenderer", ModelRenderer);
    e.component("ArmorStandGenerator", ArmorStandGenerator);
    e.component("RcoreGenerator", RcoreGenerator);
    e.component("MusicDiscStudio", MusicDiscStudio);
    e.component("MultiloaderGradleGenerator", MultiloaderGradleGenerator);
    registerFile(items1);
    registerFile(items2);
    registerFile(items3);
    registerFile(items4);
    registerFile(items5);
    registerFile(items6);
    registerFile(items7);
    registerFile(items8);
    registerFile(items9);
    registerFile(items10);
    registerFile(items11);
    registerFile(items12);
  },
};
