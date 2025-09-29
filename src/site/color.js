const root = document.documentElement;

// Function to change the colors
function setColors(
  bgColor,
  textColor,
  accentColor,
  accentrasColor,
  hoverbgColor,
  borderColor,
  btnbgColor,
  boxsdwColor,
  hoverbgColorTxt
) {
  root.style.setProperty("--bg-color", bgColor);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--accent-color", accentColor);
  root.style.setProperty("--accentras-color", accentrasColor);
  root.style.setProperty("--hover-bg-color", hoverbgColor);
  root.style.setProperty("--border-color", borderColor);
  root.style.setProperty("--btn-bg-color", btnbgColor);
  root.style.setProperty("--box-sdw-color", boxsdwColor);
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
function colorAppLi() {
  palettes.forEach((p, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = p.name;
    paletteSelect.appendChild(opt);
  });
}

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
  if (
    typeof lastPalette !== "undefined" &&
    lastPalette &&
    Object.keys(lastPalette).length
  ) {
    // return a deep copy to avoid shared references
    return JSON.parse(JSON.stringify(lastPalette));
  }
  return null;
}

// Set the current selection
paletteSelect.value = localStorage.getItem("paletteIndex") || 0;

currentPalette = {
  bg: "",
  text: "",
  accent: "",
  accentras: "",
  hoverbg: "",
  border: "",
  btnbg: "",
  boxsdw: "",
  svgimgfil: "",
  svgimghvfil: "",
  hoverbgtxt: "",
};

// load persisted palette (or fallback to lastColor.js)
const persisted = loadLastPaletteFromStorage();
if (persisted) {
  currentPalette = persisted;
} else if (
  typeof lastPalette !== "undefined" &&
  lastPalette &&
  Object.keys(lastPalette).length
) {
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
      const randomIndex = Math.floor(Math.random() * keys.length);
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
document.getElementById("paletteSelect").addEventListener("change", () => {
  selectedIndex = paletteSelect.value;
  localStorage.setItem("paletteIndex", selectedIndex);
  applyPalette(selectedIndex);
});
