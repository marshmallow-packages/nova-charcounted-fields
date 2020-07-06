<?php

namespace Marshmallow\CharcountedFields;

use Laravel\Nova\Fields\Field;

class FieldCounted extends Field
{
    public function minChars(int $characters)
    {
        return $this->withMeta(['minChars' => $characters]);
    }

    public function maxChars(int $characters)
    {
        return $this->withMeta(['maxChars' => $characters]);
    }

    public function warningAt(int $characters)
    {
        return $this->withMeta(['warningAt' => $characters]);
    }
}
