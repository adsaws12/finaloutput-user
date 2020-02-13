<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function () {
    Route::get('/shop/markers', 'ShopController@markers')->name('shop.markers');
    Route::get('/shop/{id}', 'ShopController@info')->name('shop.info');
    Route::post('/user/userrequest', 'RequestController@UserRequest');
    Route::get('/shop/users/request/{shop_id}', 'RequestController@acceptRequest');
    Route::get('/shop/users/shopusers/delete/{shop_id}', 'RequestController@deleteRequest');
});


Route::post('/user/add', 'UserController@add');
Route::post('/user/login', 'UserController@login');
Route::post('/shop/login', 'ShopController@login');
