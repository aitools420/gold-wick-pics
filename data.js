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
const LORD_CA   = "0xCC30A51480393A7fc537A6616291984d7e9Ea183";  // LORD (Landlord) on PulseChain — Cruisey's pick
const PEACH_CA  = "0x3cC6704b0902475587363DEfbD6dAb2ec0581628";  // Freedom of Peach on PulseChain
const FSJAL_CA  = "0xae8b25B28D3eF3ADe67aD40Fd96af45faad3a271";  // Fsjal on PulseChain
const WARTIME_CA= "0x85bff9e86865B3ea8B9f59eb60e20eC5c6d21cee";  // WARTIME on PulseChain (Pesant Pete)
const PEWPEW_CA = "0x9deeaF046e144Fb6304A5ACD2aF142bBfE958030";  // PEWPEW on PulseChain (Executioner)
const TROLL_CA  = "0xa25a57c08553980f8E162131C547F66d9F566664";  // TROLL (Trollface) on PulseChain (TopCap)
const NINEMM_CA = "0x7b39712Ef45F7dcED2bBDF11F3D5046bA61dA719";  // 9MM on PulseChain (KASH)
const VIBES_CA  = "0x995890eD6E550FBA31ec220D70929872fbd1e0F7";  // Vibes on PulseChain — mixed-case "Vibes", not the all-caps duplicate at 0x50D0DD… (unused since Stephanos moved to PLSX)
const PLSX_CA   = "0x95B303987A60C71504D99Aa1b13B4DA07b0790ab";  // PulseX on PulseChain (Stephanos Maximus)
const USDC_CA   = "0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07";  // USDC (bridged from Ethereum) on PulseChain (KR tha Great)
const RHPEPE_CA = "0x4e357E4E972FA0d4e2Cb2A363c8226c383c43C75";  // RHPEPE (Richard Heart PEPE) on PulseChain (ALMIGHTY)
const ZKP_CA    = "0x90F055196778e541018482213Ca50648cEA1a050";  // ZKP (Zero Knowledge Printer) on PulseChain (MVS)
const WARLORD_CA= "0xBb815Fc95Cc696299906B19F6f65bACf921B4a0E";  // LORD (Warlord) on PulseChain (Senvar Diamondblade) — distinct from Cruisey's Landlord LORD
const NOTHING_CA= "0xF33C0bB40d1BBf6EAfaAea2ADFb7d2D3EbC1E49C";  // The "Nothing" token (blank-symbol meme) on PulseChain (PRINCE)
const PSSH_CA   = "0xB5C4ecEF450fd36d0eBa1420F6A19DBfBeE5292e";  // pSSH (SuperStake: pHEX) on PulseChain (Frosty tha Snowman)
const BITCOIN_CA= "0x71c9eb4be0253156d6755e53cceb2b08778c9c8f";  // BITCOIN (Ticker $Bitcoin, new 2026-05-12) on PulseChain (Bitcoinus Obamus)
const INDIKIN_CA= "0xC0372486fCab952aA2B7998876d6aa79d4Fc1938";  // INDIKIN on PulseChain (Lady Carrera) — top pair via WPLS at 0x2c9596…56dB
const WETH_CA   = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";  // Wrapped ETH on Ethereum mainnet (Tha Famous) — top pair WETH/USDC at 0x88e6A0…5640
const WLFI_CA   = "0x4de992E0C1f6e1d68E49b797Af370A6be111B87f";  // $WLFI on PulseChain (Potato Slinger) — top pair $WLFI/WPLS at 0xd09DeD…0654

// Section list (rendered top-to-bottom). Each traveller declares which
// section it belongs to via its `section` key.
const sections = [
  { key: "crowned",       title: "Crowned Crumpets"     },
  { key: "pesantry",      title: "PulseChain Pesantry"  },
  { key: "court_jesters", title: "Court Jesters"        }
];

const travellers = [
  {
    section: "crowned",
    pinTop: true,         // always lock to the top of the Crowned Crumpets list
    name: "King Crumpet",
    nameLink: "https://x.com/chippyfishdish",
    avatar: "🫅",         // crowned royal fallback if unavatar 404s
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
    coin: "WICK",
    coinLink: "https://dexscreener.com/pulsechain/" + WICK_CA,
    fortune: null,        // filled live from DexScreener
    fortuneLive: true,
    entryMcap: 55000,     // 2026-05-20 — per Chef, dark library "MCap added" = 55K
    history: []           // Epoch I — no past hoards
  },
  {
    section: "crowned",
    name: "Tha Famous",
    nameLink: "https://x.com/ThaFamousOG",
    avatar: "👑",         // crown for the famous; fallback if unavatar 404s
    inscribed: "Day XVIII, May MMXXVI",
    coin: "WETH",
    coinLink: "https://dexscreener.com/ethereum/" + WETH_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 4787779826,  // snapshot 2026-05-21 — frozen (WETH/USDC top pair on Ethereum)
    history: []
  },
  {
    section: "pesantry",
    name: "BaalRock",
    nameLink: "https://x.com/0xBaalRock_FINK",
    avatar: "🗿",         // stone idol fallback if unavatar 404s
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
    coin: "LORD",
    coinLink: "https://dexscreener.com/pulsechain/" + LORD_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 3161,      // snapshot 2026-05-18 — frozen
    history: []
  },
  {
    section: "crowned",
    name: "HT ARMSTRONG",
    nameLink: "https://x.com/jasonar05746510",
    avatar: "🍑",         // peach fallback if unavatar 404s
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
    coin: "FSJAL",
    coinLink: "https://dexscreener.com/pulsechain/" + FSJAL_CA,
    fortune: null,
    fortuneLive: true,
    history: []
  },
  {
    section: "crowned",
    name: "Winston",
    nameLink: "https://x.com/IFindFuckwits",
    avatar: "🧐",         // monocle fallback if unavatar 404s
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
  {
    section: "crowned",
    name: "Lady Carrera",
    nameLink: "https://x.com/GeorgiaCarrera",
    avatar: "👸",         // princess fallback if unavatar 404s
    inscribed: "Day XXI, May MMXXVI",
    coin: "INDIKIN",
    coinLink: "https://dexscreener.com/pulsechain/" + INDIKIN_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 31679,     // snapshot 2026-05-21 — frozen (top WPLS pair via DexScreener)
    history: []
  },
  {
    section: "pesantry",
    name: "Brother Trade",
    nameLink: "https://x.com/tradebrah",
    avatar: "🤝",
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
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
    inscribed: "Day XVIII, May MMXXVI",
    coin: "WARTIME",
    coinLink: "https://dexscreener.com/pulsechain/" + WARTIME_CA,
    fortune: "irrelevant",
    fortuneLive: false,   // mcap intentionally labelled, no DS fetch
    entryMcap: 149101,    // snapshot 2026-05-18 — frozen (library only)
    epoch: 5,             // explicit override (V)
    history: []
  },
  {
    section: "crowned",
    name: "Stephanos Maximus",
    nameLink: "https://x.com/ogstefan_",
    avatar: "🏛️",         // classical pillar fallback (Greek Stephanos = "crown")
    inscribed: "Day XX, May MMXXVI",
    coin: "PLSX",
    coinLink: "https://dexscreener.com/pulsechain/" + PLSX_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 782559166, // snapshot 2026-05-20 — frozen (PulseX)
    history: []
  },
  {
    section: "pesantry",
    name: "MVS",
    nameLink: "https://x.com/CrypMvs",
    avatar: "🖨️",         // printer fallback (ZKP = Zero Knowledge Printer)
    inscribed: "Day XX, May MMXXVI",
    coin: "ZKP",
    coinLink: "https://dexscreener.com/pulsechain/" + ZKP_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 378310,    // snapshot 2026-05-20 — frozen
    history: []
  },
  {
    section: "pesantry",
    name: "Senvar Diamondblade",
    nameLink: "https://x.com/SennaDiamond1",
    avatar: "💎",         // diamond fallback (Diamondblade)
    inscribed: "Day XX, May MMXXVI",
    coin: "LORD",
    coinLink: "https://dexscreener.com/pulsechain/" + WARLORD_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 34122,     // snapshot 2026-05-20 — frozen (Warlord LORD primary pair)
    history: []
  },
  {
    section: "pesantry",
    name: "PRINCE",
    nameLink: "https://x.com/PrinceLFG",
    avatar: "🤴",         // prince fallback
    inscribed: "Day XX, May MMXXVI",
    coin: "",             // intentionally blank per Chef — the on-chain token literally has a whitespace symbol; this site honours the joke and renders nothing
    coinLink: "https://dexscreener.com/pulsechain/" + NOTHING_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 20814,     // snapshot 2026-05-20 — frozen (primary pair)
    history: []
  },
  {
    section: "pesantry",
    name: "Frosty tha Snowman",
    nameLink: "https://x.com/icemanpls",
    avatar: "⛄",         // snowman fallback
    inscribed: "Day XX, May MMXXVI",
    coin: "pSSH",
    coinLink: "https://dexscreener.com/pulsechain/" + PSSH_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 121262,    // snapshot 2026-05-20 — frozen (primary pair)
    history: []
  },
  {
    section: "pesantry",
    name: "ALMIGHTY",
    nameLink: "https://x.com/ClaudeGod369",
    avatar: "✨",         // sparkles fallback (ALMIGHTY)
    inscribed: "Day XX, May MMXXVI",
    coin: "RHPEPE",
    coinLink: "https://dexscreener.com/pulsechain/" + RHPEPE_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 1804546,   // snapshot 2026-05-20 — frozen
    history: []
  },
  {
    section: "pesantry",
    name: "K.R. tha Great",
    nameLink: "https://x.com/KR4ATH",
    avatar: "👑",         // crown fallback (KR tha Great)
    inscribed: "Day XX, May MMXXVI",
    coin: "USDC",
    coinLink: "https://dexscreener.com/pulsechain/" + USDC_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 0,         // stablecoin — DexScreener returns the largest base-token paired pair's mcap; live value may look odd
    history: []
  },
  {
    section: "pesantry",
    name: "Bitcoinus Obamus",
    nameLink: "https://x.com/obama__nastty",
    avatar: "🪙",         // coin fallback (orange-stack vibe for BITCOIN)
    inscribed: "Day XX, May MMXXVI",
    coin: "BITCOIN",
    coinLink: "https://dexscreener.com/pulsechain/" + BITCOIN_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 566,       // snapshot 2026-05-20 — frozen (new BITCOIN ticker, primary pair)
    history: []
  },
  {
    section: "pesantry",
    name: "Barter Worker",
    nameLink: "https://x.com/defihussle",
    avatar: "🌾",         // sheaf of rice — peasantry / barter-worker vibe
    inscribed: "Day XXI, May MMXXVI",
    coin: "RHPEPE",
    coinLink: "https://dexscreener.com/pulsechain/" + RHPEPE_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 2158819,   // snapshot 2026-05-21 — frozen (RHPEPE primary pair via DexScreener)
    history: []
  },
  {
    section: "pesantry",
    name: "Potato Slinger",
    nameLink: "https://x.com/WLFIonPulse",
    avatar: "🥔",         // potato fallback — Potato Slinger
    inscribed: "Day XXI, May MMXXVI",
    coin: "$WLFI",
    coinLink: "https://dexscreener.com/pulsechain/" + WLFI_CA,
    fortune: null,
    fortuneLive: true,
    entryMcap: 25372,     // snapshot 2026-05-21 — frozen ($WLFI/WPLS top pair via DexScreener)
    history: []
  },
  {
    section: "pesantry",
    name: "Grand Emperor",
    nameLink: "https://x.com/EmperorHexico96",
    avatar: "🎩",         // top-hat fallback — emperor without crown yet
    inscribed: "Day XXI, May MMXXVI",
    coin: "?",
    fortune: null,
    fortuneLive: false,
    history: []
  },
];
