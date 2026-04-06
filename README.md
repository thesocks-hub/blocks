# Blocks

漫画のネーム・作画スケジュールをブロック単位で管理するPWAアプリです。
(Claudeにて作成）

## ファイル構成

```
blocks/
├── index.html        # メインアプリ
├── manifest.json     # PWA設定
├── sw.js             # Service Worker（オフライン対応）
├── icons/
│   ├── icon-192.png  # ホーム画面アイコン
│   └── icon-512.png  # スプラッシュ用アイコン
└── README.md
```
## データについて

- データはすべてデバイスの **localStorage** に保存されます
- サーバーへの送信は一切ありません
- バックアップ: カレンダー画面右上「書き出し」でJSONファイルをダウンロード
- 別デバイスへの移行: JSONファイルをテキストエディタで開き、別端末のlocalStorageに手動インポート（将来的にインポート機能追加予定）
