import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const languages = [
  { flag: "br", locale: "pt-BR", title: "Português brasileiro" },
  { flag: "us", locale: "en-US", title: "English" }
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
