<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/products', [App\Http\Controllers\ProductController::class, 'index']);
    Route::post('/products', [App\Http\Controllers\ProductController::class, 'store']);
    Route::put('/products/{id}', [App\Http\Controllers\ProductController::class, 'update']);
    Route::get('/products', [App\Http\Controllers\ProductController::class, 'index']);
    Route::get('/products/{id}', [App\Http\Controllers\ProductController::class, 'show']);


        Route::get('/users', [App\Http\Controllers\UserController::class, 'index']);
        Route::post('/users', [App\Http\Controllers\UserController::class, 'store']);
        Route::put('/users/{id}', [App\Http\Controllers\UserController::class, 'update']);
        Route::get('/users', [App\Http\Controllers\UserController::class, 'index']);
        Route::get('/users/{id}', [App\Http\Controllers\UserController::class, 'show']);


});



Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/products/{id}', [App\Http\Controllers\ProductController::class, 'destroy']);
    Route::delete('/users/{id}', [App\Http\Controllers\UserController::class, 'destroy']);

});

Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [App\Http\Controllers\ProductController::class, 'login']);
Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth:sanctum');
