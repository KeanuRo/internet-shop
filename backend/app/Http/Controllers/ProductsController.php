<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function get(int $id)
    {
        return Product::findOrFail($id);
    }

    public function create(Request $request)
    {
        Product::create($request->all());
        return 'Успех';
    }
    public function update(int $id, Request $request)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return 'Успех';
    }

    public function delete(int $id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return 'Успех!';
    }
}
