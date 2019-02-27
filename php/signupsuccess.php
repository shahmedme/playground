<?php
    require "dbconfig.php";

    $email = $_GET['email_field'];
    $password = $_GET['password_field'];

    if (!empty($email) && !empty($password)) {
        if (isset($email) && isset($password)) {
            $accCreationQuery = "INSERT INTO user (email, password) VALUES ('$email', '$password')";
            $accCheckingQuery = "SELECT * FROM user WHERE email = '$email'";

            $checkResult = mysqli_query($db_link, $accCheckingQuery);

            if ($checkResult->num_rows == 0) {
                $result = mysqli_query($db_link, $accCreationQuery);

                if ($result) {
                    echo 'Account created successully. login <a href="index.php" class="btn btn-info">Here</a>';
                }
                else {
                    echo 'something wrong with account creation';
                }
            }
            else {
                echo "Already have an account with this email";
            }
        }
        else {
            echo "Email and password can't be null";
        }
    }
    else {
        echo "Please enter email and password";
    }
?>