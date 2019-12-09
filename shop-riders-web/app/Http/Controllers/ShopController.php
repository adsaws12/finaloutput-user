<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class ShopController extends Controller
{

    public function index()
    {
        return view('shop.index');
    }
}
