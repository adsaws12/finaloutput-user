<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRequest extends Model
{
    //
    protected $fillable = [
        'name', 'number', 'problem','shop_id', 'latitude', 'longitude', 'typeofvehicle' 
    ];
}
