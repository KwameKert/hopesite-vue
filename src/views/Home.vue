<template>
  <div class="home">
    <main role="main">
      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <!-- Carousel slider here-->
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="@/assets/images/s2.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/images/s2.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/images/s2.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis blandit praesent
                  luptatum zzril delenit augue duis dolore te feugait nulla
                  facilisi.
                </div>
              </div>
            </div>

            <div class="col-md-4 verse order-first order-md-last">
              <div class="serv_begin p-2">
                <span class="timer-container" v-if="!nextEvent"
                  >No new event available</span
                >
                <span class="timer-container" v-else
                  >Next Service Begins:<span class="timer">{{
                    nextEvent
                  }}</span></span
                >
              </div>
              <span class="quote clearfix"
                ><i class="fa fa-quote-right pull-right"></i
              ></span>
              <h5>
                Verse of the week
              </h5>

              <vue-content-loading v-if="!verseOfWeek">
                <rect
                  x="10"
                  y="10"
                  rx="4"
                  ry="4"
                  width="400"
                  height="15"
                  speed="1"
                />
                <rect
                  x="10"
                  y="40"
                  rx="5"
                  ry="5"
                  width="300"
                  height="15"
                  speed="1"
                />
                <rect
                  x="10"
                  y="80"
                  rx="5"
                  ry="5"
                  width="250"
                  height="15"
                  speed="1"
                />
                <rect
                  x="200"
                  y="120"
                  rx="5"
                  ry="5"
                  width="200"
                  height="10"
                  speed="1"
                />
              </vue-content-loading>
              <div v-else>
                <p class="text-justify" v-html="verseOfWeek.content"></p>
                <p class="text-bold text-right">- {{ verseOfWeek.title }}</p>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
      </section>

      <!-- Events display here-->
     <div id="eventContainer" v-if="upComingEvents">
     
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
            <div class="col-md-4 mb-3">
              <img
                v-bind:src="upComingEvents[0].imageUrl"
                alt="img"
                class="img-fluid"
              />
            </div>
            <div class="col-md-8">
              <h5>{{upComingEvents[0].name}}</h5>
              <p style="text-align: justify;">
                <span v-html="upComingEvents[0].content"></span>
              </p>
              <button class="btn btn-primary text-xs-center">
                View All Events
              </button>
            </div>
          </div>
          <hr />
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-2 text-center date">
                  <span class="days">{{getDateRange(upComingEvents[2])}}</span>
                  <span class="month">{{getMonth(upComingEvents[1].startDate)}}</span>
                </div>
                <div class="col-md-10">
                  <h5>{{upComingEvents[1].name}}</h5>
                  <p class="">
                     <span v-html="upComingEvents[1].content"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="row">
                <div class="col-md-2 text-center date">
                  <span class="days">{{getDateRange(upComingEvents[2])}}</span>
                  <span class="month">{{getMonth(upComingEvents[2].startDate)}}</span>
                </div>
                <div class="col-md-10">
                  <h5>{{upComingEvents[2].name}}</h5>
                  <p class="">
                  <span v-html="upComingEvents[2].content"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
     </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import api from "../services/api";
import moment from "moment";
import VueContentLoading from "vue-content-loading";

import { Skeleton } from "vue-loading-skeleton";
export default {
  name: "Home",
  components: {
    VueContentLoading,
  },
  data() {
    return {
      nextEvent: null,
      verseOfWeek: null,
      upComingEvents: [],
    };
  },
  methods: {
    fetchData() {
      api.get("/site/homepage").then((response) => {
        const data = response.data.data;
        if (data) {
          console.log(data)
          this.verseOfWeek = data.verseOfWeek;
          this.upComingEvents = data.upComingEvents;
          console.log(this.upComingEvents)
          console.log("Im here");
          if (data.nextEvent) {
            const date1 = new Date();
            const date2 = new Date(data.nextEvent.endDate);
            const diffTime = date2 - date1;
            const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
            const diffMinutes = Math.ceil(diffTime / (1000 * 60));
            console.log("diff minutes", diffMinutes);
            if (diffHours < 24 && diffMinutes > 1) {
              this.startCountDown(diffTime);
            } else {
              this.nextEvent = moment(data.nextEvent.endDate).format(
                "DD-MM-YYYY"
              );
            }
          }
        }
      });
    },
    getMonth(date){
      let newDate = new Date(date);
      return newDate.toDateString().split(" ")[1].toUpperCase();
    },
    getDateRange(event){
      let startDate = (new Date(event.startDate)).toDateString().split(" ");
      let endDate = (new Date(event.endDate)).toDateString().split(" ");
      let str = `${startDate[2]} - ${endDate[2]}`
      return str;
    },
    startCountDown(endDate) {
      let secondsLeft = endDate;
      setInterval(() => {
        const date = new Date(secondsLeft);
        this.nextEvent = moment(date).format("h:mm:ss");
        secondsLeft = secondsLeft - 1000;
      }, 1000);
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
