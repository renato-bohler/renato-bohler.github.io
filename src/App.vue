<template>
  <div class="container" :style="cssVariables">
    <Header :fullscreen="fullscreen" />
    <div class="content-container">
      <About />
      <div
        style="height: 20px"
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="i"
      />
      <Skills />
      <div
        style="height: 20px"
        v-for="i in [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
        :key="i"
      />
      <Projects />
      <div
        style="height: 20px"
        v-for="i in [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]"
        :key="i"
      />
      <Professional />
      <div
        style="height: 20px"
        v-for="i in [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/views/About";
import Skills from "@/views/Skills";
import Projects from "@/views/Projects";
import Professional from "@/views/Professional";
import { getRandomTheme } from "@/consts/themes";

const theme = getRandomTheme();

export default {
  components: {
    Header,
    About,
    Skills,
    Projects,
    Professional
  },
  data: () => ({
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
      // Gradient
      "--gradient-primary-bright": theme.primary.bright,
      "--gradient-primary-dark": theme.primary.dark,
      "--gradient-secondary-bright": theme.secondary.bright,
      "--gradient-secondary-dark": theme.secondary.dark,
      "--gradient-animation": "gradient 5s ease infinite"
    })
  }
};
</script>

<style>
body {
  background: #f4f5f7;
}

.container {
  font-family: "Ubuntu", sans-serif;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
}

.content-container {
  margin-top: 200px;
}

.toast {
  font-family: "Ubuntu", sans-serif;
  font-weight: normal !important;
}

@keyframes gradient {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

@-webkit-keyframes gradient {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

@keyframes gradient-horizontal {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-webkit-keyframes gradient-horizontal {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shrink {
  from {
    height: 100%;
  }
  to {
    height: var(--menu-shrinked-height);
  }
}

@-webkit-keyframes shrink {
  from {
    height: 100%;
  }
  to {
    height: var(--menu-shrinked-height);
  }
}

@keyframes expand {
  from {
    height: var(--menu-shrinked-height);
  }
  to {
    height: 100%;
  }
}

@-webkit-keyframes expand {
  from {
    height: var(--menu-shrinked-height);
  }
  to {
    height: 100%;
  }
}

@keyframes fade-in-top {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@-webkit-keyframes fade-in-top {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-bottom {
  from {
    opacity: 0;
    transform: translateY(3vh);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@-webkit-keyframes fade-in-bottom {
  from {
    opacity: 0;
    transform: translateY(3vh);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3vh);
  }
  60% {
    transform: translateY(-1.5vh);
  }
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3vh);
  }
  60% {
    transform: translateY(-1.5vh);
  }
}
</style>
