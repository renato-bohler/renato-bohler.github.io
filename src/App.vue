<template>
  <div id="app" :style="cssVariables">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import i18n, { languages } from "@/plugins/i18n.js";
import { gradient } from "@/consts/colors";

const randomColor = gradient[Math.floor(Math.random() * gradient.length)];

export default {
  components: {
    Header
  },
  data: () => ({
    languages
  }),
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  },
  computed: {
    cssVariables: () => ({
      // Menu
      "--menu-shrinked-height": "50px",
      "--menu-animation-duration": "0.5s",
      // Gradient
      "--gradient-primary-bright": randomColor.primary.bright,
      "--gradient-primary-dark": randomColor.primary.dark,
      "--gradient-secondary-bright": randomColor.secondary.bright,
      "--gradient-secondary-dark": randomColor.secondary.dark,
      "--gradient-animation": "gradient 5s ease infinite"
    })
  }
};
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
}

body {
  background: #f4f5f7;
  /* TODO: remove */
  min-height: 2000px;
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
