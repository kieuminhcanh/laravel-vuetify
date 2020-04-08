<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $fillable = [
        'title', 'description', 'content', 'thumbnail', 'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo('App\User');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany('App\Category');
    }

    public function comments(): HasMany
    {
        return $this->hasMany('App\Comment');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany('App\Tag');
    }
}
