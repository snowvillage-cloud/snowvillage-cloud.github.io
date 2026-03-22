# ❄️ Snowflake UG Japan (SnowVillage) Official Website

Snowflakeユーザーコミュニティ「SnowVillage」のポータルサイトです。
「Data Cloud」の先進性と「Lodge（山小屋）」の温かさを融合させたサイバー・ネイチャー・デザインをコンセプトとしています。

## 🛠 技術スタック & 設計思想
- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (Vanilla JS)
- **Data Management**: `newsData.js` による疑似的なヘッドレスCMS構造。
- **Component Engine**: `script.js` による共通パーツ（Header/Footer）の動的インジェクション。

## 📂 主要ディレクトリとファイルの役割
- **`index.html`**: トップページ。ヒーローセクション（幾何学スノー＋3Dグリッド）と最新ニュースを表示。
- **`newsData.js`**: 全ページのお知らせデータを一元管理するJSON型配列。
- **`script.js`**: 
  - `renderHeader / renderFooter`: 階層に応じた相対パスの自動計算と描画。
  - `loadLatestNews`: トップページへの最新5件の抽出とDOM反映。
- **`/css/`**: ページ・機能ごとに分割されたスタイルシート群。
- **`/news/`**: 過去のお知らせを全件表示するアーカイブ。
- **`/about/`**: 運営メンバー（Mayors）とスポンサーの紹介。
- **`/images/`**: サイト内で使用する画像アセット。

## 🚀 運用・更新ガイド

### ニュースの更新
`newsData.js` を開き、配列の先頭に新しい要素を追加してください。
```javascript
{
    date: "YYYY.MM.DD",
    text: "お知らせのタイトル",
    link: "リンク先URLまたは相対パス",
    isExternal: false // 外部リンクの場合はtrueに設定
}
```
トップページには最新5件が表示され、1件目には自動で「点滅パルス」が付与されます。

### モバイル表示の一括サイズ調整
css/common.css または style.css のメディアクエリ（max-width: 768px）内にある html { font-size: 11px; } の数値を変更することで、サイト全体の文字サイズと余白のスケールを一括調整できます。