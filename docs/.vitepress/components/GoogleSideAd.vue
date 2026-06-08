<script setup>
import { computed, nextTick, onMounted, watch } from "vue";
import { useData, useRoute } from "vitepress";

const configuredClient = import.meta.env.VITE_GOOGLE_AD_CLIENT || "ca-pub-9949841791324306";
const client = configuredClient.startsWith("ca-") ? configuredClient : `ca-${configuredClient}`;
const slot = import.meta.env.VITE_GOOGLE_AD_SLOT;
const route = useRoute();
const { frontmatter } = useData();
const isHeroPage = computed(() => frontmatter.value.layout === "home" || Boolean(frontmatter.value.hero));
const adScriptUrl = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;

const loadAdScript = () => {
  if (document.querySelector(`script[src="${adScriptUrl}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = adScriptUrl;
  document.head.appendChild(script);
};

const loadAd = async () => {
  if (!slot || isHeroPage.value || typeof window === "undefined") return;

  loadAdScript();
  await nextTick();

  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    // Ad blockers can throw here; the reserved slot simply remains empty.
  }
};

onMounted(loadAd);
watch(() => [route.path, isHeroPage.value], loadAd);
</script>

<template>
  <aside v-if="!isHeroPage" class="GoogleSideAd" aria-label="Advertisement">
    <span class="GoogleSideAdLabel">ADVERTISEMENT</span>
    <ins
      v-if="slot"
      class="adsbygoogle"
      style="display: inline-block; width: 250px; height: 250px"
      :data-ad-client="client"
      :data-ad-slot="slot"
      data-full-width-responsive="false"
    ></ins>
  </aside>
</template>

<style scoped>
.GoogleSideAd {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10;
  display: none;
  width: 250px;
  height: 250px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.GoogleSideAd :deep(.adsbygoogle) {
  width: 250px;
  height: 250px;
}

.GoogleSideAdLabel {
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
}

@media (min-width: 960px) {
  .GoogleSideAd {
    display: block;
    right: 8px;
    bottom: 8px;
  }
}

@media (min-width: 1280px) {
  .GoogleSideAd {
    right: 16px;
    bottom: 16px;
  }
}
</style>
