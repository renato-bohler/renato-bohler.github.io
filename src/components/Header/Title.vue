<template>
  <div class="container">
    <span class="title" :class="caretOnName && 'title-caret'">{{ name }}</span>
    <span class="title" :class="caretOnSurname && 'title-caret'">{{
      surname
    }}</span>
    <span class="subtitle" :class="caretOnSubtitle && 'subtitle-caret'">
      {{ subtitle }}
    </span>
  </div>
</template>

<script>
const WRITE_DELAY = 500;
const CHANGE_SUBTITLE = 2000;
const MIN_KEYSTROKE_TIME = 50;
const MAX_KEYSTROKE_VARIANCE = 70;

export default {
  props: ["fullscreen"],
  data: () => ({
    name: "",
    surname: "",
    subtitle: "",
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
    initWriting() {
      clearTimeout(this.writeTimeout);

      this.name = "";
      this.surname = "";
      this.subtitle = "";
      this.targetSubtitle = "";

      this.targetSubtitle = this.targetSubtitles[
        Math.floor(Math.random() * this.targetSubtitles.length)
      ];

      this.writeTimeout = setTimeout(this.writeTitle, WRITE_DELAY);
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
          }, CHANGE_SUBTITLE);
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

      this.writeTimeout = setTimeout(
        this.writeTitle,
        Math.random() * MAX_KEYSTROKE_VARIANCE + MIN_KEYSTROKE_TIME
      );
    }
  },
  watch: {
    fullscreen(newValue, oldValue) {
      if (!oldValue && newValue) {
        this.initWriting();
      }
    }
  },
  mounted() {
    this.initWriting();
  },
  computed: {
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
.container {
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

.container > .title {
  font-size: 12vmin;
}

.container > .subtitle {
  align-self: flex-end;
  font-size: 3vmin;
  margin: 1vmin -4vmin 0 0;
}

@media screen and (max-width: 767px) {
  .container {
    width: 80vmin !important;
    height: 42vmin !important;
  }

  .container > .title {
    font-size: 18vmin !important;
  }

  .container > .subtitle {
    font-size: 5vmin !important;
  }

  .container > .subtitle {
    margin: 1vmin -6vmin 0 0 !important;
  }

  .subtitle-caret::after {
    right: 3vmin !important;
  }
}
</style>
