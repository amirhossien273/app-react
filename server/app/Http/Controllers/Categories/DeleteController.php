<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Categories\CategoryRepositoryInterface;

class DeleteController extends Controller
{
    public function __invoke($id, CategoryRepositoryInterface $category)
    {

        $data = [];
        try {

            $data = $category->delete($id);
            return response()->json(["status" => "success" ]);    
            
        } catch (\Exception $exception) {
            return response()->json(["status" => "error", "message" => "server error"],500);
        }
    }
}
