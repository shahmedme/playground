<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include "generator/partial/common-meta.php";
        require "generator/partial/styles.php";
    ?>
</head>
<body>
    <div class="container">
        <h1>Sign Up From Here</h1>
        <form action="signupsuccess.php" method="GET">
            <div class="form-group">
                <label for="email">Enter your email</label>
                <input type="email" class="form-control" id="email" name="email_field">
            </div>
            <div class="form-group">
                <label for="password">Enter your password</label>
                <input type="password" class="form-control" id="password" name="password_field">
            </div>
            <button class="btn btn-info">Click Here to Sign Up</button>
        </form>
    </div>

    <?php require "generator/partial/scripts.php" ?>
</body>
</html>