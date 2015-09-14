<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/9/14
 * Time: 17:34
 */

header("Access-Control-Allow-Origin:*");

//$id=$_GET['id'];
//$name=$_GET['name'];
//$price=$_GET['price'];
//$sub=$_GET['sub'];
//$money=$_GET['money'];

$data=$_POST["shopping"];
//print_r($data) ;
$arr=json_encode(json_decode($data,true));

file_put_contents("json/shopping.json",$arr);
//$old_id=$id;
//$old_name=$name;
//$old_price=$price;
//$old_sub=$sub;
//$old_money=$money;
//$data=array(
//    "id"=>$old_id,
//    "name"=>$old_name,
//    "price"=>$old_price,
//    "sub"=>$old_sub,
//    "money"=>$old_money
//);
//session_start();
//$_SESSION["json"]=json_encode($data);
//
////echo json_encode($data);
//echo $_SESSION["json"];
//
//file_put_contents("json/shopping.json",$_SESSION["json"]);
//echo json_encode($_SESSION["json"]);
