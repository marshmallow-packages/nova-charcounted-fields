<?php

namespace Marshmallow\CharcountedFields;

use Laravel\Nova\Fields\Textarea;
use Marshmallow\CharcountedFields\MetaMethods;

class TextareaCounted extends Textarea
{
    use MetaMethods;

    /**
     * The field's component.
     * @var string
     */
    public $component = 'textarea-counted';

    /**
     * The number of rows used for the textarea.
     *
     * @var int
     */
    // public $rows = 10;
}
