<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>About page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
    include("./includes/styles.php");
    ?>
</head>

<body>
    <?php
    //header
    include("./includes/header.php");
    
    //article
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        if (file_exists('./articles/' . $id . '.php')){
            include('./articles/' . $id . '.php');
        }
        else {
            echo '<div class="hilightColor" style="height: 500px; text-align: center; margin-top: 10%;">Article Not Found</div>';
        }
    } else {
        echo '<div class="hilightColor" style="height: 500px; text-align: center; margin-top: 10%;">Article Not Found</div>';
    }

    //footer
    include("./includes/footer.php");
    ?>
</body>

</html>