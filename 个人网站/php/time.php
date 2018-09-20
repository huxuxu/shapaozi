<?php
$id = $_POST['id'];
$title = $_POST['title'];
$source = $_POST['source'];
$image_url = $_POST['image_url'];
$media_avatar_url = $_POST['media_avatar_url'];
$video_duration_str = $_POST['video_duration_str'];

include_once 'comment.php';
$sql = "INSERT INTO timenew VALUES ({$id},'{$image_url}','{$media_avatar_url}','{$title}','{$source}','{$video_duration_str}')";
$res = mysqli_query($conn,$sql);

if ($res) {
	echo 1;
}else{
	echo 0;
}

mysqli_close($conn);