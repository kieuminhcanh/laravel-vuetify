<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />

    <title>Laravel</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css" />

    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />

    <script defer src="{{ mix('js/app-client.js') }}"></script>

</head>

<body>

    <div id="app">
        {!! ssr('js/app-server.js')->render() !!}
    </div>
</body>

</html>