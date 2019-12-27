<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'start_time', 'end_time', 'user_id', 'contact', 'service'
    ];

    public function shopMarkers()
    {
        return $this->hasMany('App\ShopMarker','shop_id', 'id');
    }

    public function userInfo()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
