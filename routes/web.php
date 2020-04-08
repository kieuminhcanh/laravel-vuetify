<?php

use Illuminate\Support\Facades\Route;
use Faker\Factory;

Route::any('/test', function () {
  $faker = Faker\Factory::create();

  return $faker->randomHtml(1,1);
});
Route::any('/{any}', "VueController")->where('any', '.*');
