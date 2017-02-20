<?php
include ("./includes/header.php");
include ("./includes/menu.php");
include ("./includes/side-menu.php");

if (isset($_GET["page"])){
  
  $page = $_GET["page"];
  $filename = "./includes/" . $page . '.php';
  
  if(file_exists($filename)){
    include $filename;
  }else {
    include './includes/home.php';
  }
}else {
    include './includes/home.php';
  }
  
include ("./includes/footer.php");
?>
