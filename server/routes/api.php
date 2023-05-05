<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post("/auth/register", App\Http\Controllers\Auth\RegisterController::class);
Route::post("/auth/login", App\Http\Controllers\Auth\LoginController::class);


Route::prefix("categories")->group(function () {
    Route::middleware('auth:api')->group(function () {
        Route::post("create", App\Http\Controllers\Categories\CreateController::class);
        Route::post("create-chaild", App\Http\Controllers\Categories\CreateChaildController::class);
        Route::post("update/{id}", App\Http\Controllers\Categories\UpdateController::class);
        Route::delete("delete/{id}", App\Http\Controllers\Categories\DeleteController::class);
    });

    Route::get("list", App\Http\Controllers\Categories\InsertController::class);
});

Route::get("upload-file", function(Request $request){
  
   // return 1;
    //$url = 'http://127.0.0.1:8000/storage/file/1682970578.png';
   // $result = mime_content_type($url);
  // return var_dump($result);
   $mime = Storage::mimeType('public/file/1682970578.png');
 $size = Storage::size('public/file/1682970578.png');
   // $file = 'E:\project\company\server\storage\app\public\file\3222.jpg';
//   return $fileData = exif_read_data($file);
    ob_start();
    header("Content-Type: " . $mime);
    header("Content-Length: " . $size);
    readfile('E:\project\company\server\storage\app\public\file\1682970578.png');
    ob_end_flush();

   $contents = Storage::url('public/file/1682970578.png');
   return   $contents;
    $d = "http://127.0.0.1:8000/storage/file/1682970578.png";
   return file_get_contents($d);

          // $filenameWithExt = $request->file('file')->getClientOriginalName();
            
           // $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            
           // $extension = $request->file('file')->getClientOriginalExtension();
            
            //$fileNameToStore = time().'.'.$extension;
            
           // $path = $request->file('file')->storeAs('public/file',$fileNameToStore);

            //return response()->json(["status" => "success", "url" => "http://127.0.0.1:8000/storage/file/".$fileNameToStore ]);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
