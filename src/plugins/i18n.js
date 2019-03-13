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
      helloWorld: "Hello, world!",
      image: {
        tooltip: "What's up?"
      },
      paragraphs: [
        `Hey there! My name is Renato Böhler. I'm a {age}-year-old brazilian, currently in the last year of
          <a href='http://www2.dainf.ct.utfpr.edu.br/ec'>Computer Engineering school at UTFPR</a>. I'm a computer
          enthusiast since my childhood, and I'm always happy to learn more about all its related areas.`,
        `My developer journey began early on, when I was only 12. At that time, I started to learn some basic
          concepts on programming by myself (by playing games like <a href='https://uo.com'>Ultima Online</a>).
          Before entering Computer Engineering school, I've attended a few years of Chemical Engineering at UFPR.
          Interestingly, it was whilst I was on Chemical Engineering school that I've realized that my vocation
          for computing could yield me a professional career. At the age of 24, I've had my first experience as a
          professional programmer and, since then, I've learned a lot both professionally and personally.`,
        `I love what I do, and I like to work with people that also do love their jobs. I feel very comfortable
          when working on relaxed environments, but I do make a point on professionalism, respect, honesty and
          compromise.`,
        `I usually spend a good chunk of my free time studying, either by reading about new technologies or by
          trying out new libaries and tools. Recently, I've been reserving more time to contribute to open source
          projects, whenever I found a good opportunity to do it. I enjoy doing all of that while watching a
          soccer match on the television, watching eSports on <a href='https://twitch.tv'>Twitch</a> or
          listening to some good music. To rest, I enjoy spending time with my bride or playing some computer
          games.`
      ]
    },
    skills: {
      title: "Skills",
      introduction: [
        "This section contains some of my main skills, aswell as topics that I'm currently studying or willing to study in the near future. Each skill has its own expandable content with a description to contextualize. Furthermore, some icons indicates my skill level, frequency of recent use and whether I'm studying that or intend to study the topic in question.",
        "All these information are the result of a self-assessment, so please take it with a grain of salt."
      ],
      moreInfo: {
        skillLevel: {
          one: "Yeah, I've heard that word before (1/6)",
          two: "I know the concepts (2/6)",
          three: "I've had studied that (3/6)",
          four: "I've already used this (4/6)",
          five: "I feel safe to say that I know it (5/6)",
          six: "I feel safe to say that I master it (6/6)"
        },
        recentUsage: {
          high: "I've been using this often recently",
          medium: "I've been using this recently",
          low: "I've not used this in a while",
          never: "I've never used this"
        },
        studying: "I've been studying this recently",
        planningToStudy: "I'm planning to study this"
      },
      javascript: [""]
    },
    projects: {
      title: "proJects",
      message: "Here I'll show some personal projects."
    },
    professional: {
      title: "professionAl",
      message: "This section will have all my past and current jobs in detail."
    },
    changelog: {
      title: "Changelog"
    },
    toast: {
      languageChanged: "Language set to english"
    },
    content: {
      lastEdited: "Last edited"
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
      title: "soBre",
      image: {
        tooltip: "Eu mesmo"
      },
      helloWorld: "Olá, mundo!",
      paragraphs: [
        `Olá! Meu nome é Renato Böhler. Sou brasileiro, tenho {age} anos e sou estudante do 9º período de
          <a href='http://www2.dainf.ct.utfpr.edu.br/ec'>Engenharia de Computação na UTFPR</a>, entusiasta de
          computação desde criança e sempre feliz em poder aprender mais sobre todas as áreas de conhecimento
          relacionadas.`,
        `Foi logo cedo, aos 12 anos, que minha jornada como desenvolvedor começou. Naquela época, comecei a
          aprender, por conta própria, conceitos básicos de programação (em jogos como
          <a href='https://uo.com'>Ultima Online</a>). Antes de entrar pra faculdade de Engenharia de Computação
          (em 2015), eu fiz alguns anos de Engenharia Química na UFPR. Curiosamente, foi no período em que
          estudava Engenharia Química que me dei conta de que minha vocação para Computação poderia me render uma
          carreira profissional. Com 24 anos tive minha primeira experiência profissional como programador e
          desde então tenho aprendido muito, tanto profissional quanto pessoalmente.`,
        `Amo o que faço e adoro trabalhar com pessoas também apaixonadas pelo seu trabalho. Me sinto muito
          confortável em trabalhar em ambientes descontraídos, mas não abro mão de profissionalismo, respeito,
          honestidade e comprometimento.`,
        `Costumo dedicar boa parte do meu tempo livre aos estudos, seja lendo sobre novas tecnologicas ou
          testando novas bibliotecas e ferramentas. Ultimamente também tenho contribuído com projetos open source,
          sempre que uma boa oportunidade aparece. Gosto de fazer isto tudo assistindo a um jogo de futebol na TV,
          esportes eletrônicos no <a href='https://twitch.tv'>Twitch</a> ou ouvindo música. Pra descansar, gosto
          bastante de passar tempo com minha noiva ou jogar algum jogo no computador.`
      ]
    },
    skills: {
      title: "Skills",
      introduction: [
        "Esta seção contém algumas das minhas principais habilidades, bem como alguns tópicos que estou estudando ou pretendo estudar. Cada habilidade possui um conteúdo ampliável com uma descrição para contextualização. Além disso, alguns ícones indicam um nível de habilidade, frequência de uso recente e se estou estudando ou pretendo estudar o tópico em questão.",
        "Todas estas informações são resultado de uma autoavaliação, então por favor as tome com cautela."
      ],
      moreInfo: {
        skillLevel: {
          one: "Hmm, já vi essa palavra antes (1/6)",
          two: "Conheço os conceitos (2/6)",
          three: "Já estudei isto (3/6)",
          four: "Já utilizei isto (4/6)",
          five: "Sinto-me seguro em dizer que conheço (5/6)",
          six: "Sinto-me seguro em dizer que domino (6/6)"
        },
        recentUsage: {
          high: "Tenho utilizado isto bastante recentemente",
          medium: "Tenho utilizado isto recentemente",
          low: "Faz um tempo que não utilizo isto",
          never: "Nunca utilizei isto"
        },
        studying: "Tenho estudado isto recentemente",
        planningToStudy: "Pretendo estudar isto"
      },
      javascript: [
        "Conheço JavaScript há praticamente uma década. Comecei aprendendo o básico ao fazer alguns websites por hobby, sem o uso de nenhuma ferramenta. Após algum tempo, descobri e aprendi a utilizar o <a href='https://jquery.com'>jQuery</a>.",
        "Atualmente utilizo JavaScript principalmente para desenvolver interfaces, utilizando a biblioteca <a href='https://reactjs.org'>React</a>. Também utilizo JavaScript para fazer <i>backends</i> com <a href='https://expressjs.com'>expressJS</a> e integração entre sistemas com <a href='https://kafka.apache.org'>Kafka</a> em aplicações <a href='https://nodejs.org'>NodeJS</a>.",
        "Tenho estudado o <i>framework</i> <a href='https://vuejs.org'>VueJS</a> como alternativa para desenvolvimento de interfaces."
      ]
    },
    projects: {
      title: "proJetos",
      message: "Aqui irei mostrar alguns projetos pessoais."
    },
    professional: {
      title: "profissionAl",
      message: "Esta seção terá todos meus trabalhos passados e o atual."
    },
    changelog: {
      title: "Changelog"
    },
    toast: {
      languageChanged: "Idioma definido para português"
    },
    content: {
      lastEdited: "Última edição"
    }
  }
};

const i18n = new VueI18n({
  locale: "en-US",
  fallbackLocale: "pt-BR",
  messages
});

export default i18n;
