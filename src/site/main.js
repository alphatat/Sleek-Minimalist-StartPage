// main.js
// Define the search engine URLs
const searchEngines = {
  google: "https://www.google.com/search?q=",
  youtube: "https://www.youtube.com/results?search_query=",
  duckduckgo: "https://duckduckgo.com/?q=",
  github: "https://github.com/search?q=",
  bing: "https://www.bing.com/search?q=",
  brave: "https://search.brave.com/search?q=",
  yahoo: "https://search.yahoo.com/search?p=",
  wikipedia: "https://en.wikipedia.org/w/index.php?search=",
  startpage: "https://www.startpage.com/do/dsearch?query=",
  aol: "https://search.aol.com/aol/search?q=",
  ecosia: "https://www.ecosia.org/search?q=",
};

const root = document.documentElement;
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchToggleButtons = document.querySelectorAll(".search-toggle-btn");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
const settingsBtn = document.getElementById("settingsBtn");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const query = searchInput.value.trim();
  const searchUrl = searchForm.dataset.searchUrl;
  if (query && searchUrl) {
    window.location.href = searchUrl + encodeURIComponent(query);
  }
});

// Last Used Search Engine Functionality
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

    let newUrl;
    if (button.id === "youtubeBtn") {
      newUrl = searchEngines.youtube;
      searchInput.placeholder = "Search YouTube...";
    } else if (button.id === "duckduckgoBtn") {
      newUrl = searchEngines.duckduckgo;
      searchInput.placeholder = "Search DuckDuckGo...";
    } else if (button.id === "bingBtn") {
      newUrl = searchEngines.bing;
      searchInput.placeholder = "Search with Bing...";
    } else if (button.id === "braveBtn") {
      newUrl = searchEngines.brave;
      searchInput.placeholder = "Search with Brave...";
    } else if (button.id === "yahooBtn") {
      newUrl = searchEngines.yahoo;
      searchInput.placeholder = "Search Yahoo...";
    } else if (button.id === "wikipediaBtn") {
      newUrl = searchEngines.wikipedia;
      searchInput.placeholder = "Search Wikipedia...";
    } else if (button.id === "startpageBtn") {
      newUrl = searchEngines.startpage;
      searchInput.placeholder = "Search Startpage...";
    } else if (button.id === "aolBtn") {
      newUrl = searchEngines.aol;
      searchInput.placeholder = "Search AOL...";
    } else if (button.id === "ecosiaBtn") {
      newUrl = searchEngines.ecosia;
      searchInput.placeholder = "Search Ecosia...";
    } else if (button.id === "githubBtn") {
      newUrl = searchEngines.github;
      searchInput.placeholder = "Search GitHub...";
    } else {
      newUrl = searchEngines.google;
      searchInput.placeholder = "Search with Google...";
    }
    searchForm.dataset.searchUrl = newUrl;
    saveLastSearchEngine(button.id);
  });
});

// Dynamic Greeting & Clock
function updateDisplay() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  let greetingText;
  if (hour < 12) greetingText = "Good Morning";
  else if (hour < 18) greetingText = "Good Afternoon";
  else greetingText = "Good Evening";

  document.getElementById("greeting").textContent = greetingText;
  document.getElementById("currentTime").textContent = `${
    hour % 12 || 12
  }:${minutes}`;
}

// Apply user font
document.body.style.fontFamily =
localStorage.getItem("font") ||
"'Courier New', monospace, roboto, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Twemoji Mozilla', 'EmojiOne Color', 'JoyPixels', 'OpenMoji Color', Robotomono, 'Fira Mono', 'Source Code Pro', 'Cascadia Mono'";

// Function to change the colors
function setColors(bgColor, textColor, accentColor, accentrasColor, hoverbgColor, borderColor, btnbgColor, boxsdwColor, hoverbgColorTxt) {
  root.style.setProperty("--bg-color", bgColor);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--accent-color", accentColor);
  root.style.setProperty("--accentras-color", accentrasColor);
  root.style.setProperty("--hover-bg-color", hoverbgColor);
  root.style.setProperty("--border-color", borderColor);
  root.style.setProperty("--btn-bg-color", btnbgColor);
  root.style.setProperty("--box-sdw-color", boxsdwColor);
  console.log(root.style.getPropertyValue("--box-sdw-color"));
  root.style.setProperty("--hover-bg-color-txt", hoverbgColorTxt);
}

// Function to apply the current palette
function setColorsCurrentPalette() {
  setColors(
  currentPalette.bg,
  currentPalette.text,
  currentPalette.accent,
  currentPalette.accentras,
  currentPalette.hoverbg,
  currentPalette.border,
  currentPalette.btnbg,
  currentPalette.boxsdw,
  currentPalette.hoverbgtxt 
 );
}
// ===== Color Palette Live Preview =====
const paletteSelect = document.getElementById("paletteSelect");

//Populate the dropdown with palette names
palettes.forEach((p, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = p.name;
  paletteSelect.appendChild(opt);
});

function saveLastPaletteToStorage() {
    try {
        localStorage.setItem("lastPalette", JSON.stringify(currentPalette));
    } catch (e) {
        console.warn("Failed to save lastPalette:", e);
    }
}

function loadLastPaletteFromStorage() {
    try {
        const raw = localStorage.getItem("lastPalette");
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.warn("Failed to load lastPalette:", e);
    }
    // fallback to lastPalette provided by lastColor.js (must be loaded before main.js)
    if (typeof lastPalette !== "undefined" && lastPalette && Object.keys(lastPalette).length) {
        // return a deep copy to avoid shared references
        return JSON.parse(JSON.stringify(lastPalette));
    }
    return null;
}

// Set the current selection
paletteSelect.value = localStorage.getItem("paletteIndex") || 0;

currentPalette = {
    bg: '',
    text: '',
    accent: '',
    accentras: '',
    hoverbg: '',
    border: '',
    btnbg: '',
    boxsdw: '',
    svgimgfil: '',
    svgimghvfil: '',
    hoverbgtxt: ''
};

// load persisted palette (or fallback to lastColor.js)
const persisted = loadLastPaletteFromStorage();
if (persisted) {
    currentPalette = persisted;
} else if (typeof lastPalette !== "undefined" && lastPalette && Object.keys(lastPalette).length) {
    currentPalette = JSON.parse(JSON.stringify(lastPalette));
}

let isRandom = false;
document.getElementById("randomizeBox").addEventListener("click", (e) => {
  isRandom = !isRandom;
  e.currentTarget.classList.toggle("butt-sett-active", isRandom);
 // e.target.classList.toggle("butt-sett", !isRandom);
});
  


function applyPalette(i) {
  if (!palettes || palettes.length === 0) {
    console.error("Palettes are not loaded or empty.");
    return;
  }
  const palette = palettes[i];
  if (palette) {
    if (isRandom) {
      const keys = Object.keys(currentPalette);
      const randomIndex = Math.floor(Math.random() * keys.length)
      const randomKey = keys[randomIndex];
      keys.forEach((key) => {
      if (key !== randomKey) {
        let color;
        do {
          color = palette["color" + (Math.floor(Math.random() * 5) + 1)];
        } while (color === currentPalette[randomKey]);
        currentPalette[key] = color;
      }
      });
    } else {
      let i = Object.keys(palette).length - 1; // wrap around if index out of bounds
      currentPalette.bg = palette["color" + 1];
      currentPalette.text = palette["color" + i];
      currentPalette.accent = palette["color" + 2];
      const middleKeys = ["hoverbg", "border", "btnbg", "boxsdw"];
      let pos = 3;
      middleKeys.forEach((key) => {
        currentPalette[key] = palette["color" + pos];
        pos++;
        if (pos === i) pos = 3; // wrap around if we exceed available colors
      });
    }
    currentPalette.accentras = currentPalette.text + "A1"; // 50% opacity
    currentPalette.boxsdw = currentPalette.boxsdw + "33"; // 25% opacity
    currentPalette.svgimgfil = hexToFilter(currentPalette.hoverbg);
    currentPalette.svgimghvfil = hexToFilter(currentPalette.bg);
    currentPalette.hoverbgtxt = currentPalette.hoverbg; // default to hoverbg
    currentPalette.hoverbg = currentPalette.hoverbg + "cc"; // 80% opacity
    setColorsCurrentPalette();
    lastPalette = JSON.parse(JSON.stringify(currentPalette));
    saveLastPaletteToStorage();
    // Apply the colors using setColors
  } 
}

//  Initial load
setColorsCurrentPalette();


// Apply the initial palette


// Add event listener for palette changes
document.getElementById("paletteSelect") .addEventListener("change", () => {
  selectedIndex = paletteSelect.value;
  localStorage.setItem("paletteIndex", selectedIndex);
  applyPalette(selectedIndex);
});


// Main Bookmark Management
const bookmarkGrid = document.getElementById("bookmarkGrid");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkModal = document.getElementById("bookmarkModal");
const bookmarkForm = document.getElementById("bookmarkForm");
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteUrl");
const cancelBtn = document.getElementById("cancelBtn");

function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  bookmarks.forEach((bookmark) =>
    createBookmarkElement(bookmark.name, bookmark.url, bookmarkGrid)
  );
}

function createBookmarkElement(name, url, parentGrid, isHotcorner = false) {
  const bookmark = document.createElement("a");
  bookmark.href = url;
  bookmark.target = "_blank";
  bookmark.className =
    "bookmark-item rounded-xl truncate relative group flex flex-col justify-center items-center";
  console.log("Creating bookmark:", isHotcorner);
  if (isHotcorner) {
    bookmark.classList.add('p-[5px]');
  } else {
    bookmark.classList.add('py-4', 'truncate');
  }
  const iconPath = siteIcons[name.toLowerCase().trim()] || null;

  // Always create the span for the name
  const span = document.createElement("span");
  let nameLen = name.length;
  span.className = "truncate";
  // Use <img> for the icon, with a filter for color
  if (iconPath) {
    const img = document.createElement("img");
    img.src = iconPath;
    img.alt = name + " icon";
    img.className = "inline-block";
    img.style.filter = currentPalette.svgimgfil;
    img.style.transition = "filter .3s ease";
    if (isHotcorner) {
      img.classList.add('w-[70px]', 'h-[70px]');
    } else {
      img.classList.add('w-16', 'h-16');
    }
    bookmark.appendChild(img);
    console.log(currentPalette.svgimgfil);
    
            // Add hover events to the parent bookmark element
    bookmark.addEventListener('mouseenter', () => {
        img.style.filter = 'none';
    });
    bookmark.addEventListener('mouseleave', () => {
        img.style.filter = currentPalette.svgimgfil;
        
    });

    if (!isHotcorner) {
      span.textContent = name;
      span.classList.add('text-xs', 'font-semibold');
      bookmark.appendChild(span);
    }
  } else {
    span.textContent = name;
    if (!isHotcorner) {

      span.classList.add('font-extrabold');

      if (nameLen > 7) {
        const str = name.slice(0, 2);
        span.textContent = str[0].toUpperCase() + str[1];
        nameLen = str.length;
      } 
      if (nameLen < 4) {
        span.classList.add('text-4xl', 'm-3');
      } else {
        span.classList.add('text-2xl', 'm-2');
        bookmark.classList.remove('items-center');  
      }
    } else {
      if (nameLen > 2) {
        const str = name.slice(0, 2);
        span.textContent = str[0].toUpperCase() + str[1];
      }
      span.classList.add('text-[36px]', 'font-bold', 'my-[6px]');
    }
  }
  bookmark.appendChild(span);
  

  const removeBtn = document.createElement("button");
  removeBtn.className =
    "remove-btn hidden group-hover:block absolute top-2 right-2 text-red-400 hover:text-red-500 opacity-50 hover:opacity-100 transition-colors duration-200";
  removeBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;

  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isHotcorner) {
      removeHotcornerBookmark(name, url, parentGrid.id);
    } else {
      removeBookmark(name, url);
    }
    bookmark.style.opacity = "0";
    bookmark.style.transform = "scale(0.8)";
    setTimeout(() => bookmark.remove(), 300);
  });

  //bookmark.appendChild(removeBtn);

  if (parentGrid.id === "bookmarkGrid") {
    parentGrid.insertBefore(bookmark, addBookmarkBtn);
  } else {
    parentGrid.appendChild(bookmark);
  }
  addGlowEffect(bookmark);
}

function saveBookmark(name, url) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function removeBookmark(name, url) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url
  );
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

addBookmarkBtn.addEventListener("click", () => {
  bookmarkModal.classList.remove("hidden");
  bookmarkModal.style.opacity = "0";
  setTimeout(() => (bookmarkModal.style.opacity = "1"), 10);
  siteNameInput.value = "";
  siteUrlInput.value = "";
});

cancelBtn.addEventListener("click", () => {
  bookmarkModal.style.opacity = "0";
  setTimeout(() => bookmarkModal.classList.add("hidden"), 300);
});

// Modify the main bookmark form submission to handle hotcorners
bookmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const gridId = bookmarkModal.dataset.gridId;
  const name = siteNameInput.value.trim();
  let url = siteUrlInput.value.trim();
  if (!name || !url) {
    alert("Please enter both a site name and URL.");
    return;
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  try {
    new URL(url);
  } catch {
    alert("Please enter a valid URL.");
    return;
  }

  if (gridId) {
    // Check if we are in a hotcorner modal
    saveHotcornerBookmark(name, url, gridId);
    loadHotcornerBookmarks(gridId);
    delete bookmarkModal.dataset.gridId; // Clean up
  } else {
    saveBookmark(name, url);
    createBookmarkElement(name, url, bookmarkGrid);
  }

  bookmarkModal.classList.add("hidden");
});

// Hotcorner Bookmark Management
function loadHotcornerBookmarks(gridId) {
  const bookmarks = JSON.parse(localStorage.getItem(gridId) || "[]");
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";
  bookmarks.forEach((bookmark) =>
    createBookmarkElement(bookmark.name, bookmark.url, grid, true)
  );
  // Add the 'Add Site' button to the hotcorner grid
  const addButton = document.createElement("button");
  addButton.id = `addHotcornerBtn_${gridId.replace("hotcornerGrid", "")}`;
  addButton.className =
    "hotcorner-add-btn p-[2px] rounded-xl text-center relative flex items-center justify-center flex-col w-full";
  addButton.innerHTML = `<span class="text-sm font-bold">Add Site</span>`;
  addButton.addEventListener("click", () => {
    showAddBookmarkModal(gridId);
  });
  grid.appendChild(addButton);
}

function saveHotcornerBookmark(name, url, gridId) {
  const bookmarks = JSON.parse(localStorage.getItem(gridId) || "[]");
  bookmarks.push({ name, url });
  localStorage.setItem(gridId, JSON.stringify(bookmarks));
}

function removeHotcornerBookmark(name, url, gridId) {
  let bookmarks = JSON.parse(localStorage.getItem(gridId) || "[]");
  bookmarks = bookmarks.filter((b) => b.name !== name || b.url !== url);
  localStorage.setItem(gridId, JSON.stringify(bookmarks));
}

// Show the add bookmark modal for hotcorners
function showAddBookmarkModal(gridId) {
  const modal = document.getElementById("bookmarkModal");
  modal.classList.remove("hidden");
  modal.dataset.gridId = gridId; // Store the grid ID for later
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

// Hotcorner Logic
const hotcornerModals = {
  hotcornerTL: "hotcornerModalTL",
  hotcornerTR: "hotcornerModalTR",
  hotcornerBL: "hotcornerModalBL",
  hotcornerBR: "hotcornerModalBR",
};

const hotcornerGrids = {
  hotcornerTL: "hotcornerGridTL",
  hotcornerTR: "hotcornerGridTR",
  hotcornerBL: "hotcornerGridBL",
  hotcornerBR: "hotcornerGridBR",
};

Object.keys(hotcornerModals).forEach((cornerId) => {
  const cornerDiv = document.getElementById(cornerId);
  const modalId = hotcornerModals[cornerId];
  const modalDiv = document.getElementById(modalId);

  // Show modal on mouse enter
  cornerDiv.addEventListener("mouseenter", () => {
    Object.values(hotcornerModals).forEach((id) => {
      document.getElementById(id).classList.add("hidden");
    });
    const gridId = hotcornerGrids[cornerId];
    loadHotcornerBookmarks(gridId);
    modalDiv.classList.remove("hidden");
  });

  // Hide modal when mouse leaves both the hotcorner and the modal
  function hideModal(e) {
    // Only hide if mouse is not moving to the modal or the hotcorner
    if (
      !cornerDiv.contains(e.relatedTarget) &&
      !modalDiv.contains(e.relatedTarget)
    ) {
      modalDiv.classList.add("hidden");
    }
  }

  cornerDiv.addEventListener("mouseleave", hideModal);
  modalDiv.addEventListener("mouseleave", hideModal);
});



// New: Glow effect
function addGlowEffect(element) {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    element.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${currentPalette.text}, transparent 50%)`;
  });
  element.addEventListener("mouseleave", () => {
    element.style.backgroundImage = "none";
  });
}

// Apply glow to buttons and existing bookmarks
searchToggleButtons.forEach(addGlowEffect);
addGlowEffect(addBookmarkBtn);





// ===== Settings Drawer Toggle =====
const settingsPanel = document.getElementById("settingsPanel");
const settingsOverlay = document.getElementById("settingsOverlay");
const closeSettings = document.getElementById("closeSettings");

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.add("active");
  settingsOverlay.classList.add("active");
});
settingsOverlay.addEventListener("click", () => {
  settingsPanel.classList.remove("active");
  settingsOverlay.classList.remove("active");
});
closeSettings.addEventListener("click", () => {
  settingsPanel.classList.remove("active");
  settingsOverlay.classList.remove("active");
});



// ===== Font Live Preview =====
const fontSelect = document.getElementById("fontSelect");
fontSelect.value = localStorage.getItem("font") || "'Courier New', monospace";
document.body.style.fontFamily = fontSelect.value;
fontSelect.addEventListener("change", () => {
  localStorage.setItem("font", fontSelect.value);
  document.body.style.fontFamily = fontSelect.value;
});

// ===== Font Size Selector =====
const fontSizeSelect = document.getElementById("fontSizeSelect");
fontSizeSelect.value = localStorage.getItem("fontSize") || "16";
root.style.setProperty("--font-size-base", fontSizeSelect.value);
fontSizeSelect.addEventListener("change", () => {
  localStorage.setItem("fontSize", fontSizeSelect.value);
  root.style.setProperty("--font-size-base", fontSizeSelect.value);
});
// ===== Bookmark Manager =====
const storageKeys = {
  main: "bookmarks",
  tl: "hotcornerGridTL",
  tr: "hotcornerGridTR",
  bl: "hotcornerGridBL",
  br: "hotcornerGridBR",
};
const lists = {
    main: document.getElementById("mainList"),
    tl: document.getElementById("hotcornerTLList"),
    tr: document.getElementById("hotcornerTRList"),
    bl: document.getElementById("hotcornerBLList"),
    br: document.getElementById("hotcornerBRList"),
};
let draggedItem = null;

function loadData(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// function renderList(listEl, arr, key) {
//   listEl.innerHTML = "";
//   arr.forEach((b, i) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <span contenteditable="true" onblur="renameItem('${key}', ${i}, this.innerText)">${b.name}</span>
//         <button onclick="removeItem('${key}', ${i})" class="ml-3 text-red-400">❌</button>
//         `;
//     li.draggable = true;
//     li.addEventListener("dragstart", () => {
//       draggedItem = { key, index: i };
//       li.classList.add("opacity-50");
//     });
//     li.addEventListener("dragend", () => {
//       draggedItem = null;
//       li.classList.remove("opacity-50");
//     });
//     listEl.appendChild(li);
//   });
// }

function renderList(listEl, arr, key) {
  listEl.innerHTML = "";
  arr.forEach((b, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span spellcheck="false" contenteditable="true">${b.name}</span>
        <button class="ml-[5px] text-red-100">❌</button>
    `;
    li.draggable = true;
    li.classList.add("items-center", "truncate", "hover:bg-gray-100", "rounded");
    li.addEventListener("dragstart", () => {
      draggedItem = { key, index: i };
      li.classList.add("opacity-50");
    });
    li.addEventListener("dragend", () => {
      draggedItem = null;
      li.classList.remove("opacity-50");
    });
    // Add event listener for blur to handle renaming
    li.querySelector("span").addEventListener("blur", (e) => {
      renameItem(key, i, e.target.innerText);
    });
    // Add event listener for the remove button
    li.querySelector("button").addEventListener("click", () => {
      removeItem(key, i);
    });
    listEl.appendChild(li);
  });
}


function renderAll() {
  Object.entries(storageKeys).forEach(([short, key]) => {
    renderList(lists[short], loadData(key), key);
  });
}
function renameItem(key, i, newName) {
  const arr = loadData(key);
  arr[i].name = newName.trim();
  saveData(key, arr);
}
function removeItem(key, i) {
  const arr = loadData(key);
  arr.splice(i, 1);
  saveData(key, arr);
  renderAll();
}

// Drag & drop between lists
Object.entries(lists).forEach(([short, listEl]) => {
  listEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    listEl.classList.add("drag-over");
  });
  listEl.addEventListener("dragleave", () =>
    listEl.classList.remove("drag-over")
  );
  listEl.addEventListener("drop", () => {
    listEl.classList.remove("drag-over");
    if (!draggedItem) return;
    const fromArr = loadData(draggedItem.key);
    const moved = fromArr.splice(draggedItem.index, 1)[0];
    saveData(draggedItem.key, fromArr);
    const toArr = loadData(storageKeys[short]);
    toArr.push(moved);
    saveData(storageKeys[short], toArr);
    renderAll();
  });
});
renderAll();

// ===== Import / Export =====
document.getElementById("importBookmarks").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      Object.values(storageKeys).forEach((k) => {
        if (imported[k]) saveData(k, imported[k]);
      });
      if (imported.font) localStorage.setItem("font", imported.font);
      if (imported.paletteIndex)
        localStorage.setItem("paletteIndex", imported.paletteIndex);
      renderAll();
      applyPalette(localStorage.getItem("paletteIndex") || 0);
    } catch {
      alert("Invalid JSON file.");
    }
  };
  reader.readAsText(file);
});
document.getElementById("exportBookmarks").addEventListener("click", () => {
  const data = {};
  Object.values(storageKeys).forEach((k) => (data[k] = loadData(k)));
  data.font = localStorage.getItem("font");
  data.paletteIndex = localStorage.getItem("paletteIndex");
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "settings-backup.json";
  a.click();
  URL.revokeObjectURL(url);
});

// Initial setup
updateDisplay();
setInterval(updateDisplay, 60000);
loadBookmarks();
loadLastSearchEngine();

