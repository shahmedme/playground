<?php
    $link = mysqli_connect('localhost', 'root', '', 'ibank');
    $query = "SELECT * FROM customers";

    $result = mysqli_query($link, $query);
?>

<html lang="en">
<head>
    <?php require "../generator/partial/common-meta.php" ?>
    <?php require "../generator/partial/styles.php" ?>
</head>
<body>
    <div class="container">
        <table class="table table-striped mt-5">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <?php while($row = mysqli_fetch_assoc($result)) { ?>
                    <tr>
                        <th><?php echo $row['acc_no'] ?></th>
                        <td><?php echo $row['first_name'] ?></td>
                        <td><?php echo $row['last_name'] ?></td>
                        <td><?php echo $row['email_id'] ?></td>
                        <td><?php echo $row['balance'] ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>

    <?php require "../generator/partial/scripts.php" ?>
</body>
</html>