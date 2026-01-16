<template>
  <div :id="recipeId">
    <span class="mcui mcui-Stonecutter pixel-image">
      <span class="mcui-input">
        <InvSlot :id="input" />
      </span>
      <span class="mcui-stonecutterArrow">
        <InvSlot :id="output" class="invslot-plain mcui-stonecutterSprite" />
      </span>
      <span class="mcui-output"> <InvSlot :id="output" :count="count" large /></span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "StonecutterRecipe",
  props: {
    input: { type: String, default: "" },
    output: { type: String, default: "" },
    count: { type: Number, default: 1 },
  },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
};
</script>

<style scoped></style>
