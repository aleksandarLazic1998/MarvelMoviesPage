<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\Marvel;

class APIController extends BaseController
{
    public function index() {
        $res = Marvel::call('/characters');

        return response()->json($res);
    }
}
