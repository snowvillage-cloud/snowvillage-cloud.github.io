// ── 8問・2択の設問定義（4軸×2問） ──────────────────────────────────────────
// Axis 1 (E/B): Explorer (E) vs Builder (B) — データとの向き合い方
// Axis 2 (S/T): Solo (S) vs Team (T) — コラボレーションスタイル
// Axis 3 (C/V): Craft (C) vs Value (V) — 関心領域
// Axis 4 (I/O): Innovator (I) vs Optimizer (O) — アプローチ

const questions = [
  // Axis 1: E vs B
  {
    id: 1,
    axis: "EB",
    text: "新しいデータセットや機能を触るとき、まず何をする？",
    options: [
      { text: "とりあえずクエリを投げて中身を探索してみる", val: "E" },
      { text: "まず全体の設計やパイプラインの構成を考える", val: "B" }
    ]
  },
  {
    id: 2,
    axis: "EB",
    text: "Snowflakeで一番ワクワクする瞬間は？",
    options: [
      { text: "思いがけないインサイトや新たな発見があったとき", val: "E" },
      { text: "安定して動くデータ基盤や仕組みが完成したとき", val: "B" }
    ]
  },
  // Axis 2: S vs T
  {
    id: 3,
    axis: "ST",
    text: "理想的な学び方・仕事の進め方は？",
    options: [
      { text: "集中して一人でじっくり深く学びたい", val: "S" },
      { text: "チームで議論しながら一緒に形にしたい", val: "T" }
    ]
  },
  {
    id: 4,
    axis: "ST",
    text: "SWT会場で一番楽しみにしていることは？",
    options: [
      { text: "最新セッションの聴講や一人でのハンズオン", val: "S" },
      { text: "参加者同士の交流やナイトパーティーでの会話", val: "T" }
    ]
  },
  // Axis 3: C vs V
  {
    id: 5,
    axis: "CV",
    text: "会場やコミュニティで会話したいトピックは？",
    options: [
      { text: "最新のSQL・アーキテクチャ・技術的な裏側", val: "C" },
      { text: "データ活用によるビジネス成果・ユースケース", val: "V" }
    ]
  },
  {
    id: 6,
    axis: "CV",
    text: "参加したい勉強会やセッションのタイプは？",
    options: [
      { text: "技術的な深さやコードレベルのベストプラクティス", val: "C" },
      { text: "他社の導入事例やROI、組織活用の話", val: "V" }
    ]
  },
  // Axis 4: I vs O
  {
    id: 7,
    axis: "IO",
    text: "チームやプロジェクトで得意な立ち位置は？",
    options: [
      { text: "新しい技術やアプローチを次々と試して提案する人", val: "I" },
      { text: "既存の仕組みを磨き上げて効率化・最適化する人", val: "O" }
    ]
  },
  {
    id: 8,
    axis: "IO",
    text: "コミュニティでやってみたいアクションは？",
    options: [
      { text: "新機能の実験や新しい挑戦の共有", val: "I" },
      { text: "運用ノウハウやトラブルシューティングの整理", val: "O" }
    ]
  }
];

const NEIGHBOR_PHOTO_BASE = "/images/neighbors/";
// 推薦に載らなかったコミュニティの受け皿として案内する一覧ページ
const TECHPLAY_ALL_GROUPS_URL = "https://techplay.jp/community_group/snowflake_users";

// ── インライン埋め込みタイプ定義（types.json読み込み失敗時のフォールバック） ──
const FALLBACK_TYPES = {
  "ESCI": {
    "code": "ESCI", "title": "データスーパーヒーロー", "subtitle": "Data Superhero (Advanced Technologist)",
    "emoji": "🦸", "catchphrase": "先端技術を自ら切り拓く、圧倒的データパイオニア",
    "description": "高い技術的好奇心と深い探求心を持ち、一人で最先端機能を検証・実装して驚くべき成果を出すタイプ。",
    "axes": ["Explorer", "Solo", "Craft", "Innovator"],
    "recommendedFeatures": [{ "name": "Snowpark", "description": "Python/Java/Scalaでデータパイプライン実装", "url": "https://docs.snowflake.com/ja/developer-guide/snowpark/index" }],
    "actionHints": ["ハンズオンブースで新機能を体験する", "DataScience/DE支部のイベントに参加する"]
  }
};

const INLINE_GROUPS = [
  { id: "snowvillage-main", abbr: "SV", logoUrl: "logo/snowvillage.webp", name: "SnowVillage - Japan Snowflake User Group", description: "日本最大級のSnowflakeユーザーコミュニティ。初心者から上級者まで参加歓迎。", techplayUrl: "https://techplay.jp/community/snowvillage", tags: ["latest", "lt", "meetup", "beginner", "ai"] },
  { id: "snowvillage-financial", abbr: "金融", logoUrl: "logo/snowvillage-financial.webp", name: "Snowflake金融ユーザー会", description: "金融業界でのSnowflake活用をテーマに、ガバナンス・セキュリティ・分析の知見を共有。", techplayUrl: "https://techplay.jp/community/snowvillage-financial", tags: ["industry", "governance", "security", "ops", "usecase"] },
  { id: "snowvillage-data-management", abbr: "DM", logoUrl: "logo/snowvillage-data-management.webp", name: "SnowVillage - データマネジメント分科会 -", description: "データ品質・カタログ・メタデータ管理を深掘りする分科会。", techplayUrl: "https://techplay.jp/community/snowvillage-data-management", tags: ["governance", "architecture", "ops", "analysis"] },
  { id: "snowflake-rookies-camp", abbr: "RC", logoUrl: "logo/snowvillage-snowflake-rookies-camp.webp", name: "Snowflake Rookies Camp", description: "Snowflakeをこれから学びたい方向けの初心者コミュニティ。ハンズオンでベストプラクティスを学べる。", techplayUrl: "https://techplay.jp/community/snowvillage-snowflake-rookies-camp", tags: ["beginner", "hands-on", "meetup", "ops"] },
  { id: "snowvillage-west", abbr: "WEST", logoUrl: "logo/snowvillage-west.webp", name: "Snowflake WEST User Group", description: "関西地域を中心としたSnowflakeユーザーコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-west", tags: ["hands-on", "meetup", "lt", "integration", "usecase", "latest"] },
  { id: "snowvillage-datascience", abbr: "DS/DE", logoUrl: "logo/snowvillage-datascience.webp", name: "SnowVillage DataScience&DataEngineering支部", description: "DataScience・DataEngineeringチャネルのイベントを運営するコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-datascience", tags: ["datascience", "ai", "engineering", "meetup"] },
  { id: "snowvillage-women", abbr: "女子会", logoUrl: "logo/snowvillage-women.webp", name: "Snowflake女子会", description: "女性エンジニア同士のつながりと活躍の場を作るコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-women", tags: ["career", "hands-on", "ai", "app", "integration", "discussion"] },
  { id: "snowvillage-unconference", abbr: "UNC", logoUrl: "logo/snowvillage-unconference.webp", name: "SnowVillage Unconference支部", description: "参加者主体で知識共有と交流を深めるUnconferenceイベントを運営。", techplayUrl: "https://techplay.jp/community/snowvillage-unconference", tags: ["discussion", "meetup", "lt", "beginner"] },
  { id: "snowvillage-kyushu", abbr: "九州", logoUrl: "logo/snowvillage-kyushu.webp", name: "Snowflake Kyushu User Group", description: "Snowflakeの良さを九州企業に届け、データで九州を盛り上げることを目指すグループ。", techplayUrl: "https://techplay.jp/community/snowvillage-kyushu", tags: ["latest", "meetup", "usecase"] },
  { id: "snowvillage-ai-data-cloud", abbr: "AI", logoUrl: "logo/snowvillage-ai-data-cloud.webp", name: "SnowVillage AI DATA User Group", description: "SnowflakeのAI関連機能をテーマに定期的な勉強会を行うコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-ai-data-cloud", tags: ["ai", "latest", "lt", "meetup"] },
  { id: "snowvillage-healthcare", abbr: "HC", logoUrl: "logo/snowvillage-healthcare.webp", name: "Snowflakeヘルスケア・ライフサイエンスユーザー会", description: "ヘルスケア・ライフサイエンス業界でのSnowflake活用をテーマとするユーザー会。", techplayUrl: "https://techplay.jp/community/snowvillage-healthcare", tags: ["industry", "usecase", "engineering", "analysis"] },
  { id: "sf2ug", abbr: "SF×SF", logoUrl: "logo/sf2ug.webp", name: "Snowflake x Salesforce User Group", description: "Snowflake と Salesforce を掛け合わせたデータ活用について議論する User Group。", techplayUrl: "https://techplay.jp/community/sf2ug", tags: ["integration", "app", "meetup", "usecase"] },
  { id: "snowvillage-central", abbr: "中部", logoUrl: "logo/snowvillage-central.webp", name: "Snowflake CENTRAL User Group", description: "中部エリアを中心としたSnowflakeユーザーコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-central", tags: ["analysis", "latest", "lt", "architecture", "ops", "discussion"] },
  { id: "snowvillage-sustainability", abbr: "🌱SV", logoUrl: "logo/snowvillage-sustainability.webp", name: "SnowVillage サステナvillage", description: "サステナビリティをテーマとするコミュニティ。", techplayUrl: "https://techplay.jp/community/snowvillage-sustainability", tags: ["sustainability", "usecase", "lt", "meetup"] },
  { id: "snowvillage-okinawa", abbr: "沖縄", logoUrl: "logo/snowvillage-okinawa.webp", name: "Snowflake OKINAWA User Group", description: "Snowflakeの技術情報を沖縄から発信し、ユーザーコミュニティの活性化を目指すグループ。", techplayUrl: "https://techplay.jp/community/snowvillage-okinawa", tags: ["latest", "lt", "analysis", "meetup"] }
];


// data/events.json が読めなかったときの保険。実在しないイベントを出さないよう
// あえて空にしてある（イベント欄は自動で非表示になる）。
// 中身は tools/sync-events.py が TechPlay から取得して更新する。
const INLINE_EVENTS = [];

// ── State Management ────────────────────────────────────────────────────────
const state = {
  index: 0,
  answers: {},
  types: {},
  groups: [],
  neighbors: [],
  events: [],
  preferences: {},
  currentCode: null
};

const viewRefs = {
  intro: document.getElementById("intro-view"),
  quiz: document.getElementById("quiz-view"),
  result: document.getElementById("result-view")
};

const questionText = document.getElementById("question-text");
const optionRoot = document.getElementById("options");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const backButton = document.getElementById("back-button");

const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultSubtitle = document.getElementById("result-subtitle");
const resultCatchphrase = document.getElementById("result-catchphrase");
const resultDescription = document.getElementById("result-description");
const badgeContainer = document.getElementById("badge-container");
const resultCard = document.querySelector(".result-digital-card");

const groupList = document.getElementById("group-list");
const otherGroupList = document.getElementById("other-group-list");
const otherGroupLink = document.getElementById("other-group-link");
const neighborList = document.getElementById("neighbor-list");
const otherNeighborList = document.getElementById("other-neighbor-list");
const neighborSection = document.getElementById("neighbor-section");
const otherPeopleBlock = document.getElementById("other-people");
const featureList = document.getElementById("feature-list");
const eventList = document.getElementById("event-list");
const eventSection = document.getElementById("event-section");
const actionList = document.getElementById("action-list");
const detailModal = document.getElementById("detail-modal");
const modalContent = document.getElementById("modal-content");

// ── Event Listeners ─────────────────────────────────────────────────────────
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("restart").addEventListener("click", resetApp);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
document.getElementById("share-x").addEventListener("click", shareToX);
document.getElementById("share-mail").addEventListener("click", shareByMail);
document.getElementById("copy-link").addEventListener("click", copyResultLink);
document.getElementById("modal-close").addEventListener("click", closeModal);
backButton.addEventListener("click", goBack);

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) closeModal();
});

initializeTheme();
const dataReady = initializeData();

// ── Initialization & Data Load ──────────────────────────────────────────────
async function initializeData() {
  const [types, groups, neighbors, events, prefs] = await Promise.all([
    loadTypesData(),
    loadGroupsData(),
    loadNeighborsData(),
    loadEventsData(),
    loadTypePreferences()
  ]);
  state.types = types;
  state.groups = groups;
  state.neighbors = neighbors;
  state.events = events;
  state.preferences = prefs;

  // URLパーマリンクチェック (?code=ESCI)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCode = urlParams.get("code");
  if (paramCode && (types[paramCode] || FALLBACK_TYPES[paramCode])) {
    showResultByCode(paramCode.toUpperCase());
  }
}

async function loadTypesData() {
  try {
    const res = await fetch("data/types.json");
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch {
    return FALLBACK_TYPES;
  }
}

async function loadGroupsData() {
  try {
    const res = await fetch("data/user-groups.json");
    if (!res.ok) throw new Error(`status ${res.status}`);
    return normalizeGroups(await res.json());
  } catch {
    return INLINE_GROUPS;
  }
}

// ── 名簿は本サイトの公式データを唯一の情報源とする ──────────────────────
// 名前・所属・写真・SNSは about/ 側のものをそのまま読み、ここでは複製しない。
// このアプリ固有の情報は診断コードだけなので data/type-assignments.json に持つ。
const ROOT_NEIGHBORS_YAML = "../about/neighbors/userlist.yaml";
const ROOT_ABOUT_DATA = "../about/aboutData.js";

// 値の "--" / "ー" は未記入の意味なので空にする
function cleanRootValue(value) {
  const text = (value || "").trim().replace(/^["']|["']$/g, "").trim();
  return text === "--" || text === "ー" ? "" : text;
}

// "../../images/neighbors/x.png" → "/images/neighbors/x.png"
function toSitePath(path) {
  const text = (path || "").trim();
  if (!text || /^https?:\/\//.test(text) || text.startsWith("/")) return text;
  return "/" + text.replace(/^(\.\.\/)+/, "");
}

// 大元のYAMLには「photo : x」のようにキーの後ろへ空白を入れた行があるため、
// コロン直結だけを見ていると写真・所属・SNSをまるごと取りこぼす。
function parseRootNeighbors(text) {
  const people = [];
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const head = line.match(/^-\s+name\s*:\s*(.+)$/);
    if (head) {
      if (current) people.push(current);
      current = { name: cleanRootValue(head[1]) };
      continue;
    }
    const pair = line.match(/^\s+([a-zA-Z_]+)\s*:\s*(.*)$/);
    if (pair && current) current[pair[1]] = cleanRootValue(pair[2]);
  }
  if (current) people.push(current);
  return people
    .filter((person) => person.name && person.name !== "Neighbor")
    .map((person) => ({ ...person, kind: "neighbor", photo: toSitePath(person.photo) }));
}

// aboutData.js は素のJSなので mayorsData の配列部分だけを取り出して読む。
function parseRootMayors(source) {
  const block = source.match(/const mayorsData\s*=\s*\[([\s\S]*?)\n\];/);
  if (!block) return [];
  return block[1]
    .split(/\}\s*,?\s*(?=\{)/)
    .map((chunk) => {
      const field = (key) => {
        const found = chunk.match(new RegExp("\\b" + key + ':\\s*"((?:[^"\\\\]|\\\\.)*)"'));
        return found ? cleanRootValue(found[1]) : "";
      };
      return {
        name: field("name"),
        // desc は自己紹介文なので <br> の前だけを所属として扱う
        affiliation: field("desc").split(/<br\s*\/?>/)[0].trim(),
        title: field("role"),
        kind: "mayor",
        photo: toSitePath(field("photo")),
        xUrl: field("xUrl"),
        linkedInUrl: field("linkedInUrl")
      };
    })
    .filter((person) => person.name);
}

async function loadNeighborsData() {
  const readText = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`status ${res.status}`);
    return res.text();
  };

  let codes = {};
  try {
    const res = await fetch("data/type-assignments.json");
    if (res.ok) codes = await res.json();
  } catch { /* コードが無くても名簿自体は出す */ }

  const [yaml, aboutData] = await Promise.allSettled([
    readText(ROOT_NEIGHBORS_YAML),
    readText(ROOT_ABOUT_DATA)
  ]);

  const people = [];
  if (yaml.status === "fulfilled") people.push(...parseRootNeighbors(yaml.value));
  if (aboutData.status === "fulfilled") people.push(...parseRootMayors(aboutData.value));

  return normalizeNeighbors(people.map((p) => ({ ...p, code: codes[p.name] || "" })));
}

async function loadTypePreferences() {
  try {
    const res = await fetch("data/type-preferences.json");
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch {
    return {};
  }
}

async function loadEventsData() {
  try {
    const res = await fetch("data/events.json");
    if (!res.ok) throw new Error(`status ${res.status}`);
    return res.json();
  } catch {
    return INLINE_EVENTS;
  }
}

// ── Theme Management ────────────────────────────────────────────────────────
function initializeTheme() {
  const saved = localStorage.getItem("svc-theme");
  const theme = saved || "light";
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("svc-theme", next);
}

// ── View Switching & Quiz Flow ──────────────────────────────────────────────
async function startQuiz() {
  await dataReady;
  state.index = 0;
  state.answers = {};
  switchView("quiz");
  renderQuestion();
}

function resetApp() {
  state.index = 0;
  state.answers = {};
  state.currentCode = null;
  // URLクエリのクリア
  if (window.history.pushState) {
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
  switchView("intro");
}

function switchView(key) {
  for (const name of Object.keys(viewRefs)) {
    viewRefs[name].classList.toggle("hidden", name !== key);
  }
}

function renderQuestion() {
  const question = questions[state.index];
  const total = questions.length;
  const pct = Math.round(((state.index + 1) / total) * 100);

  progressLabel.textContent = `Q${state.index + 1} / ${total}`;
  document.getElementById("progress-pct").textContent = `${pct}%`;
  progressFill.style.width = `${pct}%`;
  questionText.textContent = question.text;

  // 戻るボタンの可否
  backButton.style.visibility = state.index > 0 ? "visible" : "hidden";

  optionRoot.innerHTML = "";
  question.options.forEach((option, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button-2col";

    const badgeLabel = idx === 0 ? "A" : "B";
    button.innerHTML = `
      <div class="option-badge">${badgeLabel}</div>
      <div class="option-content">${option.text}</div>
    `;
    button.addEventListener("click", () => selectAnswer(question.id, option.val));
    optionRoot.appendChild(button);
  });
}

function selectAnswer(questionId, value) {
  state.answers[questionId] = value;
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    const code = computeType(state.answers);
    showResultByCode(code);
  }
}

function goBack() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

// ── 4軸2択決定木判定ロジック (computeType) ──────────────────────────────────
function computeType(answers) {
  // Axis 1: E vs B (Q1, Q2)
  const eCount = (answers[1] === "E" ? 1 : 0) + (answers[2] === "E" ? 1 : 0);
  const bCount = (answers[1] === "B" ? 1 : 0) + (answers[2] === "B" ? 1 : 0);
  // 同点(1対1)の場合は本質的問Q1を優先
  const axis1 = eCount > bCount ? "E" : (eCount < bCount ? "B" : answers[1]);

  // Axis 2: S vs T (Q3, Q4)
  const sCount = (answers[3] === "S" ? 1 : 0) + (answers[4] === "S" ? 1 : 0);
  const tCount = (answers[3] === "T" ? 1 : 0) + (answers[4] === "T" ? 1 : 0);
  const axis2 = sCount > tCount ? "S" : (sCount < tCount ? "T" : answers[3]);

  // Axis 3: C vs V (Q5, Q6)
  const cCount = (answers[5] === "C" ? 1 : 0) + (answers[6] === "C" ? 1 : 0);
  const vCount = (answers[5] === "V" ? 1 : 0) + (answers[6] === "V" ? 1 : 0);
  const axis3 = cCount > vCount ? "C" : (cCount < vCount ? "V" : answers[5]);

  // Axis 4: I vs O (Q7, Q8)
  const iCount = (answers[7] === "I" ? 1 : 0) + (answers[8] === "I" ? 1 : 0);
  const oCount = (answers[7] === "O" ? 1 : 0) + (answers[8] === "O" ? 1 : 0);
  const axis4 = iCount > oCount ? "I" : (iCount < oCount ? "O" : answers[7]);

  return `${axis1}${axis2}${axis3}${axis4}`;
}

// ── Result Rendering ────────────────────────────────────────────────────────
function showResultByCode(code) {
  state.currentCode = code;
  const type = state.types[code] || FALLBACK_TYPES[code] || FALLBACK_TYPES["ESCI"];

  // URLの更新 (?code=ESCI)
  if (window.history.pushState) {
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?code=${code}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }

  // 1. デジタルカードヘッダー
  renderResultIcon(type);
  // アイコンの色に合わせてカードの配色を切り替える
  resultCard.dataset.color = type.colorGroup || "";
  resultTitle.textContent = type.title;
  resultSubtitle.textContent = type.subtitle || code;
  resultCatchphrase.textContent = type.catchphrase || "";
  resultDescription.textContent = type.description || "";

  // 4軸バッジ描画
  renderBadges(type.axes || parseAxes(code));

  // 2. おすすめNeighbors & Mayors（コード一致度ソート）。上位は大きく、残りは横並びで出す。
  const matchedPeople = getMatchedNeighbors(code);
  renderNeighbors(matchedPeople.slice(0, 4));
  renderOtherNeighbors(matchedPeople.slice(4, 16));
  neighborSection.classList.toggle("hidden", matchedPeople.length === 0);
  otherPeopleBlock.classList.toggle("hidden", matchedPeople.length <= 4);

  // 3. おすすめユーザーグループ（タグ一致度で算出。件数はタイプにより変動）
  const { recommended, others } = getMatchedGroups(code);
  renderGroups(recommended);
  renderOtherGroups(others);

  // 4. おすすめSnowflake機能
  renderFeatures(orderFeaturesByPreference(code, type.recommendedFeatures || []));

  // 5. 直近イベント & アクション
  renderEvents(upcomingEvents().slice(0, 3));
  renderActions(type.actionHints || []);

  switchView("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// アイコン画像があれば使い、読めない場合は絵文字にフォールバックする
function renderResultIcon(type) {
  const emoji = type.emoji || "🌟";
  resultIcon.innerHTML = "";
  if (!type.iconUrl) {
    resultIcon.textContent = emoji;
    return;
  }
  const img = document.createElement("img");
  img.className = "result-icon-img";
  img.src = type.iconUrl;
  img.alt = type.title || type.code || "";
  img.addEventListener("error", () => {
    resultIcon.textContent = emoji;
  });
  resultIcon.appendChild(img);
}

function parseAxes(code) {
  const map = {
    E: "Explorer", B: "Builder",
    S: "Solo", T: "Team",
    C: "Craft", V: "Value",
    I: "Innovator", O: "Optimizer"
  };
  return code.split("").map((char) => map[char] || char);
}

function renderBadges(axes) {
  badgeContainer.innerHTML = "";
  axes.forEach((axisName) => {
    const chip = document.createElement("span");
    chip.className = "badge-chip";
    chip.textContent = `# ${axisName}`;
    badgeContainer.appendChild(chip);
  });
}

// ── Matched Neighbors (Code Match Sorting) ─────────────────────────────────
function getMatchedNeighbors(targetCode) {
  // 表示するのは次の両方を満たす人だけ。
  //   1. code がある = アンケートに回答済み。仮の値で別人が「同タイプ」として
  //      出てしまう事故があったため、確定した人に限る
  //   2. 写真がある = プロフィールが揃っている。写真が無いとカードが
  //      ほぼ空になり、来場者には情報として役に立たないため出さない
  // 条件を満たさない人もデータ自体は残るので、後から写真が入れば自動で出る。
  return state.neighbors
    .filter((n) => n.code && n.photo_url)
    .map((neighbor) => {
      const matchScore = computeCodeMatch(targetCode, neighbor.code || "");
      return { ...neighbor, matchScore };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

function computeCodeMatch(codeA, codeB) {
  if (!codeA || !codeB || codeA.length !== 4 || codeB.length !== 4) {
    return 1; // デフォルトスコア
  }
  let score = 0;
  for (let i = 0; i < 4; i++) {
    if (codeA[i] === codeB[i]) score += 1;
  }
  return score;
}

// ── Matched Groups (Tag Scoring) ────────────────────────────────────────────
// 各軸が「求めるタグ」と重み。グループ側のタグ(user-groups.json)と突き合わせて採点する。
// タグはTechPlayの公式タグと各コミュニティの実イベント履歴をもとに付与している。
const AXIS_TAG_WEIGHTS = {
  E: { analysis: 2, datascience: 2, latest: 2, ai: 1, usecase: 1 },
  B: { engineering: 2, architecture: 2, app: 2, integration: 1, governance: 1 },
  S: { "hands-on": 2, architecture: 1, datascience: 1, governance: 1, security: 1 },
  T: { meetup: 2, lt: 2, discussion: 2, career: 1, beginner: 1 },
  C: { engineering: 2, architecture: 2, security: 2, datascience: 1, "hands-on": 1, app: 1 },
  V: { industry: 2, usecase: 2, sustainability: 2, governance: 1, career: 1, analysis: 1 },
  I: { ai: 2, latest: 2, app: 1, datascience: 1 },
  O: { ops: 2, governance: 2, security: 1, architecture: 1, beginner: 1 }
};

// どのタイプにとっても入口になる属性は、全軸が求めるものとして扱う
const UNIVERSAL_TAGS = { beginner: 1 };

// 推薦とみなす下限（最高得点に対する比率）と表示件数の上下限
const GROUP_SCORE_RATIO = 0.75;
const GROUP_MAX = 5;
const GROUP_MIN = 2;

function computeGroupScore(code, group) {
  const tags = new Set(group.tags || []);
  if (tags.size === 0) return 0;
  let score = 0;
  for (const axis of code) {
    const weights = AXIS_TAG_WEIGHTS[axis] || {};
    for (const [tag, weight] of Object.entries(weights)) {
      if (tags.has(tag)) score += weight;
    }
  }
  for (const [tag, weight] of Object.entries(UNIVERSAL_TAGS)) {
    if (tags.has(tag)) score += weight * code.length;
  }
  // タグ数が多いだけで有利にならないよう正規化する
  return score / Math.sqrt(tags.size);
}

// おすすめと「その他」に振り分ける。おすすめの件数はタイプごとに変動する。
function getMatchedGroups(code) {
  // そのタイプの人が実際に挙げたグループを最優先で出す（人数の多い順）。
  // 足りない分と「その他」はタグ計算で補う。
  const wanted = (state.preferences[code] || {}).groups || [];
  const picked = wanted
    .map((id) => state.groups.find((g) => g.id === id))
    .filter(Boolean);

  const scored = state.groups
    .map((group) => ({ group, score: computeGroupScore(code, group) }))
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return { recommended: [], others: [] };

  const best = scored[0].score;
  let cut = scored.filter((x) => x.score > 0 && x.score >= best * GROUP_SCORE_RATIO);
  if (cut.length > GROUP_MAX) cut = cut.slice(0, GROUP_MAX);
  if (cut.length < GROUP_MIN) cut = scored.slice(0, GROUP_MIN);

  const recommended = [...picked];
  for (const x of cut) {
    if (recommended.length >= GROUP_MAX) break;
    if (!recommended.some((g) => g.id === x.group.id)) recommended.push(x.group);
  }
  const chosen = new Set(recommended.map((g) => g.id));
  return {
    recommended,
    others: scored.filter((x) => !chosen.has(x.group.id)).map((x) => x.group)
  };
}

// ── Rendering Helper Functions ──────────────────────────────────────────────
function renderNeighbors(neighbors) {
  neighborList.innerHTML = "";
  neighbors.forEach((neighbor) => {
    neighborList.appendChild(createPersonCard(neighbor));
  });
}

function renderOtherNeighbors(neighbors) {
  otherNeighborList.innerHTML = "";
  neighbors.forEach((neighbor) => {
    otherNeighborList.appendChild(createPersonCard(neighbor, "other-neighbor-card"));
  });
}

// Mayorsは所属欄に自己紹介文が入っていることがあるため、肩書きを優先して出す
function getPersonSubtitle(person) {
  if (person.kind === "mayor") {
    return person.title || person.affiliation || "SnowVillage";
  }
  return person.affiliation || "SnowVillage";
}

function createPersonCard(neighbor, extraClass) {
  {
    const card = document.createElement("article");
    card.className = extraClass ? `neighbor-card ${extraClass}` : "neighbor-card";
    const xLink = sanitizeUrl(neighbor.x_url);
    const liLink = sanitizeUrl(neighbor.linkedin_url);

    let avatarHtml;
    if (neighbor.photo_url) {
      // 写真のURLはあるが読めなかった場合はカードごと消す。
      // 空のプレースホルダだけが並ぶと来場者には何の情報にもならないため。
      avatarHtml = `<img class="neighbor-avatar" src="${neighbor.photo_url}" alt="${neighbor.name}" loading="lazy" onerror="this.closest('.neighbor-card').remove()">`;
    } else {
      avatarHtml = `<div class="neighbor-avatar-placeholder">🧑</div>`;
    }

    const links = [];
    if (xLink) links.push(`<a class="neighbor-link" href="${xLink}" target="_blank" rel="noopener noreferrer">𝕏</a>`);
    if (liLink) links.push(`<a class="neighbor-link" href="${liLink}" target="_blank" rel="noopener noreferrer">in</a>`);

    const isExactMatch = neighbor.code && neighbor.code === state.currentCode;
    const matchBadgeHtml = isExactMatch ? `<span class="match-badge">同タイプ!</span>` : "";
    const roleBadgeHtml = neighbor.kind === "mayor" ? `<span class="role-badge">Mayor</span>` : "";

    card.innerHTML = `
      ${matchBadgeHtml}
      ${roleBadgeHtml}
      ${avatarHtml}
      <div class="neighbor-name">${neighbor.name}</div>
      <div class="neighbor-affiliation">${getPersonSubtitle(neighbor)}</div>
      <div class="neighbor-links">${links.join("")}</div>
    `;

    // クリックでモーダル詳細開く
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        openNeighborModal(neighbor);
      }
    });

    return card;
  }
}

function createGroupCard(group, extraClass) {
  const card = document.createElement("article");
  card.className = extraClass ? `group-card ${extraClass}` : "group-card";
  const link = group.techplayUrl || group.url || "";
  const abbr = getGroupAbbr(group);
  const bgStyle = getGroupColorStyle(group.id);

  let logoHtml;
  if (group.logoUrl) {
    logoHtml = `<img class="group-logo-img" src="${group.logoUrl}" alt="${group.name}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="group-logo-abbr" style="${bgStyle}display:none">${abbr}</div>`;
  } else {
    logoHtml = `<div class="group-logo-abbr" style="${bgStyle}">${abbr}</div>`;
  }

  card.innerHTML = `
    <div class="group-logo-wrap">${logoHtml}</div>
    <div class="group-info">
      <strong class="group-name">${group.name}</strong>
      <p class="group-desc">${group.description || ""}</p>
      ${link ? `<a class="group-link" href="${link}" target="_blank" rel="noopener noreferrer">Tech Play でコミュニティを見る →</a>` : ""}
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") {
      openGroupModal(group);
    }
  });

  return card;
}

function renderGroups(groups) {
  groupList.innerHTML = "";
  groups.forEach((group) => groupList.appendChild(createGroupCard(group)));
}

function renderOtherGroups(groups) {
  otherGroupList.innerHTML = "";
  groups.forEach((group) => {
    otherGroupList.appendChild(createGroupCard(group, "other-group-card"));
  });
  otherGroupLink.href = TECHPLAY_ALL_GROUPS_URL;
}

// そのタイプの人が挙げた機能を前に出す。挙がっていない機能はその後ろに残す。
function orderFeaturesByPreference(code, features) {
  const wanted = (state.preferences[code] || {}).features || [];
  if (wanted.length === 0) return features;
  const byName = new Map(features.map((f) => [f.name, f]));
  const head = wanted.map((n) => byName.get(n)).filter(Boolean);
  const rest = features.filter((f) => !wanted.includes(f.name));
  return [...head, ...rest];
}

function renderFeatures(features) {
  featureList.innerHTML = "";
  features.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "object" && item.name) {
      li.innerHTML = item.url
        ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>`
        : item.name;
      if (item.description) {
        const desc = document.createElement("span");
        desc.className = "feature-desc";
        desc.textContent = ` — ${item.description}`;
        li.appendChild(desc);
      }
    } else {
      li.textContent = String(item);
    }
    featureList.appendChild(li);
  });
}

// events.json は生成時点で未来のものだけを持つが、日が経つと過去になる。
// 終了したイベントを出し続けないよう、表示前にもう一度ふるいにかける。
function upcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return state.events.filter((e) => {
    const d = new Date(`${e.date}T00:00:00`);
    return Number.isNaN(d.getTime()) || d >= today;
  });
}

// 会場で使うアプリなので、日付そのものより「今日か明日か」が伝わる形にする
function formatEventDate(dateStr) {
  const target = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(target.getTime())) return dateStr;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((target - today) / 86400000);
  if (days === 0) return "今日";
  if (days === 1) return "明日";
  if (days > 1 && days <= 7) return `${days}日後`;
  return dateStr.slice(5).replace("-", "/");
}

function renderEvents(events) {
  eventList.innerHTML = "";
  // 開催予定が無い時期は見出しだけ残ると不自然なので、節ごと隠す
  eventSection.classList.toggle("hidden", events.length === 0);
  events.forEach((event) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="event-date">${formatEventDate(event.date)}</span>
      <span>
        <a href="${event.url}" target="_blank" rel="noopener noreferrer">${event.title}</a>
        <span class="event-location"> — ${event.location}</span>
      </span>
    `;
    eventList.appendChild(li);
  });
}

function renderActions(actions) {
  actionList.innerHTML = "";
  actions.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    actionList.appendChild(li);
  });
}

// ── Modals & Utilities ──────────────────────────────────────────────────────
function openNeighborModal(neighbor) {
  const xLink = sanitizeUrl(neighbor.x_url);
  const liLink = sanitizeUrl(neighbor.linkedin_url);

  modalContent.innerHTML = `
    <div style="text-align: center;">
      ${neighbor.photo_url ? `<img src="${neighbor.photo_url}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;margin-bottom:0.8rem;border:3px solid var(--primary);">` : `<div style="font-size:3rem;margin-bottom:0.5rem;">🧑</div>`}
      <h3 style="font-size:1.3rem;margin-bottom:0.3rem;">${neighbor.name}</h3>
      ${neighbor.kind === "mayor" ? `<p style="font-size:0.8rem;font-weight:800;color:var(--accent);margin-bottom:0.2rem;">Mayor</p>` : ""}
      <p style="color:var(--subtext);font-size:0.9rem;margin-bottom:1rem;">${getPersonSubtitle(neighbor)}</p>
      <div style="display:flex;justify-content:center;gap:0.8rem;margin-top:1rem;">
        ${xLink ? `<a class="primary-button" href="${xLink}" target="_blank" rel="noopener noreferrer" style="padding:0.5rem 1.2rem;font-size:0.88rem;">𝕏 プロフィール</a>` : ""}
        ${liLink ? `<a class="secondary-button" href="${liLink}" target="_blank" rel="noopener noreferrer" style="padding:0.5rem 1.2rem;font-size:0.88rem;">LinkedIn</a>` : ""}
      </div>
    </div>
  `;
  detailModal.classList.remove("hidden");
}

function openGroupModal(group) {
  const link = group.techplayUrl || group.url || "";
  modalContent.innerHTML = `
    <div>
      <h3 style="font-size:1.25rem;margin-bottom:0.6rem;color:var(--text);">${group.name}</h3>
      <p style="color:var(--subtext);font-size:0.92rem;line-height:1.6;margin-bottom:1.2rem;">${group.description || "SnowVillage傘下のコミュニティです。"}</p>
      ${link ? `<a class="primary-button" href="${link}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:0.6rem 1.4rem;font-size:0.9rem;">Tech Play でイベント一覧・詳細を見る →</a>` : ""}
    </div>
  `;
  detailModal.classList.remove("hidden");
}

function closeModal() {
  detailModal.classList.add("hidden");
}

// ── Share & Copy ────────────────────────────────────────────────────────────
const BASE_HASHTAGS = ["SnowVillage", "SnowVillageCompass"];

// 会期後の投稿にも付いたままだと、終わったイベントのタグに流れ込むため
// 時刻で自動的に外す。東京開催なので端末のTZではなくJSTで区切る。
const EVENT_HASHTAG = {
  tag: "SWTTokyo26",
  from: "2026-09-10T00:00:00+09:00",
  until: "2026-09-12T00:00:00+09:00" // 9/11 いっぱい（この時刻は含まない）
};

function getShareHashtags(now = new Date()) {
  const t = now.getTime();
  const inPeriod = t >= Date.parse(EVENT_HASHTAG.from) && t < Date.parse(EVENT_HASHTAG.until);
  return inPeriod ? [EVENT_HASHTAG.tag, ...BASE_HASHTAGS] : [...BASE_HASHTAGS];
}

function getShareMessage() {
  const title = resultTitle.textContent || "SnowVillageタイプ";
  return [
    `私のSnowVillage 診断タイプは「${title}」でした！`,
    "あなたも診断して、コミュニティとつながろう！"
  ].join("\n");
}

// intent の url と hashtags は使わない。Xが本文の後ろへ空白でつなぐため、
// 行を分けた見た目にならない。
function shareToX() {
  const body = [
    getShareMessage(),
    "",
    window.location.href,
    getShareHashtags().map((h) => `#${h}`).join(" ")
  ].join("\n");
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(body)}`, "_blank", "noopener");
}

function shareByMail() {
  const subject = encodeURIComponent("SnowVillage Compass 診断結果");
  const body = encodeURIComponent(`${getShareMessage()}\n${window.location.href}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyResultLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast("診断結果リンクをコピーしました！");
  }).catch(() => {
    showToast("コピーに失敗しました。URLを直接コピーしてください。");
  });
}

function showToast(msg) {
  const toast = document.getElementById("copy-toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2500);
}

// ── Normalization Utilities ─────────────────────────────────────────────────
function getGroupAbbr(group) {
  if (group.abbr) return group.abbr;
  const name = group.name || "";
  const uppers = name.match(/[A-Z]/g);
  if (uppers && uppers.length >= 2) return uppers.slice(0, 2).join("");
  const words = name.split(/[\s・\-\/]/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

const GROUP_COLOR_PALETTE = [
  "#29B5E8", "#1a7fc1", "#0052cc", "#6B4FBB", "#00875A",
  "#C05621", "#0077B6", "#36B37E", "#403294", "#B91C1C"
];
function getGroupColorStyle(id) {
  let h = 0;
  for (const c of (id || "")) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const color = GROUP_COLOR_PALETTE[h % GROUP_COLOR_PALETTE.length];
  return `background:${color};`;
}

function normalizeNeighbors(rawNeighbors) {
  if (!Array.isArray(rawNeighbors)) return [];
  return rawNeighbors
    .filter((entry) => entry && entry.name && entry.name !== "Neighbor")
    .map((entry) => {
      const affiliation = typeof entry.affiliation === "string" ? entry.affiliation.trim() : "";
      // photo は絶対URL（MayorsとNeighborsで画像フォルダが異なる）。
      // ファイル名だけの旧形式もNeighbors画像として受け付ける。
      let photo_url = entry.photo_url || "";
      if (!photo_url && typeof entry.photo === "string" && entry.photo) {
        photo_url = /^(https?:\/\/|\/)/.test(entry.photo)
          ? entry.photo
          : NEIGHBOR_PHOTO_BASE + entry.photo.split("/").pop();
      }
      return {
        name: entry.name,
        affiliation: affiliation && affiliation !== "--" && affiliation !== "ー" ? affiliation : "",
        title: (entry.title || "").trim(),
        kind: entry.kind === "mayor" ? "mayor" : "neighbor",
        photo_url,
        x_url: sanitizeUrl(entry.x_url || entry.xUrl),
        linkedin_url: sanitizeUrl(entry.linkedin_url || entry.linkedInUrl || entry.linkedinUrl),
        code: entry.code || ""
      };
    });
}

function sanitizeUrl(url) {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (!trimmed || trimmed === "--") return "";
  return trimmed;
}

function normalizeGroups(rawGroups) {
  if (!Array.isArray(rawGroups)) return [];
  return rawGroups
    .filter((entry) => entry && entry.name && (entry.url || entry.techplayUrl))
    .map((entry) => {
      const url = entry.techplayUrl || entry.url || "";
      const urlSegment = url.split("/").pop() || entry.name;
      return {
        id: entry.id || urlSegment,
        name: entry.name,
        abbr: entry.abbr || "",
        logoUrl: entry.logoUrl || "",
        description: (entry.description || "").trim(),
        techplayUrl: url,
        tags: Array.isArray(entry.tags) ? entry.tags : []
      };
    });
}
