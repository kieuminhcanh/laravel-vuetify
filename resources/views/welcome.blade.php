<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

    <link href="{{ mix('css/vue-styles.css') }}" rel="stylesheet">

    <script defer src="{{ mix('js/app-client.js') }}"></script>

</head>

<body>
    <div id="app">
        {!! ssr('js/app-server.js')->render() !!}
    </div>
</body>

</html>