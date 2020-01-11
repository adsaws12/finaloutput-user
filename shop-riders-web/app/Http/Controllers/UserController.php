<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;

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

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'success'], '200');
        }
        
        return response()->json(['message' => 'error'], 500);
    }
}
