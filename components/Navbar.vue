<template>
   <header id="nav-header" class="navbar navbar-fixed-top navBlue">
    <div id="nav-wrapper" class="container">    
        
        <div class="navbar-brand">
          <div class="logoImg"><img src="~/assets/images/opgLogo.png" alt="OPG"></div>
          <div class="logoText">
            <p class="title">ONLINE PRACTICE GUIDE</p>
            <p class="subTitle">Department of Children &amp; Family Services</p>
          </div>
        </div>

        <nav>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">GUIDE</a></li>
            <li><a href="#about">UPDATES</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        <div class="search-container">
          <form action="/action_page.php">
            <input id="searchInput" type="text" placeholder="" name="search">
            <i id="search-icon" class="fas fa-search"></i>  
          </form>
        </div>

    </div>
    
  </header>
</template>

<style>
  .navbar-brand {
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px
  }
  .navbar-brand>img {
    display: block
  }

  #nav-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.25em;
  }

  .search-container {
    margin-left: 1rem;
  }

  #searchInput {
    margin-bottom: 1em;
  }

  #searchInput~#search-icon {
    color: darkgray;
    position: relative;
    left: -12rem;
  }

  #searchInput:focus~#search-icon {
    visibility: hidden;
  }

  @media only screen and (max-width:768px) {
    #nav-header {
      margin-bottom: 5em;
    }
    #nav-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: .25em;
    }

    p.title {
      font-size: 10px !important;
    }

    p.subTitle {
      font-size: 10px !important;
    }
  }

 @media (max-width:992px) {
   /* #logoText {
     display: flex;
     flex-direction: column
   }
   #nav-wrapper {
      background-color: red;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

    p.title {
      font-size: 16px !important;
    }

    p.subTitle {
      font-size: 10px !important;
    } */
  
}
</style>
