const skills: Skill[] = [
  {
    name: 'JavaScript',
    usageLevel: 3,
    yearsExperience: 5,
    colors: {
      normal: {
        background: '#f7df1e',
        text: '#292e31',
      },
      contrast: {
        background: '#f7df1e',
        text: 'black',
      },
      scrollBar: { trackColor: '#645a0a' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="152.441 275.281 446.124 321.514"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
        >
          <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
        </svg>
      );
    },
    studying: true,
    favorite: true,
    teaser: (
      <>
        <p>
          <strong>JavaScript</strong> was the first programming
          language I had contact with when I was 12. At that time,
          I&apos;d create websites just for fun.
        </p>
        <p>
          I&apos;ve been closely following the evolution of JS ever
          since, from the pre-ES3, jQuery times to the modern JS we
          have today.
        </p>
      </>
    ),
    description: (
      <>
        <p>
          <strong>
            JavaScript is the programming language I&apos;m the most
            experienced with:
          </strong>
          . I&apos;ve been using it since the ES3 days (in the early
          2000s).
        </p>
        <p>
          I started learning JS because I used to build
          videogame-related websites just as a hobby. In fact, some of
          the websites I&apos;ve created are still up and running (and
          actually being used 😱).
        </p>
        <p>
          Professionally, I&apos;ve been using JavaScript mainly to
          build user interfaces (with React, Angular, etc.). I also
          have experience writing backend applications using Express
          and developing Kafka integrations in Node.js applications.
        </p>
        <p>
          I love this language, and{' '}
          <strong>I&apos;m always keeping myself updated</strong> with
          its new libraries and features.
        </p>
      </>
    ),
  },
  {
    name: 'Node.js',
    usageLevel: -1,
    yearsExperience: 1.5,
    colors: {
      normal: {
        background: '#82cd2a',
        text: '#292e31',
      },
      contrast: {
        background: '#aae06a',
        text: 'black',
      },
      scrollBar: { trackColor: '#3c6011' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="2.929 -2.196 124.777 133.564"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={15}
        >
          <path d="M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z" />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          Even though I&apos;ve been focusing my career on the
          frontend path these last few years, I have experience
          building server-side Node.js applications.
        </p>
        <p>
          My experience with server-side Node.js includes small
          backends developed using Express and multi-system Kafka
          integration applications.
        </p>
      </>
    ),
  },
  {
    name: 'RegExp',
    usageLevel: 2,
    colors: {
      normal: {
        background: '#01814e',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#004026',
        text: 'white',
      },
      scrollBar: { trackColor: '#69d7ab' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="0 50 1024 1024"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={150}
        >
          <path d="M682.666667 721.92c-14.08 2.133333-28.16 3.413333-42.666667 3.413333-14.506667 0-28.586667-1.28-42.666667-3.413333v-149.76l-106.666666 105.813333c-21.333333-16.64-42.666667-37.973333-59.306667-59.306666l105.813333-106.666667H387.413333c-2.133333-14.08-3.413333-28.16-3.413333-42.666667 0-14.506667 1.28-28.586667 3.413333-42.666666h149.76l-105.813333-106.666667c8.106667-10.666667 16.64-21.333333 27.733333-31.573333 10.24-11.093333 20.906667-19.626667 31.573334-27.733334L597.333333 366.506667V216.746667c14.08-2.133333 28.16-3.413333 42.666667-3.413334 14.506667 0 28.586667 1.28 42.666667 3.413334v149.76l106.666666-105.813334c21.333333 16.64 42.666667 37.973333 59.306667 59.306667L742.826667 426.666667h149.76c2.133333 14.08 3.413333 28.16 3.413333 42.666666 0 14.506667-1.28 28.586667-3.413333 42.666667h-149.76l105.813333 106.666667c-8.106667 10.666667-16.64 21.333333-27.733333 31.573333-10.24 11.093333-20.906667 19.626667-31.573334 27.733333L682.666667 572.16v149.76M213.333333 810.666667a85.333333 85.333333 0 0 1 85.333334-85.333334 85.333333 85.333333 0 0 1 85.333333 85.333334 85.333333 85.333333 0 0 1-85.333333 85.333333 85.333333 85.333333 0 0 1-85.333334-85.333333z" />
        </svg>
      );
    },
    studying: true,
    favorite: false,
    description: (
      <>
        <p>
          <strong>
            Regular expressions are like a Swiss Army Knife
          </strong>{' '}
          for developers. It can be super convenient, but you must
          know how to use it — and it isn&apos;t always easy.
        </p>

        <p>
          My skills in RegExp allow me to fetch data and refactor code
          more efficiently.
        </p>
        <p>
          RegExp is a fantastic and powerful tool, and this is why
          I&apos;m always eager to learn more about it!
        </p>
      </>
    ),
  },
  {
    name: 'TypeScript',
    usageLevel: 3,
    yearsExperience: 3,
    colors: {
      normal: {
        background: '#007acd',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#005c9a',
        text: 'white',
      },
      scrollBar: { trackColor: '#8dd1ff' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="156.454 127.217 409.628 296.705"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
          strokeLinejoin="round"
        >
          <path d="M 384.644 329.458 L 384.644 379.458 C 392.744 383.658 402.644 386.758 413.644 388.858 C 424.644 390.958 436.644 391.958 448.644 391.958 C 460.644 391.958 471.644 390.858 482.644 388.558 C 493.644 386.258 502.644 382.458 510.644 377.558 C 518.744 372.258 525.644 365.558 529.644 356.558 C 533.644 347.558 536.744 337.558 536.744 324.558 C 536.744 315.458 535.344 307.558 532.644 300.558 C 529.944 293.558 526.044 287.558 520.644 282.558 C 515.544 277.258 509.644 272.558 502.644 268.558 C 495.644 264.558 487.644 260.358 478.644 256.558 C 472.044 253.858 466.644 251.258 460.644 248.658 C 455.444 246.058 450.944 243.458 447.644 240.858 C 443.944 238.158 441.144 235.358 439.144 232.458 C 437.144 229.458 436.144 226.158 436.144 222.458 C 436.144 219.058 437.034 215.958 438.844 213.158 C 440.654 210.358 443.144 208.058 446.344 206.058 C 449.544 204.058 453.544 202.558 458.344 201.458 C 463.044 200.358 468.244 199.858 474.344 199.858 C 478.544 199.858 482.944 200.168 487.344 200.798 C 491.944 201.428 496.644 202.398 501.344 203.698 C 506.044 204.998 510.644 206.598 515.344 208.598 C 519.744 210.598 523.844 212.898 527.344 215.498 L 527.344 168.498 C 519.744 165.598 511.344 163.398 502.344 161.998 C 493.344 160.598 483.344 159.898 471.344 159.898 C 459.344 159.898 448.344 161.198 437.344 163.698 C 426.344 166.198 417.344 170.198 409.344 175.698 C 401.244 181.098 395.344 187.698 390.344 196.698 C 385.644 205.098 383.344 214.698 383.344 226.698 C 383.344 241.698 387.644 254.698 396.344 264.698 C 404.944 275.698 418.344 283.698 435.344 291.698 C 442.244 294.498 448.344 297.298 454.344 299.998 C 460.344 302.698 465.344 305.498 469.344 308.398 C 473.644 311.298 477.044 314.498 479.344 317.898 C 481.844 321.298 483.144 325.298 483.144 329.898 C 483.144 333.098 482.364 336.098 480.844 338.898 C 479.324 341.698 476.944 344.098 473.744 346.098 C 470.544 348.098 466.644 349.698 461.744 350.898 C 457.044 351.998 451.744 352.598 444.744 352.598 C 433.744 352.598 422.744 350.698 412.744 346.898 C 401.744 343.098 391.744 337.398 382.744 329.898 Z M 300.644 206.458 L 364.644 206.458 L 364.644 165.458 L 185.644 165.458 L 185.644 206.458 L 249.644 206.458 L 249.644 389.458 L 300.644 389.458 Z" />
        </svg>
      );
    },
    studying: true,
    favorite: true,
    teaser: (
      <>
        <p>
          <strong>TypeScript</strong> is one of those things that you
          might ask yourself: <em>&quot;why do I need that?&quot;</em>{' '}
          — but when you get used to it, you&apos;ll never look back.
        </p>
        <p>
          I&apos;ve been using <strong>TypeScript</strong> since
          mid-2019, and I&apos;ll add it to every project I start
          today, no matter how small it might be.
        </p>
      </>
    ),
    description: (
      <>
        <p>
          To be honest, when I first heard about TypeScript, I did not
          get super hyped. My first experience with types in
          JavaScript was with Flow + AngularJS, and the lack of proper
          documentation made the whole experience a kind of a mess.
        </p>
        <p>
          But when I started using TypeScript professionally in 2019,
          everything changed. TypeScript makes everything much more
          explicit, easy, and reliable that{' '}
          <strong>
            it&apos;s hard for me to think about starting a new
            project without it these days
          </strong>
          .
        </p>
        <p>
          I do realize that not everything about TypeScript is
          perfect, though. Libraries with incorrect or incompatible
          typings can be a pain to deal with. Also, assigning the
          correct type for complex scenarios gets hard pretty fast.
        </p>
        <p>
          But TypeScript has come a long way. Having such a great
          community also helps: any problem you might have has
          probably already been solved by someone (Google for the
          rescue 😅).
        </p>
      </>
    ),
  },
  {
    name: 'Git',
    usageLevel: 3,
    yearsExperience: 5,
    colors: {
      normal: {
        background: '#f34f29',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#a92709',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffbdaf' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="-4.38 -5.338 107.676 107.949"
          stroke={colors.background}
          strokeWidth={10}
        >
          <path
            d="M 95.648 44.36 L 53.733 2.448 C 51.32 0.033 47.405 0.033 44.989 2.448 L 32.01 15.429 L 3.269 44.166 C 0.854 46.582 0.854 50.497 3.269 52.912 L 45.185 94.825 C 47.599 97.241 51.513 97.241 53.929 94.825 L 95.648 53.107 C 98.061 50.692 98.061 46.774 95.648 44.36 Z"
            fill={colors.background}
          />
          <path
            d="M 93.669 44.543 L 53.55 4.426 C 51.24 2.115 47.493 2.115 45.181 4.426 L 36.851 12.758 L 47.418 23.325 C 49.874 22.495 52.69 23.052 54.647 25.01 C 56.616 26.98 57.168 29.82 56.317 32.285 L 66.503 42.47 C 68.968 41.62 71.81 42.17 73.778 44.141 C 76.528 46.891 76.528 51.347 73.778 54.099 C 71.026 56.85 66.57 56.85 63.817 54.099 C 61.749 52.029 61.237 48.989 62.286 46.441 L 52.786 36.942 L 52.786 61.939 C 53.456 62.271 54.089 62.713 54.647 63.271 C 57.397 66.021 57.397 70.477 54.647 73.23 C 51.897 75.979 47.438 75.979 44.69 73.23 C 41.94 70.476 41.94 66.02 44.69 63.271 C 45.37 62.592 46.157 62.078 46.997 61.734 L 46.997 36.504 C 46.157 36.16 45.372 35.651 44.69 34.967 C 42.607 32.885 42.106 29.827 43.174 27.269 L 32.757 16.85 L 5.247 44.357 C 2.936 46.67 2.936 50.417 5.247 52.728 L 45.368 92.846 C 47.678 95.157 51.424 95.157 53.737 92.846 L 93.669 52.914 C 95.98 50.603 95.98 46.854 93.669 44.543 Z"
            fill={colors.text}
          />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          I really like using Git directly through the terminal: it
          enabled me to understand fundamentally what every action is
          doing under the hood.
        </p>
        <p>
          Git has various helpful (but not so often used) features. My
          favorite one is <code>bisect</code>, as it makes it easy to
          find the commit which introduced a behavior on the system.
        </p>
        <p>
          I have experienced a lot of different branching strategies
          throughout my career — most of them were variations of the{' '}
          <a
            href="https://nvie.com/posts/a-successful-git-branching-model"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git Flow
          </a>
          .
        </p>
        <p>
          In my personal projects, I like to commit changes with
          messages according to the{' '}
          <a
            href="https://www.conventionalcommits.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conventional Commits
          </a>
          .
        </p>
      </>
    ),
  },
  {
    name: 'CI/CD',
    usageLevel: 3,
    colors: {
      normal: {
        background: '#c0c0c0',
        text: '#292e31',
      },
      contrast: {
        background: '#c0c0c0',
        text: 'black',
      },
      scrollBar: { trackColor: '#4c4c4c' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          preserveAspectRatio="xMidYMid meet"
          viewBox="-5 -5 52 42"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={5}
        >
          <path d="M3.692 21.72c.176.042.415.259.484.457l.35.844c.079.162.064.483-.03.637l-1.397 2.284c-.299.49-.237 1.184.165 1.634l1.183 1.182c.412.366 1.139.432 1.613.145l2.284-1.397c.143-.088.45-.119.665-.018l.843.348c.17.059.387.297.429.473l.627 2.604c.133.552.66 1.006 1.226 1.058c0 0 .347.032.867.032s.867-.032.868-.032a1.444 1.444 0 0 0 1.225-1.058l.628-2.604c.042-.175.258-.414.456-.483l.844-.35c.149-.073.494-.058.637.03l2.284 1.397c.201.123.441.188.696.188c.345 0 .679-.121.938-.352l1.182-1.183a1.407 1.407 0 0 0 .145-1.613l-1.397-2.284c-.094-.154-.109-.475-.018-.665l.348-.843c.059-.17.297-.387.473-.429l2.604-.627a1.446 1.446 0 0 0 1.058-1.226s.032-.347.032-.867s-.032-.867-.032-.868a1.447 1.447 0 0 0-1.058-1.226l-2.603-.626c-.176-.042-.415-.259-.484-.457l-.35-.844c-.079-.162-.064-.483.03-.637l1.397-2.284c.299-.49.237-1.184-.165-1.634l-1.183-1.182c-.413-.367-1.141-.433-1.613-.145l-2.284 1.397c-.143.087-.451.12-.665.018l-.843-.348c-.17-.059-.386-.297-.428-.473l-.628-2.604a1.446 1.446 0 0 0-1.226-1.058C13.867 6.032 13.52 6 13 6s-.867.032-.868.032a1.447 1.447 0 0 0-1.226 1.058l-.626 2.602c-.042.176-.259.415-.457.484l-.844.35c-.15.073-.494.057-.637-.03L6.059 9.099c-.473-.288-1.185-.238-1.634.164l-1.182 1.183a1.407 1.407 0 0 0-.145 1.613l1.397 2.284c.094.154.109.475.018.665l-.348.843c-.059.17-.297.387-.473.429l-2.604.627A1.446 1.446 0 0 0 .03 18.133c.002 0-.03.347-.03.867s.032.867.032.868a1.447 1.447 0 0 0 1.058 1.226l2.602.626zM1 19c0-.458.027-.767.028-.777a.466.466 0 0 1 .296-.344l2.604-.627c.505-.122 1.014-.584 1.172-1.047l.324-.787c.228-.467.196-1.153-.075-1.597l-1.397-2.283c-.067-.111-.048-.331.018-.406L5.111 9.99c.091-.081.323-.101.427-.038l2.284 1.397c.433.265 1.175.283 1.568.088l.788-.326c.491-.169.953-.678 1.075-1.184l.626-2.603a.465.465 0 0 1 .344-.297c.01 0 .319-.027.777-.027s.767.027.777.028a.466.466 0 0 1 .344.296l.627 2.603c.122.505.583 1.015 1.047 1.173l.787.324c.457.224 1.165.189 1.597-.075l2.283-1.397c.104-.063.35-.03.406.018l1.142 1.141c.086.097.105.316.038.427l-1.397 2.284c-.271.443-.303 1.13-.088 1.568l.326.788c.169.491.678.953 1.184 1.075l2.603.626a.465.465 0 0 1 .297.344c0 .01.027.319.027.777s-.027.767-.028.777a.466.466 0 0 1-.296.344l-2.604.627c-.505.122-1.014.584-1.172 1.047l-.324.787c-.228.467-.196 1.153.075 1.597l1.397 2.283c.067.111.048.331-.018.406l-1.141 1.142a.398.398 0 0 1-.251.079a.346.346 0 0 1-.175-.041l-2.284-1.397c-.432-.264-1.174-.283-1.568-.088l-.788.326c-.491.169-.953.679-1.074 1.184l-.627 2.603a.465.465 0 0 1-.344.297c-.011 0-.32.027-.778.027s-.767-.027-.777-.028a.466.466 0 0 1-.344-.296l-.627-2.604c-.122-.505-.584-1.014-1.047-1.172l-.787-.324a1.633 1.633 0 0 0-.715-.152c-.329 0-.642.081-.882.228l-2.283 1.397c-.104.063-.351.029-.406-.018L3.99 26.889c-.086-.097-.105-.316-.038-.427l1.397-2.284c.271-.443.303-1.13.088-1.568l-.326-.788c-.169-.491-.678-.953-1.184-1.075l-2.603-.626a.465.465 0 0 1-.297-.344c0-.01-.027-.319-.027-.777z" />
          <path d="M13 24.5c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5s-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5zm0-10c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5zm14.477-9.186a.424.424 0 0 1-.259.138l-1.861-.018a1.16 1.16 0 0 0-1.053.746s-.082.233-.172.59c-.09.357-.128.601-.128.601c-.07.451.181.95.584 1.161l1.641.86a.435.435 0 0 1 .166.273l.093.635a.426.426 0 0 1-.084.28l-1.322 1.296c-.331.324-.418.878-.19 1.313l.599 1c.253.372.801.562 1.231.428l1.824-.558c.099 0 .198.038.254.083l.515.38a.43.43 0 0 1 .138.259l-.018 1.852c-.004.456.316.913.746 1.063c0 0 .233.082.59.172c.357.09.601.128.601.128c.026.004.13.012.156.012a1.17 1.17 0 0 0 1.005-.596l.86-1.641a.435.435 0 0 1 .273-.166l.663-.096c.1 0 .218.052.251.086l1.296 1.322c.315.322.846.437 1.313.19l.999-.599c.382-.26.567-.79.429-1.231l-.552-1.767a.433.433 0 0 1 .078-.311l.38-.515a.424.424 0 0 1 .259-.138l1.861.018a1.16 1.16 0 0 0 1.053-.746s.082-.233.172-.59c.09-.357.128-.601.128-.601a1.16 1.16 0 0 0-.584-1.161l-1.641-.86a.435.435 0 0 1-.166-.273l-.092-.633a.426.426 0 0 1 .084-.28l1.322-1.296c.331-.324.418-.878.19-1.313l-.599-1c-.253-.371-.8-.563-1.231-.429l-1.825.558a.432.432 0 0 1-.254-.083l-.515-.38a.43.43 0 0 1-.138-.259l.018-1.852a1.158 1.158 0 0 0-.746-1.063s-.233-.082-.59-.172c-.357-.09-.601-.128-.601-.128a2.725 2.725 0 0 0-.156-.011a1.17 1.17 0 0 0-1.005.596l-.86 1.641a.435.435 0 0 1-.273.166l-.663.095a.437.437 0 0 1-.251-.086l-1.296-1.322a1.112 1.112 0 0 0-1.313-.19l-1 .598c-.382.26-.567.79-.429 1.231l.552 1.767a.433.433 0 0 1-.078.311l-.379.515zm.82.572l.343-.466c.268-.317.372-.834.248-1.229l-.551-1.766c-.005-.028.017-.091.012-.092l.948-.568l.113.017l1.297 1.322c.23.234.609.386.965.386a.945.945 0 0 0 .204-.019l.575-.085a1.393 1.393 0 0 0 1.043-.694l.859-1.64a.185.185 0 0 1 .12-.061c.011.001.215.035.513.109c.297.075.493.142.502.146c.031.013.076.078.078.11l-.018 1.852c-.004.414.245.879.567 1.089l.465.343c.309.261.839.371 1.229.248l1.774-.552c.042 0 .089.026.083.013l.568.948c.011.026 0 .092-.017.113l-1.322 1.297c-.295.291-.448.795-.367 1.169l.084.575c.036.412.328.851.695 1.043l1.64.859a.189.189 0 0 1 .061.12a6.405 6.405 0 0 1-.109.513a6.095 6.095 0 0 1-.146.502c-.013.031-.078.076-.11.078l-1.862-.018c-.411 0-.871.249-1.079.567l-.342.465a1.386 1.386 0 0 0-.248 1.229l.551 1.766c.005.027-.017.091-.012.092l-.948.568l-.113-.017l-1.297-1.322c-.23-.234-.609-.386-.965-.386a.945.945 0 0 0-.204.019l-.575.085a1.393 1.393 0 0 0-1.043.694l-.859 1.64a.185.185 0 0 1-.12.061a6.405 6.405 0 0 1-.513-.109a6.095 6.095 0 0 1-.502-.146c-.031-.013-.076-.078-.078-.11l.018-1.852c.004-.414-.245-.879-.567-1.089l-.465-.343a1.387 1.387 0 0 0-1.23-.248l-1.774.552c-.043 0-.09-.023-.083-.013l-.568-.948c-.011-.026 0-.092.017-.113l1.322-1.297c.295-.291.448-.795.367-1.169l-.084-.574a1.392 1.392 0 0 0-.695-1.043l-1.64-.859a.189.189 0 0 1-.061-.12c.001-.011.035-.215.109-.513c.075-.297.142-.493.146-.502c.013-.031.078-.076.11-.078l1.862.018c.411 0 .871-.249 1.079-.567z" />
          <path d="M33 12c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-5c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z" />
        </svg>
      );
    },

    studying: false,
    favorite: false,
    // TODO: write about ADA compliance bot
    description: (
      <>
        <p>
          My first opportunity to learn and apply Continuous
          Integration and Continuous Deployment practices happened
          while developing{' '}
          <a
            href="https://renato-bohler.github.io/redux-form-input-masks"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux-form-input-masks
          </a>
          .
        </p>
        <p>
          Since then, I&apos;ll always follow these practices on every
          project. I firmly believe that the time invested in setting
          up these tools pays off in any project.
        </p>
        <p>
          Professionally, I had experience using Travis, CircleCI,
          Jenkins, and GitHub Actions.
        </p>
        <p>
          🚩 I&apos;m also experienced in using feature flags to
          control and experiment with the release of new features
          (using Optimizely or LaunchDarkly).
        </p>
      </>
    ),
  },
  {
    name: 'React',
    usageLevel: 3,
    yearsExperience: 5,
    colors: {
      normal: {
        background: '#61dbfb',
        text: '#222222',
      },
      contrast: {
        background: '#61dbfb',
        text: 'black',
      },
      scrollBar: { trackColor: '#2e4f58' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="155.266 60.972 537.598 477.767"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
        >
          <path d="M 563.8 378.8 C 578.3 442.2 572 492.7 543.9 508.9 C 537.3 512.7 529.7 514.5 521.3 514.5 C 493.8 514.5 457.8 495.1 421.4 461.3 C 385 495.3 349 514.9 321.5 514.9 C 313.1 514.9 305.5 513.1 299 509.3 C 270.8 493.1 264.4 442.5 278.8 378.9 C 216.4 359.8 175.7 329 175.7 296.5 C 175.7 264.1 216.2 233.4 278.4 214.2 C 263.9 150.8 270.2 100.3 298.3 84.1 C 304.9 80.3 312.5 78.5 320.9 78.5 L 320.9 78.4 C 348.4 78.4 384.4 97.8 420.8 131.6 C 457.2 97.6 493.2 78 520.7 78 L 520.7 78.1 C 528.961 78.115 536.526 79.915 543 83.7 C 571.2 99.9 577.6 150.5 563.2 214.1 C 625.6 233.2 666.3 264 666.3 296.5 C 666.3 328.9 625.8 359.7 563.8 378.8 Z M 520.6 100.3 C 499.802 100.353 469.248 116.949 436.7 147.2 C 450.8 161.9 464.8 178.7 478.3 197.2 C 500.8 199.6 522.2 203.3 541.8 208.1 C 544 198 545.8 188.1 546.9 178.7 C 551.5 140.5 545.6 110.8 532 103 C 528.9 101.3 525.2 100.4 520.6 100.4 Z M 320.9 100.7 L 320.9 100.8 C 316.3 100.8 312.4 101.6 309.4 103.4 C 295.9 111.3 290.1 141 294.8 179.2 C 296 188.5 297.7 198.2 300 208.2 C 319.6 203.3 341 199.6 363.6 197.2 C 376.9 178.7 390.9 162 404.9 147.3 C 372.3 117.2 341.6 100.7 320.9 100.7 Z M 495.1 221.9 C 500 229.5 504.9 237.3 509.5 245.3 C 514.2 253.3 518.5 261.3 522.6 269.3 C 527.8 256 532.4 242.7 536.1 229.8 C 523 226.6 509.3 224 495.1 221.9 Z M 511 296.4 C 504.7 283 497.8 269.7 490.2 256.6 C 482.4 243.2 474.3 230.5 466 218.6 C 451.2 217.4 436.1 216.7 421 216.7 C 405.8 216.7 390.7 217.4 375.8 218.7 C 367.5 230.6 359.5 243.4 351.7 256.9 C 344.2 270 337.2 283.4 331 296.8 C 337.3 310.2 344.2 323.5 351.8 336.6 C 359.6 350 367.7 362.7 376 374.6 C 390.8 375.8 405.9 376.5 421 376.5 C 436.2 376.5 451.3 375.8 466.2 374.5 C 474.5 362.6 482.5 349.8 490.3 336.3 C 497.8 323.2 504.7 309.8 511 296.4 Z M 509.6 347.4 C 505 355.5 500.1 363.4 495.2 371.1 C 509.5 369 523.3 366.3 536.4 363.1 C 532.6 350.1 528 336.7 522.6 323.3 C 518.5 331.3 514.2 339.4 509.6 347.4 Z M 448.7 398 C 439.6 398.5 430.3 398.7 420.9 398.7 C 411.6 398.7 402.4 398.4 393.4 398 C 402.6 409.7 411.9 420.4 421.2 430 C 430.4 420.4 439.7 409.7 448.7 398 Z M 332.4 347.7 C 327.7 339.7 323.4 331.7 319.3 323.7 C 314.1 337 309.5 350.3 305.8 363.2 C 318.9 366.4 332.6 369 346.8 371.1 C 341.9 363.5 337.1 355.7 332.4 347.7 Z M 393.2 195 C 402.3 194.5 411.6 194.3 421 194.3 C 430.3 194.3 439.5 194.6 448.5 195 C 439.3 183.3 430 172.6 420.7 163 C 411.5 172.6 402.2 183.3 393.2 195 Z M 305.5 229.8 C 309.3 242.8 313.9 256.2 319.3 269.6 C 323.4 261.6 327.7 253.6 332.3 245.6 C 336.9 237.5 341.8 229.6 346.7 221.9 C 332.4 224 318.6 226.7 305.5 229.8 Z M 284.2 357.3 C 289.8 337.8 297.2 317.5 306.4 296.7 C 297.1 275.8 289.6 255.4 283.9 235.8 C 274.2 238.9 264.8 242.2 256.2 245.9 C 220.8 260.9 197.9 280.8 197.9 296.5 C 197.9 312.2 220.8 332 256.2 347.1 C 264.9 350.8 274.3 354.2 284.2 357.3 Z M 321.3 492.7 C 342.1 492.7 372.7 476.1 405.3 445.8 C 391.2 431.1 377.2 414.3 363.7 395.8 C 341.2 393.4 319.8 389.7 300.2 384.9 C 298 395 296.2 404.9 295.1 414.3 C 290.5 452.5 296.4 482.2 310 490 C 313 491.7 316.8 492.6 321.3 492.7 Z M 542 384.7 C 522.4 389.6 501 393.3 478.4 395.7 C 465.1 414.2 451.1 430.9 437.1 445.6 C 469.7 475.7 500.4 492.2 521.1 492.2 C 525.7 492.2 529.6 491.4 532.6 489.6 C 546.1 481.7 551.9 452 547.2 413.8 C 546.1 404.5 544.3 394.8 542 384.7 Z M 644.1 296.5 C 644.1 280.8 621.2 261 585.8 245.9 C 577 242.2 567.6 238.8 557.7 235.7 C 552.1 255.2 544.7 275.5 535.5 296.3 C 544.8 317.2 552.3 337.6 558 357.2 C 567.7 354.1 577.1 350.8 585.7 347.1 C 621.1 332.1 644 312.2 644.1 296.5 Z M 466.6 296.5 C 466.6 321.739 446.139 342.2 420.9 342.2 C 395.661 342.2 375.2 321.739 375.2 296.5 C 375.2 271.261 395.661 250.8 420.9 250.8 C 446.139 250.8 466.6 271.261 466.6 296.5 Z" />
        </svg>
      );
    },
    studying: true,
    favorite: true,
    teaser: (
      <>
        <p>
          I&apos;ve been in love with <strong>React</strong> since I
          first used it in 2017.
        </p>
        <p>
          What I really enjoy about <strong>React</strong>, apart from
          its component-based architecture, is that it&apos;s all just
          JavaScript.
        </p>
        <p>
          The whole <strong>React</strong> ecosystem also helps make
          it awesome.
        </p>
      </>
    ),
    // TODO: write about design system, component library, chromatic, etc.
    description: (
      <>
        <p>
          React is definitely my preferred solution when it comes to
          UI development. Recently, most of my work has been
          developing React projects.
        </p>
        <p>
          Alongside React, I generally use libraries like{' '}
          <code>redux</code>, <code>redux-thunk</code>,{' '}
          <code>redux-form</code>, <code>material-ui</code>,{' '}
          <code>styled-components</code>, <code>reakit</code>, among
          others.
        </p>
        <p>
          <strong>Fun fact 😆:</strong> the page you&apos;re reading
          right now was made using React using static-site generation
          from{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          .
        </p>
        <p>
          Some of the most complex things I&apos;ve built with React
          are open-source projects:{' '}
          <a
            href="https://renato-bohler.github.io/logossim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logossim
          </a>{' '}
          and{' '}
          <a
            href="https://renato-bohler.github.io/what-the-filter"
            target="_blank"
            rel="noopener noreferrer"
          >
            what the filter?
          </a>
          .
        </p>
        <p>
          I have experience developing server-side React applications
          and building more complex components such as:
        </p>
        <ul>
          <li>
            customized rich text editors using{' '}
            <a
              href="https://draftjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>draft-js</code>
            </a>
          </li>
          <li>integrations with QRCode reading devices</li>
          <li>integrations with real-time measurement devices</li>
        </ul>
        <p>
          I also have experience with building and maintaining
          component libraries using{' '}
          <a
            href="https://storybook.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook
          </a>
          .
        </p>
        <p>
          I&apos;m always on the lookout for new React features, and
          I&apos;m an active member of React communities. I also had
          the opportunity to{' '}
          <a
            href="https://github.com/reactjs/pt-BR.reactjs.org/pull/31"
            target="_blank"
            rel="noopener noreferrer"
          >
            collaborate
          </a>{' '}
          with the original translation of the{' '}
          <a
            href="https://pt-br.reactjs.org/docs/react-api.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Reference (in Portuguese)
          </a>{' '}
          on the official React docs.
        </p>
        <p>
          <strong>TL;DR:</strong> I am a React fanboy 😅
        </p>
      </>
    ),
  },
  {
    name: 'React Native',
    usageLevel: 1,
    yearsExperience: 1,
    colors: {
      normal: {
        background: '#222222',
        text: '#61dbfb',
      },
      contrast: {
        background: '#222222',
        text: '#7ee1fb',
      },
      scrollBar: { trackColor: '#5fbbd3' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="155.266 60.972 537.598 477.767"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
        >
          <path d="M 563.8 378.8 C 578.3 442.2 572 492.7 543.9 508.9 C 537.3 512.7 529.7 514.5 521.3 514.5 C 493.8 514.5 457.8 495.1 421.4 461.3 C 385 495.3 349 514.9 321.5 514.9 C 313.1 514.9 305.5 513.1 299 509.3 C 270.8 493.1 264.4 442.5 278.8 378.9 C 216.4 359.8 175.7 329 175.7 296.5 C 175.7 264.1 216.2 233.4 278.4 214.2 C 263.9 150.8 270.2 100.3 298.3 84.1 C 304.9 80.3 312.5 78.5 320.9 78.5 L 320.9 78.4 C 348.4 78.4 384.4 97.8 420.8 131.6 C 457.2 97.6 493.2 78 520.7 78 L 520.7 78.1 C 528.961 78.115 536.526 79.915 543 83.7 C 571.2 99.9 577.6 150.5 563.2 214.1 C 625.6 233.2 666.3 264 666.3 296.5 C 666.3 328.9 625.8 359.7 563.8 378.8 Z M 520.6 100.3 C 499.802 100.353 469.248 116.949 436.7 147.2 C 450.8 161.9 464.8 178.7 478.3 197.2 C 500.8 199.6 522.2 203.3 541.8 208.1 C 544 198 545.8 188.1 546.9 178.7 C 551.5 140.5 545.6 110.8 532 103 C 528.9 101.3 525.2 100.4 520.6 100.4 Z M 320.9 100.7 L 320.9 100.8 C 316.3 100.8 312.4 101.6 309.4 103.4 C 295.9 111.3 290.1 141 294.8 179.2 C 296 188.5 297.7 198.2 300 208.2 C 319.6 203.3 341 199.6 363.6 197.2 C 376.9 178.7 390.9 162 404.9 147.3 C 372.3 117.2 341.6 100.7 320.9 100.7 Z M 495.1 221.9 C 500 229.5 504.9 237.3 509.5 245.3 C 514.2 253.3 518.5 261.3 522.6 269.3 C 527.8 256 532.4 242.7 536.1 229.8 C 523 226.6 509.3 224 495.1 221.9 Z M 511 296.4 C 504.7 283 497.8 269.7 490.2 256.6 C 482.4 243.2 474.3 230.5 466 218.6 C 451.2 217.4 436.1 216.7 421 216.7 C 405.8 216.7 390.7 217.4 375.8 218.7 C 367.5 230.6 359.5 243.4 351.7 256.9 C 344.2 270 337.2 283.4 331 296.8 C 337.3 310.2 344.2 323.5 351.8 336.6 C 359.6 350 367.7 362.7 376 374.6 C 390.8 375.8 405.9 376.5 421 376.5 C 436.2 376.5 451.3 375.8 466.2 374.5 C 474.5 362.6 482.5 349.8 490.3 336.3 C 497.8 323.2 504.7 309.8 511 296.4 Z M 509.6 347.4 C 505 355.5 500.1 363.4 495.2 371.1 C 509.5 369 523.3 366.3 536.4 363.1 C 532.6 350.1 528 336.7 522.6 323.3 C 518.5 331.3 514.2 339.4 509.6 347.4 Z M 448.7 398 C 439.6 398.5 430.3 398.7 420.9 398.7 C 411.6 398.7 402.4 398.4 393.4 398 C 402.6 409.7 411.9 420.4 421.2 430 C 430.4 420.4 439.7 409.7 448.7 398 Z M 332.4 347.7 C 327.7 339.7 323.4 331.7 319.3 323.7 C 314.1 337 309.5 350.3 305.8 363.2 C 318.9 366.4 332.6 369 346.8 371.1 C 341.9 363.5 337.1 355.7 332.4 347.7 Z M 393.2 195 C 402.3 194.5 411.6 194.3 421 194.3 C 430.3 194.3 439.5 194.6 448.5 195 C 439.3 183.3 430 172.6 420.7 163 C 411.5 172.6 402.2 183.3 393.2 195 Z M 305.5 229.8 C 309.3 242.8 313.9 256.2 319.3 269.6 C 323.4 261.6 327.7 253.6 332.3 245.6 C 336.9 237.5 341.8 229.6 346.7 221.9 C 332.4 224 318.6 226.7 305.5 229.8 Z M 284.2 357.3 C 289.8 337.8 297.2 317.5 306.4 296.7 C 297.1 275.8 289.6 255.4 283.9 235.8 C 274.2 238.9 264.8 242.2 256.2 245.9 C 220.8 260.9 197.9 280.8 197.9 296.5 C 197.9 312.2 220.8 332 256.2 347.1 C 264.9 350.8 274.3 354.2 284.2 357.3 Z M 321.3 492.7 C 342.1 492.7 372.7 476.1 405.3 445.8 C 391.2 431.1 377.2 414.3 363.7 395.8 C 341.2 393.4 319.8 389.7 300.2 384.9 C 298 395 296.2 404.9 295.1 414.3 C 290.5 452.5 296.4 482.2 310 490 C 313 491.7 316.8 492.6 321.3 492.7 Z M 542 384.7 C 522.4 389.6 501 393.3 478.4 395.7 C 465.1 414.2 451.1 430.9 437.1 445.6 C 469.7 475.7 500.4 492.2 521.1 492.2 C 525.7 492.2 529.6 491.4 532.6 489.6 C 546.1 481.7 551.9 452 547.2 413.8 C 546.1 404.5 544.3 394.8 542 384.7 Z M 644.1 296.5 C 644.1 280.8 621.2 261 585.8 245.9 C 577 242.2 567.6 238.8 557.7 235.7 C 552.1 255.2 544.7 275.5 535.5 296.3 C 544.8 317.2 552.3 337.6 558 357.2 C 567.7 354.1 577.1 350.8 585.7 347.1 C 621.1 332.1 644 312.2 644.1 296.5 Z M 466.6 296.5 C 466.6 321.739 446.139 342.2 420.9 342.2 C 395.661 342.2 375.2 321.739 375.2 296.5 C 375.2 271.261 395.661 250.8 420.9 250.8 C 446.139 250.8 466.6 271.261 466.6 296.5 Z" />
        </svg>
      );
    },
    studying: true,
    favorite: true,
    teaser: (
      <>
        <p>
          I&apos;ve used <strong>React Native</strong> in only one
          professional project so far, but being able to write Android
          and iOS applications with React is such a great thing.
        </p>
      </>
    ),
    description: (
      <>
        <p>
          While there definitely are fundamental differences between
          React and React Native,{' '}
          <strong>
            coding React Native apps is very similar to coding React
            apps
          </strong>
          .
        </p>
        <p>
          I&apos;m way more experienced with React than with React
          Native, and the similarity between them allows me to feel
          pretty confident while working on React Native applications.
        </p>
        <p>
          In my only professional experience with it, I built a
          healthcare marketplace app (
          <a
            href="https://play.google.com/store/apps/details?id=com.compar.tudobem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android
          </a>
          ,{' '}
          <a
            href="https://apps.apple.com/br/app/tudobem/id1527314081"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS
          </a>{' '}
          — in Portuguese) up until just before its first production
          release. For that reason, handling app releases is where my
          knowledge falls short. I know people use tools like{' '}
          <a
            href="https://fastlane.tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane
          </a>{' '}
          — I just never used them 😅
        </p>
      </>
    ),
  },
  {
    name: 'Redux',
    usageLevel: 1,
    yearsExperience: 4,
    colors: {
      normal: {
        background: '#6e50b5',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#4e3784',
        text: 'white',
      },
      scrollBar: { trackColor: '#b0a0d7' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="-45.112 -32.683 301.112 276.683"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
        >
          <path d="M 154.825 153.874 C 164.272 152.897 171.439 144.752 171.113 134.979 C 170.788 125.205 162.643 117.387 152.87 117.387 L 152.219 117.387 C 142.12 117.712 134.301 126.183 134.627 136.282 C 134.953 141.169 136.908 145.404 139.84 148.336 C 128.763 170.163 111.823 186.127 86.413 199.484 C 69.147 208.606 51.23 211.864 33.312 209.583 C 18.653 207.628 7.251 201.113 0.084 190.362 C -10.341 174.399 -11.318 157.132 -2.522 139.866 C 3.667 127.486 13.44 118.364 19.63 113.803 C 18.327 109.568 16.372 102.401 15.395 97.188 C -31.842 131.395 -26.955 177.656 -12.621 199.484 C -1.871 215.773 19.956 225.872 44.063 225.872 C 50.578 225.872 57.094 225.221 63.609 223.592 C 105.308 215.447 136.908 190.688 154.825 153.874 Z M 212.161 113.477 C 187.402 84.483 150.916 68.519 109.217 68.519 L 104.005 68.519 C 101.073 62.655 94.883 58.746 88.042 58.746 L 87.39 58.746 C 77.292 59.072 69.473 67.542 69.799 77.641 C 70.125 87.415 78.269 95.233 88.042 95.233 L 88.693 95.233 C 95.86 94.908 102.05 90.347 104.656 84.157 L 110.52 84.157 C 135.279 84.157 158.734 91.324 179.909 105.333 C 196.198 116.084 207.926 130.092 214.441 147.033 C 219.979 160.716 219.653 174.073 213.789 185.475 C 204.668 202.742 189.357 212.189 169.159 212.189 C 156.128 212.189 143.749 208.28 137.233 205.348 C 133.65 208.606 127.134 213.818 122.574 217.076 C 136.582 223.592 150.916 227.175 164.598 227.175 C 195.872 227.175 219.002 209.909 227.798 192.642 C 237.245 173.747 236.593 141.169 212.161 113.477 Z M 46.669 159.413 C 46.995 169.186 55.139 177.005 64.912 177.005 L 65.564 177.005 C 75.663 176.679 83.481 168.209 83.155 158.11 C 82.83 148.336 74.685 140.517 64.912 140.517 L 64.261 140.517 C 63.609 140.517 62.632 140.517 61.98 140.843 C 48.624 118.69 43.086 94.582 45.04 68.519 C 46.343 48.972 52.859 32.032 64.261 18.023 C 73.708 5.969 91.951 0.105 104.33 -0.221 C 138.862 -0.872 153.522 42.131 154.499 59.397 C 158.734 60.375 165.901 62.655 170.788 64.284 C 166.878 11.507 134.301 -15.858 103.027 -15.858 C 73.708 -15.858 46.669 5.317 35.919 36.593 C 20.933 78.293 30.706 118.364 48.949 149.965 C 47.321 152.245 46.343 155.829 46.669 159.413 Z" />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          I get it, I get it... Redux is not the cool kid in the block
          these days. But I believe{' '}
          <strong>
            it&apos;s still a notable state management library
          </strong>{' '}
          when used adequately. It has incredible tooling and a large
          community around it. Libraries like{' '}
          <a
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>{' '}
          also help reduce boilerplate code, one of the main concerns
          devs seem to have with Redux.
        </p>
        <p>
          I&apos;ve got experience using Redux with{' '}
          <code>redux-thunk</code> and <code>redux-saga</code>.
          They&apos;ve been used mainly for API fetching, though, and,
          for that purpose, I&apos;d prefer using{' '}
          <code>react-query</code>, RTK Query, or <code>swr</code>{' '}
          nowadays instead.
        </p>
      </>
    ),
  },
  {
    name: 'Angular',
    usageLevel: 1,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#dd0031',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#b20027',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffa0b6' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="0 0 551.226 533.485"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={80}
        >
          <path d="M 237.513 278.843 L 313.713 278.843 L 275.613 187.243 L 237.513 278.843 Z M 275.613 42.743 L 67.813 117.143 L 99.613 392.843 L 275.613 490.743 L 451.613 392.843 L 483.413 117.143 L 275.613 42.743 Z M 405.813 384.543 L 357.213 384.543 L 331.013 319.143 L 220.413 319.143 L 194.213 384.543 L 145.513 384.543 L 275.613 92.243 L 405.813 384.543 Z" />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          Though Angular is not my favorite technology,{' '}
          <strong>
            it was the first frontend framework I used professionally
          </strong>
          . It was actually AngularJS (1.x) using Material components,
          and it was kinda buggy sometimes, to be honest. This is why
          I was happy when my team decided to switch from AngularJS to
          React back in the day 😅
        </p>
        <p>
          I&apos;ve had the opportunity to work with Angular 12
          recently, and it is undoubtedly an improvement over the old
          AngularJS.
        </p>
        <p>
          <strong>Don&apos;t get me wrong:</strong> I like working
          with Angular. In fact, I really enjoy trying different
          stuff, as it pushes me out of my comfort zone, which is
          always an opportunity to learn new things.
        </p>
      </>
    ),
  },
  {
    name: 'Vue',
    usageLevel: -2,
    yearsExperience: 0.5,
    colors: {
      normal: {
        background: '#41b883',
        text: '#292e31',
      },
      contrast: {
        background: '#7dd1ac',
        text: 'black',
      },
      scrollBar: { trackColor: '#292e31' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden viewBox="-60.623 -57.208 327.091 283.898">
          <path
            d="M 135.328 -54.273 L 102.473 1.162 L 70.365 -54.273 L -57.524 -54.273 L 102.476 222.859 L 262.476 -54.273 Z"
            fill="var(--theme-background)"
          />
          <path
            d="M 132.699 -29.051 L 102.474 23.3 L 72.25 -29.051 L -28.402 -29.051 L 102.474 197.637 L 233.351 -29.051 Z"
            fill={colors.background}
          />
          <path
            d="M 132.699 -29.051 L 102.474 23.3 L 72.25 -29.051 L 23.948 -29.051 L 102.474 106.959 L 181.001 -29.051 Z"
            fill="#34495e"
          />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          Vue has an appealing concept, which is a middle ground
          between Angular and React, with a more gentle learning curve
          than both.
        </p>
        <p>
          My only experience with Vue was building the first version
          of my portfolio, using version 2.
        </p>
      </>
    ),
  },
  {
    name: 'GraphQL',
    usageLevel: 1,
    yearsExperience: 1,
    colors: {
      normal: {
        background: '#e535ab',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#901266',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffc9ed' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="0 -17.849 445.309 438.902"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={50}
        >
          <path d="M 331.754 138.602 C 326.857 130.083 325.941 120.367 328.436 111.604 L 247.722 65.003 C 247.415 65.319 247.103 65.629 246.785 65.933 L 352.203 248.517 C 352.651 248.388 353.101 248.268 353.554 248.157 L 353.554 155.023 C 344.671 152.815 336.667 147.149 331.754 138.602 Z M 379.354 251.802 C 396.154 261.502 401.854 282.802 392.154 299.502 C 382.554 316.202 361.154 321.902 344.454 312.302 C 341.129 310.391 338.24 308.012 335.821 305.295 L 255.791 351.502 C 256.935 354.959 257.554 358.657 257.554 362.502 C 257.554 381.702 241.954 397.402 222.654 397.402 C 203.354 397.402 187.754 381.802 187.754 362.502 C 187.754 359.071 188.247 355.758 189.166 352.628 L 108.665 306.15 C 106.422 308.504 103.81 310.585 100.854 312.302 C 84.054 321.902 62.754 316.202 53.154 299.502 C 43.554 282.802 49.254 261.502 65.954 251.802 C 68.907 250.105 72.003 248.886 75.154 248.121 L 75.154 155.105 C 71.967 154.342 68.835 153.116 65.854 151.402 C 49.154 141.802 43.454 120.402 53.054 103.702 C 62.654 87.002 84.054 81.302 100.754 90.902 C 103.742 92.638 106.378 94.745 108.637 97.13 L 189.181 50.627 C 188.252 47.482 187.754 44.151 187.754 40.702 C 187.754 21.402 203.354 5.802 222.654 5.802 C 241.954 5.802 257.554 21.402 257.554 40.702 C 257.554 44.17 257.05 47.519 256.112 50.679 L 336.634 97.169 C 338.901 94.768 341.55 92.647 344.554 90.902 C 361.254 81.302 382.554 87.002 392.254 103.702 C 401.854 120.402 396.154 141.702 379.454 151.402 C 376.473 153.116 373.341 154.342 370.154 155.105 L 370.154 248.123 C 373.307 248.887 376.404 250.106 379.354 251.802 Z M 222.654 327.602 C 232.89 327.602 242.084 331.99 248.464 338.99 L 328.653 292.691 C 328.413 291.935 328.198 291.172 328.009 290.402 L 117.29 290.402 C 117.178 290.854 117.058 291.304 116.928 291.752 L 197.511 338.278 C 203.856 331.694 212.77 327.602 222.654 327.602 Z M 222.654 75.602 C 219.279 75.602 216.017 75.125 212.932 74.235 L 107.52 256.808 C 109.867 259.047 111.941 261.653 113.654 264.602 C 115.351 267.555 116.57 270.651 117.335 273.802 L 327.975 273.802 C 328.74 270.649 329.958 267.552 331.654 264.602 C 333.36 261.634 335.439 259.014 337.797 256.765 L 232.405 74.226 C 229.311 75.122 226.04 75.602 222.654 75.602 Z M 198.545 65.954 C 198.206 65.631 197.874 65.3 197.549 64.964 L 116.857 111.552 C 119.371 120.329 118.461 130.066 113.554 138.602 C 108.641 147.149 100.637 152.815 91.754 155.023 L 91.754 248.166 C 92.215 248.279 92.673 248.403 93.129 248.535 Z" />
        </svg>
      );
    },
    studying: true,
    favorite: false,
    description: (
      <>
        <p>
          For frontend developers, there&apos;s nothing better than
          GraphQL when it comes to data fetching. The ability to ask
          for exactly what you need and get predictable results is
          incredible and removes a lot of complexity in managing data
          that otherwise would potentially be spread across different
          endpoints (or even different services).
        </p>
        <p>
          I have professional experience using GraphQL with{' '}
          <a
            href="https://www.apollographql.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apollo
          </a>{' '}
          on the frontend, but I never developed an API using GraphQL.
        </p>
        <p>
          <a
            href="https://relay.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Relay
          </a>{' '}
          seems to be a very interesting GraphQL client. I&apos;ve
          been studying it for a while now, but I never had the chance
          to use it.
        </p>
      </>
    ),
  },
  {
    name: 'SQL',
    usageLevel: -2,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#545454',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#545454',
        text: 'white',
      },
      scrollBar: { trackColor: '#a1a1a1' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="0 0 339 362"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={50}
        >
          <g transform="matrix(1, 0, 0, 1, -76.58812, 40)">
            <path
              d="M245.333,0C172.928,0,96,22.421,96,64v192c0,42.027,75.115,64,149.333,64s149.333-21.973,149.333-64V64
			C394.667,22.421,317.739,0,245.333,0z M373.333,256c0,20.181-52.565,42.667-128,42.667s-128-22.485-128-42.667v-29.909
			c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V256z M373.333,192c0,17.813-48.704,42.667-128,42.667
			s-128-24.853-128-42.667v-29.909c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V192z M373.333,128
			c0,17.813-48.704,42.667-128,42.667s-128-24.853-128-42.667V98.091c27.883,19.584,78.933,29.909,128,29.909
			s100.117-10.325,128-29.909V128z M245.333,106.667c-79.296,0-128-24.853-128-42.667c0-17.813,48.704-42.667,128-42.667
			s128,24.853,128,42.667C373.333,81.813,324.629,106.667,245.333,106.667z"
            />
          </g>
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          With my knowledge of relational databases, I&apos;m able to
          elaborate complex queries (with multiple and different types
          of <code>JOIN</code>, <code>GROUP BY</code>,{' '}
          <code>HAVING</code>, subqueries, etc.).
        </p>
        <p>
          I know the core concepts behind a database management
          system, but not deeply enough to do insane query
          optimizations. Also, I don&apos;t have much experience using
          features like procedures or triggers. So, to summarize, I
          don&apos;t consider myself a DB specialist 😅 but I can
          certainly get most of the job done.
        </p>
        <p>
          Professionally, I have experience using MySQL, PostgreSQL,
          and Microsoft SQL Server. I also have experience using ORMs
          such as Hibernate.
        </p>
      </>
    ),
  },
  {
    name: 'Java',
    usageLevel: -2,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#ef2d30',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#b00d0f',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffbdbe' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg
          aria-hidden
          viewBox="-23.192 0 327.821 432.784"
          fill={colors.text}
          stroke={colors.background}
          strokeWidth={30}
        >
          <path d="M 175.278 43.702 C 175.278 43.702 211.164 79.601 141.241 134.803 C 85.17 179.084 128.455 204.332 141.218 233.179 C 108.488 203.649 84.469 177.653 100.583 153.459 C 124.234 117.944 189.757 100.725 175.278 43.702 Z M 218.546 114.245 C 143.219 157.931 157.134 170.602 175.278 196.103 C 194.705 223.449 152.404 245.286 152.404 245.286 C 152.404 245.286 173.44 228.026 156.781 208.845 C 100.308 143.775 218.546 114.245 218.546 114.245 Z M 101.74 233.811 C 101.74 233.811 38.968 248.72 79.511 254.134 C 96.629 256.426 130.754 255.908 162.541 253.244 C 188.519 251.053 214.604 246.394 214.604 246.394 C 214.604 246.394 205.444 250.317 198.817 254.842 C 135.073 271.606 11.931 263.807 47.382 246.659 C 77.363 232.167 101.74 233.811 101.74 233.811 Z M 214.345 296.753 C 279.144 263.081 249.184 230.723 228.272 235.082 C 223.146 236.149 220.861 237.073 220.861 237.073 C 220.861 237.073 222.764 234.093 226.398 232.802 C 267.768 218.258 299.585 275.7 213.043 298.45 C 213.046 298.448 214.046 297.554 214.345 296.753 Z M 87.131 272.99 C 87.131 272.99 72.328 283.947 94.936 286.286 C 124.172 289.302 147.26 289.549 187.212 281.856 C 187.212 281.856 192.738 287.458 201.427 290.522 C 119.68 314.425 28.629 292.407 87.131 272.99 Z M 95.393 310.803 C 95.393 310.803 82.194 318.479 104.786 321.076 C 132.155 324.198 146.142 323.75 176.303 318.042 C 176.303 318.042 184.232 323.014 195.306 327.32 C 127.695 356.298 42.287 325.642 95.393 310.803 Z M 30.668 364.968 C -19.881 356.774 54.997 328.163 68.702 337.817 C 68.702 337.817 64.369 337.511 56.788 339.155 C 49.519 340.716 26.409 348.156 38.732 353.517 C 73.014 368.439 196.42 364.869 235.446 353.046 C 255.97 346.82 246.203 338.772 246.203 338.772 C 281.96 354.901 168.52 387.324 30.668 364.968 Z M 59.278 378.795 C 98.113 385.198 163.589 386.364 216.677 376.374 C 263.733 367.513 268.081 356.356 268.081 356.356 C 265.819 385.787 170.306 391.978 108.107 387.996 C 67.237 385.376 59.283 378.797 59.278 378.795 Z M 59.278 378.795 C 59.278 378.795 59.278 378.795 59.278 378.795 C 59.278 378.795 59.278 378.795 59.278 378.795 Z" />
        </svg>
      );
    },
    studying: false,
    favorite: false,
    description: (
      <>
        <p>
          Interested in developing native Android applications, I
          started studying Java around 2014. At that time, I developed
          some Android apps for personal use but never actually
          released them (or their source codes).
        </p>
        <p>
          One of those apps, for instance, was an{' '}
          <a
            href="https://forum.xda-developers.com/xposed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xposed framework
          </a>{' '}
          module that acted as an SMS blocker, built by
          reverse-engineering the default Android SMS app. This app
          allowed me to overcome the fact that Android 4.4 (KitKat){' '}
          <a
            href="https://android-developers.googleblog.com/2013/10/getting-your-sms-apps-ready-for-kitkat.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            removed the ability for apps to intercept and block SMS
            messages
          </a>
          . I used that app for a long time to get rid of annoying SMS
          ads 🦶👋
        </p>
        <p>
          Professionally, I&apos;ve used Java to build backend
          applications using mainly{' '}
          <a
            href="https://maven.apache.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maven
          </a>
          ,{' '}
          <a
            href="https://www.ibm.com/docs/en/was/8.5.5?topic=SSEQTP_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_jaxrs_overview.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAX-RS
          </a>
          , and{' '}
          <a
            href="https://hibernate.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hibernate
          </a>
          .
        </p>
      </>
    ),
  },
];

export const getColors = (skill: Skill, isContrastMode: boolean) => {
  return isContrastMode ? skill.colors.contrast : skill.colors.normal;
};

export type Skill = {
  name: string;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
  colors: {
    normal: {
      background: string;
      text: string;
    };
    contrast: {
      background: string;
      text: string;
    };
    scrollBar?: {
      trackColor?: string;
    };
  };
  icon?: (isContrastMode: boolean) => React.ReactElement;
  studying: boolean;
  favorite: boolean;
  teaser?: React.ReactElement;
  description: React.ReactElement;
};

export default skills;
