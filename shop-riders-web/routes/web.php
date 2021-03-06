<?php

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/maps', 'MapController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin/shops', 'ShopController@index')->name('admin.shops');
Route::get('/admin/shop/add', 'ShopController@add')->name('admin.shop.add');
Route::post('/admin/shop/add', 'ShopController@addSubmit')->name('admin.shop.addSubmit');
