// about/aboutData.js
// Mayors / Neighbors / Sponsors / (Alumni は各ページで保持) をまとめて定義。
// ページごとの画像パスは "../images/..." 基準（about/ 直下のページから参照）で記述する。

// 🌟 Mayors（意思決定権を持つ運営中核メンバー）
const mayorsData = [
  {
    name: "K T",
    role: "Founder of SnowVillage",
    desc: "Japan Community & Education Lead at Canva<br>コミュニティが人生に愛を与え、豊かにする",
    departments: ["Growth", "Operation"],
    photo: "../images/organizers/KTProfile.png",
    xUrl: "https://x.com/DATA_Saber",
    linkedInUrl: "https://www.linkedin.com/in/datasaber/",
  },
  {
    name: "Yuya Matsubara",
    role: "Snowflake Data Superheroes 2026 & Snowflake Squad",
    desc: "Principal Data Engineer at NTT DOCOMO, Inc.<br />Slackでなんかうるさいやつです!",
    departments: ["Event", "Brand"],
    photo: "../images/organizers/yuya_matsubara.jpeg",
    xUrl: "https://x.com/matsubara_tech",
    linkedInUrl: "https://www.linkedin.com/in/yuya-matsubara-b86278323",
  },
  {
    name: "Kosuke Kida",
    role: "Community Engagement Lead",
    desc: "みんながコミュニティを楽しみ、成長するお手伝い。みんなの「褒められ」を後押しします！",
    departments: ["Event", "Brand"],
    photo: "../images/organizers/KosukeKida.jpg",
    xUrl: "https://x.com/kkkida_twtr",
    linkedInUrl: "https://www.linkedin.com/in/kosuke-kida-b03ab29a",
  },
  {
    name: "あれ",
    role: "Snowflake Data Superheroes 2024-2026",
    desc: "DATUM STUDIO株式会社 プリンシパルエンジニア<br />Snowflake女子会、コンテナグループ、Frosty Friday をよろしくね！",
    departments: ["Event", "Growth", "Operation"],
    photo: "../images/organizers/allllllllez.jpg",
    xUrl: "https://x.com/__allllllllez__",
    linkedInUrl: "https://www.linkedin.com/in/miho-kajiya-928847297",
  },
  {
    name: "Hiroki Murayama",
    role: "Community Operation Lead",
    desc: "まだ飽きないの？って最近よくいわれますが、まだまだ熱量高めです!!",
    departments: ["Operation", "Event"],
    photo: "../images/organizers/Hiroki_Murayama.jpg",
    xUrl: "https://x.com/piroki_0310",
    linkedInUrl: "https://www.linkedin.com/in/hiroki-murayama-2481a84b",
  },
  {
    name: "すずき",
    role: "Brand部門リーダー / Snowflake Squad 2024-2026",
    desc: "船井総研ヒューマンキャピタルコンサルティング データチームマネージャー<br>Data ManagementやUnconferenceなどの分科会イベントにも是非参加してください！",
    departments: ["Event", "Brand"],
    photo: "../images/organizers/ryo_suzuki.jpg",
    xUrl: "https://x.com/suzupappa",
    linkedInUrl: "https://www.linkedin.com/in/suzupappa",
  },
  {
    name: "サカトク",
    role: "Snowflake Data Superheroes 2024-2025 / Slackでなんかうるさいやつ2号",
    desc: "野生のデータエンジニア。コミュニティは学びと実践の場だよ兄貴！",
    departments: ["Brand", "Growth"],
    photo: "../images/organizers/akira_sakatoku.png",
    xUrl: "https://x.com/AkSakatoku",
    linkedInUrl: "https://www.linkedin.com/in/akira-sakatoku/",
    githubUrl: "https://github.com/Sakatoku",
  },
  {
    name: "Toru Hiyama",
    role: "Growth部門リーダー / Snowflake Data Superheroes 2025-2026",
    desc: "Data Engineer at SimpleForm, Inc.<br />Snowflake活用に関する機能が大好きですが、一周回ってセキュリティやガバナンス、データモデリングにも領域を拡大中。イベント運営のサポートや、Snowflake初心者向けコンテンツの作成・作成支援を行っています。",
    departments: ["Growth", "Operation"],
    photo: "../images/organizers/toru_hiyama.png",
    xUrl: "https://x.com/toru_data",
    linkedInUrl: "https://www.linkedin.com/in/toru-hiyama-4232652a7/",
  }
];

// 🌟 Neighbors（年次募集に応じてくれた、役職はないが頼れる貢献メンバー）
// 初期は空配列。Neighbors制度の本格運用開始とともに追加していく想定。
const neighborsData = [];

// 🌟 Sponsors（各部門で協力してくださっている個人・企業）
// 旧版は運営メンバーページ下部に表示していたが、部門別取り組みページ側で文脈に沿って表示する
const sponsorsData = [
  {
    name: "Yuya Matsubara",
    desc: "Principal Data Engineer at NTT DOCOMO, Inc.",
    logo: "../images/sponsors/yuya_matsubara.jpeg",
    department: "サイト維持管理",
  },
];

// 旧コード互換のためのエイリアス（departments/index.html などから参照される）
const organizersData = mayorsData;
