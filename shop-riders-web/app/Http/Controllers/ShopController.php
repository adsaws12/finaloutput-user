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
    public function edit($shopId)
    { 
        $shop = Shop::find($shopId);

        // $shop = Shop::findOrFail($shop->id);
        return view('shop.edit', compact('shop'));
    }
    public function destroy($id)
    { 
        $shop = Shop::find($id);
        $shop_markers = ShopMarker::where('shop_id', $shop->id)->get();
        $shop_markers_id = $shop_markers[0];
        if ($shop != null) {
            $shop ->delete();
            $shop_markers_id ->delete();      
        }
        return redirect('admin/shops')->with('success','Deleted');
    }
}
