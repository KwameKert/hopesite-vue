<template>

    <div>
        <section class="fixed-top">
            <div class="topper clearfix">
                
                <div class="container ">
                    <ul class="nav float-right">
                    <li class="nav-item">
                        <a href="" class=""><i class="fa fa-facebook fa-5" aria-hidden="true"></i></a>
                    </li>
                        <li class="nav-item">
                        <a href="" class=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-danger">Watch Live Service</button>
                        </li>
                    </ul>
                </div>
            </div>
  
  

  <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
    <a class="navbar-brand logo" href="#">
        <img class="" src="@/assets/images/logo.png" style="width: 50%;" />
    </a>
          
          
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">about</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Departments</a>
                
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Men Ministry</a>
          <a class="dropdown-item" href="#">Women Ministry</a>
                    <a class="dropdown-item" href="#">Youth Ministry</a>
          <a class="dropdown-item" href="#">Children's Ministry</a>
        </div>
                
            </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Give</a>
        </li>
        <li class="nav-item">
          <a class="nav-link prayer-request" href="#">Prayer Request</a>
        </li>
      </ul>
      
    </div>
    </div>
  </nav>

  </section>

    </div>


</template>


<script lang="ts">



import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Header extends Vue{
    
}
</script>