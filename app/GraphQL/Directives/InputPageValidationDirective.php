<?php

namespace App\GraphQL\Directives;

use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Schema\Directives\ValidationDirective;

class InputPageValidationDirective extends ValidationDirective
{
    /**
     * @return mixed[]
     */
    public function rules(): array
    {
        return [
            'title' => ["required"],
            'slug' => [Rule::unique('posts', 'slug')->ignore($this->args['id'], 'id')],
        ];
    }
}
