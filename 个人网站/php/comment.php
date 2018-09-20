<?php
$conn = mysqli_connect('localhost','root','');
mysqli_select_db($conn,'cangku');
mysqli_query($conn,'set names utf8');