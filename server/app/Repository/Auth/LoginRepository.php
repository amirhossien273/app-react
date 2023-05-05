<?php

namespace App\Repository\Auth;

use App\Models\User;
use App\Repository\Auth\LoginRepositoryInterface;
use App\Repository\BaseRepository;
use Illuminate\Support\Collection;

class LoginRepository extends BaseRepository implements LoginRepositoryInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}