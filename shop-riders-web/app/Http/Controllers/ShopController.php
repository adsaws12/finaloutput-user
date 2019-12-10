<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shop;

class ShopController extends Controller
{

    public function index()
    {
        return view('shop.index');
    }

    public function add()
    {
        return view('shop.add');
    }

    public function addSubmit(Request $request)
    {
        dd(['name' => $request->get('name'), 'description' => $request->get('description')]);
        $shop = Shop::create(['name' => $request->get('name'), 'description' => $request->get('description')]);
        dd($shop->lastInsertId());
    }
}
