<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

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