// events/eventsData.js
// 年次・大型イベントを載せるページ用のデータ。
// status: "upcoming" = 開催前、"report" = 開催レポート
// blogUrl を主リンクに、TECH PLAY / 公式サイト等は externalLinks へ補助リンクとして添える。

const eventsData = [
  {
    status: "upcoming",
    title: "Snowflake World Tour Tokyo コミュニティ企画",
    date: "秋",
    thumbnail: "../images/events/sample.png",
    blogUrl: "",
    externalLinks: [
      { label: "Snowflake World Tour", url: "https://www.snowflake.com/about/events/" },
    ],
    tags: ["Snowflake 主催連動", "オフライン"],
    summary:
      "Snowflake が毎年秋に開催する日本最大級のフラッグシップイベント「Snowflake World Tour Tokyo」に合わせたコミュニティ企画です。SnowVillage としてのブース出展や周辺イベント連動を通じて、参加者とコミュニティをつなぎます。",
  },
  {
    status: "upcoming",
    title: "年末コミュニティミートアップ",
    date: "年末",
    thumbnail: "../images/events/sample.png",
    blogUrl: "",
    externalLinks: [],
    tags: ["年末恒例", "オフライン"],
    summary:
      "1 年の活動を振り返り、コミュニティメンバーが集う年末時期の恒例ミートアップです。その年のハイライト共有や来年の構想議論など、SnowVillage ならではの雰囲気で締めくくります。",
  },
  {
    status: "upcoming",
    title: "SnowVillage 主催イベント（新企画）",
    date: "今年度",
    thumbnail: "../images/events/sample.png",
    blogUrl: "",
    externalLinks: [],
    tags: ["新企画", "コミュニティ主催"],
    summary:
      "今年度の新たな試みとして、SnowVillage が主体となって企画するコミュニティ主催イベントです。コンセプト・フォーマットを詰めている最中で、続報は順次コミュニティおよびこのページでお知らせします。",
  },
];
