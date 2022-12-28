<?php
require('../include/connection.inc.php');
require('../include/functions.inc.php');

if(isset($_POST['id'])){

	if(isset($_SESSION['ADMIN_LOGIN']) && $_SESSION['ADMIN_LOGIN']!=''){

	}else{
		header('location:login');
		die();
	}

	$id=get_safe_value($con,$_POST['id']);
	// echo mysqli_query($con,"delete from product_attributes where id='$id'");
	mysqli_query($con,"delete from product_attributes where id='$id'");
}
?>