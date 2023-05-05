<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Categories\CategoryRepositoryInterface;


class InsertController extends Controller
{
    public function __invoke(CategoryRepositoryInterface $category)
    {
        return $category->allCategories();
        try {

            return response()->json(["status" => "success" ]);    
            
        } catch (\Exception $exception) {
            return $exception;
            return response()->json(["status" => "error", "message" => "server error"],500);
        }
    }
}
