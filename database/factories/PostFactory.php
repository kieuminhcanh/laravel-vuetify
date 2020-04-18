<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use App\Comment;
use App\Page;
use App\Post;
use App\Tag;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Category::class, function (Faker $faker) {
    $name = $faker->words(3, true);
    $slug =  Str::of($name)->slug('-');

    return [
        'name' => $name,
        'slug' =>  $slug,
    ];
});

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->sentence;
    $slug =  Str::of($title)->slug('-');

    return [
        'title' => $title,
        'slug' =>  $slug,
        'description' => $faker->paragraph,
        'content' => $faker->paragraph,
        'thumbnail' => $faker->imageUrl("300", "300"),
    ];
});

$factory->define(Page::class, function (Faker $faker) {
    $title = $faker->sentence;
    $slug =  Str::of($title)->slug('-');

    return [
        'title' => $title,
        'slug' =>  $slug,
        'description' => $faker->paragraph,
        'content' => $faker->paragraph,
        'thumbnail' => $faker->imageUrl("300", "300"),
    ];
});

$factory->define(Tag::class, function (Faker $faker) {
    $name = $faker->words(3, true);
    $slug =  Str::of($name)->slug('-');

    return [
        'name' => $name,
        'slug' =>  $slug,
    ];
});

$factory->define(Comment::class, function (Faker $faker) {
    $content = $faker->sentence;

    return [
        'content' => $content
    ];
});
