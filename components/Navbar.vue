<template>
   <nav class="navbar navbar-fixed-top navBlue">
    <div class="container">
      
      <div class="navbar-header">
        <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>-->
        <div class="navbar-brand">
          <div class="logoImg"><img src="~/assets/images/opgLogo.png" alt="OPG"></div>
          <div class="logoText">
            <p class="title">ONLINE PRACTICE GUIDE</p>
            <p class="subTitle">Department of Children &amp; Family Services</p>
          </div>
        </div>
      </div>
      <div id="navbar" class="navbar-collapse">

        <ul class="nav navbar-nav">
          <li class="active"><a href="#">GUIDE</a></li>
          <li><a href="#about">UPDATES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <div class="search-container hidden-xs">
          <form action="/action_page.php">
            <input id="searchInput" type="text" placeholder="" name="search">
            <i id="search-icon" class="fas fa-search"></i>  
          </form>
        </div>

      </div>
      <!-- /.nav-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>

<style>
  .search-container {
    margin-left: 1rem;
  }
 #searchInput ~ #search-icon {
    color: darkgray;
    position: relative;
    left: -12rem;
  }
 #searchInput:focus ~ #search-icon {
    visibility: hidden;
  }
</style>
