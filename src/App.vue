<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t("route.home") }}</router-link> |
      <router-link to="/about">{{ $t("route.about") }}</router-link> |
      <router-link to="/changelog">{{ $t("route.changelog") }}</router-link>
    </div>
    <div id="lang">
      <button
        v-for="language in languages"
        :key="language.title"
        @click="changeLocale(language.locale)"
      >
        <flag :iso="language.flag" v-bind:squared="false" />
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import i18n, { languages } from "@/plugins/i18n.js";

export default {
  data: () => ({
    languages
  }),
  methods: {
    changeLocale(locale) {
      console.log(locale);
      i18n.locale = locale;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#lang {
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
}

button {
  border: 1px solid #42b983;
  background: #efefef;
  padding: 5px;
  margin: 5px;
}
</style>
