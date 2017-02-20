<?php

include ("./includes/header.html");
include ("./includes/menu.html");
include ("./includes/side-menu.html");
if ($_GET["page"] == "sources"){
	
	include ("./includes/sources.html");
	
} else if ($_GET["page"] == "about"){
	
	include ("./includes/about.html");
	
} else if ($_GET["page"] == "absorption-factor"){
	
	include ("./includes/absorption-factor.php");
	
}else if ($_GET["page"] == "rt60"){
	
	include ("./includes/rt60.html");
	
}else if ($_GET["page"] == "spl"){
	
	include ("./includes/spl.html");
	
}else{
	
	include ("./includes/home.html");
}

include ("./includes/footer.html");
	
?>
