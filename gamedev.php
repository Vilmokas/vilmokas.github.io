<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Gamedev page</title>
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
        <span class="hilightColor"><b>Game Development</b></span>
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="box2 col-md-6" style="margin-bottom: 10px;">
                <div id="f1_container">
                    <div id="f1_card" class="shadow">
                        <div class="front face">
                            <a href="./article.php?id=1">
                                <div class="tag">AR Space Shooter</div>
                                <img src="./images/covers/pic01.png" />
                            </a>
                        </div>
                        <a href="./article.php?id=1">
                            <div class="back face center">
                                <h3>"AR" Space Shooter</h3>
                                <p>This is a simple game made with Unity engine. I just wanted to make a game with AR image detection technology...</p>
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
                            <a href="./article.php?id=2">
                                <div class="tag">Globla Game Jam 2019</div>
                                <img src="./images/covers/pic02.png" />
                            </a>
                        </div>
                        <a href="./article.php?id=2">
                            <div class="back face center">
                                <h3>Global Game Jam 2019</h3>
                                <p>Made this game with @Dariuscxz and @dovker in Global Game Jam 2019. I'd say it turned out pretty well, even tho...</p>
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