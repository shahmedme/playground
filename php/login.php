<?php
    error_reporting(0);
    require "dbconfig.php";

    if (!empty($_GET['email_field']) && !empty($_GET['password_field'])) {
        if (isset($_GET['email_field']) && isset($_GET['password_field'])) {

            $email = $_GET['email_field'];
            $password = $_GET['password_field'];

            $query = "SELECT * FROM user WHERE email = '$email' && password = '$password'";

            $result = mysqli_query($db_link, $query);

            if ($result->num_rows == 1) {
                header("Location: poll.php");
            }
            else if ($result->num_rows == 0) {
                echo "Incorrect username or password. No such account";
            }
            else {
                echo "something went wrong. You are not permitted to login.";
            }
        }
    }
?>