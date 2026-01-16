<template>
  <div>
    <span class="mcui mcui-Brewing pixel-image">
      <span class="mcui-input">
        <InvSlot :id="input" />
      </span>
      <span class="mcui-output">
        <InvSlot />
        <InvSlot :id="output" />
        <InvSlot />
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "BrewingRecipe",
  props: {
    input: { type: String, default: "" },
    output: { type: String, default: "" },
  },
};
</script>

<style scoped></style>
