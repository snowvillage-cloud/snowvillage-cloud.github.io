# 🎨 Cascading Style Sheets (CSS)

サイトの視覚定義を格納するディレクトリです。

## 📄 ファイル解説
### `style.css` (共通)
- **CSS変数 (`:root`)**: ブランドカラー（Snowflake Blue: `#29b5e8`）やフォントを一括管理。
- **リセットCSS**: ブラウザ間の差異を吸収。
- **レスポンシブ制御**: `max-width: 768px` 時の挙動を定義。

### `home.css` (トップ専用)
- **幾何学スノー**: SVGを `background-image` に埋め込み、`@keyframes crystal_fall` でアニメーション化。
- **3Dグリッド**: `perspective` と `rotateX` を使い、床が奥へ流れるサイバー感を演出。
- **News Wrapper**: 白背景でも視認性を保つため、`#0f172a`（ダークネイビー）のカードデザインを採用。

### `about.css` (運営ページ専用)
- **Glassmorphism**: メンバーカードに背景ぼかし（`backdrop-filter`）を適用。
- **SNSアイコン**: ホバー時にブランドカラーへ変化するトランジション設定。