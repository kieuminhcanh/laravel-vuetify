<?php

use Illuminate\Support\Facades\Route;
use Faker\Factory;

Route::any('/test', function () {
  $ret = exec("node console.log('hello world')" . ' 2>&1', $out, $err);
  dd($ret);
  // $faker = Faker\Factory::create();

  // return $faker->randomHtml(1,1);
});
Route::any('/{any}', "VueController")->where('any', '.*');
