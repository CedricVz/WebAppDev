<?php
$error = array();
if(isset($_POST['register'])){
  $username = preg_replace('/[^A-Za-z]/','',$_POST['username']);
  $email = $_POST['email'];
  $password = $_POST['password'];
  $c_password = $_POST['c_password'];
                           
  if(!file_exists('../users/' . $username . '.xml')){
   $errors[] = 'Username already exists';
    }
  if ($email == ''){
    $errors = [] = 'Invalid email';
  }else{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }
  if ($password == ''||$c_password = ''){
    $errors = [] = 'Invalid password';
  }
  if ($password != $c_password){
    $errors = [] = 'Passwords dont match';
  }
  if (count($errors == 0)){
    $xml = new simpleXMLElement ('<user></user>');
    $xml->addChild('password', md5($password));
    $xml->addChild('email', $email);
    $xml->asXML('../users' . $username . '.xml');
    
  }
}  
?>