<template>
  <div class="container">
    <div class="fullscreen-background" v-if="fullscreen" />
    <div class="header" :class="fullscreen ? 'fullscreen' : 'shrinked'">
      <div class="fullscreen-container" v-if="fullscreen">
        <Title />
        <LanguageSelect :fullscreen="fullscreen" />
        <ScrollHint />
        <MenuFullscreen />
      </div>

      <div class="shrinked-container" v-else>
        <MenuShrinkedButton :open="this.open" :toggle="toggle" />
        <MenuShrinkedContent :open="this.open" :toggle="toggle" />
        <MenuShrinkedBorder />
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

export default {
  props: ["fullscreen"],
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
    open: false
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  watch: {
    fullscreen(newValue, oldValue) {
      if (!oldValue && newValue) {
        this.open = false;
      }
    }
  }
};
</script>

<style scoped>
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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.fullscreen {
  animation: expand var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
  -webkit-animation: expand var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
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

.fullscreen-container {
  z-index: 101;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 15vmin;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.fullscreen-background {
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: var(--theme-background);
  position: absolute;
  top: 0;
  right: 0;
}

.shrinked-container {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1023px), screen and (max-aspect-ratio: 4/3) {
  .fullscreen-container {
    align-items: center;
    padding: 15vmin 5vmin;
  }
}

@media screen and (max-width: 767px) {
  .fullscreen-container {
    align-items: center;
    padding: 15vmin 3vmin;
  }
}
</style>
