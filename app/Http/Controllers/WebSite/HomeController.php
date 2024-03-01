<?php

namespace App\Http\Controllers\WebSite;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
    // dd('dddd');
    $products = (new Product)->with('imageProduct')->newQuery();

    if (request()->has('search')) {
        $searchTerm = '%' . request()->input('search') . '%';

        $products->where(function ($query) use ($searchTerm) {
            $query->where('name_arabic', 'LIKE', $searchTerm)
                ->orWhere('name_english', 'LIKE', $searchTerm)
                ->orWhere('sku', 'LIKE', $searchTerm)
                // Add more conditions for other columns as needed
                ->orWhere('product_details', 'LIKE', $searchTerm);
        });
    }

    if (request()->query('sort')) {
        $attribute = request()->query('sort');
        $sort_order = 'ASC';
        if (strncmp($attribute, '-', 1) === 0) {
            $sort_order = 'DESC';
            $attribute = substr($attribute, 1);
        }
        $products->orderBy($attribute, $sort_order);
    } else {
        $products->latest();
    }

    $products = $products->paginate(5)->onEachSide(2)->appends(request()->query());

    return Inertia::render('Web/Home', [
        'products' => $products,
        'filters' => request()->all('search'),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
