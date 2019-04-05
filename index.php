<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Index page</title>
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
    <div class="content">
        <div class="box2">
            <div id="cf1">
                <img class="bottom" src="./images/banner01.jpg" />
                <img class="top" src="./images/banner02.jpg" />
            </div>
        </div>
        <div class="resentProjects">
            <span class="hilightColor"><b>What do I exactly do?</b></span>
            <hr>
        </div>
        <div class="container">
            <div class="row">
                <div class="whatDo col-md-4">
                    <a class="btn btn-xl btn-social-icon icon">
                        <span class="fa fa-cog icon2"></span>
                    </a>
                    <br>
                    <span class="hilightColor2"><b>Software</b></span>
                    <p>As a software engineering student I create some simple desktop and android apps for my asignments at college.</p>
                </div>
                <div class="whatDo col-md-4">
                    <a class="btn btn-xl btn-social-icon icon">
                        <span class="fa fa-pencil icon2"></span>
                    </a>
                    <br>
                    <span class="hilightColor2"><b>Digital Art</b></span>
                    <p>Drawing was my hobby whole life. Even tho my drawing skills aren't that good, I try to apply them in software or games I make.</p>
                </div>
                <div class="whatDo col-md-4">
                    <a class="btn btn-xl btn-social-icon icon">
                        <span class="fa fa-gamepad icon2"></span>
                    </a>
                    <br>
                    <span class="hilightColor2"><b>Game Development</b></span>
                    <p>Combining my programming and drawing skills, I make games with Unity engine. This is the field that is most exciting for me.</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="resentProjects">
            <span class="hilightColor"><b>Check out my latest projects</b></span>
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
                                    <div class="tag">Global Game Jam 2019</div>
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
    </div>
    <!-- footer -->
    <?php
    include("./includes/footer.php");
    ?>
</body>

</html>