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
    <!-- header -->
    <?php
    include("./includes/header.php");
    ?>

    <div class="container">
        <div class="row about">
            <div class="col-md-4"><img src="./images/profile.jpg"></div>
            <div class="col-md-8">
                <span class="hilightColor"><b>About Me</b></span>
                <p>
                    22 year old software engineering student from Lithuania. Currently interested in Web security and Game Developement. Digital art is just my hobby, but it helps to create some simple assets for my apps, games and more.
                </p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-5 " style="margin-bottom: 20px;">
                <span class="hilightColor"><b>Skills</b></span><br>

                <span class="hilightColor2"><b>Programming</b></span><br>
                <script>
                    writeBubbles(6, "C#");
                    writeBubbles(3, "C++");
                    writeBubbles(4, "Java");
                </script>
                <br>
                <span class="hilightColor2"><b>Game Development</b></span><br>
                <script>
                    writeBubbles(6, "Unity 3D");
                </script>
                <br>
                <span class="hilightColor2"><b>Web</b></span><br>
                <script>
                    writeBubbles(4, "HTML 5 & CSS 3");
                    writeBubbles(4, "Javascript & Jquery");
                    writeBubbles(5, "Bootstrap");
                </script>
                <br>
                <span class="hilightColor2"><b>Other</b></span><br>
                <script>
                    writeBubbles(5, "SQL");
                    writeBubbles(6, "Adobe Photoshop");
                </script>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
                <div class="row">
                    <div class="col-md-12" style="margin-bottom: 20px;">
                        <span class="hilightColor"><b>Education</b></span>
                        <div class="education">
                            <span class="year">2016 - Present <br> VILNIAUS KOLEGIJA - UNIVERSITY OF APPLIED SCIENCES</span><br>
                            <span>Software Engineering</span>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <span class="hilightColor"><b>Work Experience</b></span>
                        <div class="education">
                            <span class="year">2015 - 2016 <br> Marks and Spencer</span><br>
                            <span>Warehouse Worker</span>
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