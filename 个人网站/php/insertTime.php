<?php
$image_url = $_POST['image_url'];
$title = $_POST['title'];
$media_avatar_url = $_POST['media_avatar_url'];
$source = $_POST['source'];
$video_duration_str =$_POST['video_duration_str'];
include_once 'comment.php';
$sql = "INSERT INTO timenew VALUES('{$image_url}','{$media_avatar_url}','{$title}','{$source}','{$video_duration_str}')";

$res = mysqli_query($conn,$sql);

if ($res) {
	echo 1;
}else{
	echo 0;
}

mysqli_close($conn);