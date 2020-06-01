<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Shop;
use App\ShopMarker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function add(Request $request)
    {
        $user = new User;
        $user->email = $request->get('email');
        $user->name = $request->get('lastname') . ',' . $request->get('firstname');

        // Laravel uses the Hash facade which provides a secure way for storing passwords in a hashed manner
        $user->password = Hash::make($request->get('password'));
        $user->types = 2; // user account ang gi add

        // ang Str kay mo create og string function
        $user->api_token = Str::random(60);

        $user->save();

        
        
    }
    public function update(Request $request)
    {
        // ang gamit sa token kay para ma ilhan if valid ang token para makagamit siya sa mga api
        $token = Str::random(60);

        $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return ['token' => $token];
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password'); //ge kuha niya ang email og password nga imong ginput
        // ang attempt kay mo adto sa database if sakto ang password og email
        if (Auth::attempt($credentials)) {
            // Gkuha ang user info nga g attempt
            $userInfo = Auth::user();
            
            // ang gamit sa token kay para ma ilhan if valid ang token para makagamit siya sa mga api
            $token = Str::random(60);

            $userInfo->forceFill([
                'api_token' => hash('sha256', $token),
            ])->save();
            
            // shop information sa database
            $data['shop'] = Shop::where('user_id', $userInfo->id)->with('userInfo', 'shopMarkers')->first();
            // user information sa database
            $data['user'] = $userInfo;
            
            // ang json kay data type
            return response()->json(['message' => 'success', 'data' => $data], 200);
        }
        return response()->json(['message' => 'error'], 500);
    }
}
