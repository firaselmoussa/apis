<?php

$current_month = $_GET['month'];
$current_day = $_GET['day'];

$christmas_month = 12;
$christmas_day = 25;

$christmas_month -= $current_month;
$christmas_day-= $current_day;

if($christmas_day <0){
    $christmas_day *= -1;
    $christmas_month -= 1;
}

$array = [
    "month" => $christmas_month,
    "day" => $christmas_day,
];

echo json_encode($array);

?>