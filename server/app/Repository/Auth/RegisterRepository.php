<?php

namespace App\Repository\Auth;

use App\Models\User;
use App\Repository\Auth\RegisterRepositoryInterface;
use App\Repository\BaseRepository;
use Illuminate\Support\Collection;

class RegisterRepository extends BaseRepository implements RegisterRepositoryInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}