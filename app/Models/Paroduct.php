<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paroduct extends Model
{
    use HasFactory;
    protected $guarded = [];

    function image(){
        return  $this->hasMany(ParoductImage::class);
    }

}
