<?php
    require "dbconfig.php";

    $options = $_GET['poll'];
    
    $dhaka = 0;
    $tangail = 0;
    $sylhet = 0;

    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Dhaka'")) as $vote) {
        $dhaka = $vote;
    }
    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Tangail'")) as $vote) {
        $tangail = $vote;
    }
    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Sylhet'")) as $vote) {
        $sylhet = $vote;
    }

    foreach ($options as $selection) {
        switch ($selection) {
            case 'dhaka':
                $dhaka++;
                mysqli_query($db_link, "UPDATE poll SET vote = $dhaka WHERE selection = 'Dhaka'");
                break;
            case 'tangail':
                $tangail++;
                mysqli_query($db_link, "UPDATE poll SET vote = $tangail WHERE selection = 'Tangail'");
                break;
            case 'sylhet':
                $sylhet++;
                mysqli_query($db_link, "UPDATE poll SET vote = $sylhet WHERE selection = 'Sylhet'");
                break;
        }
    }
?>

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
        <h1>Vote Count</h1>
        <div class="count-wrapper">
            <h4>
                Dhaka:
                <?php
                    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Dhaka'")) as $vote) {
                        echo $vote;
                    }
                ?>
            </h4>
            <h4>
                Tangail:
                <?php
                    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Tangail'")) as $vote) {
                        echo $vote;
                    }
                ?>
            </h4>
            <h4>
                Sylhet:
                <?php
                    foreach (mysqli_fetch_assoc(mysqli_query($db_link, "SELECT vote FROM poll WHERE selection = 'Sylhet'")) as $vote) {
                        echo $vote;
                    }
                ?>
            </h4>
        </div>
        <a href="index.php">Go to Home</a>
    </div>


    <?php require "generator/partial/scripts.php"; ?>
</body>
</html>

