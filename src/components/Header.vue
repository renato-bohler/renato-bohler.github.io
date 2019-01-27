<template>
  <div id="header-container">
    <div
      id="header"
      :class="fullscreen ? 'fullscreen' : 'shrinked'"
      :style="cssVariables"
    >
      <div id="fullscreen-container" v-if="fullscreen">
        <div class="title-container">
          <span class="title" :class="caretOnName && 'title-caret'">{{
            name
          }}</span>
          <span class="title" :class="caretOnSurname && 'title-caret'">{{
            surname
          }}</span>
          <span class="subtitle" :class="caretOnSubtitle && 'subtitle-caret'">
            {{ subtitle }}
          </span>
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
 * - Link styling
 * - Menu popover
 */
export default {
  data: () => ({
    name: "",
    surname: "",
    subtitle: "",
    fullscreen: true,
    menuOpen: false,
    targetName: "renato",
    targetSurname: "Böhler",
    targetSubtitle: "",
    targetSubtitles: [
      "fullstack developer",
      "backend developer",
      "frontend developer",
      "web developer",
      ".* developer"
    ],
    deletingSubtitle: false,
    writeTimeout: undefined
  }),
  methods: {
    handleScroll() {
      this.fullscreen = !window.scrollY;

      if (this.fullscreen) {
        this.initWriting();
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    initWriting() {
      clearTimeout(this.writeTimeout);

      this.name = "";
      this.surname = "";
      this.subtitle = "";
      this.targetSubtitle = "";

      this.targetSubtitle = this.targetSubtitles[
        Math.floor(Math.random() * this.targetSubtitles.length)
      ];

      this.writeTimeout = setTimeout(this.writeTitle, 500);
    },
    writeTitle() {
      if (this.name !== this.targetName) {
        // Writing name
        this.name = this.targetName.slice(0, this.name.length + 1);
      } else if (this.surname !== this.targetSurname) {
        // Writing surname
        this.surname = this.targetSurname.slice(0, this.surname.length + 1);
      } else {
        // Writing subtitle
        if (!this.deletingSubtitle && this.subtitle === this.targetSubtitle) {
          // New subtitle
          this.writeTimeout = setTimeout(() => {
            this.deletingSubtitle = true;
            this.writeTitle();
          }, 2000);
          return;
        }

        if (this.deletingSubtitle) {
          this.subtitle = this.subtitle.slice(0, -1);
          if (this.subtitle === "") {
            this.deletingSubtitle = false;
          }
        } else {
          if (this.subtitle === "") {
            const possibleSubtitles = this.targetSubtitles.filter(
              subtitle => subtitle !== this.targetSubtitle
            );
            this.targetSubtitle =
              possibleSubtitles[
                Math.floor(Math.random() * possibleSubtitles.length)
              ];
          }

          this.subtitle = this.targetSubtitle.slice(
            0,
            this.subtitle.length + 1
          );
        }
      }

      this.writeTimeout = setTimeout(this.writeTitle, Math.random() * 50 + 50);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.initWriting();
  },
  computed: {
    cssVariables() {
      return {
        "--menu-chevron-rotation": `${this.menuOpen ? "-" : ""}90deg`
      };
    },
    headerMargin() {
      return {
        height: this.fullscreen
          ? "100vh"
          : "calc(var(--menu-shrinked-height) + 200px)"
      };
    },
    caretOnName() {
      return this.name !== this.targetName;
    },
    caretOnSurname() {
      return !this.caretOnName && this.surname !== this.targetSurname;
    },
    caretOnSubtitle() {
      return !this.caretOnName && !this.caretOnSurname;
    }
  }
};
</script>

<style scoped>
#header-container {
  font-family: "Major Mono Display", monospace;
}

#header {
  z-index: 100;
  background: linear-gradient(
    var(--gradient-primary-dark),
    var(--gradient-secondary-dark)
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
  -moz-animation: expand var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
}

#fullscreen-container {
  z-index: 101;
  display: flex;
  flex-direction: column;
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
  animation: fade-in-top ease 1s forwards;
  -webkit-animation: fade-in-top ease 1s forwards;
  -moz-animation: fade-in-top ease 1s forwards;
}

.title-caret::after {
  content: "_";
  animation: blink ease 1s infinite;
  -webkit-animation: blink ease 1s infinite;
  -moz-animation: blink ease 1s infinite;
}

.subtitle-caret::after {
  position: relative;
  right: 2vh;
  content: "_";
  animation: blink ease 1s infinite;
  -webkit-animation: blink ease 1s infinite;
  -moz-animation: blink ease 1s infinite;
}

.title-container > .title {
  font-size: 12vh;
}

.title-container > .subtitle {
  align-self: flex-end;
  font-size: 3vh;
  margin: 1vh -4vh 0 0;
}

.menu-fullscreen-container {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
}

.menu-fullscreen-container > span:nth-child(1) {
  animation: fade-in-bottom ease 0.5s backwards;
  -webkit-animation: fade-in-bottom ease 0.5s backwards;
  -moz-animation: fade-in-bottom ease 0.5s backwards;
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
}

.menu-fullscreen-container > span:nth-child(2) {
  animation: fade-in-bottom ease 1s backwards;
  -webkit-animation: fade-in-bottom ease 1s backwards;
  -moz-animation: fade-in-bottom ease 1s backwards;
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
}

.menu-fullscreen-container > span:nth-child(3) {
  animation: fade-in-bottom ease 1.5s backwards;
  -webkit-animation: fade-in-bottom ease 1.5s backwards;
  -moz-animation: fade-in-bottom ease 1.5s backwards;
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
}

.menu-fullscreen-container > span:nth-child(4) {
  animation: fade-in-bottom ease 2s backwards;
  -webkit-animation: fade-in-bottom ease 2s backwards;
  -moz-animation: fade-in-bottom ease 2s backwards;
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
}

.menu-fullscreen-container > span {
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
  animation: shrink var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
  -webkit-animation: shrink var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
  -moz-animation: shrink var(--menu-animation-duration) ease forwards,
    var(--gradient-animation);
}

#shrinked-container {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  flex-grow: 1;
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
  content: ">";
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
