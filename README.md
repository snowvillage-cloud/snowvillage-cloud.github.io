# ❄️ Snowflake UG Japan (SnowVillage) Official Website

Snowflakeユーザーコミュニティ「SnowVillage」のポータルサイトです。

## 🛠 技術スタック & 設計思想
- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (Vanilla JS)
- **Data Management**: `newsData.js` による疑似的なヘッドレスCMS構造。
- **Component Engine**: `script.js` による共通パーツ（Header/Footer）の動的インジェクション。
- **Scalability**: `rem` 単位とルートの `font-size` 操作による、一括レスポンシブ・スケーリング。

## 📂 ディレクトリ構成と各ページの役割

本プロジェクトは、機能やページごとにフォルダを分割し、保守性を高める設計になっています。

- **`/` (Root)**: トップページ（`index.html`）、共通スクリプト（`script.js`）、全ページのお知らせを管理するデータ（`newsData.js`）。
- **`/css/`**: ページ・機能ごとに細分化されたスタイルシート群。干渉を防ぐ「1ページ1CSS」の原則で運用。
- **`/news/`**: 過去のお知らせを全件表示するアーカイブページ。
- **`/about/`**: 運営メンバー（Mayors）、スポンサー、および卒業生（Alumni）の紹介ページ。
- **`/events/`**: TECH PLAY等と連動した、コミュニティのイベント一覧ページ。
- **`/calendar/`**: Googleカレンダーの `iframe` 埋め込みを利用した、イベントスケジュール確認ページ。
- **`/guide/`**: コミュニティの歩き方、Slackの利用ルール、オフィス利用ガイドなどをまとめたドキュメント群。
- **`/join/`**: 行動規範（Code of Conduct）への同意を必須とした、公式Slackへの参加（ゲートウェイ）ページ。
- **`/images/`**: サイト内で使用する画像アセット（オーガナイザー顔写真、スポンサーロゴなど）。

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
- **自動化**: トップページには最新5件が表示され、1件目には自動で「点滅パルス」が付与されます。

### モバイル表示の一括サイズ調整
`css/common.css` または `style.css` のメディアクエリ（`max-width: 768px`）内にある `html { font-size: 11px; }` の数値を変更することで、サイト全体の文字サイズと余白のスケールを一括調整できます。

### 新規ページの追加
新しいページを作成する際は、既存のCSSファイルを汚さず、新しく `css/新規ページ名.css` を作成して読み込ませてください。また、ヘッダーのハイライトは `<script>renderHeader("階層", "アクティブにするメニュー名");</script>` で制御できます。