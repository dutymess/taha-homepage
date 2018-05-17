<?php

namespace App\Http\Controllers;


use App\Log;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * @return string
     */
    public function index()
    {
        return view('index');
    }



    /**
     * @param Request $request
     *
     * @return bool
     */
    public function log(Request $request)
    {
        $command   = trim($request->command);
        $was_valid = boolval($request->was_valid);

        Log::add($command, $was_valid);
        return "Log stored! Type 'privacy' for more information.";
    }
}
