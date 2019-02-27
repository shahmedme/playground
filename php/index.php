<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include "generator/partial/common-meta.php";
        require "generator/partial/styles.php";
    ?>
</head>
<body>
    <!-- <div class="container">
        <h1>Enter Email & Password to Login</h1>
        <form action="login.php" method="GET">
            <div class="form-group">
                <label for="email">Enter your email</label>
                <input class="form-control" type="email" id="email" name="email_field">
            </div>
            <div class="form-group">
                <label for="password">Enter your password</label>
                <input class="form-control" type="password" id="password" name="password_field">
            </div>
            <button class="btn btn-success">Log In</button>
        </form>
        <a href="signup.php">Sign Up</a>
    </div> -->

    <?php
        $str = "My name is";

        function myFn(){
            global $str;
            $str = $str . " Rayan";
        }
        myFn();
        echo $str;
        echo "<br>";

        $str = "Hi, there";
        $bar = '$str';
        echo "$bar";
    ?>

    <?php require "generator/partial/scripts.php"; ?>
</body>
</html>