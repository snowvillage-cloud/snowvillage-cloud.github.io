// contents/contentsData.js
//
// このページは「コミュニティとして継続発信している公式コンテンツ」の入口集。
// 個人ブログや単発登壇資料は載せない。対象は：
//   - SnowVillage が運営する YouTube チャンネル
//   - サブグループの公式ポータル / まとめサイト
//   - 勉強会シリーズのポータルページ
//
// 各アイテムには2種類の説明を持たせる：
//   - summary       : そのコンテンツが何を扱っているかの中立的な紹介（1〜2文）
//   - communityNote : SnowVillage コミュニティとしての意義・推しポイント
//
// 以下はデザイン確認用のサンプルデータ。実コンテンツに差し替えてください。

const contentsData = [
  {
    type: "youtube",
    title: "SnowVillage 公式 YouTube チャンネル",
    owner: "SnowVillage",
    thumbnail: "",
    url: "https://www.youtube.com/",
    summary:
      "SnowVillage が運営する公式 YouTube チャンネル。コミュニティ主催イベントの録画やライブ配信、ハイライト動画を継続的にアーカイブしています。",
    communityNote:
      "リアルタイム参加が難しい人にも、登壇内容や議論をあとから追体験してもらえるよう、コミュニティ全体で運用しているコンテンツ基盤です。",
  },
  {
    type: "subgroup",
    title: "Snowflake 女子会 ポータル",
    owner: "Snowflake 女子会",
    thumbnail: "",
    url: "https://example.com/jyoshikai",
    summary:
      "Snowflake 周辺で活動する女性メンバーを中心としたサブグループのポータルサイト。開催案内・登壇資料・参加レポートをまとめて発信しています。",
    communityNote:
      "「気兼ねなく相談・登壇できる場」をテーマに、SnowVillage 内のサブグループとして長期運営している継続シリーズです。",
  },
  {
    type: "subgroup",
    title: "コンテナグループ ポータル",
    owner: "コンテナグループ",
    thumbnail: "",
    url: "https://example.com/container",
    summary:
      "コンテナ・IaC・基盤運用観点で Snowflake を扱うエンジニアが集まるサブグループ。検討会・勉強会の議事や知見をストックしています。",
    communityNote:
      "実運用ユーザーの議論ログがそのまま残るタイプのコンテンツ。テンプレートやリファレンスもこの導線から辿れます。",
  },
  {
    type: "series",
    title: "Frosty Friday 日本版 ポータル",
    owner: "Frosty Friday Japan",
    thumbnail: "",
    url: "https://example.com/frostyfriday",
    summary:
      "毎週末に Snowflake の練習課題に取り組む「Frosty Friday」を、日本語でフォローするシリーズのポータル。週次のお題と振り返りを継続掲載しています。",
    communityNote:
      "個人で継続するのが難しい学習サイクルを、コミュニティとして並走しながら回す「習慣化」の仕掛けです。",
  },
  {
    type: "subgroup",
    title: "関西 Snowflake ユーザーグループ",
    owner: "関西 Snowflake UG",
    thumbnail: "",
    url: "https://example.com/kansai",
    summary:
      "関西エリアを拠点とした地域サブグループ。地域開催のミートアップ・オフ会・ハンズオンなどの活動アーカイブを公開しています。",
    communityNote:
      "東京以外の地域でも継続的にオフラインで集まれる場を提供する、地域 SnowVillage の中核コンテンツです。",
  },
  {
    type: "subgroup",
    title: "ヘルスケア業界 Snowflake ユーザーグループ",
    owner: "ヘルスケア業界 Snowflake UG",
    thumbnail: "",
    url: "https://example.com/healthcare",
    summary:
      "ヘルスケア・ライフサイエンス業界における Snowflake 活用に特化したサブグループのポータル。業界特有のテーマで継続討議・発信しています。",
    communityNote:
      "業界横断で議論しづらい規制・データ取扱の話題を、業界限定だからこそ踏み込んで扱える縦割り型サブグループです。",
  },
];
