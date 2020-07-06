# Nova Charcounter Fields
Text and textarea fields with a character counter for Laravel Nova.

### Installation
You can require this package using composer:

```composer require elevate-digital/nova-charcounted-fields```

# Usage

You can add the field with a resolver as follows:
```
use Marshmallow\CharcountedFields\TextCounted;
use Marshmallow\CharcountedFields\TextareaCounted;

TextCounted::make('Meta title')
```

![Image of character counter](docs/screenshot.jpg)

You can use the text and textarea fields with charactercounters on you Nova model. The max number of characters aren't enforced, but just encouraged with warning colors and the counter. (You could enforce the max number of characters with Nova's built in _rules_).

```php
TextCounted::make('Meta title')
	->minChars(30)
    ->maxChars(60)
    ->warningAt(50),

TextareaCounted::make('Meta description')
	->minChars(70)
    ->maxChars(160)
    ->warningAt(150),
```

The maxChars and warningAt are both optional. The color of the counter will change when the max or warningAt limit is reached.
![Image of character counter with indication](docs/screenshot-errors.jpg)
