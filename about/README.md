# 👥 About Organizers (`/about`)

SnowVillageを支える現役運営メンバー（Mayors）、協賛者（Sponsors）、および卒業生（Alumni）を紹介するディレクトリです。コミュニティの「顔」が見える重要なセクションです。

## 📄 ファイルと構造の解説

### `index.html`
大きく3つのセクション（Mayors, Sponsors, Alumni）で構成されています。

#### 1. Current Organizers (SnowVillage Mayors)
現在アクティブに活動している運営メンバーの紹介エリアです。
- **`.member-card`**: 
  メンバー一人ひとりの情報を格納するカードコンポーネントです。
- **`.member-photo`**: 
  メンバーのプロフィール画像を丸く（または角丸に）表示するためのクラスです。画像は `/images/organizers/` から読み込みます。
- **`.member-sns` & `.sns-icon`**: 
  各メンバーのSNS（X, LinkedIn）へのリンクエリアです。アイコンは外部画像ではなく、描画速度向上のために **SVGコードをHTMLに直接埋め込む（インラインSVG）** 手法を採用しています。

#### 2. Sponsors
コミュニティ活動を支援・協賛している企業や個人の紹介エリアです。
- **`.sponsor-card` & `.sponsor-logo`**: 
  スポンサーのロゴと肩書き/社名を表示するコンパクトなカードです。画像は `/images/sponsors/` から読み込みます。

#### 3. Alumni Banner
過去に運営として貢献した卒業生を紹介するページへの導線（バナー）です。
- **`.alumni-banner` & `.btn-alumni`**: 
  独立した目立つバナーとしてデザインされ、クリックすると `/about/alumni/` 階層へ遷移します。

#### 4. Component Injection (動的生成)
- `renderHeader("..", "about")` を実行し、親階層のスクリプトから共通ヘッダーを読み込み、ナビゲーションの「運営について」をアクティブ状態にします。

## 💡 運用・更新のポイント

### メンバーの追加・編集
新メンバーを追加する際は、既存の `.card.member-card` のHTMLブロック（`<div class="card reveal member-card">...</div>`）をごっそりコピーし、以下の項目を書き換えてください。
1. **画像パス**: `<img src="../images/organizers/新規ファイル名.jpg">`
2. **名前と肩書き**: `<h3>` と `<p>` タグの中身
3. **SNSリンク**: `<a>` タグの `href` 属性（ID部分）

### 外部サービスへのリンク
SNSのリンクには、セキュリティとパフォーマンスを考慮し `target="_blank" rel="noopener noreferrer"` が標準で付与されています。リンク先を変更する際も、この属性は消さずに維持してください。