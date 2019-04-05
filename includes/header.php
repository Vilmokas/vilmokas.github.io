<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<div class="text-center page-header">
  <span class="hilightColor"><b>Vilmantas Jakniūnas</b> Portfolio</span>
</div>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <?php
        if ($currentPage == "index.php"){
          echo '<li class="nav-item active"><a class="nav-link" href="./index.php">Home <span class="sr-only">(current)</span></a></li>';
        }
        else {
          echo '<li class="nav-item"><a class="nav-link" href="./index.php">Home</a></li>';
        }
        if ($currentPage == "software.php"){
          echo '<li class="nav-item active"><a class="nav-link" href="./software.php">Software <span class="sr-only">(current)</span></a></li>';
        }
        else {
          echo '<li class="nav-item"><a class="nav-link" href="./software.php">Software</a></li>';
        }
        if ($currentPage == "digitalart.php"){
          echo '<li class="nav-item active"><a class="nav-link" href="./digitalart.php">Digital Art <span class="sr-only">(current)</span></a></li>';
        }
        else {
          echo '<li class="nav-item"><a class="nav-link" href="./digitalart.php">Digital Art</a></li>';
        }
        if ($currentPage == "gamedev.php"){
          echo '<li class="nav-item active"><a class="nav-link" href="./gamedev.php">Game Development <span class="sr-only">(current)</span></a></li>';
        }
        else {
          echo '<li class="nav-item"><a class="nav-link" href="./gamedev.php">Game Development</a></li>';
        }
        if ($currentPage == "about.php"){
          echo '<li class="nav-item active"><a class="nav-link" href="./about.php">About Me <span class="sr-only">(current)</span></a></li>';
        }
        else {
          echo '<li class="nav-item"><a class="nav-link" href="./about.php">About Me</a></li>';
        }
      ?>
    </ul>
  </div>
</nav>
<div class="header-line"></div>