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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident dolor mollitia id officiis sunt consectetur! Sapiente eveniet culpa porro tenetur quisquam voluptates, sunt, doloremque voluptatibus velit vel at voluptatum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident dolor mollitia id officiis sunt consectetur! Sapiente eveniet culpa porro tenetur quisquam voluptates, sunt, doloremque voluptatibus velit vel at voluptatum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident dolor mollitia id officiis sunt consectetur! Sapiente eveniet culpa porro tenetur quisquam voluptates, sunt, doloremque voluptatibus velit vel at voluptatum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident dolor mollitia id officiis sunt consectetur! Sapiente eveniet culpa porro tenetur quisquam voluptates, sunt, doloremque voluptatibus velit vel at voluptatum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident dolor mollitia id officiis sunt consectetur! Sapiente eveniet culpa porro tenetur quisquam voluptates, sunt, doloremque voluptatibus velit vel at voluptatum.</p>

  </div>
</template>

<script>
export default {
  name: 'WelcomeBody',
  props: {
    msg: String,
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
