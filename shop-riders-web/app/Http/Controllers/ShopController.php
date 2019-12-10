<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\ShopMarker;
use Illuminate\Http\Request;
use App\Shop;

class ShopController extends Controller
{

    public function index()
    {
        $shops = Shop::all()->load('shopMarkers');

        return view('shop.index', compact('shops'));
    }

    public function add()
    {
        return view('shop.add');
    }

    public function addSubmit(Request $request)
    {
        $shop = new Shop;
        $shop->name = $request->get('name');
        $shop->description = $request->get('description');
        $shop->save();
        $shopId = $shop->id;

        foreach ($request->get('markers') as $marker) {
            $shopMarker = new ShopMarker;
            $shopMarker->shop_id = $shopId;
            $shopMarker->latitude = $marker['lat'];
            $shopMarker->longitude = $marker['lng'];
            $shopMarker->save();
        }

        return response()->json(['message' => 'Success', 200]);
    }
}
