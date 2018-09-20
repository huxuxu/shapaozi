<?php

include_once "comment.php";

$sql = "SELECT * FROM timenew";

$result = mysqli_query($conn,$sql);

$arr = array();

while ($row = mysqli_fetch_array($result)) {
    $data = array();
    $data['id'] = $row['id'];
    $data['id'] = $row['id'];
    $data['title'] = $row['title'];
    $data['source'] = $row['source'];
    $data['image_url'] = $row['image_url'];
    $data['media_avatar_url'] = $row['media_avatar_url'];
    $data['video_duration_str'] = $row['video_duration_str'];
    array_push($arr,$data);
}
$json = json_encode(array("data" => $arr));

echo $json;

mysqli_close($conn);