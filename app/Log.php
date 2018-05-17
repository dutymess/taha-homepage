<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    /**
     * @param $command
     *
     * @return bool
     */
    public static function add($command, $was_valid)
    {
        $record = self::where('command', $command)->first();

        if (!$record) {
            $record          = new self();
            $record->command = $command;
        }

        $record->count++;
        $record->was_valid = $was_valid;

        return $record->save();
    }


}
