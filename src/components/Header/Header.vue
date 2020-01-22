<template>
  <div class="parallax" :style="parallax">
    <div class="container" :style="cssVariables">
      <div class="header">
        <div class="fullscreen" v-if="this.isVisible">
          <Title />
          <LanguageSelect />
          <ScrollHint />
          <MenuFullscreen />
        </div>

        <div class="shrinked" :class="this.isVisible ? '' : 'fixed'">
          <MenuShrinkedButton :open="this.open" :toggle="toggle" />
          <MenuShrinkedContent :open="this.open" :toggle="toggle" />
          <MenuShrinkedBorder />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import LanguageSelect from "./LanguageSelect";
import ScrollHint from "./ScrollHint";
import MenuFullscreen from "./Menu/Fullscreen";
import MenuShrinkedButton from "./Menu/Shrinked/MenuShrinkedButton";
import MenuShrinkedBorder from "./Menu/Shrinked/MenuShrinkedBorder";
import MenuShrinkedContent from "./Menu/Shrinked/MenuShrinkedContent";

const SHRINKED_MENU_TRANSITION_DURATION_SECS = 0.5;

export default {
  props: ["position", "windowHeight"],
  components: {
    Title,
    LanguageSelect,
    ScrollHint,
    MenuFullscreen,
    MenuShrinkedButton,
    MenuShrinkedBorder,
    MenuShrinkedContent
  },
  data: () => ({
    open: false,
    shrinkedMenuDisplay: "none",
    shrinkedMenuDisplayTimeout: null
  }),
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;

        clearTimeout(this.shrinkedMenuDisplayTimeout);
        this.shrinkedMenuDisplayTimeout = setTimeout(
          () => (this.shrinkedMenuDisplay = "none"),
          SHRINKED_MENU_TRANSITION_DURATION_SECS * 1000
        );
      } else {
        this.shrinkedMenuDisplay = "block";

        clearTimeout(this.shrinkedMenuDisplayTimeout);
        this.shrinkedMenuDisplayTimeout = setTimeout(() => (this.open = true));
      }
    }
  },
  computed: {
    percentage() {
      return this.position / this.windowHeight;
    },
    isVisible() {
      return this.percentage <= 0.5;
    },
    parallax() {
      return {
        top: `-${this.percentage * 200}%`
      };
    },
    cssVariables() {
      return {
        "--menu-shrinked-content-transition-duration": `${SHRINKED_MENU_TRANSITION_DURATION_SECS}s`,
        "--menu-shrinked-content-display": this.shrinkedMenuDisplay
      };
    }
  }
};
</script>

<style scoped>
.parallax {
  position: fixed;
  left: 0;
  z-index: 200;
}

.container {
  font-family: "Major Mono Display", monospace !important;
  user-select: none;
}

.header {
  z-index: 100;
  background: linear-gradient(
    var(--theme-primary-dark),
    var(--theme-secondary-dark)
  );
  background-size: 150% 150%;
  width: 100vw;
}

.shrinked {
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  animation: shrink var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
  -webkit-animation: shrink var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
}

.fullscreen {
  z-index: 101;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 15vmin;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.shrinked {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.95);
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}

@media screen and (max-width: 1023px), screen and (max-aspect-ratio: 4/3) {
  .fullscreen {
    align-items: center;
    padding: 15vmin 5vmin;
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    align-items: center;
    padding: 15vmin 3vmin;
  }
}
</style>
