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
    public function store(Request $request)
    {   
        // $formData = $request->all();
        // $validator = \Validator::make($formData, [
        //     'name' => 'required',
        //     'description' => 'required',
        //     'user_id' => 'required'
        // ], [
        //     'name.required' => 'Please give project name',
        //     'description.required' => 'Please give project description',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => $validator->getMessageBag()->first(),
        //         'errors' => $validator->getMessageBag(),
        //     ]);
        // }

        $project = new Project;
        $project->name = $request->data['name'];
        $project->description = $request->data['description'];
        $project->user_id = $request->data['user_id'];
        $project->save();

        return response()->json([
            'status' => 200,
            'success' => 'Data saved successfully'
        ]);
    }
}
