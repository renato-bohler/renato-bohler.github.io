import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const languages = [
  { flag: "br", locale: "pt-BR", title: "Português brasileiro" },
  { flag: "us", locale: "en-US", title: "English" }
];

const messages = {
  "en-US": {
    route: {
      home: "Home",
      about: "About",
      changelog: "Changelog"
    },
    home: {
      title: "Hello world!",
      message:
        "I'm still stuying VueJS to build this page. Please, come back later.",
      version: "Currently on version <b>{version}</b>"
    },
    about: {
      title: "About",
      message:
        "This is a work in progress of my personal website. This is my first shot at VueJS aswell."
    },
    changelog: {
      title: "Changelog"
    }
  },
  "pt-BR": {
    route: {
      home: "Início",
      about: "Sobre",
      changelog: "Changelog"
    },
    home: {
      title: "Olá mundo!",
      message:
        "Ainda estou aprendendo VueJS para construir esta página. Por favor, volte novamente mais tarde.",
      version: "Atualmente na versão <b>{version}</b>"
    },
    about: {
      title: "Sobre",
      message:
        "Esta é minha página pessoal, um trabalho em progresso. Esta é também a minha primeira experiência com VueJS."
    },
    changelog: {
      title: "Changelog"
    }
  }
};

const i18n = new VueI18n({
  locale: "pt-BR",
  fallbackLocale: "en-US",
  messages
});

export default i18n;
