# Cài đặt
Cài thư viện laravel-server-side-rendering và cấu hình như hướng dẫn
https://github.com/spatie/laravel-server-side-rendering

```
$ composer require spatie/laravel-server-side-rendering
$ php artisan vendor:publish --provider="Spatie\Ssr\SsrServiceProvider" --tag="config"
```
Mở .env và cấu hình đường dẫn của node
```
Linux
NODE_PATH=/path/to/my/node

Windows
NODE_PATH=node
```

Tạo thư mục ( thư mục này là nơi lưu trữ file tạm ) 
```
storage\app\ssr
```

## Cài trên hosting 
```
$ curl http://nodejs.org/dist/v11.15.0/node-v11.15.0-linux-x64.tar.gz | tar xz
$ mv node-v11.15.0-linux-x64 node
$ cd node
$ pwd
=> Chép tên đường dẫn và thiết lập cho biến NODE_PATH trong .env
VD: NODE_PATH=/home/user_folder_name/node/bin/node
```