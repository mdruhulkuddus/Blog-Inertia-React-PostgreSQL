<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @inertiaHead
    @routes
</head>
<body>
@inertia

<div class="app">
    <h1 class="text-3xl font-bold underline">
        {{--        Hello world!--}}
    </h1>
</div>
</body>
</html>
