<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\service\Auth\LoginServiceWithJwt;
use App\Http\Requests\Auth\LoginRequest;


class LoginController extends Controller
{
    public function __invoke(LoginRequest $request, LoginServiceWithJwt $login)
    {
       
       return $login->handle($request);
    }
}
