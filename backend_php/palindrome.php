<?php

$palindrome = "false";

$string =  $_GET["string"];
$string_array = str_split($string);

$reversed_string_array = array_reverse($string_array);

if($string_array == $reversed_string_array){
    $palindrome = "true";
}else{
    $palindrome = "false";
};

$array = [
    "palindrome" => $palindrome
];

echo json_encode( $array);

?>