<template>
  <div class="app-container" :style="cssVariables">
    <Header :fullscreen="fullscreen" />
    <div class="app-content-container">
      <div v-for="(content, index) in contents" :key="content.id">
        <component
          :is="content.component"
          :last="index === contents.length - 1"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    Footer
  },
  data: () => ({
    contents,
    fullscreen: true
  }),
  methods: {
    handleScroll() {
      if (this.fullscreen) {
        window.scroll(0, 1);
        this.preventOverscrolling();
      } else {
        window.scroll(0, window.scrollY);
      }
      this.fullscreen = !window.scrollY;
    },
    preventOverscrolling() {
      const body = document.getElementsByTagName("body")[0].style;

      body.overflow = "hidden";
      setTimeout(() => (body.overflow = "auto"), 300);
    }
  },
  mounted() {
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
  padding-top: 200px;
}
</style>
