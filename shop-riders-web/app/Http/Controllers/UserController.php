<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Shop;
use App\ShopMarker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function add(Request $request)
    {
        $user = new User;
        $user->email = $request->get('email');
        $user->name = $request->get('lastname') . ',' . $request->get('firstname');
        $user->password = Hash::make($request->get('password'));
        $user->types = 2; // user account ang gi add
        $user->save();
        
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // return response()->json($credentials, 200);
        // dd($credentials);
        if (Auth::attempt($credentials)) {
            $userInfo = Auth::user();
            
            $data['shop'] = Shop::where('user_id', $userInfo->id)->with('userInfo', 'shopMarkers')->first();
            $data['user'] = $userInfo;
            
            return response()->json(['message' => 'success', 'data' => $data], 200);
        }
        return response()->json(['message' => 'error'], 500);
    }
}
