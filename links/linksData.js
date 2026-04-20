// links/linksData.js
// 外部リソースをカテゴリごとのリンクリストで管理する。
// コミュニティ内部で生まれた資産（資料・録画・ブログ など）は contents/ 側に置く。

const linksData = [
  {
    category: "Snowflake 公式",
    description: "製品情報・ドキュメント・アップデートのファーストソース。",
    items: [
      { title: "Snowflake 公式サイト (日本)", url: "https://www.snowflake.com/ja/" },
      { title: "Snowflake Documentation (日本語)", url: "https://docs.snowflake.com/ja/" },
      { title: "Snowflake Community", url: "https://community.snowflake.com/s/" },
    ],
  },
  {
    category: "コミュニティ・ユーザーグループ",
    description: "国内外の Snowflake ユーザーコミュニティ。",
    items: [
      { title: "TECH PLAY - Japan Snowflake User Group", url: "https://techplay.jp/community_group/snowflake_users" },
    ],
  },
  {
    category: "学習・情報収集",
    description: "個人の発信や Q&A の集約先。",
    items: [
      { title: "Qiita - Snowflake タグ", url: "https://qiita.com/tags/snowflake" },
      { title: "Zenn - Snowflake タグ", url: "https://zenn.dev/topics/snowflake" },
    ],
  },
];
