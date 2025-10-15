<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

Route::get('', [AppController::class, 'app'])->where('any', '.*')->name('lvs.app');
Route::get('{any}', [AppController::class, 'app'])->where('any', '.*')->name('lvs.app.any');
