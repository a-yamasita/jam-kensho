# 設定項目
- .env.template を .env としてコピー、FQDN の設定と hosts へ記載
- mkcert -CAROOT で mkcert 用の CA 証明書の位置を確認、PEM ファイルを取り出して gats/ca/selfca.crt として配置
- mkcert {決めたFQDN} で証明書を作成し、rp/certs へ配置
- 適当に gats/public をアップロードする場所を作る（後でも良い）
    - gats/package.json に yarn のコマンドとして build と併せて実行するようにすると良い
    - rsync するなり、適当にオブジェクトストレージに置くなり

# 各コンテナ内で実施するコマンド
## wp
- wp core install --path=/var/www/html --url=https://$WP_FQDN --title=$WORDPRESS_DB_NAME --admin_user=$WORDPRESS_DB_USER --admin_password=$WORDPRESS_DB_PASSWORD --admin_email=$WORDPRESS_DB_USER@example.jp
- wp plugin delete hello akismet
- wp plugin install wp-gatsby wp-graphql --activate

## gats
- yarn install

# 実行時
## gats
- yarn start

# その他注意事項
- PHP 8.0 から WordPress で deprecated のエラーが多発しているので WP_DEBUG を止め、PHP 側で error_reporting を off にしてある、CMS を変えることを検討したい