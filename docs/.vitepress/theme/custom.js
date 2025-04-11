import { onMounted } from "vue";
import mediumZoom from "medium-zoom";
export function setup() {
  onMounted(() => {
    mediumZoom("img:not(.nozoom)", {
      background: "var(--vp-c-bg)",
      "z-index": 9999,
    });
  });
}
