<template>
  <div>
    <div id="header" :class="menuClass" :style="cssVariables">
      <div id="fullscreen-container" v-if="menuClass === 'fullscreen'">
        <div class="title-container">
          <span class="title">renato</span>
          <span class="title">Böhler</span>
          <span class="subtitle">fullstack developer</span>
        </div>
        <div class="menu-fullscreen-container">
          <span class="link">about</span>
          <span class="link">skills</span>
          <span class="link">projects</span>
          <span class="link">professional</span>
        </div>
      </div>
      <div id="shrinked-container" v-else>
        <div class="menu-button"><span>menu</span></div>
        <div class="menu-shrinked-border" />
      </div>
    </div>
    <div id="header-margin" :style="headerMargin" />
  </div>
</template>

<script>
/**
 * @TODOs
 * - Animate fullscreen menu
 * - Title and subtitle writing effect
 * - Link styling
 * - Menu popover
 * - Fullscreen background animation
 * - Review CSS (font-family)
 * - Review variable names
 */
export default {
  data: () => ({
    menuClass: "fullscreen",
    menuOpen: false
  }),
  methods: {
    updateMenuClass() {
      if (window.scrollY === 0) {
        this.menuClass = "fullscreen";
      } else {
        this.menuClass = "shrinked";
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  mounted() {
    this.updateMenuClass();
    window.addEventListener("scroll", this.updateMenuClass);
  },
  computed: {
    cssVariables() {
      return {
        "--menu-chevron-rotation": `${this.menuOpen ? "" : "-"}90deg`
      };
    },
    headerMargin() {
      return {
        height:
          this.menuClass === "fullscreen"
            ? "100vh"
            : "calc(var(--menu-shrinked-height) + 200px)"
      };
    }
  }
};
</script>

<style scoped>
#header {
  z-index: 100;
  background: linear-gradient(
    var(--gradient-primary-dark),
    var(--gradient-secondary-dark)
  );
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  /* TODO: uncomment */
  /* background-size: 150% 150%; */
  /* animation: gradient 5s ease infinite; */
  /* -webkit-animation: gradient 5s ease infinite; */
  /* -moz-animation: gradient 5s ease infinite; */
}

.fullscreen {
  animation: expand var(--menu-animation-duration) ease;
  -webkit-animation: expand var(--menu-animation-duration) ease;
  -moz-animation: expand var(--menu-animation-duration) ease;
}

#fullscreen-container {
  display: flex;
  flex-direction: column;
  z-index: 101;
  color: white;
  padding: 15vh;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.title-container {
  display: flex;
  flex-direction: column;
  width: 53vh;
}

.title-container > span {
  font-family: "Major Mono Display", monospace;
}

.title-container > .title {
  font-size: 12vh;
}

.title-container > .subtitle {
  align-self: flex-end;
  font-size: 3vh;
  margin: 1vh 0.4vh 0 0;
}

.menu-fullscreen-container {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
}

.menu-fullscreen-container > span {
  font-family: "Major Mono Display", monospace;
  font-size: 3vh;
}

.menu-fullscreen-container > span:after {
  content: "|";
  margin: 0 2vh;
  background: linear-gradient(
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-fullscreen-container > span:last-child:after {
  content: "";
  margin: 0;
}

.shrinked {
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  animation: shrink var(--menu-animation-duration) ease;
  -webkit-animation: shrink var(--menu-animation-duration) ease;
  -moz-animation: shrink var(--menu-animation-duration) ease;
}

#shrinked-container {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  flex-grow: 1;
  font-family: "Major Mono Display", monospace;
  font-size: 1.25em;
  font-weight: bold;
  color: white;
  background: rgba(0, 0, 0, 0.5);
}

.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--menu-shrinked-height);
}

.menu-button > span:before {
  content: "<";
  display: inline-block;
  transform: rotate(var(--menu-chevron-rotation));
  transition: 0.5s ease;
  margin: 0 1vh;
  background: linear-gradient(
    to right,
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-button > span:after {
  content: " ";
  margin: 0 1vh;
}

.menu-shrinked-border {
  background: linear-gradient(
    to right,
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-size: 150% 150%;
  animation: gradient-horizontal 5s ease infinite;
  -webkit-animation: gradient-horizontal 5s ease infinite;
  -moz-animation: gradient-horizontal 5s ease infinite;
  height: 3px;
}

#header-margin {
  transition: height calc(var(--menu-animation-duration) + 0.1s) ease;
}
</style>
