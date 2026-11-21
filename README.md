# Taskly 環境リボン

Taskly、企業ガイダンス、ポリシー、認証の画面右上に、赤い「本番環境」または青い「開発環境」のリボンを表示する Chrome 拡張機能です。Manifest V3 のコンテンツスクリプトで動作します。

| 対象 | 本番 | ローカル開発 |
| --- | --- | --- |
| Taskly | https://taskly.iy0306.com/ | https://local.taskly.iy0306.com/ |
| 企業ガイダンス | https://nnct-corp-guidance-2026.taskly.iy0306.com/ | https://local.nnct-corp-guidance-2026.taskly.iy0306.com/ |
| ポリシー | https://policies.taskly.iy0306.com/ | https://local.policies.taskly.iy0306.com/ |
| 認証 | https://auth.taskly.iy0306.com/login | https://local.auth.taskly.iy0306.com/login |

開発用のURLは [Taskly のローカル HTTPS 手順](https://github.com/asari194617/taskly/blob/main/docs/local-development.md#local-https) に従ってセットアップしてください。

## インストール

1. このリポジトリをローカルに clone する。
2. Chrome の `chrome://extensions` を開き、右上の「デベロッパーモード」を有効にする。
3. 「パッケージ化されていない拡張機能を読み込む」を押し、このリポジトリのフォルダを選ぶ。
4. 上の対象ページを再読み込みする。

既に読み込んでいる場合、同じフォルダで更新後に `chrome://extensions` から拡張機能を再読み込みし、対象ページをリロードします。新しいフォルダに clone し直した場合は、旧拡張を削除して新しいフォルダを読み込みます。

## 検証

Node.js 26 で対象の8つの HTTPS origin、表示ラベルと色、対象外の origin、重複表示の防止を検証します。GitHub Actions も同じテストを実行し、行・関数ともに80%以上のカバレッジを要求します。

```sh
node --test --experimental-test-coverage \
  --test-coverage-include=environment-ribbon.js \
  --test-coverage-lines=80 --test-coverage-functions=80 test/*.test.js
```
