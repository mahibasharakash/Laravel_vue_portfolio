<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*
| portfolio route
*/

Route::get('', [AppController::class, 'portfolio'])->where('any', '.*')->name('lvs.portfolio');
Route::get('{any}', [AppController::class, 'portfolio'])->where('any', '.*')->name('lvs.portfolio.any');
