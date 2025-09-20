<template>
  <div :id="recipeId">
    <span class="mcui mcui-Furnace pixel-image">
      <span class="mcui-input">
        <InvSlot :id="input" :count="input_count" />
        <span class="mcui-fuel">
          <br />
        </span>
        <InvSlot :id="fuel" :count="fuel_count" />
      </span>
      <span class="mcui-arrow"><br /></span>
      <span class="mcui-output"> <InvSlot :id="output" :count="output_count" large /></span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "SmeltingRecipe",
  props: {
    input: String,
    output: String,
    fuel: String,
    input_count: { type: Number, default: 1 },
    output_count: { type: Number, default: 1 },
    fuel_count: { type: Number, default: 1 },
  },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
};
</script>

<style scoped></style>
