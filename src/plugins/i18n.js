import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const languages = [
  { flag: "us", locale: "en-US", title: "English" },
  { flag: "br", locale: "pt-BR", title: "Português brasileiro" }
];

const messages = {
  "en-US": {
    menu: {
      menu: "menu",
      about: "about",
      skills: "skills",
      projects: "projects",
      professional: "professional"
    },
    footer: {
      designed: "Designed and developed",
      with: "with <span class='heart'>♥</span>",
      by: "by <a href='https://github.com/renato-bohler'>Renato Böhler</a>",
      while: [
        "while listening to Monstercat",
        "while listening to The Beatles",
        "while listening to Queen",
        "while listening to Eric Claption",
        "while listening to B.B. King",
        "while listening to Ray Charles",
        "while listening to Black Sabbath",
        "while listening to Metallica",
        "while listening to AC/DC",
        "while listening to Chrono Trigger's OST",
        "while listening to Zelda's OST",
        "while watching Wagamama",
        "while watching Merlini",
        "while watching Draskyl",
        "while watching DotACapitalist",
        "while watching MikamiHero",
        "while watching Peeve",
        "while watching Rurouni Kenshin",
        "while watching Athletico Paranaense",
        "while drinking some Coke™"
      ]
    },
    about: {
      title: "About",
      message:
        "This is a work in progress of my personal website. Here, I'm gonna write a little bit about myself."
    },
    skills: {
      title: "Skills",
      message:
        "In this section I'll detail my skills, aswell as what I'm aiming to learn in the near future."
    },
    projects: {
      title: "Projects",
      message: "Here I'll show some personal projects."
    },
    professional: {
      title: "Professional",
      message: "This section will have all my past and current jobs in detail."
    },
    changelog: {
      title: "Changelog"
    },
    toast: {
      languageChanged: "Language set to english"
    }
  },
  "pt-BR": {
    menu: {
      menu: "menu",
      about: "sobre",
      skills: "skills",
      projects: "projetos",
      professional: "profissional"
    },
    footer: {
      designed: "Desenhado e desenvolvido",
      with: "com <span class='heart'>♥</span>",
      by: "por <a href='https://github.com/renato-bohler'>Renato Böhler</a>",
      while: [
        "enquanto ouvia Monstercat",
        "enquanto ouvia os Beatles",
        "enquanto ouvia Queen",
        "enquanto ouvia Eric Claption",
        "enquanto ouvia B.B. King",
        "enquanto ouvia Ray Charles",
        "enquanto ouvia Black Sabbath",
        "enquanto ouvia Metallica",
        "enquanto ouvia AC/DC",
        "enquanto ouvia a trilha sonora de Chrono Trigger",
        "enquanto ouvia a trilha sonora de Zelda",
        "enquanto assistia ao Wagamama",
        "enquanto assistia ao Merlini",
        "enquanto assistia ao Draskyl",
        "enquanto assistia ao DotACapitalist",
        "enquanto assistia ao MikamiHero",
        "enquanto assistia ao Peeve",
        "enquanto assistia ao Rurouni Kenshin",
        "enquanto assistia ao Athletico Paranaense",
        "enquanto bebia Coca™"
      ]
    },
    about: {
      title: "Sobre",
      message:
        "Esta é minha página pessoal, um trabalho em progresso. Aqui, escreverei um pouco sobre mim."
    },
    skills: {
      title: "Skills",
      message:
        "Nesta seção detalharei minhas habilidads, bem como o que pretendo aprender num futuro próximo."
    },
    projects: {
      title: "Projetos",
      message: "Aqui irei mostrar alguns projetos pessoais."
    },
    professional: {
      title: "Profissional",
      message: "Esta seção terá todos meus trabalhos passados e o atual."
    },
    changelog: {
      title: "Changelog"
    },
    toast: {
      languageChanged: "Idioma definido para português"
    }
  }
};

const i18n = new VueI18n({
  locale: "en-US",
  fallbackLocale: "pt-BR",
  messages
});

export default i18n;
