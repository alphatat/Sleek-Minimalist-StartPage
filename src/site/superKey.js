// Configuration object mapping button IDs to search engine URLs and placeholders
const supKeys = {
  "//y": "youtubeBtn",
  "//d": "duckduckgoBtn",
  "//bi": "bingBtn",
  "//b": "braveBtn",
  "//ya": "yahooBtn",
  "//w": "wikipediaBtn",
  "//s": "startpageBtn",
  "//a": "aolBtn",
  "//e": "ecosiaBtn",
  "//gi": "githubBtn",
  "//g": "googleBtn",
};

function supKey(sup = "") {
  if (sup.startsWith("/", 1)) {
    document.getElementById(supKeys[sup]).click();
  } else {
    let i = parseInt(sup.slice(1), 10);
    window.open(bookUrls[i - 1], "_blank");
  }
}
