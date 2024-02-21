<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\{
    StoreProductRequest,
    UpdateProductRequest,
};
use App\Http\Requests\StoreImage;
use App\Models\{
    ImageProduct,
    Product,
    Permission
};
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:product list', ['only' => ['index', 'show']]);
        $this->middleware('can:product create', ['only' => ['create', 'store']]);
        $this->middleware('can:product edit', ['only' => ['edit', 'update', 'active', 'visible']]);
        $this->middleware('can:product delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Product $product)
    {
        $products = (new Product)->newQuery();

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

        // dd($request->hasFile('image'));
        $image_path = '';

        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('image', 'public');
        }
        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $image = $request->image;
        // dd($image);
        unset($data['image']);
        unset($data['alt']);

        $product = Product::create($data);
        $imageProduct = ImageProduct::create(['img' => $image_path, "alt" => $request->alt]);

        $product->imageProduct()->save($imageProduct);

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
    public function edit(Request $request, $productId)
    {
        $product = Product::with('imageProduct')->find($productId);
        // dd($product);
        return Inertia::render('Admin/Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Updated successfully.'));
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
    public function active($id)
    {
        // dd($product);
        $product = Product::findOrFail($id);
        $product->update(['is_active' => !$product->is_active]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Active Change ' . $product->sku . ' successfully'));
    }
    public function  visible($id)
    {

        $product = Product::findOrFail($id);
        $product->update(['is_visible' => !$product->is_visible]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Visible Change ' . $product->sku . ' successfully'));
    }
    public function  upload(StoreImage $request, $productId)
    {
        $product = Product::findOrFail($productId);

        $image_path = '';
        $count = ImageProduct::where('product_id', $productId)->count();
        $count = $count < 1 ? 1 : $count;
        // dd($count);
        // foreach ($request->file('image') as $img) {
        //     // Check if file is valid
        //     if ($img->isValid()) {
        //         // Generate a unique filename
        //         $imageName = uniqid() . '_' . $img->getClientOriginalName();
        //         // Store the image
        //         $image_path = $img->storeAs('images', $imageName, 'public');

        //         // Create ImageProduct instance
        //         ImageProduct::create([
        //             'product_id' => $productId,
        //             'img' => $image_path,
        //             'alt' => "dfgsdfds",
        //             'rank' => $count, // Use $count as rank
        //         ]);

        //         // Increment counter
        //         $count++;
        //     }
        // }

        $images = [];

        foreach ($request->file('image') as $img) {
            if ($img->isValid()) {
                $imageName = uniqid() . '_' . $img->getClientOriginalName();
                $imagePath = $img->storeAs('images', $imageName, 'public');

                $images[] = [
                    'img' => $imagePath,
                    'alt' => "dfgsdfds",
                    'rank' => $count,
                ];

                $count++;
            }
        }
        $product->imageProduct()->createMany($images);


        return redirect()->route('admin.product.index')
            ->with('message', __('Product created successfully.'));
    }
}
