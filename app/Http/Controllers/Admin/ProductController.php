<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Models\{
    Product,
    Permission
};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:product list', ['only' => ['index', 'show']]);
        $this->middleware('can:product create', ['only' => ['create', 'store']]);
        $this->middleware('can:product edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:product delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Product $product)
    {
        $products = (new Product)->newQuery();

        if (request()->has('search')) {
            $products->where('name', 'Like', '%'.request()->input('search').'%');
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

        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
            'filters' => request()->all('search'),
            'can' => [
                'create' => Auth::user()->can('product create'),
                'edit' => Auth::user()->can('product edit'),
                'delete' => Auth::user()->can('product delete'),
            ],
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        Product::create(['user_id'=>Auth::id()]+$request->all());

        return redirect()->route('admin.product.index')
            ->with('message', __('Product created successfully.'));
    }
    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Admin/Product/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Admin/Product/Edit', [
            'product' => $product,
        ]);
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
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('admin.product.index')
            ->with('message', __('Product deleted successfully'));

    }
    public function active( $id)
    {
        // dd($product);
        $product=Product::findOrFail($id);
        $product->update(['is_active' => !$product->is_active]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Active Change successfully'));

    }
    public function visible ($id)
    {

        $product=Product::findOrFail($id);
        $product->update(['is_visible' => !$product->is_visible]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Visible Change successfully'));

    }
}
