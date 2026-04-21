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
    thumbnail: "../images/contents/snowvillage.png",
    url: "https://www.youtube.com/channel/UC-FKvkAWBegvxZF4jkP7sLA",
    summary:
      "SnowVillage が運営する公式 YouTube チャンネルです。",
    communityNote:
      "ライブ配信限定イベントやオンサイトイベントとのハイブリッド配信、動画学習コンテンツなど。すべてはここから始まった！",
  },
  {
    type: "series",
    title: "Frosty Friday Live Challenge",
    owner: "#FrostyFriday",
    thumbnail: "../images/contents/FrostyFriday.png",
    url: "https://www.youtube.com/playlist?list=PLVj4iIZgzTAq2FzaBBgqFOtZaJTcoG3JR",
    summary:
      "グローバルの有志で運営されているSnowflakeの練習課題「Frosty Friday」を題材に、SnowVillage メンバーが解法や考え方を解説するチャレンジ企画です。",
    communityNote:
      "ゲストの得意を活かしたオリジナリティ溢れる解法と、レギュラーメンバーとの掛け合いで初級から応用まで楽しくSnowflakeを学べます！",
  },
  {
    type: "series",
    title: "25 Days of Streamlit",
    owner: "#Streamlit",
    thumbnail: "../images/contents/25days-of-streamlit.png",
    url: "https://st-advent-calendar-2024.streamlit.app/",
    summary:
      "Streamlit と Snowflake を題材にしたハンズオンコンテンツ。1日ごとに小さな実装テーマを積み上げてアプリを完成させましょう！",
    communityNote:
      "2024年 Advent Calender 企画！ 分析アプリ開発の入門に最適なコミュニティ発の連載企画です。",
  },
];
