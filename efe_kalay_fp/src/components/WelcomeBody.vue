<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="banner">
      <div class="banner__background">
        <iframe
          class="video-player--banner"
          src="https://player.vimeo.com/video/454054572?dnt=1&amp;loop=1&amp;background=1&amp;app_id=122963"
          frameborder="0"></iframe>
      </div>
      <div class="banner__content center-box">
        <div class="center-box__body">
          <h1 class="txt-title txt-title--banner">{{ msg }}</h1>
          <p class="welcome txt-title--banner" color= #1063b1>Enlight your soul with art and history of The Met</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="marg5">
      <p>Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects. Every day, art comes alive in the Museum's galleries and through its exhibitions and events, revealing new ideas and unexpected connections across time and across cultures.</p>
      <br>
      <p>The Met Celebrates 150 Years With An Exhibit That Shows Why Encyclopedic Museums Are Anything But Old-Fashioned. Early in the 20th century, the best place to look at lace in the United States was the Metropolitan Museum of Art.</p>
    </div>
    <hr>
    <h2>Highlighteds by The Met</h2>
    <div class="caro">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
        <b-carousel-slide :img-src="objects[0].primaryImageSmall" >
          <h1>{{ objects[0].objectName }}</h1>
        </b-carousel-slide>
        <b-carousel-slide :img-src="objects[1].primaryImageSmall">
          <h1>{{ objects[1].objectName }}</h1>
        </b-carousel-slide>
        <b-carousel-slide :img-src="objects[2].primaryImageSmall">
          <h1>{{ objects[2].objectName }}</h1>
        </b-carousel-slide>
        <b-carousel-slide :img-src="objects[3].primaryImageSmall">
          <h1>{{ objects[3].objectName }}</h1>
        </b-carousel-slide>
        <b-carousel-slide :img-src="objects[4].primaryImageSmall">
          <h1>{{ objects[4].objectName }}</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: 'WelcomeBody',
  props: {
    msg: String,
  },

  data() {
    return {
      departmentId: Number,
      objectDetails: Object,
      objectIds: [],
      objects: [],
    };
  },

  methods: {
    getItemDetails(num) {
      console.log(`get item details ${num}`);
      const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`;
      fetch(url2)
        .then(response => response.json())
        .then(response => {
          this.objects.push(response);
        });
    },
    goDetail(id) {
      return `/detail/${id}`;
    },
  },

  created() {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=all';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.objectIds = response.objectIDs.slice(0, 5);
        this.objects = [];
        response.objectIDs.slice(0, 5).forEach(num => {
          this.getItemDetails(num);
        });
      });
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.banner {
  position: relative;
  overflow: hidden;
  background-color: #000;
  color: #fff;
  height: 400px;
  width: 100%;
}

.banner__background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 500px;
}

.banner__content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 500px;
}

.video-player {
  border: none;
  width: 100%;
  height: 500px;
}

.video-player--banner {
  position: absolute;
  /* (240 - 160) / 2 = 40 */
  top: -200px;
  left: -50%;
  width: 200%;
  height: 250%;
}

.center-box:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -.25em;
}

.center-box__body {
  vertical-align: middle;
  display: inline-block;
  width: 100%;
}

.txt-title {
  font-family: Arial, sans-serif;
  font-size: 37px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  line-height: 1;
  padding: 20px;
}
.welcome {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #ffffff;
}
.caro{
  display: inline-block;
  width: auto;
  height: 50%;
  margin: auto;
}

@media (min-width: 400px) {
  .banner {
    height: 380px;
  }
  .video-player--banner {
    /* (480 - 320) / 2 = 80 */
    top: -80px;
    height: 540px;
  }
  .banner__content {
    height: 400px;
  }
}

@media (min-width: 600px) {
  .banner {
    height: 480px;
  }
  .video-player--banner {
    /* (720 - 480) / 2 = 120 */
    top: -120px;
    height: 720px;
  }
}

@media (min-width: 750px) {
  .banner {
    height: 500px;
  }
  .video-player--banner {
    /* (960 - 440) / 2 = 160 */
    top: -250px;
    height: 1000px;
  }
    .banner__content {
    height: 500px;
 }
}

@media (min-width: 1000px) {
  .banner {
    height: 500px;
  }
  .video-player--banner {
    /* (1200 - 800) / 2 = 200 */
    top: -200px;
    height: 1200px;
  }
  .banner__content {
    height: 500px;
 }
}

@media (min-width: 2000px) {
  .video-player--banner {
    /* (1600 - 800) / 2 = 400 */
    top: -400px;
    height: 1600px;
  }
}
</style>
