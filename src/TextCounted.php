<?php

namespace Marshmallow\CharcountedFields;

use Laravel\Nova\Fields\Field;
use Marshmallow\CharcountedFields\MetaMethods;

class TextCounted extends Field
{
    use MetaMethods;
    /**
     * The field's component.
     * @var string
     */
    public $component = 'text-counted';
}
