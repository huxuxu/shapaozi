<?php
    header("content-type:text/html;charset=utf-8");
    $id = intval($_POST["id"]);
    include_once 'comment.php';
    $sql = "SELECT * FROM boke WHERE id = {$id}";
    $res = mysqli_query($conn,$sql);

    $arr = array();

    while ($row = mysqli_fetch_array($res)) {
        $data = array();
        $data['contname'] = $row['contname'];
        $data['read'] = $row['read'];
        $data['like'] = $row['like'];
        $data['time'] = $row['time'];
        $data['titles'] = $row['titles'];
        array_push($arr,$data);
    }
    $json = json_encode(array("data" => $arr));
    echo $json;
    mysqli_close($conn);