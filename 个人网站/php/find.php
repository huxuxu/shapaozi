<?php 
    $title = $_POST['titles'];
    include_once "comment.php";
    $sql = "SELECT * FROM boke WHERE titles = '{$title}'";
    $res = mysqli_query($conn,$sql);

    $arr = array();

    while ($row = mysqli_fetch_array($res)) {
        $data = array();
        $data['id'] = $row['id'];
        $data['context'] = $row['context'];
        $data['images'] = $row['images'];
        $data['contname'] = $row['contname'];
        $data['read'] = $row['read'];
        $data['like'] = $row['like'];
        $data['time'] = $row['time'];
        array_push($arr,$data);
    }
    $json = json_encode(array("data" => $arr));

    echo $json;
    mysqli_close($conn);