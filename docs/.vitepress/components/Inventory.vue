<template>
  <div :id="inventoryId">
    <span class="mcui mcui-Inventory-border pixel-image" :style="mainStyle">
      <span :style="titleStyle">{{ title }}</span>
      <span style="position: absolute; top: 26px; left: 6px">
        <span v-for="row in rows" :key="row" style="display: block">
          <InvSlot :id="allItems[row - 1][0]" />
          <InvSlot :id="allItems[row - 1][1]" />
          <InvSlot :id="allItems[row - 1][2]" />
          <InvSlot :id="allItems[row - 1][3]" />
          <InvSlot :id="allItems[row - 1][4]" />
          <InvSlot :id="allItems[row - 1][5]" />
          <InvSlot :id="allItems[row - 1][6]" />
          <InvSlot :id="allItems[row - 1][7]" />
          <InvSlot :id="allItems[row - 1][8]" />
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  data() {
    return {};
  },
  methods: {
    chunkify(array, chunkSize) {
      let chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        let chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
      }
      return chunks;
    },
    extendArray(array, maxSize, value) {
      if (array.length < maxSize) {
        array.push(...Array(maxSize - array.length).fill(value));
      }
      return array;
    },
  },
  computed: {
    inventoryId() {
      return this.title.toLowerCase().replace(/[^a-zA-Z0-9-_:.]/g, "-");
    },
    mainStyle() {
      var height = 36 * this.rows + 20;
      return `box-sizing: content-box;border-width: 8px;border-style: solid;border-radius: 0;background-clip: padding-box;width: 324px;height: ${height}px;-webkit-transform: scale(1);-moz-transform: scale(1);-o-transform: scale(1);transform: scale(1);margin: calc(-1 * (${height}px / 2 + 14px) * (1 - 1)) calc(-175px * (1 - 1));`;
    },
    titleStyle() {
      return `display: block;color: #3f3f3f;font-family: Minecraft;font-size: 16px;text-align: left;margin-left: 2px;margin-top: -6px;overflow: hidden;text-overflow: ellipsis;`;
    },
    allItems() {
      this.extendArray(this.items, this.rows * 9, undefined);
      return this.chunkify(this.items, 9);
    },
  },
  props: {
    items: Array,
    rows: { type: Number, default: 1 },
    title: { type: String, default: "Inventory" },
  },
};
</script>

<style scoped></style>
