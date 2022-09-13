<?php

$pass = $_GET['password'];

$strong = false;
$long = false;
$uppercase = false;
$lowercase = false;
$number = false;
$special_char = false;

if(strlen($pass) >= 12 ){
    $long = true;
}
if(preg_match('/[A-Z]/', $pass)){
    $uppercase = true;
}
if(preg_match('/[a-z]/', $pass)){
    $lowercase = true;
}
if(preg_match('/[0-9]/', $pass)){
    $number = true;
}
if(preg_match('/[\'^�$%&*()}{@#~?><>,|=_+�-]/', $pass)){
    $special_char = true;
}

if(strlen($pass) >= 12  AND preg_match('/[A-Z]/', $pass) AND preg_match('/[a-z]/', $pass) AND preg_match('/[0-9]/', $pass) AND preg_match('/[\'^�$%&*()}{@#~?><>,|=_+�-]/', $pass)){
    $strong = true;
}


$strength = [
    "Strong" => $strong,
    "Long" => $long,
    "Uppercase" => $uppercase,
    "Lowercase" => $lowercase,
    "number" => $number,
    "Special char" => $special_char
];


echo json_encode($strength);

?>