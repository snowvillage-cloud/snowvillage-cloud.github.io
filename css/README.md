# 🎨 Stylesheet Architecture (`/css`)

SnowVillage公式サイトのビジュアルとレスポンシブ挙動を定義するスタイルシート群です。
本プロジェクトでは「1ページ（1機能）につき1CSS」の原則を採用し、スタイルの干渉（他のページが崩れる現象）を最小限に抑える堅牢な設計としています。

## 📄 ファイル詳細と主要コンポーネント

| ファイル名 | 役割 | 制御している主なクラス・UIコンポーネント |
| :--- | :--- | :--- |
| **`common.css`** | **全ページ共通（最重要）** | `:root` (変数), `body`, `.container`, `.btn`, `header`, `footer`<br>※サイト全体の余白、ブランドカラー、ベースフォントを管理。 |
| **`home.css`** | **トップページ ＆ Newsアーカイブ** | `.hero` (幾何学スノー/3Dグリッド), `.news-wrapper`, `.news-item`<br>※最新お知らせの点滅アニメーション `.latest-pulse` もここで定義。<br>※ `/news/index.html` でも流用されています。 |
| **`about.css`** | **運営・卒業生・スポンサー紹介** | `.member-card`, `.dept-tag`, `.member-sns`, `.alumni-banner`<br>※カードの浮遊エフェクト、部門タグのホバーアクション、インラインSVGアイコンのカラー遷移を制御。 |
| **`departments.css`** | **注力領域（Focus Areas）説明** | `.dept-section`, `.dept-title`, `.task-list`<br>※アンカーリンク時のヘッダー被り防止（`scroll-margin-top`）や、独自のリスト装飾（`✦`アイコン）を制御。 |
| **`guide.css`** | **コミュニティガイドライン** | `.guide-section`, `.guide-block`, `.callout` (info/warning/tip)<br>※`.channel-tag` や `.mention-tag` など、Slack風のテキスト装飾も担う、可読性重視のCSS。 |
| **`join.css`** | **Slack参加・同意フォーム** | `.rules-box`, `.rule-item`, `.agreement-area`, `.checkbox-container`<br>※独自デザインの同意チェックボックスと、無効化ボタン（`.disabled`）のスタイル。 |
| **`calendar.css`** | **イベントカレンダー** | `.calendar-wrapper`, `.calendar-section`<br>※Googleカレンダーの `iframe` をスマホ画面にレスポンシブ対応させるためのラッパー制御。 |
| **`events.css`** | **イベント一覧（Tech Play等）** | `.event-card` 等のイベント情報表示レイアウト。 |

## 📐 設計のコア・アーキテクチャ

### 1. レスポンシブの一括スケーリング (Root Font-size)
スマートフォン表示時のサイズ調整は、各要素の `px` を個別に書き換えるのではなく、`common.css`（または `style.css`）のメディアクエリでルートのフォントサイズを操作する手法を取っています。

```css
@media screen and (max-width: 768px) {
  html { font-size: 11px; } /* これにより、rem単位の全要素が一括で縮小されます */
}
```

### 2. デザインの流用とインラインでの差分吸収
保守性を高めるため、似たレイアウトのページでは既存のCSSを読み込み、**「差分だけをHTMLのインラインスタイル (`<style>` や `style="..."`) で上書きする」**というアプローチを取っています。
- **`/news/index.html`**: `home.css` を読み込みつつ、ヘッダー被り防止の `padding-top` などを上書き。
- **`/about/alumni/index.html`**: `about.css` の `.member-card` を使いつつ、背景色をグレーにし、枠線を消すことで「殿堂入り」感を演出。

### 3. ブランドカラーの集中管理
Snowflake Blue (`#29b5e8`) などのブランドカラーは、共通ファイルの `:root` 内で CSS カスタムプロパティ（変数）として定義されています。

```css
:root {
  --primary: #29b5e8; /* 各ファイルでは var(--primary) として呼び出します */
  --secondary: #0f172a;
  --text-light: #cbd5e1;
}
```

## 🛠 新規ページのCSSを追加する場合
新しいページ（例：`faq.html`）を作成する際は、既存のCSSに追記するのではなく、新しく `css/faq.css` を作成して `<link>` タグで読み込ませてください。これにより、未来のスタイル崩壊を安全に防ぐことができます。