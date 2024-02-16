<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageProduct extends Model
{
    use HasFactory;
    protected $guarded = [];
    function product(){
        return  $this->belongsTo(Product::class,'product_id');
    }
    public function getImgAttribute($value)
    {
        return asset('storage/'.$value);
    }
}
