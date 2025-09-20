<template>
  <span class="material-icons" :style="{ fontSize: size, verticalAlign: 'middle', color: color }">
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      icon_map: {
        curseforge: "whatshot",
        modrinth: "build",
        mcpedl: "build",
      },
    };
  },
  props: {
    name: String,
    size: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    icon() {
      return this.icon_map[this.name.toLowerCase()] ?? this.name;
    },
  },
};
</script>

<style scoped>
.material-icons {
  user-select: none;
}
</style>
