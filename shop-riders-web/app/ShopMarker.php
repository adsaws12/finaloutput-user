<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopMarker extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shop_id', 'latitude', 'longitude',
    ];
}
