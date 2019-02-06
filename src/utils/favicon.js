export const changeFavicon = theme => {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = `/favicon/${theme.name}.png`;
  document.getElementsByTagName("head")[0].appendChild(link);
};
