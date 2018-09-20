<?php
$id = $_POST['id'];
$titles = $_POST['titles'];
$context = $_POST['context'];
$images = $_POST['images'];
$contname =$_POST['contname'];
$times =$_POST['times'];
$read =$_POST['read'];
$like =$_POST['like'];
include_once 'comment.php';
$sql = "INSERT INTO boke VALUES({$id},'{$titles}','{$context}','{$images}','{$contname}','{$times}','{$read}','{$like}')";

$res = mysqli_query($conn,$sql);

if ($res) {
	echo 1;
}else{
	echo 0;
}

mysqli_close($conn);