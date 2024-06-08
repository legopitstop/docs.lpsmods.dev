<template>
  <div :id="recipeId">
    <span class="mcui mcui-Stonecutter pixel-image">
      <span class="mcui-input">
        <InvSlot :id="input" />
      </span>
      <span class="mcui-stonecutterArrow">
        <InvSlot
          class="invslot-plain mcui-stonecutterSprite"
          :id="output"
        />
      </span>
      <span class="mcui-output">
        <InvSlot :id="output" :count="count" large
      /></span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "StonecutterRecipe",
  props: { input: String, output: String, count: { type: Number, default: 1 } },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
};
</script>

<style scoped></style>
