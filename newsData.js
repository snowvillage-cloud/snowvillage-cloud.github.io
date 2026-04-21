// --- 🌟 お知らせデータ管理 (newsData.js) ---
const newsData = [
    {
        date: "2026.04.22",
        text: "SnowVillage運営体制についてのお知らせ",
        link: "events/", 
        isExternal: false
    },
    {
        date: "2026.04.22",
        text: "SnowVillage公式サイトをリニューアルオープンしました！",
        link: "https://snowvillage.cloud/", // events/とかでも良い
        isExternal: true //　内部の場合は false
    }
    /* 新しいニュースを追加する場合は、ここにオブジェクトを足していくだけです
    {
        date: "2026.04.01",
        text: "Snowflake World Tour の登壇者が決定しました",
        link: "https://example.com", 
        isExternal: true
    },
    */
];