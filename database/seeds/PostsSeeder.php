<?php

use App\User;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $users = User::all();


        // foreach ($users as $user) {
        //     factory(App\Category::class)->create()->each(function ($category) use ($user) {
        //         $posts = factory(App\Post::class, 10)->make();
        //         $user->posts()->saveMany($posts);

        //         $category->posts()->attach($posts);
        //     });
        // }
    }
}
