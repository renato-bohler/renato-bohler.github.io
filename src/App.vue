<template>
  <div class="app-container" :style="cssVariables">
    <Header :position="position" :windowHeight="windowHeight" />
    <div class="app-content-container">
      <div v-for="(content, index) in contents" :key="content.id">
        <component
          :is="content.component"
          :last="index === contents.length - 1"
        />
      </div>
    </div>
    <Footer />
    <Changelog :isOpen="changelogOpen" :close="toggleChangelog" />
    <Version :onClick="toggleChangelog" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Changelog from "@/components/Changelog";
import Version from "@/components/Version";
import contents from "@/consts/contents";
import { getRandomTheme } from "@/consts/themes";
import { changeFavicon } from "@/utils/favicon";

import "@/styles/global.css";
import "@/styles/keyframes.css";
import "@/styles/toast.css";
import "@/styles/tooltip.css";

const theme = getRandomTheme();
changeFavicon(theme);

export default {
  components: {
    Header,
    Footer,
    Changelog,
    Version
  },
  data: () => ({
    contents,
    position: 0,
    windowHeight: 1000,
    changelogOpen: false
  }),
  methods: {
    handleScroll() {
      this.position = window.scrollY;
    },
    handleResize() {
      this.windowHeight = window.screen.availHeight;
    },
    toggleChangelog() {
      this.changelogOpen = !this.changelogOpen;
    }
  },
  mounted() {
    this.windowHeight = window.screen.availHeight;
    window.onresize = this.handleResize;
    window.onscroll = this.handleScroll;
  },
  computed: {
    cssVariables: () => ({
      // Menu
      "--menu-shrinked-height": "50px",
      "--menu-animation-duration": "0.5s",
      // Theme
      "--theme-background": theme.background,
      "--theme-border": theme.border,
      "--theme-primary-bright": theme.primary.bright,
      "--theme-primary-dark": theme.primary.dark,
      "--theme-secondary-bright": theme.secondary.bright,
      "--theme-secondary-dark": theme.secondary.dark,
      // Gradient animation
      "--gradient-animation": "gradient 10s ease infinite",
      // Text colors
      "--font-gray-color": "#5a5a5a"
    })
  }
};
</script>

<style>
body {
  margin: 0;
}

.app-container {
  font-family: "Ubuntu", sans-serif;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
  background: var(--theme-background);
}

.app-content-container {
  padding-top: calc(50vh + 200px);
}
</style>
