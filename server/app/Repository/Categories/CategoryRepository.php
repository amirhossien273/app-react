<?php

namespace App\Repository\Categories;

use App\Models\Category;
use App\Repository\Categories\CategoryRepositoryInterface;
use App\Repository\BaseRepository;
use Illuminate\Support\Collection;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }

    public function allCategories(Type $var = null)
    {
      return $this->model->whereNull("parent_id")->with("chaildCategory")->get();
    }
}