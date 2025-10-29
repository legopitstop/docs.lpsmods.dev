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
import Icon from "../components/Icon.vue";
import PythonInstallation from "../components/PythonInstallation.vue";
import NodeInstallation from "../components/NodeInstallation.vue";
import PackFormat from "../components/PackFormat.vue";
import MCExtractCLI from "../components/MCExtractCLI.vue";
import ModelRenderer from "../components/ModelRenderer.vue";
import ArmorStandGenerator from "../components/ArmorStandGenerator.vue";
import RcoreGenerator from "../components/RcoreGenerator.vue";
import MultiloaderGradleGenerator from "../components/MultiloaderGradleGenerator.vue";
import PythonRequirements from "../components/PythonRequirements.vue";
import NodePackage from "../components/NodePackage.vue";
import "./mcui.css";
import "./custom.css";
import MusicDiscStudio from "../components/MusicDiscStudio.vue";

// Items
import items1 from "../data/minecraft.json";
import items2 from "../data/more_blocks.json";
import items3 from "../data/more_food.json";
import items4 from "../data/more_gold.json";
import items5 from "../data/more_honey.json";
import items6 from "../data/more_pumpkins.json";
import items7 from "../data/bandages.json";
import items8 from "../data/barked.json";
import items9 from "../data/ultimate_block_breaker.json";
import items10 from "../data/bright.json";
import items11 from "../data/canned.json";
import items12 from "../data/simple_magnets.json";
import items13 from "../data/basalt_blocks.json";

export default {
  extends: DefaultTheme,
  setup: setup,
  enhanceApp({ app: e }) {
    e.component(Icon.name, Icon);
    e.component(ShapedRecipe.name, ShapedRecipe);
    e.component(ShapelessRecipe.name, ShapelessRecipe);
    e.component(SmeltingRecipe.name, SmeltingRecipe);
    e.component(BrewingRecipe.name, BrewingRecipe);
    e.component(StonecutterRecipe.name, StonecutterRecipe);
    e.component(SmithingRecipe.name, SmithingRecipe);
    e.component(Inventory.name, Inventory);
    e.component(InvSlot.name, InvSlot);
    e.component(MCExtractCLI.name, MCExtractCLI);
    e.component(ModelRenderer.name, ModelRenderer);
    e.component(ArmorStandGenerator.name, ArmorStandGenerator);
    e.component(RcoreGenerator.name, RcoreGenerator);
    e.component(MusicDiscStudio.name, MusicDiscStudio);
    e.component(MultiloaderGradleGenerator.name, MultiloaderGradleGenerator);
    e.component(PackFormat.name, PackFormat);
    e.component(PythonInstallation.name, PythonInstallation);
    e.component(NodeInstallation.name, NodeInstallation);
    e.component(PythonRequirements.name, PythonRequirements);
    e.component(NodePackage.name, NodePackage);
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
    registerFile(items13);
  },
};
