<template>
  <div class="home">
    <main role="main">

      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->


          <!-- Carousel slider here-->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="@/assets/images/s2.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/images/s2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/images/s2.jpg" alt="Third slide">
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

            <section>
              <div class="container">
                <!-- Three columns of text below the carousel -->
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                        <div class="col-md-4">
                            adfabsdmnfbdsn
                        </div>

                  <div class="col-md-8">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                      </div>

                        </div>
                    </div>

                    <div class="col-md-4 verse order-first order-md-last">
                        <div class="serv_begin p-2">
                            <!-- <span class="timer-container">Next Service Begins:<span class="timer">02:00:30</span></span> -->
                            <span class="timer-container">Next Event In:<span class="timer">
                              <!-- {{timeString}} -->
                              </span></span>
                        </div>
                        <span class="quote clearfix"><i class="fa fa-quote-right pull-right"></i></span>
                        <h5>
                          Verse of the week
                          </h5>
                        <p class="text-justify">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                          </p>
                    </div>
                </div><!-- /.row -->
                </div>
        </section>

        <!-- Events display here-->
        <section class="mt-5">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <h3 class="text-center mb-5">Upcoming Events</h3>
                  </div>
              </div>  
          </div>
      </section>
        
      <section class="events pbt6">
          <div class="container">
              <div class="row mb-5">
        <div class="col-md-4 mb-3"><img src="https://via.placeholder.com/330x220.png" alt="img" class="img-fluid"></div>
        <div class="col-md-8">
          <h5>Community Evangelism</h5>
          <p style="text-align: justify;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, nesciunt rem nostrum eligendi magnam impedit tenetur sed, obcaecati optio temporibus voluptas soluta dicta ducimus ipsum quae minima pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis autem laboriosam quam recusandae dolor laborum, beatae nemo iste a non labore aperiam at dolore, dolorem facere quisquam illo earum sequi. 
            </p>
          <button class="btn btn-primary text-xs-center">View All Events</button>
        </div>
          </div>
                  <hr>
              <div class="row mt-5">
      <div class="col-md-6">
      <div class="row">
      <div class="col-md-2 text-center date">
      <span class="days">1st - 21st</span>
      <span class="month">JUN</span>
      </div>
      <div class="col-md-10">
      <h5>6th Month Favorable Visitation</h5>
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corporis, ad maiores soluta voluptates illum vero qui reprehenderit.
        </p>
      </div>
          </div>

      </div>
      <div class="col-md-6 ">
      <div class="row">
      <div class="col-md-2 text-center date">
      <span class="days">1st - 21st</span>
      <span class="month">AUG</span>
      </div>
      <div class="col-md-10">
      <h5>Traditional Service</h5>
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corporis, ad maiores soluta voluptates illum vero qui reprehenderit.
        </p>
      </div>
      </div>
      </div>        
      </div>
          </div>
      </section>





  
  
  
</main>
  </div>
</template>

<script >
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //Sidebar 
  
  }
};
</script>
