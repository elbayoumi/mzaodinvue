<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $appends = ['image_path'];

    protected $fillable = [
        'name',
        'email',
        'password',
        'img'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'img' => 'string',
    ];

    // public function getImgAttribute($value)
    // {
    //     return asset('storage/'.$value);
    // }
    public function getImagePathAttribute()
    {

        return asset('storage/' . $this->img);
    }
    // public function setImgAttribute($value)
    // {
    //     $image_path = '';
    //     if ($value instanceof UploadedFile) {
    //         // Store the new image file
    //         $image_path = $value->store('images', 'public');

    //         // Delete the existing image file if it exists
    //         if ($this->img) {
    //             Storage::disk('public')->delete($this->img);
    //         }
    //         $this->attributes['img'] = $image_path;

    //     }

    //     $this->attributes['img'] = $value;
    // }

}
