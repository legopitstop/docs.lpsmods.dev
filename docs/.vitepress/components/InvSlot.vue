<template>
  <span class="invslot" v-bind:class="large ? 'invslot-large' : ''">
    <span v-if="useItem != undefined" class="invslot-item invslot-item-image" :data-minetip-title="useItem.getMinetip()"
      @mouseenter="minetipMouseover" @mouseleave="minetipMouseout" @mousemove="minetipMousemove">
      <a :href="editable ? '#' : useItem.getLink()" :target="item.getLinkTarget()" rel="nofollow noreferrer"
        @click="selectItem">
        <img :alt="item.name" :src="item.texture" class="nozoom" decoding="async" loading="lazy" width="32" height="32"
          data-relevant="0" /></a>

      <a v-if="count > 1" target="_blank" rel="nofollow noreferrer" class="external text"
        :href="useItem.getLink()"><span class="invslot-stacksize">{{ count }}</span></a>
    </span>
  </span>
</template>

<script>
import { useData } from "vitepress";
import { registerItems, registerLinks, getItem } from "../theme/mcui.js";
import { Item } from "../classes/Item.js";

// command: execute if block ~ ~ ~ dropper{Items:[{Slot:0b,Count:1b,id:"minecraft:acacia_sign",tag:{}}]} unless block ~ ~ ~ dropper{Items:[{Slot:1b}]} unless block ~ ~ ~ dropper{Items:[{Slot:2b}]} unless block ~ ~ ~ dropper{Items:[{Slot:3b}]} unless block ~ ~ ~ dropper{Items:[{Slot:4b}]} unless block ~ ~ ~ dropper{Items:[{Slot:5b}]} unless block ~ ~ ~ dropper{Items:[{Slot:6b}]} unless block ~ ~ ~ dropper{Items:[{Slot:7b}]} unless block ~ ~ ~ dropper{Items:[{Slot:8b}]} run function rcore_recipes:recipe/here

export default {
  name: "InvSlot",
  data: function () {
    return {
      item: undefined,
      pageLinks: [],
      pageItems: [],
      advancedTooltips: "modded",
    };
  },
  computed: {
    useItem() {
      // Inject recipeItems to cachedItems
      registerItems(this.pageItems);
      registerLinks(this.pageLinks);
      if (!this.id) {
        return;
      }
      this.item = getItem(this.id);
      return this.item;
    },
    // TODO: Should do this per pages instead of per component
    parsePageItems() {
      var fm = useData().frontmatter.value;
      const items = fm.recipeItems;
      if (!items) {
        return;
      }
      for (const item of items) {
        var copy = { ...item };
        this.pageItems.push(Item.fromJson(copy));
      }
    },
    parsePageLinks() {
      var fm = useData().frontmatter.value;
      const links = fm.recipeLinks;
      if (!links) {
        return;
      }
      for (const link of links) {
        var copy = { ...link };
        this.pageLinks.push(copy);
      }
    },
    parseFrontmatter() {
      var fm = useData().frontmatter.value;
      if (fm.advancedTooltips) {
        var val = fm.advancedTooltips;
        if (val == "never" || val == "always" || val == "modded") {
          this.advancedTooltips = val;
        }
      }
      this.parsePageLinks;
      this.parsePageItems;
    },
  },
  mounted() {
    if (!document.getElementById("minetip-tooltip")) {
      var tip = document.createElement("div");
      tip.style.display = "none";
      tip.id = "minetip-tooltip";
      var title = document.createElement("span");
      title.id = "minetip-text";
      title.innerHTML = "Unknown";
      tip.appendChild(title);
      document.getElementById("app").appendChild(tip);
    }
    // Load fontmatter
    // TODO: Should run once per page.
    this.parseFrontmatter;
  },
  methods: {
    selectItem() {
      if (this.editable) {
        console.log("edit");
        // Select modal item menus
        var item = getItem("stone");
        this.item = item;
      }
    },
    minetipMouseover(event) {
      var minetip = document.getElementById("minetip-tooltip");
      minetip.innerHTML = event.target.getAttribute("data-minetip-title");
      minetip.style.display = "block";
    },
    minetipMouseout() {
      var minetip = document.getElementById("minetip-tooltip");
      minetip.style.display = "none";
    },
    minetipMousemove(event) {
      var minetip = document.getElementById("minetip-tooltip");
      this.pos(minetip, 12, -30, event);
    },
    pos(o, x, y, event) {
      var posX = 0,
        posY = 0;
      var e = event || window.event;
      if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
      } else if (e.clientX || e.clientY) {
        posX =
          event.clientX +
          document.documentElement.scrollLeft +
          document.body.scrollLeft;
        posY =
          event.clientY +
          document.documentElement.scrollTop +
          document.body.scrollTop;
      }
      o.style.position = "absolute";
      o.style.top = posY + y + "px";
      o.style.left = posX + x + "px";
    },
  },
  props: {
    id: String,
    large: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 1,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
