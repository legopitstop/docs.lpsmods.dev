<template>
  <div :id="recipeId">
    <span class="mcui mcui-Crafting_Table pixel-image">
      <span class="mcui-input">
        <span class="mcui-row">
          <InvSlot :id="a1" />
          <InvSlot :id="b1" />
          <InvSlot :id="c1" />
        </span>
        <span class="mcui-row">
          <InvSlot :id="a2" />
          <InvSlot :id="b2" />
          <InvSlot :id="c2" />
        </span>
        <span class="mcui-row">
          <InvSlot :id="a3" />
          <InvSlot :id="b3" />
          <InvSlot :id="c3" />
        </span>
      </span>
      <span class="mcui-arrow"><br /></span>
      <span class="mcui-output">
        <InvSlot :id="output" :count="count" large />
      </span>
      <span v-if="shapeless" class="mcui-icons">
        <span
          v-if="shapeless"
          class="mcui-shapeless"
          title="This recipe is shapeless; the inputs may be placed in any arrangement in the crafting grid."
          ><br
        /></span>
      </span>
    </span>
  </div>
</template>

<script>
import { createRecipeId } from "../theme/mcui.js";

export default {
  name: "ShapedRecipe",
  data() {
    return {};
  },
  computed: {
    recipeId() {
      return createRecipeId(this.output);
    },
  },
  props: {
    a1: { type: String, default: undefined },
    b1: { type: String, default: undefined },
    c1: { type: String, default: undefined },
    a2: { type: String, default: undefined },
    b2: { type: String, default: undefined },
    c2: { type: String, default: undefined },
    a3: { type: String, default: undefined },
    b3: { type: String, default: undefined },
    c3: { type: String, default: undefined },
    output: String,
    count: { type: Number, default: 1 },
    shapeless: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
