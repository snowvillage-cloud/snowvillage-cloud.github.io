# 🧭 SnowVillage Compass (`/swt2026`)

Snowflake World Tour Tokyo 2026（SWT 2026）の来場者向けに提供する、8問のルールベース診断ページです。回答を4つの判定軸（`E`/`B`、`S`/`T`、`C`/`V`、`I`/`O`）で集計して SVTI 16タイプのいずれかを判定し、タイプカード・同じタイプの Neighbors / Mayors・おすすめのユーザーグループ・関連する Snowflake 機能を提示します。

会場で配布する QR コードから `https://snowvillage.cloud/swt2026` へ直接アクセスされる前提のため、サイト共通のヘッダー・フッターおよび `css/common.css` を読み込まず、単独で完結するページとして構成しています。この理由により、グローバルナビゲーション（`script.js` の `NAV_ITEMS`）にも登録していません。

> 移行元: https://github.com/mshdtksk/snow-village-compass.github.io （main / `1e5ce08` 時点）

## 📄 ファイルと構造の解説

| ファイル / ディレクトリ | 役割 |
| :--- | :--- |
| **`index.html`** | ページ本体。Intro（導入）/ Quiz（設問）/ Result（結果）の3ビューを保持し、表示を切り替えて遷移します。 |
| **`app.js`** | 設問定義、タイプ判定、結果画面の描画、共有機能を担います。データの取得に失敗した場合に用いる代替値も保持します。 |
| **`../css/swt2026.css`** | 本ページ専用のスタイル。サイトの「1ページにつき1CSS」の原則に従い `css/` 配下に置いています。ライト／ダークテーマを CSS 変数で切り替えます。 |
| **`data/`** | 診断に用いるデータ。詳細は次節を参照してください。 |
| **`logo/`** | ユーザーグループのロゴ（webp）と、`logo/types/` 配下の16タイプ用アイコン（png）。 |

## 🔄 データ

データの更新は `data/` 配下の JSON を編集することで完結します。ビルド処理や同期スクリプトは不要で、編集後にページを再読み込みすれば反映されます。

Neighbors / Mayors の名簿は本ディレクトリでは保持しません。氏名・所属・写真・SNS リンクは本サイトの公式データを実行時に読み込むため、`data/` に複製すべきではありません。本ページ固有の情報は診断コードの割り当てのみです。

| 参照先 | 構造 | 内容 |
| :--- | :--- | :--- |
| `../about/neighbors/userlist.yaml` | YAML 配列 | Neighbors の名簿。サイト全体の一次情報源です。 |
| `../about/aboutData.js` の `mayorsData` | JavaScript 配列 | Mayors の名簿。同上。 |
| `data/type-assignments.json` | オブジェクト | 氏名と診断コードの対応。本ページ固有のデータです。 |
| `data/types.json` | オブジェクト | 16タイプの定義。 |
| `data/type-preferences.json` | オブジェクト | タイプ別の優先表示設定。 |
| `data/user-groups.json` | 配列 | ユーザーグループの一覧。 |
| `data/events.json` | 配列 | 結果画面に掲載するイベント。 |

### `type-assignments.json`

氏名をキー、診断コードを値とするオブジェクトです。所属や写真といった属性は名簿側にあるため、本ファイルには記述しません。

```json
{
  "安倍 航太": "ESVI",
  "山本 且秋": "ETCI"
}
```

| 項目 | 仕様 |
| :--- | :--- |
| キー | 名簿（`userlist.yaml` または `mayorsData`）に記載された氏名と完全に一致する文字列。表記が異なる場合、その人物には診断コードが割り当てられません。 |
| 値 | `types.json` に定義された16種のコードのいずれか。4つの判定軸を `E`/`B`、`S`/`T`、`C`/`V`、`I`/`O` の順に連結した4文字です。 |

結果画面に表示されるのは、**診断コードが割り当てられており、かつ名簿側に写真が登録されている人物**に限られます。いずれかを満たさない場合、その人物のカードは表示対象から除外されます。名簿側で人物が追加・削除された場合は、本ファイルを変更しなくても表示に反映されます。

### `types.json`

診断コードをキー、タイプ定義を値とするオブジェクトです。判定結果はいずれのコードにもなり得るため、16タイプすべてのキーを揃えてください。

```json
{
  "ESCI": {
    "code": "ESCI",
    "title": "データスーパーヒーロー",
    "subtitle": "Data Superhero (Advanced Technologist)",
    "emoji": "🦸",
    "catchphrase": "先端技術を自ら切り拓く、圧倒的データパイオニア",
    "description": "高い技術的好奇心と深い探求心を持ち、一人で最先端機能を検証・実装して成果を出すタイプです。",
    "axes": ["Explorer", "Solo", "Craft", "Innovator"],
    "colorGroup": "innovator",
    "iconUrl": "logo/types/ESCI.png",
    "recommendedFeatures": [
      {
        "name": "Snowpark API",
        "description": "Python / Java / Scala で Snowflake 上にデータパイプラインや ML を実装",
        "url": "https://docs.snowflake.com/ja/developer-guide/snowpark/index"
      }
    ]
  }
}
```

| 項目 | 仕様 |
| :--- | :--- |
| `colorGroup` | 結果カードの配色を決定します。`craft` / `value` / `innovator` / `optimizer` のいずれかを指定してください。実際の配色は `css/swt2026.css` の `.result-digital-card[data-color=...]` で定義しています。 |
| `iconUrl` | `logo/types/<診断コード>.png` を指します。アイコンは16タイプ分を用意済みです。 |
| `recommendedFeatures` | 結果画面に表示する Snowflake 機能です。**このタイプに表示される機能は本項目がすべて**であり、`type-preferences.json` は表示順にのみ影響します。 |

### `type-preferences.json`

診断コードをキーとし、そのタイプの回答者が実際に挙げたユーザーグループと Snowflake 機能を保持します。**表示対象を決めるものではなく、表示順を前に寄せるための設定**です。全16コードを網羅する必要はありません。

```json
{
  "BSCI": {
    "groups": ["snowvillage-women", "snowvillage-main"],
    "features": ["Snowpark API", "動的テーブル"]
  }
}
```

| 項目 | 仕様 |
| :--- | :--- |
| `groups` | `user-groups.json` の `id` を指定します（表示名ではありません）。ここに挙げたグループが優先して表示され、残りの枠はタグの一致度による自動計算で補われます。定義のないコードでも、自動計算のみでグループは提示されます。 |
| `features` | `types.json` の `recommendedFeatures[].name` と完全に一致する文字列を指定します。一致した機能が先頭に並び替えられます。一致しない文字列を書いても機能は追加されず、並び替えにも使われません。 |

### `user-groups.json`

ユーザーグループを表すオブジェクトの配列です。

```json
[
  {
    "id": "snowvillage-main",
    "name": "SnowVillage - Japan Snowflake User Group",
    "abbr": "SV",
    "logoUrl": "logo/snowvillage.webp",
    "description": "日本最大級の Snowflake ユーザーコミュニティ。初心者から上級者まで、Snowflake に関わるすべての方の参加を歓迎。",
    "techplayUrl": "https://techplay.jp/community/snowvillage",
    "tags": ["latest", "lt", "meetup", "beginner", "ai"]
  }
]
```

| 項目 | 仕様 |
| :--- | :--- |
| `id` | `type-preferences.json` から参照される識別子です。 |
| `logoUrl` | `logo/` 配下の相対パス。省略した場合、ロゴの表示領域が空欄になります。画像を追加してから指定してください。 |
| `tags` | 結果画面に表示するラベルであると同時に、おすすめグループの自動計算にも用いられます。 |

### `events.json`

イベントを表すオブジェクトの配列です。開催日の当日までを表示対象とし、それより前の日付のイベントは自動的に除外されます。対象が0件になった場合は、イベント欄自体が非表示になります。

```json
[
  {
    "date": "2026-09-11",
    "title": "Snowflake Community After Party 2026",
    "location": "SHINAGAWA PIVOT",
    "url": "https://techplay.jp/event/998891"
  }
]
```

`date` は `YYYY-MM-DD` 形式で記述してください。

### 編集後の確認

`fetch` でデータを読み込むため、ローカルでも HTTP サーバー経由で確認してください。

```bash
python3 -m http.server 8000
```

`http://localhost:8000/swt2026/` を開き、診断を最後まで進めて、意図した人物・グループ・機能が提示されることを確認します。

JSON の構文エラーや参照の不整合が生じた場合、画面上にエラーは表示されず、該当セクションが空欄になるか、既定の内容が表示されます。異常に気付きにくいため、編集後は構文の検証を実施してください。

```bash
for f in swt2026/data/*.json; do python3 -c "import json,io,sys;json.load(io.open(sys.argv[1],encoding='utf-8'))" "$f" || echo "NG: $f"; done
```

## 💡 運用・更新のポイント

- **配信パス**: `data/` および `logo/` を相対パスで参照するため、`/swt2026/` 配下で配信する必要があります。GitHub Pages は末尾スラッシュのない `/swt2026` へのアクセスを自動的にリダイレクトします。
- **名簿の一次情報源**: Neighbors / Mayors の情報は `about/neighbors/userlist.yaml` および `about/aboutData.js` を実行時に読み込みます。これらのファイル構造を変更する際は、`app.js` の解析処理も併せて確認してください。
- **画像の参照**: 人物写真は `/images/neighbors/` および `/images/organizers/` を参照します。外部ドメインは経由しません。
- **ブランド表記**: 「SnowVillage」に統一します。語の間にスペースを入れた表記は使用しません。
- **個人情報**: 回答内容の送信および保存は行いません。ブラウザに保存するのはライト／ダークテーマの選択のみです（`localStorage` の `svc-theme`）。
