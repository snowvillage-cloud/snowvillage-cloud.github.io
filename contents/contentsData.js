// contents/contentsData.js
//
// このページは SnowVillage が継続発信している「学習コンテンツ」の入口集。
// 個人ブログ・単発登壇資料は載せない。対象は：
//   - SnowVillage が運営する YouTube チャンネル
//   - 勉強会シリーズやチャレンジ企画のポータル
//   - コミュニティ発の長期連載コンテンツ
//
// 各アイテムには2種類の説明を持たせる：
//   - summary       : そのコンテンツが何を扱っているかの中立的な紹介（1〜2文）
//   - communityNote : SnowVillage コミュニティとしての意義・推しポイント

const contentsData = [
  {
    type: "youtube",
    title: "SnowVillage 公式 YouTube チャンネル",
    owner: "SnowVillage",
    thumbnail: "../images/contents/snowvillage-youtube.jpg",
    url: "https://www.youtube.com/channel/UC-FKvkAWBegvxZF4jkP7sLA",
    summary:
      "SnowVillage が運営する公式 YouTube チャンネル。コミュニティ主催イベントの録画やライブ配信、ハイライト動画を継続的にアーカイブしています。",
    communityNote:
      "リアルタイム参加が難しい方も、登壇内容や議論をあとから追体験できるよう、コミュニティ全体で運用している学習アーカイブです。",
  },
  {
    type: "series",
    title: "Frosty Friday 解説プレイリスト",
    owner: "SnowVillage",
    thumbnail: "../images/contents/frosty-friday.jpg",
    url: "https://www.youtube.com/playlist?list=PLVj4iIZgzTAq2FzaBBgqFOtZaJTcoG3JR",
    summary:
      "Snowflake の練習課題「Frosty Friday」を題材に、SnowVillage メンバーが解法や考え方を解説するプレイリストです。週次課題を題材ベースで学べます。",
    communityNote:
      "個人で完走しづらい Frosty Friday を、解説動画付きで追いかけられる「コミュニティ伴走型」の学習シリーズです。",
  },
  {
    type: "series",
    title: "25 Days of Streamlit",
    owner: "SnowVillage",
    thumbnail: "../images/contents/25days-of-streamlit.jpg",
    url: "https://st-advent-calendar-2024.streamlit.app/",
    summary:
      "Streamlit と Snowflake を題材にしたアドベントカレンダー形式の学習シリーズ。1 日ごとに小さな実装テーマを積み上げていく構成です。",
    communityNote:
      "毎日少しずつ触れて慣れる設計になっており、Snowflake 上で動くアプリ開発の入門に最適なコミュニティ発の連載企画です。",
  },
];
