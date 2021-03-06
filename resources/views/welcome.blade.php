<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>BigCarlos</title>
        <link rel="shortcut icon" href="{{ asset('images/favicon/favicon_carlos.jpg') }}">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" >
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="../js/app.js"></script>
</html>
