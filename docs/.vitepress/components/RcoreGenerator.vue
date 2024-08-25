<!-- WARN: Not ready for production!! -->

<template>
  <div class="rcore-generator">
    <span class="mcui mcui-Crafting_Table pixel-image">
      <span class="mcui-input">
        <span class="mcui-row">
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
        </span>
        <span class="mcui-row">
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
        </span>
        <span class="mcui-row">
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
          <InvSlot id="apple" editable />
        </span>
      </span>
      <span class="mcui-arrow"><br /></span>
      <span class="mcui-output">
        <InvSlot id="apple" large editable />
      </span>
    </span>
    <br />
    <pre class="language-mcfunction vp-adaptive-theme">
      <code id="rcore-output">{}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "RcoreGenerator",
};
</script>

<style scoped>
.rcore-generator {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1px 10px;
  margin: 10px 0;
}

pre {
  background-color: var(--vp-c-bg-alt);
}
</style>
