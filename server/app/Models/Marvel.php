<?php

namespace App\Models;

use DateTime;
use Unirest\Request as Unirest;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class Marvel {
    private static $timestamp;

    public static function call($params) {
        try {
            $result =  Unirest::get( env('MARVEL_API_URL') . $params . self::generate_url() );

            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    private static function generate_url() {
        $date = new DateTime();

        self::$timestamp = $date->getTimestamp();
    
        $hash = md5( self::$timestamp . ( env( 'PRIVATE_KEY' ) . env( 'PUBLIC_KEY' ) ) ) ;

        $request_url = '?ts=' . self::$timestamp . '&apikey=' . env( 'PUBLIC_KEY') . '&hash=' . $hash;

        return $request_url;
    }
}