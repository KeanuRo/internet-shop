<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use App\Models\Product;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function index()
    {
        return Basket::all();
    }

    public function create(Request $request)
    {
        Basket::create($request->all());
        return 'Успех';
    }

    public function delete(int $id)
    {
        $product = Basket::findOrFail($id);
        $product->delete();
        return 'Успех!';
    }
}
