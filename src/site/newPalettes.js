const palettes = [
    {
        "name": "Magenta Pulse",
        "color1": "#0e0013",
        "color2": "#b64ae2",
        "color3": "#8726f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#e300ff"
    },
    {
        "name": "Electric Fuchsia",
        "color1": "#0f0013",
        "color2": "#bf4ae2",
        "color3": "#9326f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#f300ff"
    },
    {
        "name": "Violet Flame",
        "color1": "#100013",
        "color2": "#c84ae2",
        "color3": "#a026f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00fc"
    },
    {
        "name": "Orchid Gleam",
        "color1": "#120013",
        "color2": "#d14ae2",
        "color3": "#ac26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00ed"
    },
    {
        "name": "Royal Amethyst",
        "color1": "#130013",
        "color2": "#db4ae2",
        "color3": "#b826f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00dd"
    },
    {
        "name": "Purple Bloom",
        "color1": "#130012",
        "color2": "#e24ae0",
        "color3": "#c426f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00ce"
    },
    {
        "name": "Plum Radiance",
        "color1": "#130011",
        "color2": "#e24ad7",
        "color3": "#d026f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00bf"
    },
    {
        "name": "Mulberry Glow",
        "color1": "#130010",
        "color2": "#e24ace",
        "color3": "#dc26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00b0"
    },
    {
        "name": "Rose Magenta",
        "color1": "#13000f",
        "color2": "#e24ac5",
        "color3": "#e926f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00a0"
    },
    {
        "name": "Hot Pink Spark",
        "color1": "#13000e",
        "color2": "#e24abc",
        "color3": "#f126ed",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0091"
    },
    {
        "name": "Neon Pink Glow",
        "color1": "#13000c",
        "color2": "#e24ab3",
        "color3": "#f126e1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0082"
    },
    {
        "name": "Flamingo Radiance",
        "color1": "#13000b",
        "color2": "#e24aaa",
        "color3": "#f126d5",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0072"
    },
    {
        "name": "Coral Rose",
        "color1": "#13000a",
        "color2": "#e24aa0",
        "color3": "#f126c9",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0063"
    },
    {
        "name": "Peach Fuchsia",
        "color1": "#130009",
        "color2": "#e24a97",
        "color3": "#f126bc",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0054"
    },
    {
        "name": "Blush Ember",
        "color1": "#130008",
        "color2": "#e24a8e",
        "color3": "#f126b0",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0044"
    },
    {
        "name": "Watermelon Mist",
        "color1": "#130007",
        "color2": "#e24a85",
        "color3": "#f126a4",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0035"
    },
    {
        "name": "Strawberry Glow",
        "color1": "#130006",
        "color2": "#e24a7c",
        "color3": "#f12698",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0026"
    },
    {
        "name": "Raspberry Spark",
        "color1": "#130004",
        "color2": "#e24a73",
        "color3": "#f1268c",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0017"
    },
    {
        "name": "Crimson Dawn",
        "color1": "#130003",
        "color2": "#e24a6a",
        "color3": "#f12680",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0007"
    },
    {
        "name": "Scarlet Glow",
        "color1": "#130002",
        "color2": "#e24a61",
        "color3": "#f12673",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0800"
    },
    {
        "name": "Vermilion Flame",
        "color1": "#130001",
        "color2": "#e24a57",
        "color3": "#f12667",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff1700"
    },
    {
        "name": "Fiery Ember",
        "color1": "#130000",
        "color2": "#e24a4e",
        "color3": "#f1265b",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff2700"
    },
    {
        "name": "Sunset Orange",
        "color1": "#130100",
        "color2": "#e24f4a",
        "color3": "#f1264f",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff3600"
    },
    {
        "name": "Tangerine Dream",
        "color1": "#130200",
        "color2": "#e2584a",
        "color3": "#f12643",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff4500"
    },
    {
        "name": "Pumpkin Fire",
        "color1": "#130300",
        "color2": "#e2614a",
        "color3": "#f12636",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff5400"
    },
    {
        "name": "Amber Flame",
        "color1": "#130500",
        "color2": "#e26a4a",
        "color3": "#f1262a",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff6400"
    },
    {
        "name": "Golden Ember",
        "color1": "#130600",
        "color2": "#e2734a",
        "color3": "#f12e26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff7300"
    },
    {
        "name": "Honey Radiance",
        "color1": "#130700",
        "color2": "#e27c4a",
        "color3": "#f13a26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff8200"
    },
    {
        "name": "Marigold Glow",
        "color1": "#130800",
        "color2": "#e2854a",
        "color3": "#f14626",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff9200"
    },
    {
        "name": "Daffodil Light",
        "color1": "#130900",
        "color2": "#e28f4a",
        "color3": "#f15226",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffa100"
    },
    {
        "name": "Sunflower Spark",
        "color1": "#130a00",
        "color2": "#e2984a",
        "color3": "#f15f26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffb000"
    },
    {
        "name": "Lemon Shine",
        "color1": "#130b00",
        "color2": "#e2a14a",
        "color3": "#f16b26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffc000"
    },
    {
        "name": "Citrine Glow",
        "color1": "#130d00",
        "color2": "#e2aa4a",
        "color3": "#f17726",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffcf00"
    },
    {
        "name": "Solar Flare",
        "color1": "#130e00",
        "color2": "#e2b34a",
        "color3": "#f18326",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffde00"
    },
    {
        "name": "Chartreuse Spark",
        "color1": "#130f00",
        "color2": "#e2bc4a",
        "color3": "#f18f26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ffed00"
    },
    {
        "name": "Lime Glow",
        "color1": "#131000",
        "color2": "#e2c54a",
        "color3": "#f19b26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#fffd00"
    },
    {
        "name": "Neon Green",
        "color1": "#131100",
        "color2": "#e2ce4a",
        "color3": "#f1a826",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#f2ff00"
    },
    {
        "name": "Fresh Mint",
        "color1": "#131200",
        "color2": "#e2d84a",
        "color3": "#f1b426",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#e3ff00"
    },
    {
        "name": "Jade Essence",
        "color1": "#131300",
        "color2": "#e2e14a",
        "color3": "#f1c026",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#d3ff00"
    },
    {
        "name": "Emerald Glow",
        "color1": "#111300",
        "color2": "#dae24a",
        "color3": "#f1cc26",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#c4ff00"
    },
    {
        "name": "Verdant Light",
        "color1": "#101300",
        "color2": "#d1e24a",
        "color3": "#f1d826",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#b5ff00"
    },
    {
        "name": "Spring Meadow",
        "color1": "#0f1300",
        "color2": "#c8e24a",
        "color3": "#f1e526",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#a5ff00"
    },
    {
        "name": "Grassland Radiance",
        "color1": "#0e1300",
        "color2": "#bfe24a",
        "color3": "#f1f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#96ff00"
    },
    {
        "name": "Leafy Glow",
        "color1": "#0d1300",
        "color2": "#b6e24a",
        "color3": "#e5f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#87ff00"
    },
    {
        "name": "Forest Essence",
        "color1": "#0c1300",
        "color2": "#ade24a",
        "color3": "#d9f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#77ff00"
    },
    {
        "name": "Pine Whisper",
        "color1": "#0b1300",
        "color2": "#a3e24a",
        "color3": "#cdf126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#68ff00"
    },
    {
        "name": "Herbal Dream",
        "color1": "#091300",
        "color2": "#9ae24a",
        "color3": "#c1f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#59ff00"
    },
    {
        "name": "Green Apple",
        "color1": "#081300",
        "color2": "#91e24a",
        "color3": "#b4f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#4aff00"
    },
    {
        "name": "Limeade Glow",
        "color1": "#071300",
        "color2": "#88e24a",
        "color3": "#a8f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#3aff00"
    },
    {
        "name": "Citrus Leaf",
        "color1": "#061300",
        "color2": "#7fe24a",
        "color3": "#9cf126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#2bff00"
    },
    {
        "name": "Aqua Leaf",
        "color1": "#051300",
        "color2": "#76e24a",
        "color3": "#90f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#1cff00"
    },
    {
        "name": "Seafoam Spark",
        "color1": "#041300",
        "color2": "#6de24a",
        "color3": "#84f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0cff00"
    },
    {
        "name": "Mint Breeze",
        "color1": "#031300",
        "color2": "#64e24a",
        "color3": "#77f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff03"
    },
    {
        "name": "Turquoise Whisper",
        "color1": "#011300",
        "color2": "#5be24a",
        "color3": "#6bf126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff12"
    },
    {
        "name": "Teal Glow",
        "color1": "#001300",
        "color2": "#51e24a",
        "color3": "#5ff126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff21"
    },
    {
        "name": "Lagoon Spark",
        "color1": "#001301",
        "color2": "#4ae24c",
        "color3": "#53f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff31"
    },
    {
        "name": "Ocean Dream",
        "color1": "#001302",
        "color2": "#4ae255",
        "color3": "#47f126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff40"
    },
    {
        "name": "Cyan Gleam",
        "color1": "#001303",
        "color2": "#4ae25e",
        "color3": "#3bf126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff4f"
    },
    {
        "name": "Ice Aqua",
        "color1": "#001304",
        "color2": "#4ae267",
        "color3": "#2ef126",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff5f"
    },
    {
        "name": "Arctic Mist",
        "color1": "#001305",
        "color2": "#4ae270",
        "color3": "#26f12a",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff6e"
    },
    {
        "name": "Frosty Glow",
        "color1": "#001307",
        "color2": "#4ae279",
        "color3": "#26f136",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff7d"
    },
    {
        "name": "Glacier Shine",
        "color1": "#001308",
        "color2": "#4ae282",
        "color3": "#26f142",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff8d"
    },
    {
        "name": "Crystal Blue",
        "color1": "#001309",
        "color2": "#4ae28c",
        "color3": "#26f14e",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ff9c"
    },
    {
        "name": "Sky Horizon",
        "color1": "#00130a",
        "color2": "#4ae295",
        "color3": "#26f15b",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ffab"
    },
    {
        "name": "Azure Spark",
        "color1": "#00130b",
        "color2": "#4ae29e",
        "color3": "#26f167",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ffba"
    },
    {
        "name": "Sapphire Glow",
        "color1": "#00130c",
        "color2": "#4ae2a7",
        "color3": "#26f173",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ffca"
    },
    {
        "name": "Deep Blue Radiance",
        "color1": "#00130d",
        "color2": "#4ae2b0",
        "color3": "#26f17f",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ffd9"
    },
    {
        "name": "Midnight Azure",
        "color1": "#00130f",
        "color2": "#4ae2b9",
        "color3": "#26f18b",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00ffe8"
    },
    {
        "name": "Indigo Dream",
        "color1": "#001310",
        "color2": "#4ae2c2",
        "color3": "#26f197",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00fff8"
    },
    {
        "name": "Royal Indigo",
        "color1": "#001311",
        "color2": "#4ae2cb",
        "color3": "#26f1a4",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00f7ff"
    },
    {
        "name": "Velvet Violet",
        "color1": "#001312",
        "color2": "#4ae2d5",
        "color3": "#26f1b0",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00e8ff"
    },
    {
        "name": "Amethyst Dream",
        "color1": "#001313",
        "color2": "#4ae2de",
        "color3": "#26f1bc",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00d8ff"
    },
    {
        "name": "Lavender Glow",
        "color1": "#001213",
        "color2": "#4adde2",
        "color3": "#26f1c8",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00c9ff"
    },
    {
        "name": "Lilac Whisper",
        "color1": "#001113",
        "color2": "#4ad4e2",
        "color3": "#26f1d4",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00baff"
    },
    {
        "name": "Soft Violet",
        "color1": "#000f13",
        "color2": "#4acbe2",
        "color3": "#26f1e0",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#00aaff"
    },
    {
        "name": "Iris Gleam",
        "color1": "#000e13",
        "color2": "#4ac2e2",
        "color3": "#26f1ed",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#009bff"
    },
    {
        "name": "Violet Ember",
        "color1": "#000d13",
        "color2": "#4ab9e2",
        "color3": "#26e9f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#008cff"
    },
    {
        "name": "Cosmic Purple",
        "color1": "#000c13",
        "color2": "#4ab0e2",
        "color3": "#26ddf1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#007dff"
    },
    {
        "name": "Ultraviolet Glow",
        "color1": "#000b13",
        "color2": "#4aa7e2",
        "color3": "#26d1f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#006dff"
    },
    {
        "name": "Mystical Magenta",
        "color1": "#000a13",
        "color2": "#4a9de2",
        "color3": "#26c5f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#005eff"
    },
    {
        "name": "Fuchsia Gleam",
        "color1": "#000913",
        "color2": "#4a94e2",
        "color3": "#26b8f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#004fff"
    },
    {
        "name": "Neon Orchid",
        "color1": "#000813",
        "color2": "#4a8be2",
        "color3": "#26acf1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#003fff"
    },
    {
        "name": "Radiant Magenta",
        "color1": "#000613",
        "color2": "#4a82e2",
        "color3": "#26a0f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0030ff"
    },
    {
        "name": "Stellar Pink",
        "color1": "#000513",
        "color2": "#4a79e2",
        "color3": "#2694f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0021ff"
    },
    {
        "name": "Galactic Fuchsia",
        "color1": "#000413",
        "color2": "#4a70e2",
        "color3": "#2688f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0011ff"
    },
    {
        "name": "Astral Rose",
        "color1": "#000313",
        "color2": "#4a67e2",
        "color3": "#267cf1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0002ff"
    },
    {
        "name": "Aurora Glow",
        "color1": "#000213",
        "color2": "#4a5ee2",
        "color3": "#266ff1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#0d00ff"
    },
    {
        "name": "Prism Violet",
        "color1": "#000113",
        "color2": "#4a54e2",
        "color3": "#2663f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#1c00ff"
    },
    {
        "name": "Spectrum Pink",
        "color1": "#000013",
        "color2": "#4a4be2",
        "color3": "#2657f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#2c00ff"
    },
    {
        "name": "Iridescent Magenta",
        "color1": "#020013",
        "color2": "#524ae2",
        "color3": "#264bf1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#3b00ff"
    },
    {
        "name": "Opal Flame",
        "color1": "#030013",
        "color2": "#5b4ae2",
        "color3": "#263ff1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#4a00ff"
    },
    {
        "name": "Radiant Orchid",
        "color1": "#040013",
        "color2": "#644ae2",
        "color3": "#2632f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#5a00ff"
    },
    {
        "name": "Rainbow Fuchsia",
        "color1": "#050013",
        "color2": "#6d4ae2",
        "color3": "#2626f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#6900ff"
    },
    {
        "name": "Hyper Violet",
        "color1": "#060013",
        "color2": "#764ae2",
        "color3": "#3226f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#7800ff"
    },
    {
        "name": "Infinite Magenta",
        "color1": "#070013",
        "color2": "#7f4ae2",
        "color3": "#3e26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#8700ff"
    },
    {
        "name": "Eternal Fuchsia",
        "color1": "#080013",
        "color2": "#894ae2",
        "color3": "#4a26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#9700ff"
    },
    {
        "name": "Celestial Glow",
        "color1": "#0a0013",
        "color2": "#924ae2",
        "color3": "#5626f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#a600ff"
    },
    {
        "name": "Cosmic Pulse",
        "color1": "#0b0013",
        "color2": "#9b4ae2",
        "color3": "#6326f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#b500ff"
    },
    {
        "name": "Starlight Magenta",
        "color1": "#0c0013",
        "color2": "#a44ae2",
        "color3": "#6f26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#c500ff"
    },
    {
        "name": "Infinity Spark",
        "color1": "#0d0013",
        "color2": "#ad4ae2",
        "color3": "#7b26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#d400ff"
    },
    {
        "name": "Magenta Pulse",
        "color1": "#0e0013",
        "color2": "#b64ae2",
        "color3": "#8726f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#e300ff"
    },
    {
        "name": "Electric Fuchsia",
        "color1": "#0f0013",
        "color2": "#bf4ae2",
        "color3": "#9326f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#f300ff"
    },
    {
        "name": "Violet Flame",
        "color1": "#100013",
        "color2": "#c84ae2",
        "color3": "#a026f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00fc"
    },
    {
        "name": "Orchid Gleam",
        "color1": "#120013",
        "color2": "#d14ae2",
        "color3": "#ac26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00ed"
    },
    {
        "name": "Royal Amethyst",
        "color1": "#130013",
        "color2": "#db4ae2",
        "color3": "#b826f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00dd"
    },
    {
        "name": "Purple Bloom",
        "color1": "#130012",
        "color2": "#e24ae0",
        "color3": "#c426f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00ce"
    },
    {
        "name": "Plum Radiance",
        "color1": "#130011",
        "color2": "#e24ad7",
        "color3": "#d026f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00bf"
    },
    {
        "name": "Mulberry Glow",
        "color1": "#130010",
        "color2": "#e24ace",
        "color3": "#dc26f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00b0"
    },
    {
        "name": "Rose Magenta",
        "color1": "#13000f",
        "color2": "#e24ac5",
        "color3": "#e926f1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff00a0"
    },
    {
        "name": "Hot Pink Spark",
        "color1": "#13000e",
        "color2": "#e24abc",
        "color3": "#f126ed",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0091"
    },
    {
        "name": "Neon Pink Glow",
        "color1": "#13000c",
        "color2": "#e24ab3",
        "color3": "#f126e1",
        "color4": "#333333",
        "color5": "#1e1e1e",
        "color6": "#000000",
        "color7": "#ff0082"
    }
];