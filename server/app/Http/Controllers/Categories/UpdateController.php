<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Categories\CategoryRepositoryInterface;


class UpdateController extends Controller
{
    public function __invoke(Request $request,$id, CategoryRepositoryInterface $category)
    {

        $data = [];
        
        try {

            $data = $category->update([
                    "title"   => $request->title,
                ], $id);
            return response()->json(["status" => "success" ]);    
            
        } catch (\Exception $exception) {
            return $exception;
            return response()->json(["status" => "error", "message" => "server error"],500);
        }
    }
}
