<?php

namespace Marshmallow\CharcountedFields;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-charcounted-fields', __DIR__ . '/../dist/js/nova-charcounted-fields.js');
            Nova::style('nova-charcounted-fields', __DIR__ . '/../dist/css/nova-charcounted-fields.css');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
