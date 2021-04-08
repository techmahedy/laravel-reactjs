<?php

namespace App\Http\Controllers\API;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index(Project $project)
    {
        return response()->json([
            'status' => 200,
            'data' => $project->withCount('tasks')->get()
        ]);
    }
}
