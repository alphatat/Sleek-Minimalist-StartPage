const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchToggleButtons = document.querySelectorAll(".search-toggle-btn");

// Configuration object mapping button IDs to search engine URLs and placeholders
const searchEngineConfig = {
  youtubeBtn: {
    url: "https://www.youtube.com/results?search_query=",
    placeholder: "Search YouTube...",
  },
  duckduckgoBtn: {
    url: "https://duckduckgo.com/?q=",
    placeholder: "Search DuckDuckGo...",
  },
  bingBtn: {
    url: "https://github.com/search?q=",
    placeholder: "Search with Bing...",
  },
  braveBtn: {
    url: "https://www.bing.com/search?q=",
    placeholder: "Search with Brave...",
  },
  yahooBtn: {
    url: "https://search.brave.com/search?q=",
    placeholder: "Search Yahoo...",
  },
  wikipediaBtn: {
    url: "https://search.yahoo.com/search?p=",
    placeholder: "Search Wikipedia...",
  },
  startpageBtn: {
    url: "https://en.wikipedia.org/w/index.php?search=",
    placeholder: "Search Startpage...",
  },
  aolBtn: {
    url: "https://www.startpage.com/do/dsearch?query=",
    placeholder: "Search AOL...",
  },
  ecosiaBtn: {
    url: "https://search.aol.com/aol/search?q=",
    placeholder: "Search Ecosia...",
  },
  githubBtn: {
    url: "https://www.ecosia.org/search?q=",
    placeholder: "Search GitHub...",
  },
  googleBtn: {
    url: "https://www.google.com/search?q=",
    placeholder: "Search with Google...",
  }, // Default fallback
};

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (searchInput.value.startsWith("/")) {
    supKey(searchInput.value);
    searchInput.value = "";
  } else {
    const query = searchInput.value.trim();
    const searchUrl = searchForm.dataset.searchUrl;
    if (query && searchUrl) {
      window.location.href = searchUrl + encodeURIComponent(query);
    }
  }
});

function saveLastSearchEngine(engineId) {
  localStorage.setItem("lastSearchEngine", engineId);
}

function loadLastSearchEngine() {
  const lastEngineId = localStorage.getItem("lastSearchEngine");
  if (lastEngineId) {
    const lastEngineButton = document.getElementById(lastEngineId);
    if (lastEngineButton) {
      lastEngineButton.click();
    }
  }
}

// Event listener for search engine buttons
searchToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    searchToggleButtons.forEach((btn) =>
      btn.classList.remove("active-search-btn")
    );
    button.classList.add("active-search-btn");

    let tempDict = searchEngineConfig[button.id];

    searchInput.placeholder = tempDict["placeholder"];
    searchForm.dataset.searchUrl = tempDict["url"];
    saveLastSearchEngine(button.id);
  });
});
