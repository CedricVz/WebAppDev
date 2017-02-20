<?php
$error = false;
  if(isset($_POST['login'])){
  $username = preg_replace('/[^A-Za-z]/','',$_POST['username']);
  $password = md5 ($_POST['password']);
                           
  if(file_exists('../users/' . $username . '.xml')){
  $xml = new simpleXMLElement('../users/' . $username . '.xml', 0, true);
    if ($password == $xml->password){
      session_start();
      $_SESSION ['username'] = $username;
      header('Location:index.php');
      die;
    }
  }  
  $error = true;
}
?> 
<div class="home-window">
  <div class="membership-box">
  <p style= "color:white">Hello!</p>
  <form style="color:white" method="post" action="">
    <p>Username: <input type="text" name="username" size="20"></p>
    <p>Password: <input type="text" name="password" size="20"></p>
    <?php
      if($error){
        echo '<p>Invalid Username and/or Password</p>';
      }
    ?>
    <p><input type="submit" name="login" value="Login"></p>    
  </form>
  <a href="register.php" >Register</a>
</div>
</div>

