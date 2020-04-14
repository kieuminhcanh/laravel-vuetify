<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Page extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'slug', 'description', 'content', 'thumbnail', 'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo('App\User');
    }
}
