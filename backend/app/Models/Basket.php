<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    protected $table = 'basket';

    protected $fillable = [
        'title',
        'price',
        'image',
        'configure',
    ];

    protected $casts = [
        'configure' => 'array',
    ];

    public $timestamps = false;
}
