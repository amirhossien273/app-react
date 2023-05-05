<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
		'url',
        'parent_id',
    ];


    public function chaildCategory()
    {
        return $this->hasMany(Category::class, "parent_id", "id");
    }
}
