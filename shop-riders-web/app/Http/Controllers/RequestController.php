<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\UserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller
{

    public function UserRequest(Request $request)
    {
        // return response()->json($request->get('name'));
        $userRequest = new UserRequest;
        $userRequest->name = $request->get('name');
        $userRequest->number = $request->get('number');
        $userRequest->problem = $request->get('problem');
        $userRequest->typeofvehicle = $request->get('typeofvehicle');
        $userRequest->shop_id = $request->get('shop_id');
        $userRequest->longitude = $request->get('longitude');
        $userRequest->latitude = $request->get('latitude');
        $userRequest->save();
        $userId = $userRequest->id;

        // $basic  = new \Nexmo\Client\Credentials\Basic('b67fbe90', 'x31NFLSsfSnqToOR');
        // $client = new \Nexmo\Client($basic);
        
        // $name = $request->get('name');
        // $number = $request->get('number');
        // $typeofvehicle = $request->get('typeofvehicle');
        // $problem = $request->get('problem');

        // $message = $client->message()->send([
        //     'to' => '639322480085',
        //     'from' => 'Nexmo',
        //     'text' => 'VRShop has request for assitance ' . "\n" . ' Name: ' . $name ."\n" . 'Number: ' . $number  . "\n" . 'Type of Vehicle: ' . $typeofvehicle . "\n" . 'Problem: ' . $problem . "\n",
        // ]);

        return response()->json($userRequest);


    }

    public function acceptRequest($shopId)
    {
       $userRequest = UserRequest::where('shop_id', '=', $shopId)->get();
       return response()->json($userRequest);
    }
    public function deleteRequest($shopId)
    {        
       UserRequest::query()->where('id', '=', $shopId)->delete();
       
    }
    
}
