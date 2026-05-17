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
const PEWPEW_CA = "0x9deeaF046e144Fb6304A5ACD2aF142bBfE958030";  // PEWPEW on PulseChain (Executioner)
const TROLL_CA  = "0xa25a57c08553980f8E162131C547F66d9F566664";  // TROLL (Trollface) on PulseChain (TopCap)
const NINEMM_CA = "0x7b39712Ef45F7dcED2bBDF11F3D5046bA61dA719";  // 9MM on PulseChain (KASH)

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
    entryMcap: 57032,     // snapshot 2026-05-18 — frozen
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
    entryMcap: 5521,      // snapshot 2026-05-18 — frozen
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
    entryMcap: 54694,     // snapshot 2026-05-18 — frozen
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
    entryMcap: 20211,     // snapshot 2026-05-18 — frozen
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
    entryMcap: 11284,     // snapshot 2026-05-18 — frozen
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
    entryMcap: 71338,     // snapshot 2026-05-18 — frozen
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
    entryMcap: 63603308,  // snapshot 2026-05-18 — frozen
    history: []
  },
  {
    section: "pesantry",
    name: "Executioner",
    nameLink: "https://x.com/0xExecute",
    avatar: "🪓",         // axe fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "PEWPEW",
    coinLink: "https://dexscreener.com/pulsechain/" + PEWPEW_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 40342,     // snapshot 2026-05-18 — frozen
    history: []
  },
  {
    section: "pesantry",
    name: "KASH",
    nameLink: "https://x.com/kashusking420",
    avatar: "💵",         // banknote fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "9MM",
    coinLink: "https://dexscreener.com/pulsechain/" + NINEMM_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 1068119,   // snapshot 2026-05-18 — frozen
    history: []
  },
  {
    section: "court_jesters",
    name: "TopCap",
    nameLink: "https://x.com/topcatfinance2",
    avatar: "🎩",         // top hat fallback if unavatar 404s
    inscribed: "Day XVIII, May 2026",
    coin: "TROLL",
    coinLink: "https://dexscreener.com/pulsechain/" + TROLL_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 3164,      // snapshot 2026-05-18 — frozen
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
    entryMcap: 149101,    // snapshot 2026-05-18 — frozen
    epoch: 5,             // explicit override (V)
    history: []
  },
];
