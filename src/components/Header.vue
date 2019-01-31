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
        <div class="language-container">
          <button
            v-for="language in languages"
            :key="language.title"
            @click="changeLocale(language.locale)"
          >
            <flag :iso="language.flag" v-bind:squared="false" />
          </button>
        </div>
        <div class="scroll-hint">V</div>
        <div class="menu-fullscreen-container">
          <span class="link" v-scroll-to="'#about'">{{
            $t("menu.about")
          }}</span>
          <span class="divider" />
          <span class="link">{{ $t("menu.skills") }}</span>
          <span class="divider" />
          <span class="link">{{ $t("menu.projects") }}</span>
          <span class="divider" />
          <span class="link">{{ $t("menu.professional") }}</span>
        </div>
      </div>
      <div id="shrinked-container" v-else>
        <div class="menu-button">
          <span>{{ $t("menu.menu") }}</span>
        </div>
        <div class="menu-shrinked-border" />
      </div>
    </div>
    <div id="fullscreen-background" v-if="fullscreen" />
  </div>
</template>

<script>
/**
 * @TODOs
 * - Menu popover
 */
import i18n, { languages } from "@/plugins/i18n.js";

export default {
  props: ["fullscreen"],
  watch: {
    fullscreen(newValue, oldValue) {
      if (!oldValue && newValue) {
        this.initWriting();
      }
    }
  },
  data: () => ({
    name: "",
    surname: "",
    subtitle: "",
    menuOpen: false,
    languages,
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
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    changeLocale(locale) {
      i18n.locale = locale;
      this.$toasted.show(this.$t("toast.languageChanged"));
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
  user-select: none;
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
}

#fullscreen-container {
  z-index: 101;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 15vmin;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

#fullscreen-background {
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
}

.title-container {
  display: flex;
  flex-direction: column;
  width: 53vmin;
  height: 29vmin;
  animation: fade-in-top ease 1s forwards;
  -webkit-animation: fade-in-top ease 1s forwards;
}

.title-caret::after {
  content: "_";
  animation: blink ease 1s infinite;
  -webkit-animation: blink ease 1s infinite;
}

.subtitle-caret::after {
  position: relative;
  right: 2vmin;
  content: "_";
  animation: blink ease 1s infinite;
  -webkit-animation: blink ease 1s infinite;
}

.title-container > .title {
  font-size: 12vmin;
}

.title-container > .subtitle {
  align-self: flex-end;
  font-size: 3vmin;
  margin: 1vmin -4vmin 0 0;
}

.language-container {
  margin-top: 2vh;
  animation: fade-in-bottom 1s ease 2s backwards;
}

.language-container > button {
  font-size: 3vmin;
  background: none;
  border: none;
  outline: none;
  margin: 5px;
}

.scroll-hint {
  position: absolute;
  align-self: center;
  bottom: 3vh;
  font-size: 3vmin;
  transition: 0.5s ease;
  animation: bounce 2s infinite, fade-in-bottom 0.5s ease 5s backwards;
  -webkit-animation: bounce 2s infinite, fade-in-bottom 0.5s ease 5s backwards;
}

.menu-fullscreen-container {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  font-size: 3vmin;
}

.menu-fullscreen-container > .link {
  cursor: pointer;
  border-bottom: 1px solid white;
}

.menu-fullscreen-container > span:nth-child(1) {
  animation: fade-in-bottom 0.75s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 0.75s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(2) {
  animation: fade-in-bottom 1s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 1s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(3) {
  animation: fade-in-bottom 1.25s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 1.25s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(4) {
  animation: fade-in-bottom 1.5s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 1.5s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(5) {
  animation: fade-in-bottom 1.75s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 1.75s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(6) {
  animation: fade-in-bottom 2s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 2s ease 1.5s backwards;
}

.menu-fullscreen-container > span:nth-child(7) {
  animation: fade-in-bottom 2.25s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 2.25s ease 1.5s backwards;
}

.menu-fullscreen-container > .divider::after {
  content: "|";
  margin: 0 2vmin;
  background: linear-gradient(
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  margin: 0 1vmin;
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
  margin: 0 1vmin;
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
  height: 3px;
}

#header-margin {
  transition: height calc(var(--menu-animation-duration) + 0.1s) ease;
}

@media screen and (max-width: 1023px), screen and (max-aspect-ratio: 4/3) {
  #fullscreen-container {
    align-items: center;
    padding: 15vmin 5vmin;
  }
}

@media screen and (max-width: 767px) {
  #fullscreen-container {
    align-items: center;
    padding: 15vmin 3vmin;
  }

  .title-container {
    width: 80vmin !important;
    height: 42vmin !important;
  }

  .title-container > .title {
    font-size: 18vmin !important;
  }

  .title-container > .subtitle {
    font-size: 5vmin !important;
  }

  .title-container > .subtitle {
    margin: 1vmin -6vmin 0 0 !important;
  }

  .subtitle-caret::after {
    right: 3vmin !important;
  }

  .language-container > button {
    font-size: 6vmin;
  }

  .menu-fullscreen-container {
    display: none !important;
  }

  .scroll-hint {
    bottom: 20vh !important;
    font-size: 20vmin !important;
  }
}
</style>
