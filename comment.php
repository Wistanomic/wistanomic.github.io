<?php
 
 // Check If form submitted, insert form data into users table.
 if(isset($_POST['user'])) {
    $user = $_POST['user'];


   
    $decoded = json_decode($user,true);
    $name = $decoded['names'];
    $email = $decoded['email'];
    $feedback = $decoded['msg'];
     // include database connection file
     include_once("config.php");
             
     // Insert user data into table
     $result = mysqli_query($mysqli, "INSERT INTO comment(name,email,feedback) VALUES('$name','$email','$feedback')");
     
     // Show message when user added
     echo "Success";
     
 }
 ?>