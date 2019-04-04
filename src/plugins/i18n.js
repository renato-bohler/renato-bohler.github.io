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
        `This section contains some of my main skills, aswell as topics that I'm currently studying or willing to
          study in the near future. Each skill has its own expandable content with a description to
          contextualize. Furthermore, some icons indicates my skill level, frequency of recent use and whether
          I'm studying that or intend to study the topic in question.`,
        `All this information is the result of a self-assessment, so please take it with a grain of salt.`
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
      javascript: [
        `I know JavaScript for almost one decade now. I've started learning the basics when doing some websites
          for hobby, without the use of any tool. After some time I've discovered and learned to use
          <a href='https://jquery.com'>jQuery</a>.`,
        `I currently use JavaScript mainly to develop interfaces, using <a href='https://reactjs.org'>React</a>.
          I also use JavaScript to develop backends using <a href='https://expressjs.com'>expressJS</a> and
          integration between systems with <a href='https://kafka.apache.org'>Kafka</a> in
          <a href='https://nodejs.org'>NodeJS</a> applications.`,
        `I've been studying <a href='https://vuejs.org'>VueJS</a> as an alternative for interface development in
          JavaScript. Actually, this page is my first experience with VueJS. I'm also always trying to be on par
          with the language's new features.`
      ],
      java: [
        `I started stuying Java interested in learning how to develop native Android applications around 2014.
          I'm currenlty developing REST APIs with Java, using mainly
          <a href='https://maven.apache.org'>Maven</a>,
          <a href='https://en.wikipedia.org/wiki/Java_API_for_RESTful_Web_Services'>JAX-RS</a>
          and <a href='http://hibernate.org/'>Hibernate</a>.`
      ],
      react: [
        `My first contact with React was as a professional developer in early 2017. Since then I've fallen in
          love with this library: it's certainly my preferred solution when it comes to UI development.
          Recently, most of my work has been to develop and maintain React projects.`,
        `In the projects I took part in, I used libraries such as <a href='https://redux.js.org'>redux</a>,
          <a href='https://github.com/reduxjs/redux-thunk'>redux-thunk</a>,
          <a href='https://redux-form.com'>redux-form</a>,<a href='https://material-ui.com'>material-ui</a>,
          <a href='https://www.styled-components.com'>styled-components</a>, among others. I've collaborated with
          the initial development and maintenance of a component project implementing a styleguide, using
          <a href='https://github.com/storybooks/storybook'>storybook</a> for testing. I developed a custom rich
          text editor using <a href='https://draftjs.org'>draft-js</a>, PDF documents generation and integration
          with QRCode reading devices.`,
        `I always keep an eye on new React features. To do so, I participate in
          <a href='https://react-brasil.github.io/react-brasil-slack'>brazilian</a> and
          <a href='https://www.reactiflux.com'>international communities</a>. I had the oportunity to
          <a href='https://github.com/reactjs/pt-BR.reactjs.org/pull/31'>collaborate</a> with translating the
          <a href='https://pt-br.reactjs.org/docs/react-api.html'>API Reference (in portuguese)</a> from the
          official React documentation.`,
        `Whenever I can, I attend to <a href='https://www.meetup.com/ReactJS-CWB/events/259667650'>React CWB</a>
          (React meetup in Curitiba). In React CWB #11, I gave a lecture about a library of my own
          <a href='https://www.youtube.com/watch?v=_xG9sPi45vg'>(video - in portuguese)</a>.`
      ],
      redux: [
        `Redux is the library that I've been using to manage state on React. At first there was steep a learning
          curve. Over time, I began to realize the power of having the application state explicitly defined.`,
        `In March 2018 I published redux-form-input-masks: a library for input masking with
          <a href='https://redux-form.com'>redux-form</a>. You can see the
          <a href='https://renato-bohler.github.io/redux-form-input-masks'>documentation</a>,
          <a href='http://npmjs.org/package/redux-form-input-masks'>NPM page</a> and the
          <a href='https://github.com/renato-bohler/redux-form-input-masks'>project on GitHub</a>. I've presented
          this project at
          <a href='https://www.youtube.com/watch?v=_xG9sPi45vg'>React CWB #11 (in portuguese)</a>.`
      ],
      vuejs: [
        `I've heard a lot about VueJS, until one day I decided to give it a shot. I build this personal webpage
          using this framework, just to learn a little bit about it. You can check the
          <a href='https://github.com/renato-bohler/renato-bohler.github.io'>project on GitHub</a>.`,
        `I've not yet had the opportunity to use VueJS professionally. I feel that for this to happen I'd still
          need more study and practice. For example: I've not used tools like
          <a href='https://vuex.vuejs.org'>VueX</a> yet, although I know that its concepts are quite similar with
          <a href='https://redux.js.org'>Redux</a>.`
      ],
      graphql: [
        `GraphQL has been receiving a lot of attention from the developer community in recent years. I've never
          had the opportunity to use it or to study it thoroughly, but GraphQL is certainly something that I
          intend to focus my studies in a near future.`
      ],
      angular: [
        `My experience with Angular is limited to AngularJS (up to version 1.7.x LTS). AngularJS was the first
          technology with which I had professional contact. Currently, I've been only performing slight changes
          and maintenance to AngularJS projects.`,
        `Since when I started using React and studying VueJS, my priority on studying newer versions of Angular
          has dropped quite a bit.`
      ],
      android: [
        `I started to learn Java to develop native Android apps shortly before the release of Android Studio in
          2013. I developed some Android apps for hobby or self-utility, but I've never published any of these
          apps or their source codes.`,
        `For example: the biggest app I developed served to receive (via SMS) weather information, dollar
          quotations and my daily earnings from my AdSense account and display them into a widget. This app also
          filtered these received messages to avoid notifications and pollution of the default SMS app.`,
        `The release of Android 4.4 (KitKat), however,
          <a href='https://android-developers.googleblog.com/2013/10/getting-your-sms-apps-ready-for-kitkat.html'>removed</a>
          the possibility to intercept and block SMS messages for applications other than the default SMS app
          itself. This led me to know <a href='https://forum.xda-developers.com/xposed'>Xposed framework</a>. I
          did a short reverse engineering work on Android's default SMS app and build a Xposed module that
          intercepted methods of this app to apply a series of filters that were registered in an UI.
          This app that I built served me to get rid of annoying SMS ads for a long time.`,
        `Since then, I've been following Android more as an user than a developer. I've been more interested in
          learning <a href='https://facebook.github.io/react-native'>React Native</a> or
          <a href='https://flutter.dev'>Flutter</a> for mobile development. I've never had professional
          experience as a mobile developer, native or not.`
      ],
      sql: [
        `My experience with relational databases is quite practical. My knowledge is enough to be able to
          elaborate some complex queries. I've already used <a href='https://www.mysql.com'>MySQL</a>,
          <a href='https://www.postgresql.org'>PostgreSQL</a> and
          <a href='https://www.microsoft.com/sql-server'>Microsoft SQL Server</a>. I know some core concepts
          behind a database management system, but not deeply enough to do insane query optimizations.
          I don't have much experience in using features like procedures or triggers.`,
        `Given the importance of this topic and my gaps in some areas of it, I certainly plan to study it
          further.`
      ],
      git: [
        `Git is pratically mandatory to be a developer nowadays. I learned the concept of versioning and learned
          how to use Git early in my professional career. I've studied and used some different branching
          strategies, all of them were variations of
          <a href='https://nvie.com/posts/a-successful-git-branching-model/'>Git Flow</a>.`,
        `In my projects, I like to commit changes with messages according to the
          <a href='https://www.conventionalcommits.org'>Conventional Commits</a> conventions. You can check them
          in this page's changelog (which is automatically generated).`
      ],
      docker: [
        `Docker is relatively new to me. I started learning and using it halfway through 2018. I know its
          concepts and I've implemented some Dockerfiles, but I can't say that I'm experienced with it.`,
        `I consider mastering Docker very important, mainly to facilitate and standardize environment for
          deployments. For this reason, Docker is one of the areas that I intend to deepen my studies on in the
          near future.`
      ],
      kubernetes: [
        `I know the concepts and I recognize the importance of Kubernetes for the scalability and management of
          microservices based platforms. I've never had the opportunity to study the inner details of Kubernetes,
          and I never got to actually use it. For these reasons, I certainly plan to study Kubernetes further.`
      ],
      kafka: [
        `I've been using Kafka professionaly in specific projects of systems integrations since mid-2018.`,
        `I know its concepts and some APIs, such as the
          <a href='https://kafka.apache.org/documentation.html#connect'>Connect API</a>, for having developed
          <a href='https://github.com/renato-bohler/kafka-connect-dota'>kafka-connect-dota</a>, a source
          connector for <a href='http://dota2.com'>DotA 2</a> matches made available on the
          <a href='https://developer.valvesoftware.com/wiki/Steam_Web_API'>Steam Web API</a>. I know some of the
          solutions developed by <a href='https://www.confluent.io'>Confluent</a> aswell, such as
          <a href='https://www.confluent.io/confluent-schema-registry'>Schema Registry</a> (for using
          <a href='https://avro.apache.org'>Avro</a>) and
          <a href='https://www.confluent.io/product/ksql'>KSQL</a>.`,
        `I'm no specialist in Kafka, however: I have experience in developing, but not designing, solutions with
          it. For that to happen, I would certainly need to devote more time, especially in use case studies.`
      ],
      mqtt: [
        `I used MQTT to integrate measurement devices with cloud applications, displaying those measurements to
          the user in real time.`
      ],
      websockets: [
        `WebSockets is simple to use and efficient. I've used it for asynchronous notifications and data
          updates... and that's it, really.`
      ],
      regexp: [
        `Regular expressions are like a Swiss Army Knife to any developer. It can be super useful, but you must
          know how to use it - and it isn't always easy.`,
        `My skills in RegExp allow me to fetch data and refactor code more efficiently. I realize that regular
          expressions are much more powerful than this, and this is why I intend to take a time to dig deeper
          into this topic.`
      ],
      nosql: [
        `NoSQL is one of those thinkgs that a lot of people use, so it must be good for something. I have no
          experience nor deep knowledge on NoSQL, I know only some basic concepts.`,
        `The possibility of an oportunity of using NoSQL makes it one of the topics that I intend to study in the
          near future.`
      ],
      cicd: [
        `My first opportunity to learn and apply Continuous Integration and Continuous Deployment practices
          happened whilist I was developing
          <a href='https://renato-bohler.github.io/redux-form-input-masks'>redux-form-input-masks</a>.`,
        `I learned how to automate the whole delivering process of a new version by using
          <a href='https://semantic-release.gitbook.io/semantic-release'>semantic release</a> to determine (based
          on commit messages) the next version to be released, push the tag on the GitHub project, to generate
          the changelog and to publish the new version to npm. All of that was set to run on
          <a href='https://travis-ci.com'>Travis</a>, where build and test coverage happens (using
          <a href='https://codecov.io'>codecov</a>).`,
        `Since then, for every project I start (including this one, I always try to adopt these practices. I
          strongly believe that the time invested in setting up these tools easily pays off in basically any
          project.`
      ]
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
        "Tenho estudado o <i>framework</i> <a href='https://vuejs.org'>VueJS</a> como alternativa para desenvolvimento de interfaces. Na verdade, esta página é minha primeira experiência com VueJS. Eu também procuro me manter atualizado das novas funcionalidades da lingugagem."
      ],
      java: [
        "Comecei a estudar Java por interesse em aprender a desenvolver aplicativos nativos Android, por meados de 2014. Atualmente desenvolvo <i>API</i>s <i>REST</i> com Java, utilizando principalmente <a href='https://maven.apache.org'>Maven</a>, <a href='https://en.wikipedia.org/wiki/Java_API_for_RESTful_Web_Services'>JAX-RS</a> e <a href='http://hibernate.org/'>Hibernate</a>."
      ],
      react: [
        "Meu primeiro contato com React foi já como desenvolvedor profissional, no começo de 2017. Desde então tenho me apaixonado pela biblioteca: ela é com certeza minha solução preferida para desenvolvimento de interfaces. A maior parte do meu trabalho atualmente tem sido desenvolver e manter projetos em React.",
        "Nos projetos que participei, utilizei bibliotecas como <a href='https://redux.js.org'>redux</a>, <a href='https://github.com/reduxjs/redux-thunk'>redux-thunk</a>, <a href='https://redux-form.com'>redux-form</a>, <a href='https://material-ui.com'>material-ui</a>, <a href='https://www.styled-components.com'>styled-components</a>, entre outros. Colaborei com o desenvolvimento e manutenção de um projeto de componentes implementando um <i>styleguide</i>, utilizando <a href='https://github.com/storybooks/storybook'>storybook</a> para testes. Desenvolvi um editor de <i>rich text</i> customizado com <a href='https://draftjs.org'>draft-js</a>, geração de documentos PDF e integração com dispositivos de leitura de QRCode.",
        "Estou sempre de olho nas novidades da biblioteca. Para isso, participo de <a href='https://react-brasil.github.io/react-brasil-slack'>comunidades brasileiras</a> e <a href='https://www.reactiflux.com'>internacionais</a>. Tive a oportunidade de <a href='https://github.com/reactjs/pt-BR.reactjs.org/pull/31'>colaborar</a> com a tradução da <a href='https://pt-br.reactjs.org/docs/react-api.html'>referência da <i>API</i></a> da documentação oficial do projeto.",
        "Sempre que consigo, participo do <a href='https://www.meetup.com/ReactJS-CWB/events/259667650'>React CWB</a> (meetup de React em Curitiba). No React CWB #11, palestrei sobre uma biblioteca de minha autoria <a href='https://www.youtube.com/watch?v=_xG9sPi45vg'>(vídeo)</a>."
      ],
      redux: [
        "Redux é a biblioteca que sempre utilizei para gerenciar estado no React. No começo, existiu uma curva de aprendizagem um pouco íngreme. Com o tempo, comecei a perceber o valor de se ter o estado da aplicação explicitamente definido.",
        "Publiquei, em março de 2018, o redux-form-input-masks: uma biblioteca para formatação de <i>inputs</i> para <a href='https://redux-form.com'>redux-form</a>. Você pode ver a <a href='https://renato-bohler.github.io/redux-form-input-masks'>documentação</a>, <a href='http://npmjs.org/package/redux-form-input-masks'>página no NPM</a> e o <a href='https://github.com/renato-bohler/redux-form-input-masks'>projeto no GitHub</a>. Apresentei este projeto no <a href='https://www.youtube.com/watch?v=_xG9sPi45vg'>React CWB #11</a>."
      ],
      vuejs: [
        "Ouvi muita gente comentando sobre VueJS, até que um dia resolvi dar uma chance. Construí esta minha página pessoal usando este <i>framework</i>, com o objetivo de aprender um pouco sobre ele. Você pode conferir o <a href='https://github.com/renato-bohler/renato-bohler.github.io'>projeto no GitHub</a>.",
        "Ainda não tive a oportunidade de utilizar VueJS profissionalmente. Sinto que para isso acontecer ainda precisaria de mais estudo e prática. Por exemplo: não utilizei ferramentas como <a href='https://vuex.vuejs.org'>VueX</a> ainda, apesar de saber que os conceitos são bastante semelhantes com <a href='https://redux.js.org'>Redux</a>."
      ],
      graphql: [
        "GraphQL tem recebido uma atenção muito grande da comunidade de desenvolvedores estes últimos anos. Nunca tive oportunidade de utilizar ou estudar profundamente o GraphQL, mas é uma das principais áreas na qual pretendo focar meus próximos estudos."
      ],
      angular: [
        "Minha experiência com Angular se limita ao AngularJS (até a versão 1.7.x LTS). AngularJS foi a primeira tecnologia com a qual tive contato profissional. Meu trabalho com AngularJS atualmente tem sido realizar manutenções e pequenas alterações esporadicamente.",
        "Desde que comecei a utilizar React e a estudar VueJS, a prioridade para estudar as versões mais modernas de Angular caiu bastante."
      ],
      android: [
        "Comecei a aprender Java para desenvolver aplicações nativas para Android, um pouco antes do lançamento do Android Studio, em 2013. Fiz algumas aplicações Android por hobby ou para utilidade própria, mas nunca publiquei nenhuma destas aplicações ou seus códigos.",
        "Por exemplo: a maior aplicação que desenvolvi para Android servia para receber (via SMS) informações de clima, cotação do dólar e ganhos diários da minha conta do AdSense e as exibia num <i>widget</i>. Este aplicativo também filtrava essas mensagens para evitar as notificações e poluição do aplicativo de SMS padrão.",
        "O lançamento da versão 4.4 (KitKat), no entanto, <a href='https://android-developers.googleblog.com/2013/10/getting-your-sms-apps-ready-for-kitkat.html'>removeu</a> a possibilidade de interceptar e bloquear mensagens SMS para aplicativos que não fossem definidos como o padrão. Isto me levou a conhecer o <a href='https://forum.xda-developers.com/xposed'><i>framework</i> Xposed</a>. Fiz um breve trabalho de engenharia reversa no aplicativo padrão de SMS do Android e criei um módulo para Xposed que interceptava métodos deste aplicativo para aplicar uma série de filtros que eram cadastráveis numa interface. Este aplicativo me serviu pra me livrar de propagandas SMS irritantes por um longo tempo.",
        "Desde então, tenho acompanhado a evolução do Android mais como usuário que como desenvolvedor. Tenho tido mais interesse em aprender <a href='https://facebook.github.io/react-native'>React Native</a> ou <a href='https://flutter.dev'>Flutter</a> para desenvolvimento de aplicações <i>mobile</i>. Nunca tive experiência profissional como desenvolvedor <i>mobile</i>, nativo ou não."
      ],
      sql: [
        "Minha experiência com bancos de dados relacionais é bastante prática. Meu conhecimento é suficiente para conseguir elaborar <i>queries</i> para cumprir objetivos complexos. Já utilizei bancos em <a href='https://www.mysql.com'>MySQL</a>, <a href='https://www.postgresql.org'>PostgreSQL</a> e <a href='https://www.microsoft.com/sql-server'>Microsoft SQL Server</a>. Conheço alguns conceitos por trás de um gerenciador de banco de dados, mas não profundamente o suficiente para fazer otimizações insanas. Não tenho muita experiência na utilização de algumas funcionalidades como <i>procedures</i> ou <i>triggers</i>.",
        "Dada a importância do tópico e minhas lacunas em algumas áreas dele, com certeza pretendo o estudar mais."
      ],
      git: [
        "Git é praticamente um pré-requisito para ser desenvolvedor. Conheci o conceito de versionamento de código e aprendi a utilizar o Git no começo da minha carreira profissional. Já estudei e utilizei profissionalmente algumas estratégias de <i>branching</i> diferentes, todas elas variações do <a href='https://nvie.com/posts/a-successful-git-branching-model/'>Git Flow</a>.",
        "Nos meus projetos, gosto de padronizar mensagens de <i>commit</i> de acordo com <a href='https://www.conventionalcommits.org'>Conventional Commits</a>. Você pode conferir isto no changelog desta página (que é gerado automaticamente)."
      ],
      docker: [
        "Docker é relativamente uma novidade para mim. Comecei a aprender e utilizar na metade de 2018. Conheço os conceitos e já implementei alguns <i>Dockerfiles</i>, mas não posso dizer que tenho uma grande vivência com ele.",
        "Considero o domínio de Docker bastante importante, principalmente para facilitar e padronizar ambientes para <i>deployments</i>. Por esta razão, Docker é uma das áreas que pretendo me aprofundar num futuro próximo."
      ],
      kubernetes: [
        "Conheço os conceitos e reconheço a importância de Kubernetes para a escalabilidade e para o gerenciamento de plataformas baseadas em microsserviços. Nunca tive oportunidade de estudar o funcionamento interno do Kubernetes nem utilizá-lo. Por estas razões, o Kubernetes está na minha lista para estudos."
      ],
      kafka: [
        "Tenho utilizado Kafka profissionalmente em projetos pontuais de integração entre sistemas desde a metade de 2018.",
        "Conheço os conceitos e algumas <i>API</i>s, como por exemplo a <a href='https://kafka.apache.org/documentation.html#connect'>Connect API</a>, por ter criado o <a href='https://github.com/renato-bohler/kafka-connect-dota'>kafka-connect-dota</a>, um <i>source connector</i> para as partidas de <a href='http://dota2.com'>DotA 2</a> disponibilizadas na <a href='https://developer.valvesoftware.com/wiki/Steam_Web_API'><i>WebAPI</i> da Steam</a>. Conheço algumas soluções da <a href='https://www.confluent.io'>Confluent</a>, como o <a href='https://www.confluent.io/confluent-schema-registry'>Schema Registry</a> (por utilizar <a href='https://avro.apache.org'>Avro</a>) e <a href='https://www.confluent.io/product/ksql'>KSQL</a>.",
        "Não sou nenhum especialista em Kafka, no entanto: tenho experiência em desenvolver - e não projetar - soluções com Kafka. Para isto, certamente eu precisaria dedicar mais tempo, principalmente em estudos de caso de uso."
      ],
      mqtt: [
        "Utilizei MQTT para integrar dispositivos de aferições com aplicações em nuvem, exibindo ao usuário valores aferidos em tempo real."
      ],
      websockets: [
        "WebSockets é simples de utilizar e eficiente. O utilizei para notificações e atualizações de dados assíncronas... e é isso."
      ],
      regexp: [
        "Expressões regulares são como um canivete suíço para quem é desenvolvedor. Podem ser extremamente úteis, mas é preciso saber usá-las - e nem sempre é fácil.",
        "Minhas habilidades em expressões regulares me permitem realizar buscas um pouco mais específicas ou refatorar código mais eficientemente. Sei que expressões regulares são muito mais poderosas que isso, e por esta razão pretendo tomar um tempo para me aprofundar mais neste tópico."
      ],
      nosql: [
        "NoSQL é uma daquelas coisas que muita gente usa, então deve ser bom. Não tenho experiência nem conhecimento profundo de NoSQL, sei somente alguns conceitos básicos.",
        "A possibilidade de aparecer uma oportunidade de utilizar NoSQL faz com que este seja um dos tópicos que pretendo estudar em breve."
      ],
      cicd: [
        "Minha primeira oportunidade de aprender e aplicar práticas de integração contínua (CI) e implantação contínua (CD) foi no projeto <a href='https://renato-bohler.github.io/redux-form-input-masks'>redux-form-input-masks</a>.",
        "Aprendi a automatizar todo o processo de entrega de uma versão utilizando <a href='https://semantic-release.gitbook.io/semantic-release'>semantic release</a> para determinar (com base nas mensagens de <i>commit</i>) qual a próxima versão a ser lançada, lançar a <i>tag</i> no projeto no GitHub, gerar o <i>changelog</i> e publicar a versão nova no npm. Tudo isso configurado para rodar no <a href='https://travis-ci.com'>Travis</a>, que também fazia o <i>build</i> e verificava a cobertura de testes (usando <a href='https://codecov.io'>codecov</a>).",
        "A partir de então, para todo projeto que inicio (inclusive este), busco adotar estas práticas. Acredito fortemente que o tempo investido pra configuração destas ferramentas se pagam no decorrer de basicamente qualquer projeto."
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
