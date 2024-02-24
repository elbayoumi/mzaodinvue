<?php

use App\Http\Controllers\WebSite\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Web/Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::group([
//     'namespace' => 'App\Http\Controllers\WebSite',
// ], function () {
// Route::resource('home', 'HomeController');

//     });


// Route::get('/',function (){
// })->name('home');
Route::get('/',function (){
    return Inertia::render('Web/Soon', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
     })->name('home.test');
Route::get('/home',[HomeController::class, 'index'])->name('home');
Route::get('/auctions',[HomeController::class, 'index'])->name('auctions');


require __DIR__.'/auth.php';
