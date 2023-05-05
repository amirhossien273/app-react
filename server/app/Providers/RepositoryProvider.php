<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\Auth\RegisterRepository;
use App\Repository\Auth\RegisterRepositoryInterface;
use App\Repository\Categories\CategoryRepository;
use App\Repository\Categories\CategoryRepositoryInterface;
use App\Repository\BaseRepository;
use App\Repository\EloquentRepositoryInterface;


class RepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);

        $this->app->bind(RegisterRepositoryInterface::class, RegisterRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
       
    }
}
