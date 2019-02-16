export const getRandomTheme = () =>
  themes[Math.floor(Math.random() * themes.length)];

export const themes = [
  {
    name: "dark",
    background: "#e6e6e6",
    border: "#c5c5c5",
    primary: {
      bright: "#2c3e50",
      dark: "#161f28"
    },
    secondary: {
      bright: "#bdc3c7",
      dark: "#5d6063"
    }
  },
  {
    name: "cyan",
    background: "#e2e4e4",
    border: "#a8cec5",
    primary: {
      bright: "#4ca1af",
      dark: "#265057"
    },
    secondary: {
      bright: "#c4e0e5",
      dark: "#606f72"
    }
  },
  {
    name: "blue",
    background: "#e6eaea",
    border: "#a5b9e8",
    primary: {
      bright: "#5b86e5",
      dark: "#2d4372"
    },
    secondary: {
      bright: "#36d1dc",
      dark: "#1b686e"
    }
  },
  {
    name: "aqua",
    background: "#edf0f3",
    border: "#9cd5e4",
    primary: {
      bright: "#0ed2f7",
      dark: "#07697b"
    },
    secondary: {
      bright: "#b2fefa",
      dark: "#587e7d"
    }
  },
  {
    name: "vice",
    background: "#edecf1",
    border: "#a095ce",
    primary: {
      bright: "#ec6ead",
      dark: "#763756"
    },
    secondary: {
      bright: "#3494e6",
      dark: "#1d4972"
    }
  },
  {
    name: "purple",
    background: "#ede9ee",
    border: "#c1b4ea",
    primary: {
      bright: "#7f00ff",
      dark: "#3f007f"
    },
    secondary: {
      bright: "#e100ff",
      dark: "#6f007f"
    }
  },
  {
    name: "rose",
    background: "#e4e1e4",
    border: "#e4aaca",
    primary: {
      bright: "#ee9ca7",
      dark: "#774e53"
    },
    secondary: {
      bright: "#ffdde1",
      dark: "#7f6e70"
    }
  },
  {
    name: "orange",
    background: "#ecebeb",
    border: "#f5bca1",
    primary: {
      bright: "#ee0979",
      dark: "#77043c"
    },
    secondary: {
      bright: "#ff6a00",
      dark: "#7f3401"
    }
  },
  {
    name: "green",
    background: "#eff1ef",
    border: "#c0dcb2",
    primary: {
      bright: "#a8ff78",
      dark: "#547f3c"
    },
    secondary: {
      bright: "#78ffd6",
      dark: "#3c7f6a"
    }
  },
  {
    name: "slate",
    background: "#edeee9",
    border: "#b9dca3",
    primary: {
      bright: "#135058",
      dark: "#09282c"
    },
    secondary: {
      bright: "#f1f2b5",
      dark: "#77785a"
    }
  }
];
