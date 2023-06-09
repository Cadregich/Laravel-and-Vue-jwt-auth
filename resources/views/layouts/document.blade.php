<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
{{--    <link rel="stylesheet" href="{{ mix('css/app.css') }}">--}}
    @yield('links')
</head>
<body class="">
@yield('body')
</body>
{{--<script src="{{ mix('js/app.js') }}"></script>--}}
@yield('scripts')
</html>
