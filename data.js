/* ============================================================
   DATA · travellers + sections (shared by index.html + library)
   Each traveller's `epoch` = 1 + history.length. Epoch > 1 makes
   the wax-seal button clickable to open the past-hoards screen.

   History entries may optionally include a `date` field (free-form
   string for now). The library page sorts by parseable date when
   available; entries without a date sink to the bottom.
   ============================================================ */
const WICK_CA   = "0x8CDaf3d630Da9E1450832924D5701CC0500E9cfC";
const HEX_CA    = "0x2b591e99afe9F32eAA6214f7B7629768c40Eeb39";
const RAICHU_CA = "0xa6cFfE8Bc798628573a3e91Ed84EfD92D6D8e8B0";
const DPEPE_CA  = "0xE9e15d6F7380D1718a3bdeeE720eE979fAC1F5BC";
const FINK_CA   = "0x578f94F729D41983b77a07650517479e409c329B";  // BaalRock's PulseChain token
const LORD_CA   = "0xBb815Fc95Cc696299906B19F6f65bACf921B4a0E";  // WARLORD on PulseChain
const PEACH_CA  = "0x3cC6704b0902475587363DEfbD6dAb2ec0581628";  // Freedom of Peach on PulseChain
const FSJAL_CA  = "0xae8b25B28D3eF3ADe67aD40Fd96af45faad3a271";  // Fsjal on PulseChain
const WARTIME_CA= "0x85bff9e86865B3ea8B9f59eb60e20eC5c6d21cee";  // WARTIME on PulseChain (Pesant Pete)

// Section list (rendered top-to-bottom). Each traveller declares which
// section it belongs to via its `section` key.
const sections = [
  { key: "crowned",       title: "Crowned Crumpets"     },
  { key: "pesantry",      title: "PulseChain Pesantry"  },
  { key: "court_jesters", title: "Court Jesters"        },
  { key: "test",          title: "Test Tourney"         }
];

const travellers = [
  {
    section: "crowned",
    pinTop: true,         // always lock to the top of the Crowned Crumpets list
    name: "King Crumpet",
    nameLink: "https://x.com/chippyfishdish",
    avatar: "🫅",         // crowned royal fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "Ser Tangent",
    nameLink: "https://x.com/OG_TAngent",
    avatar: "🐺",         // wolf-dog face — fallback when unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "WICK",
    coinLink: "https://dexscreener.com/pulsechain/" + WICK_CA,
    fortune: null,        // filled live from DexScreener
    fortuneLive: true,
    history: []           // Epoch I — no past hoards
  },
  {
    section: "crowned",
    name: "Tha Famous",
    nameLink: "https://x.com/ThaFamousOG",
    avatar: "👑",         // crown for the famous; fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "pesantry",
    name: "BaalRock",
    nameLink: "https://x.com/0xBaalRock_FINK",
    avatar: "🗿",         // stone idol fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "FINK",
    // coinLink set automatically below if FINK_CA is provided
    coinLink: FINK_CA ? "https://dexscreener.com/pulsechain/" + FINK_CA : null,
    fortune: null,
    fortuneLive: !!FINK_CA,
    history: []
  },
  {
    section: "crowned",
    name: "Cruisey of the Crypt",
    nameLink: "https://x.com/cryptocruisey",
    avatar: "💀",         // crypt skull fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "LORD",
    coinLink: "https://dexscreener.com/pulsechain/" + LORD_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "crowned",
    name: "HT ARMSTRONG",
    nameLink: "https://x.com/jasonar05746510",
    avatar: "🍑",         // peach fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "PEACH",
    coinLink: "https://dexscreener.com/pulsechain/" + PEACH_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "crowned",
    name: "Vlad the Destroyooor",
    nameLink: "https://x.com/FeelsVlad",
    avatar: "🧛",         // vampire fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "Roman",
    nameLink: "https://x.com/0xRomans",
    avatar: "🏛️",         // Roman temple fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "LARP",
    nameLink: "https://x.com/Bub_Da_LARP",
    avatar: "🎭",         // theatre mask fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "Winston",
    nameLink: "https://x.com/IFindFuckwits",
    avatar: "🧐",         // monocle fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "Ser Skitz",
    nameLink: "https://x.com/SkitzInAction",
    avatar: "🤪",         // zany face fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "FSJAL",
    coinLink: "https://dexscreener.com/pulsechain/" + FSJAL_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "crowned",
    name: "Billy Weakman",
    nameLink: "https://x.com/BillyWeakman",
    avatar: "🐤",         // chick fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "pesantry",
    name: "Brother Trade",
    nameLink: "https://x.com/tradebrah",
    avatar: "🤝",
    inscribed: "Day XVIII, May 2026",
    coin: "RAICHU",
    coinLink: "https://dexscreener.com/pulsechain/" + RAICHU_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "pesantry",
    name: "Gains-Smith",
    nameLink: "https://x.com/CryptoGainsClub",
    avatar: "🔨",         // smith hammer fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "HEX",
    coinLink: "https://dexscreener.com/pulsechain/" + HEX_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "court_jesters",
    name: "Pesant Pete",
    nameLink: "https://x.com/wartimegeneral",
    avatar: "⚔️",         // crossed swords fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "WARTIME",
    coinLink: "https://dexscreener.com/pulsechain/" + WARTIME_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },

  /* ----- TEMPLATE DEMOS · Epoch II through X (color sweep) -----
     Fictional placeholders showing every seal hue. Delete or move
     once real travellers populate each epoch. */
  {
    section: "test",
    name: "Brunhilde Stormfist", avatar: "⚔️",
    inscribed: "Day V, Moon of Forge",
    coin: "ORCS", fortune: 324_000,
    history: [
      { name: "HAMR", forged: 72_000, faded: 188_000 }
    ]
  },
  {
    section: "test",
    name: "The Whispering Skald", avatar: "🪶",
    inscribed: "Day XX, Crimson Moon",
    coin: "FROG", fortune: 1_180_000,
    history: [
      { name: "LUTE", forged: 140_000, faded: 320_000 },
      { name: "VRSE", forged:  60_000, faded:  18_000 }
    ]
  },
  {
    section: "test",
    name: "Cassian Nightmist", avatar: "🗡️",
    inscribed: "Day VIII, Velvet Moon",
    coin: "SHRD", fortune: 14_520_000,
    history: [
      { name: "FANG", forged: 180_000, faded: 1_100_000 },
      { name: "VEIL", forged: 620_000, faded:   240_000 },
      { name: "WISP", forged: 440_000, faded: 3_280_000 }
    ]
  },
  {
    section: "test",
    name: "Lyra Faewhisper", avatar: "⭐",
    inscribed: "Dawn, 1st of Verdant",
    coin: "DRYAD", fortune: 2_130_000,
    history: [
      { name: "GLOW", forged:  90_000, faded:   620_000 },
      { name: "MOSS", forged: 220_000, faded:    78_000 },
      { name: "BARK", forged: 410_000, faded: 2_840_000 },
      { name: "ROOT", forged: 160_000, faded:    44_000 }
    ]
  },
  {
    section: "test",
    name: "The Iron Bard", avatar: "⚒️",
    inscribed: "Last Bell, 11th of Hollow",
    coin: "ANVL", fortune: 880_000,
    history: [
      { name: "FORG", forged:  60_000, faded:   720_000 },
      { name: "SPRK", forged: 210_000, faded:   860_000 },
      { name: "PYRE", forged: 480_000, faded:    98_000 },
      { name: "SOOT", forged:  90_000, faded:    36_000 },
      { name: "CINR", forged: 320_000, faded: 1_640_000 }
    ]
  },
  {
    section: "test",
    name: "Ser Aldric Goldhand", avatar: "🦁",
    inscribed: "Day XII, Moon of Ash, AC 1247",
    coin: "DRGN", fortune: 4_200_000,
    history: [
      { name: "FROG", forged:    80_000, faded:   420_000 },
      { name: "GNOM", forged:    50_000, faded:    12_000 },
      { name: "BARD", forged:   200_000, faded: 1_800_000 },
      { name: "ORCS", forged:   350_000, faded:   180_000 },
      { name: "DRAG", forged:   600_000, faded: 4_200_000 },
      { name: "ANVL", forged: 1_100_000, faded:   880_000 }
    ]
  },
  {
    section: "test",
    name: "The Crimson Bandit", avatar: "🛡️",
    inscribed: "Midnight, 28th of Frost",
    coin: "STAB", fortune: 640_000,
    history: [
      { name: "DAGR", forged: 140_000, faded:   480_000 },
      { name: "MASK", forged: 220_000, faded:    66_000 },
      { name: "PURS", forged:  80_000, faded:   910_000 },
      { name: "SHIV", forged: 310_000, faded:   140_000 },
      { name: "CLOK", forged: 480_000, faded: 1_220_000 },
      { name: "OATH", forged: 180_000, faded:    48_000 },
      { name: "TOLL", forged: 720_000, faded: 2_440_000 }
    ]
  },
  {
    section: "test",
    name: "Lady Mireille Emberhall", avatar: "🔥",
    inscribed: "Eve of Iron Tide, AC 1247",
    coin: "EMBR", fortune: 69_410_000,
    history: [
      { name: "ASH",  forged:   320_000, faded: 1_240_000 },
      { name: "SCRL", forged:   880_000, faded:   210_000 },
      { name: "MOTE", forged:   140_000, faded:   780_000 },
      { name: "WICK", forged:   620_000, faded: 4_400_000 },
      { name: "PYRA", forged: 1_200_000, faded:   320_000 },
      { name: "FLAM", forged:   480_000, faded: 6_800_000 },
      { name: "COAL", forged:   780_000, faded:   210_000 },
      { name: "SPRK", forged:   140_000, faded: 2_100_000 }
    ]
  },
  {
    section: "test",
    name: "The Grand Sovereign", avatar: "👑",
    inscribed: "Day I of the First Sun, AC MMXLVII",
    coin: "KING", fortune: 128_000_000,
    history: [
      { name: "EMBR", forged:   210_000, faded: 1_120_000 },
      { name: "SCRL", forged: 1_200_000, faded:   320_000 },
      { name: "GOLD", forged:   480_000, faded: 8_400_000 },
      { name: "IRON", forged:   720_000, faded:   180_000 },
      { name: "ORBE", forged:   140_000, faded: 3_600_000 },
      { name: "CROW", forged: 2_200_000, faded:    72_000 },
      { name: "RUNE", forged:   860_000, faded: 5_400_000 },
      { name: "SHRD", forged: 1_400_000, faded:   320_000 },
      { name: "WARD", forged: 3_100_000, faded:18_000_000 }
    ]
  },
  {
    section: "test",
    layout: "stacked",     // dual-line format demo, at the bottom of the tourney
    name: "Sage Therion the Wise",
    avatar: "🌙",
    inscribed: "Day VII, Moon of Embers",
    coin: "HEX",
    coinLink: "https://dexscreener.com/pulsechain/" + HEX_CA,
    fortune: null,
    fortuneLive: true,
    history: [
      { name: "GRIM", forged:  90_000, faded: 1_100_000 },
      { name: "TOME", forged: 220_000, faded:   140_000 }
    ]
  }
];
