<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\RegisterRequest;
use App\Repository\Auth\RegisterRepository;
use Illuminate\Support\Facades\Hash;


class RegisterController extends Controller
{
    public function __invoke(RegisterRequest $request, RegisterRepository $register)
    {
        $data = [];
        try {

            $data = $register->create([
                    "name"      => $request->name,
                    "email"     => $request->email,
                    "password"  => Hash::make($request->password)
                ]);
            return response()->json(["status" => "success", "data" => $data ]);    
            
        } catch (\Exception $exception) {

            return response()->json(["status" => "error", "message" => "server error"],500);
        }
    }
}
