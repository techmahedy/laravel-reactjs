<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('projects','API\ProjectController');
Route::apiResource('tasks','API\TaskController');