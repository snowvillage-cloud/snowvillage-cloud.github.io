// events/eventsData.js
// 年次・大型イベントを載せるページ用のデータ。
// status: "upcoming" = 開催前、"report" = 開催レポート
// blogUrl を主リンクに、TECH PLAY / 公式サイト等は externalLinks へ補助リンクとして添える。
// ※ 以下はデザイン確認用のサンプルデータ。実情報に差し替えてください。

const eventsData = [
  {
    status: "upcoming",
    title: "Snowflake World Tour Tokyo ブース出展",
    date: "2026.09.XX",
    thumbnail: "../images/events/sample.png",
    blogUrl: "#",
    externalLinks: [
      { label: "World Tour 公式", url: "https://www.snowflake.com/about/events/" },
    ],
    tags: ["年次", "オフライン"],
    summary:
      "Snowflake 主催の年次フラッグシップイベントで、SnowVillage はコミュニティブースを構えます。メンバー同士の交流ハブとして、来場者へのコミュニティ案内や Mayors との対話の場をつくります。",
  },
  {
    status: "upcoming",
    title: "SnowVillage 主催 年次ミートアップ",
    date: "2026.11.XX",
    thumbnail: "../images/events/sample.png",
    blogUrl: "#",
    externalLinks: [
      { label: "TECH PLAY", url: "https://techplay.jp/community_group/snowflake_users" },
    ],
    tags: ["年次", "オフライン", "懇親会あり"],
    summary:
      "SnowVillage が単独で開催する年次最大級のミートアップ。コミュニティメンバーによる登壇、LT、パネルディスカッションを通して、1年の活動と知見を一堂に共有します。",
  },
  {
    status: "report",
    title: "Snowflake Summit 2026 現地ツアー",
    date: "2026.06.XX",
    thumbnail: "../images/events/sample.png",
    blogUrl: "#",
    externalLinks: [
      { label: "Snowflake Summit", url: "https://www.snowflake.com/summit/" },
    ],
    tags: ["年次", "海外", "ツアー"],
    summary:
      "Snowflake グローバルカンファレンス Summit に、SnowVillage 有志メンバーで現地参加するツアー企画。セッション参加に加え、海外コミュニティとの交流や現地レポート発信も行いました。",
  },
  {
    status: "upcoming",
    title: "Snowflake BUILD 連携ハンズオン",
    date: "2026.10.XX",
    thumbnail: "../images/events/sample.png",
    blogUrl: "#",
    externalLinks: [
      { label: "BUILD 公式", url: "https://www.snowflake.com/build/" },
    ],
    tags: ["年次", "オンライン", "ハンズオン"],
    summary:
      "Snowflake のグローバル開発者向けカンファレンス BUILD に合わせて、SnowVillage が日本コミュニティ向けのハンズオンや解説セッションを連動開催します。",
  },
];
