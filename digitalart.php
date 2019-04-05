<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Gallery page</title>
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
        <span class="hilightColor"><b>Digital Art</b></span>
        <hr>
    </div>
    <div class="gallery container">
        <div class="row">
            <div class="col-lg-4 col-sm-6 padding-0">
                <a tabindex="1" class="verti">
                    <div class="tag-noRound">Game Character<br>
                        <span>
                            Traditional art drawing of my character in TERA Online.
                        </span>
                    </div>
                    <img src="./images/gallery/picture1.jpg">
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 padding-0">
                <a tabindex="2" class="hori">
                    <div class="tag-noRound">AR Space Shooter<br>
                        <span>
                            GIF from a game that I made in unity.
                        </span>
                    </div>
                    <img src="./images/gallery/picture2.gif">
                </a>
                <a tabindex="3" class="hori">
                    <div class="tag-noRound">Skull Tattoo<br>
                        <span>
                            Simple black and white tattoo/t-shirt idea.
                        </span>
                    </div>
                    <img src="./images/gallery/picture4.png">
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 padding-0">
                <a tabindex="4" class="verti">
                    <div class="tag-noRound">Asta fanart<br>
                        <span>
                            Fan art of a character in an anime called Black Clover.
                        </span>
                    </div>
                    <img src="./images/gallery/picture3.png">
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 padding-0">
                <a tabindex="5" class="verti">
                    <div class="tag-noRound">GameJam2019<br>
                        <span>
                            Pixel art from a game made in Global Game Jam 2019.
                        </span>
                    </div>
                    <img src="./images/gallery/picture5.jpg"></a>
            </div>
        </div>
    </div>
    <!-- footer -->
    <?php
    include("./includes/footer.php");
    ?>
</body>

</html>