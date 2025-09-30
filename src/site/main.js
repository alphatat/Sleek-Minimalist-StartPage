const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

const settingsBtn = document.getElementById("settingsBtn");

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
document.body.style.fontFamily = localStorage.getItem("font") || "Courier New";

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

let bookUrls = [];

function createBookmarkElement(name, url, parentGrid, isHotcorner = false) {
  const bookmark = document.createElement("a");
  bookmark.href = url;
  bookmark.target = "_blank";
  bookmark.className =
    "bookmark-item rounded-xl truncate relative group flex flex-col justify-center items-center";
  if (isHotcorner) {
    bookmark.classList.add("p-[5px]");
  } else {
    bookmark.classList.add("py-4", "truncate", "px-1");
    bookUrls.push(url);
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
      img.classList.add("w-[70px]", "h-[70px]");
    } else {
      img.classList.add("w-20", "h-20");
    }
    bookmark.appendChild(img);

    // Add hover events to the parent bookmark element
    bookmark.addEventListener("mouseenter", () => {
      img.style.filter = "none";
    });
    bookmark.addEventListener("mouseleave", () => {
      img.style.filter = currentPalette.svgimgfil;
    });

    if (!isHotcorner) {
      span.textContent = name;
      span.classList.add("text-xs", "font-semibold");
      bookmark.appendChild(span);
    }
  } else {
    span.textContent = name;
    if (!isHotcorner) {
      span.classList.add("font-extrabold");

      if (nameLen > 7) {
        const str = name.slice(0, 2);
        span.textContent = str[0].toUpperCase() + str[1];
        nameLen = str.length;
      }
      if (nameLen < 6) {
        span.classList.add("text-4xl", "m-3");
      } else {
        span.classList.add("text-2xl", "m-2");
        bookmark.classList.remove("items-center");
      }
    } else {
      if (nameLen > 2) {
        const str = name.slice(0, 2);
        span.textContent = str[0].toUpperCase() + str[1];
      }
      span.classList.add("text-[36px]", "font-bold", "my-[6px]");
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

  bookmark.appendChild(removeBtn);

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
  colorAppLi();
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
        <button class="absolute right-2 text-red-500">❌</button>
    `;
    li.draggable = true;
    li.classList.add(
      "items-center",
      "truncate",
      "hover:bg-gray-100",
      "rounded",
      "relative"
    );
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
  const extension = file.name.split(".").pop().toLowerCase();
  const reader = new FileReader();
  reader.onload = (ev) => {
    if (extension === "json") {
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
    } else {
      const fileText = ev.target.result; // the HTML file as text
      htmlParse(fileText); // call your parser here
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
