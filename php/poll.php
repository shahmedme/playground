<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include "generator/partial/common-meta.php";
        require "generator/partial/styles.php";
    ?>
</head>
<body>
    <section class="poll">
        <div class="container">
            <h1>Which city do you like most?</h1>
            <form action="poll_success.php" method="GET">
                <div class="form-check">
                    <input type="checkbox" name="poll[]" value="dhaka" id="dhaka" class="form-check-input">
                    <label for="dhaka">Dhaka</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="poll[]" value="tangail" class="form-check-input" id="tangail">
                    <label for="tangail">Tangail</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="poll[]" value="sylhet" class="form-check-input" id="sylhet">
                    <label for="sylhet">Sylhet</label>
                </div>
                <button class="btn btn-success">Vote</button>
            </form>
        </div>
    </section>

    <?php require "generator/partial/scripts.php"; ?>
</body>
</html>