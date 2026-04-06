# Blocks

漫画のネーム・作画スケジュールをブロック単位で管理するPWAアプリです。

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

---

## GitHub Pages へのデプロイ手順

### 1. GitHubでリポジトリ作成

1. https://github.com/new を開く
2. Repository name: `blocks`（任意）
3. **Public** を選択
4. 「Create repository」をクリック

### 2. ファイルをアップロード

**方法A: ブラウザからアップロード（簡単）**

1. 作成したリポジトリのページを開く
2. 「uploading an existing file」をクリック
3. 以下のファイル・フォルダをドラッグ＆ドロップ:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` フォルダごと
4. 「Commit changes」をクリック

**方法B: git コマンド**

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/blocks.git
git push -u origin main
```

### 3. GitHub Pages を有効化

1. リポジトリの「Settings」タブを開く
2. 左メニュー「Pages」をクリック
3. Source: **Deploy from a branch**
4. Branch: **main** / **/ (root)** を選択
5. 「Save」をクリック

数分後、以下のURLでアクセス可能になります:
```
https://あなたのユーザー名.github.io/blocks/
```

---

## iPadにインストール（ホーム画面に追加）

1. Safari でアプリのURLを開く
2. 画面下部の共有ボタン（四角に矢印）をタップ
3. 「ホーム画面に追加」を選択
4. 「追加」をタップ

これでネイティブアプリのように使えます（オフライン動作対応）。

## Androidにインストール

1. Chrome でアプリのURLを開く
2. アドレスバー右の「⋮」→「アプリをインストール」
   または、画面下部に表示されるバナーから「インストール」

---

## アップデート方法

機能追加後にファイルを更新したら:

1. `sw.js` の `CACHE_NAME` を変更する（例: `'blocks-v1'` → `'blocks-v2'`）
2. GitHubにpush（またはファイルを上書きアップロード）
3. アプリを開くと「新しいバージョンが利用可能」バナーが表示される

---

## データについて

- データはすべてデバイスの **localStorage** に保存されます
- サーバーへの送信は一切ありません
- バックアップ: カレンダー画面右上「書き出し」でJSONファイルをダウンロード
- 別デバイスへの移行: JSONファイルをテキストエディタで開き、別端末のlocalStorageに手動インポート（将来的にインポート機能追加予定）
