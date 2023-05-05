<?php

namespace App\service\Auth;   

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginServiceWithJwt
{
    public function handle(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $token = auth('api')->attempt($credentials);
        if (!$token) {
            return 2;
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
    }
}