<?php

namespace App;

class Project
{

    public function __construct(protected string $title)
    {
    }

    public function getTitle(): string
    {
        return $this->title;
    }

}
