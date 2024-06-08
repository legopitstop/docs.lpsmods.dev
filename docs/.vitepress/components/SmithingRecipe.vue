<template>
  <div :id="recipeId">
    <span class="mcui mcui-Smithing pixel-image">
      <span class="mcui-input">
        <InvSlot :id="template" />
        <InvSlot :id="base" />
        <InvSlot :id="addition" />
      </span>
      <span class="mcui-output">
        <InvSlot :id="output" />
      </span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "SmithingRecipe",
  props: { template: String, base: String, addition: String, output: String },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
};
</script>

<style scoped></style>
