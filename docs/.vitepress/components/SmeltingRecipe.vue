<template>
  <div :id="recipeId">
    <span class="mcui mcui-Furnace pixel-image">
      <span class="mcui-input">
        <InvSlot :id="input" :count="inputCount" />
        <span class="mcui-fuel">
          <br />
        </span>
        <InvSlot :id="fuel" :count="fuelCount" />
      </span>
      <span class="mcui-arrow"><br /></span>
      <span class="mcui-output"> <InvSlot :id="output" :count="outputCount" large /></span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "SmeltingRecipe",
  props: {
    input: { type: String, default: "" },
    output: { type: String, default: "" },
    fuel: { type: String, default: "" },
    inputCount: { type: Number, default: 1 },
    outputCount: { type: Number, default: 1 },
    fuelCount: { type: Number, default: 1 },
  },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
};
</script>

<style scoped></style>
