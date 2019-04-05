<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Software page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
    include("./includes/styles.php");
    ?>
</head>

<body>
    <!-- header -->
    <?php
    include("./includes/header.php");
    ?>

    <div class="resentProjects">
        <span class="hilightColor"><b>Software</b></span>
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="box2 col-md-6" style="margin-bottom: 10px;">
                <div id="f1_container">
                    <div id="f1_card" class="shadow">
                        <div class="front face">
                            <a href="#">
                                <div class="tag">Test Article 01</div>
                                <img src="./images/covers/pic00.jpg" />
                            </a>
                        </div>
                        <a href="#">
                            <div class="back face center">
                                <h3>Title</h3>
                                <p>Short description...</p>
                                <p>Click to read more...</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div class="box2 col-md-6" style="margin-bottom: 10px;">
                <div id="f1_container">
                    <div id="f1_card" class="shadow">
                        <div class="front face">
                            <a href="#">
                                <div class="tag">Test Article 02</div>
                                <img src="./images/covers/pic00.jpg" />
                            </a>
                        </div>
                        <a href="#">
                            <div class="back face center">
                                <h3>Title</h3>
                                <p>Short description...</p>
                                <p>Click to read more...</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <!-- footer -->
    <?php
    include("./includes/footer.php");
    ?>
</body>

</html>