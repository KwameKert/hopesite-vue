<template>
    <div>
        <section class="programs pbt6">
    <div class="container">
   <div class="row">
<div class="col-md-6">
<div id="carouselExampleIndicators" class="carousel slide program-carousel" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item">
<img class="d-block w-100" src="assets/images/prgm.jpg" alt="First slide">
</div>
<div class="carousel-item">
<img class="d-block w-100" src="assets/images/prgm.jpg" alt="Second slide">
</div>
<div class="carousel-item active">
<img class="d-block w-100" src="assets/images/prgm.jpg" alt="Third slide">
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
</div>



<div class="col-md-6">
  <h4>Weekly Programs</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatibus laborum dolores corrupti, doloremque in iure.</p>
  <div class="row ml-1 mb-3">
    <div class="col-md-5 col-sm-5   week">
      <h5>Mon</h5>
      <span>Youth Meeting</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>

    <div class="col-md-5 col-sm-5  week">
      <h5>Tue</h5>
      <span>Women Meeting</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>
  </div>

    <div class="row ml-1 mb-3">
    <div class="col-md-5  col-sm-5    week">
      <h5>Wed</h5>
      <span>Bible Study</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>

    <div class="col-md-5  col-sm-5   week">
      <h5>Fri</h5>
      <span>Prayer Meeting</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>
  </div>


    <div class="row ml-1">
    <div class="col-md-5  col-sm-5    week">
      <h5>Sat</h5>
      <span>Choir Rehearsals</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>

    <div class="col-md-5 col-sm-5   week">
      <h5>Tue</h5>
      <span>Youth Meeting</span> <br>
      <span>06:30PM - 08:30PM </span>
    </div>
  </div>
</div>
</div>
    </div>
</section>






<section class="pbt6 newsletter">
    <div class="container">
        <div class="row justify-content-center">
                <div class="col-md-8 text-center">

                    <h3>Stay Connected With Us</h3>
                    <p class="lead mbt2"> To stay up to date on everything happening at House of Hope A/G, subscribe to our weekly newsletter</p>
                    <input type="text" placeholder="Please type your email here...." class="form-control">
                    <button class="btn btn-primary mt-4 px-5"> SIGNUP </button>

                </div>
            </div>
        </div>
</section>

    </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';

@Component
export default  class Misc extends  Vue{
    
}
</script>