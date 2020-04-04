<?php

use Illuminate\Support\Facades\Route;

Route::any('/{any}', "VueController")->where('any', '.*');
