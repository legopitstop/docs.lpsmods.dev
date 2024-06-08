<!-- WARN: Not ready for production!! -->

<template>
  <div>
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
    <pre class="language-mcfunction vp-adaptive-theme">{}</pre>
  </div>
</template>

<script>
export default {
  name: "RcoreGenerator",
};
</script>

<style scoped>
pre {
  background-color: var(--vp-c-bg-alt);
}
</style>
