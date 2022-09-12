<?php

$pass = $_GET['password'];

$strong = false;

if(strlen($pass) >= 12  AND preg_match('/[A-Z]/', $pass) AND preg_match('/[a-z]/', $pass) AND preg_match('/[0-9]/', $pass) AND preg_match('/[\'^�$%&*()}{@#~?><>,|=_+�-]/', $pass)){
    $strong = true;
}

echo json_encode($strong);

?>