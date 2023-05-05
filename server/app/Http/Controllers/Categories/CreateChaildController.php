<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Categories\CategoryRepositoryInterface;


class CreateChaildController extends Controller
{
    public function __invoke(Request $request, CategoryRepositoryInterface $category)
    {

        $data = [];
        try {

            $data = $category->create([
                    "title"          => $request->title,
                    "parent_id"      => $request->parent_id,
                ]);
            return response()->json(["status" => "success", "data" => $data ]);    
            
        } catch (\Exception $exception) {
            return response()->json(["status" => "error", "message" => "server error"],500);
        }
    }
}
