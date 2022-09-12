<?php

$a = $_GET['a'];
$b = $_GET['b'];
$c = $_GET['c'];

$result = $a**3 + $b*$c - $a/$b;

echo json_encode($result);

?>