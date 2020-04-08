<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    if (env('APP_DEBUG')) {
      DB::listen(function ($query) {
        // $query->sql
        // $query->bindings
        // $query->time

        $q = str_replace(array('?'), array('\'%s\''), $query->sql);

        $bindings = array_map(function ($value) {
          if (is_a($value, 'DateTime')) {
            return $value->format('Y-m-d H:i:s');
          } else {
            return $value;
          }
        }, $query->bindings);


        DB::listen(function ($query) use($q, $bindings) {
          File::append(
            storage_path('/logs/query.log'),
            $q . ' [' . implode(', ', $bindings) . ']' . PHP_EOL
          );
        });
      });
    }
  }
}
