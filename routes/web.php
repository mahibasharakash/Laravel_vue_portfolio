<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

Route::get('/blog_template', [AppController::class, 'blog_system'])->name('lvs.blog.system');
Route::get('/blog_template/{any}', [AppController::class, 'blog_system'])->where('any', '.*')->name('lvs.blog.system.any');

Route::get('/ecommerce_template', [AppController::class, 'ecommerce_system'])->name('lvs.ecommerce.system');
Route::get('/ecommerce_template/{any}', [AppController::class, 'ecommerce_system'])->where('any', '.*')->name('lvs.ecommerce.system.any');

Route::get('/learning_management_template', [AppController::class, 'learning_management_system'])->name('lvs.learning.management.system');
Route::get('/learning_management_template/{any}', [AppController::class, 'learning_management_system'])->where('any', '.*')->name('lvs.learning.management.system.any');

Route::get('/chat_application_template', [AppController::class, 'chat_application_system'])->name('lvs.chat.application.system');
Route::get('/chat_application_template/{any}', [AppController::class, 'chat_application_system'])->where('any', '.*')->name('lvs.chat.application.system.any');

Route::get('/hospital_template', [AppController::class, 'hospital_system'])->name('lvs.hospital.system');
Route::get('/hospital_template/{any}', [AppController::class, 'hospital_system'])->where('any', '.*')->name('lvs.hospital.system.any');

Route::get('/', [AppController::class, 'portfolio_system'])->name('lvs.portfolio.system');
Route::get('/{any}', [AppController::class, 'portfolio_system'])->where('any', '.*')->name('lvs.portfolio.system.any');
