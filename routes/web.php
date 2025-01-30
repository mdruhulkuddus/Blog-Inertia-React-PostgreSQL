<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    sleep(1);
//    return Inertia::render('Home', ['name' => 'ruhul']);
//});

//Route::inertia('/', 'Home');

Route::resource('posts', PostController::class)->except('index');
Route::get('/', [PostController::class, 'index']);
