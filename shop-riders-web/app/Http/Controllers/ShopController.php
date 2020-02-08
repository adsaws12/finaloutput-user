<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\ShopMarker;
use Illuminate\Http\Request;
use App\Shop;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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
        $user = new User;
        $user->email = $request->get('email');
        $user->name = $request->get('name');
        $user->password = Hash::make($request->get('password'));
        $user->types = 1; // shop account ang gi add
        $user->save();
        $user_id = $user->id;

        $shop = new Shop;
        $shop->name = $request->get('name');
        $shop->description = $request->get('description');
        $shop->start_time = $request->get('start_time');
        $shop->end_time = $request->get('end_time');
        $shop->service = $request->get('service');
        $shop->contact = $request->get('contact');
        $shop->personel = $request->get('personel');
        $shop->priceofcar = $request->get('priceofcar');
        $shop->priceofmotor = $request->get('priceofmotor');

        $shop->user_id = $user_id;
        $shop->save();
        $shopId = $shop->id;

        foreach ($request->get('dragMarkers') as $marker) {
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
        $shopInfo = Shop::query()->where('id', '=', $shopId)->with('userInfo', 'shopMarkers')->first();

        return view('shop.edit', compact('shopInfo'));
    }

    public function editSubmit($shopId, Request $request)
    {
        $user_id = $request->get('users')['id'];
        $userData = [
            'email' => $request->get('users')['email'],
            'name' => $request->get('shops')['name'],
        ];
        if (!empty($request->get('users')['password'])) {
            $userData['password'] = Hash::make($request->get('users')['password']);
        }
        User::query()->where('id', '=', $user_id)->update($userData);


        $shopData = [
            'name' => $request->get('shops')['name'],
            'description' => $request->get('shops')['description'],
            'start_time' => $request->get('shops')['start_time'],
            'end_time' => $request->get('shops')['end_time'],
            'service' => $request->get('shops')['service'],
            'contact' => $request->get('shops')['contact'],
            'personel' => $request->get('shops')['personel'],
            'priceofcar' => $request->get('shops')['priceofcar'],
            'priceofmotor' => $request->get('shops')['priceofmotor'],
            'user_id' => $user_id
        ];
        Shop::query()->where('id', '=', $shopId)->update($shopData);

        $shopMarker = new ShopMarker;
        ShopMarker::query()->where('shop_id', '=', $shopId)->delete();
        foreach ($request->get('dragMarkers') as $marker) {
            $shopMarker->shop_id = $shopId;
            $shopMarker->latitude = $marker['lat'];
            $shopMarker->longitude = $marker['lng'];
            $shopMarker->save();
        }
    }

    public function markers()
    {
        $markers = ShopMarker::all()->load('shopInfo');

        return response()->json($markers);
    }

    public function info($shopId)
    {
        $shopInfo = Shop::query()->where('id', '=', $shopId)->with('userInfo', 'shopMarkers')->first();

        return response()->json($shopInfo);
    }

    public function delete($shopId)
    {
        $shopInfo = Shop::query()->where('id', '=', $shopId)->first();
        // dd($shopInfo);
        Shop::query()->where('id','=', $shopId)->delete();
        ShopMarker::query()->where('shop_id', '=', $shopId)->delete();
        User::query()->where('id', '=', $shopInfo->user_id)->delete();

        return redirect()->to('/admin/shops');
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // return response()->json($credentials, 200);
        // dd($credentials);
        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'success'], 200);
        }
        return response()->json(['message' => 'error'], 500);
    }
}
