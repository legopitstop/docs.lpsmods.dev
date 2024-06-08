import DefaultTheme from "vitepress/theme";
import ShapedRecipe from "../components/ShapedRecipe.vue";
import ShapelessRecipe from "../components/ShapelessRecipe.vue";
import SmeltingRecipe from "../components/SmeltingRecipe.vue";
import BrewingRecipe from "../components/BrewingRecipe.vue";
import StonecutterRecipe from "../components/StonecutterRecipe.vue";
import SmithingRecipe from "../components/SmithingRecipe.vue";
import Inventory from "../components/Inventory.vue";
import InvSlot from "../components/InvSlot.vue";
import { registerFile } from "../theme/mcui.js";
// import ArmorStandGenerator from "../components/ArmorStandGenerator.vue";
// import RcoreGenerator from "../components/RcoreGenerator.vue";
import "./mcui.css";

import MINECRAFT from "../minecraft.json";
import MOREFOOD from "../morefood.json";
import MOREHONEY from "../morehoney.json";
import BREAKER from "../breaker.json";
import MAGNETS from "../magnets.json";
import BANDAGE from "../bandage.json";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Components
    app.component("ShapedRecipe", ShapedRecipe);
    app.component("ShapelessRecipe", ShapelessRecipe);
    app.component("SmeltingRecipe", SmeltingRecipe);
    app.component("BrewingRecipe", BrewingRecipe);
    app.component("StonecutterRecipe", StonecutterRecipe);
    app.component("SmithingRecipe", SmithingRecipe);
    app.component("Inventory", Inventory);
    app.component("InvSlot", InvSlot);
    // app.component("ArmorStandGenerator", ArmorStandGenerator);
    // app.component("RcoreGenerator", RcoreGenerator);

    // Register item and link files
    registerFile(MINECRAFT);
    registerFile(MOREFOOD);
    registerFile(MOREHONEY);
    registerFile(BREAKER);
    registerFile(MAGNETS);
    registerFile(BANDAGE);
  },
};
