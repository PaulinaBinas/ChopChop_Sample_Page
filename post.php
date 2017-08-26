<?php
    if($_SERVER("REQUEST_METHOD") == "POST")
    {
        $name = htmlspecialchars($_REQUEST['name']); 
        $email = htmlspecialchars($_REQUEST['email']);
        $email = htmlspecialchars($_REQUEST['email']);
    }
?>