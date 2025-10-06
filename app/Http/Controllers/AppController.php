<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AppController extends BaseController
{

    public function blog(): \Illuminate\Contracts\View\Factory|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('blog');
    }

    public function portfolio(): \Illuminate\Contracts\View\Factory|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('portfolio');
    }

}
