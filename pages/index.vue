<template>
  <div>
    <div class="wrapper">
      <div class="indexTop">
        <img src="@/assets/images/img1.png" />
        <h1 class="main_text">{{ $t('main_text') }}</h1>
        <nuxt-link class="arrow" to="#consulting">
          <img src="@/assets/images/arrow.svg" alt="" />
          <p>{{ $t('discover') }}</p>
        </nuxt-link>
        <p class="effort">
          {{ $t('efforts') }}
        </p>
        <div class="cards">
          <div class="card1">
            <img v-click="toRegister" src="@/assets/images/card1.png" alt="" />
            <p v-click="toRegister" class="tst">Training</p>
          </div>
          <div class="card2">
            <img v-click="toBoots" src="@/assets/images/card2.png" alt="" />
            <p v-click="toBoots">Progress</p>
          </div>
        </div>
      </div>

      <div id="about">
        <h1>{{ $t('make') }}</h1>
        <p>
          {{ $t('unifying') }}
        </p>
        <div class="circles">
          <div>
            <h3>345</h3>
            <p>{{ $t('associate') }}</p>
          </div>
          <div>
            <h3>82</h3>
            <p>{{ $t('woman') }}</p>
          </div>
          <div>
            <h3>120</h3>
            <p>{{ $t('a_woman') }}</p>
          </div>
        </div>
      </div>
      <div id="discover">
        <nuxt-link to="/registration">
          <img src="@/assets/images/training.png" alt="" />
          <h5>{{ $t('train') }}</h5>
          <div>
            <span> {{ $t('training') }}</span>
          </div>
          <!-- <div class="bg-black"></div> -->
        </nuxt-link>

        <nuxt-link to="/boots">
          <img src="@/assets/images/nextlevel.png" alt="" />
          <h5>{{ $t('take') }}</h5>
          <div>
            <span>{{ $t('next') }}</span>
          </div>
          <!-- <div class="bg-black"></div> -->
        </nuxt-link>
      </div>
      <div id="consulting">
        <div class="first">
          <nuxt-link to="/appointment">
          <p v-click="toAppoint" class="circle-text">{{ $t('business') }}</p>
          <div class="white-circle">{{ $t('b') }}</div>
          </nuxt-link>
        </div>
        <div class="second">
          <nuxt-link to="/appointment">
          <p v-click="toAppoint" class="circle-text">{{ $t('education') }}</p>
          <div class="white-circle">{{ $t('e') }}</div>
          </nuxt-link>
        </div>
        <div class="third">
          <nuxt-link to="/appointment">
          <p v-click="toAppoint" class="circle-text">{{ $t('law') }}</p>
          <div class="white-circle">{{ $t('l') }}</div>
          </nuxt-link>
        </div>
        <div class="fourth">
          <nuxt-link to="/appointment">
            <p v-click="toAppoint" class="circle-text">{{ $t('try') }}</p>
            <div class="white-circle">{{ $t('t') }}</div>
          </nuxt-link>
        </div>
      </div>
      <div id="statistics">
        <h1>{{ $t('statistics') }}</h1>
        <img src="@/assets/images/stat.svg" alt="" />
        <div class="num num1">
          <h1>41%</h1>
          <p>{{ $t('do') }}</p>
        </div>
        <div class="num num2">
          <h1>1%</h1>
          <p>{{ $t('retiree') }}</p>
        </div>
        <div class="num num3">
          <h1>7%</h1>
          <p>{{ $t('with') }}</p>
        </div>
        <div class="num num4">
          <h1>1%</h1>
          <p>{{ $t('aim') }}</p>
        </div>
        <div class="num num5">
          <h1>50%</h1>
          <p>{{ $t('dont') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toRegister() {
      this.$router.push('/registration')
      console.log('test')
    },
    toBoots() {
      this.$router.push('/boots')
    },
    toAppoint() {
      this.$router.push('/appointment')
    },
  },
}
</script>
<style scoped>
.indexTop {
  background-color: #3a1c91;
  width: 100%;
  height: 800px;
  margin-top: -70px;
  position: relative;
  z-index: -1;
}
.main_text {
  font-weight: 600;
  font-size: 145px;
  line-height: 114px;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  position: absolute;
  top: 90px;
  left: 184px;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  width: 800px;
  text-align: right;
}
.arrow {
  position: absolute;
  top: 360px;
  display: flex;
  align-items: center;
  left: 452px;
  text-decoration: none;
}
.arrow p {
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.1em;
  color: #ffffff;
  margin-left: 20px;
}
.effort {
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: -0.07em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  width: 396px;
  text-align: right;
  top: 335px;
  right: 50px;
}
.cards {
  display: flex;
  position: absolute;
  margin-top: -307px;
  left: 670px;
}

.card1,
.card2 {
  width: 300px;
  height: 364px;
  padding: 5px 5px 0 5px;
}
.cards div p {
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.1em;
  color: #3a1c90;
  text-align: center;
  margin-top: 10px;
}
.card1 {
  background-color: #ffcc33;
  margin-right: 27px;
}
.card2 {
  background-color: #54de31;
  margin-left: 28px;
}
#about {
  margin-top: 90px;
}
#about h1 {
  font-weight: 600;
  font-size: 40px;
  line-height: 53px;
  text-align: center;
  color: #ef3c7c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#about p {
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.07em;
  color: #3a1c91;
  width: 74%;
  margin: 15px auto;
  text-align: center;
}
.circles {
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 50px auto;
}
.circles div {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.circles div h3 {
  font-weight: 400;
  font-size: 80px;
  line-height: 50px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  text-align: center;
  margin-top: 70px;
}
.circles div p {
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.circles div:first-child {
  border: 10px solid #54de31;
}
.circles div:nth-child(2) {
  border: 10px solid #ef3c7c;
}
.circles div:last-child {
  border: 10px solid #ffcc33;
}
#discover {
  display: flex;
  justify-content: space-around;
}
#discover a {
  text-decoration: none;
}
#discover a img {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0.78%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
#discover a h5 {
  font-weight: 400;
  font-size: 70px;
  line-height: 93px;
  letter-spacing: -0.07em;
  color: #ffffff;
  font-family: 'Playfair Display';
  margin-top: -174px;
  margin-left: 20px;
}
#discover a div {
  font-weight: 400;
  font-size: 50px;
  line-height: 67px;
  letter-spacing: -0.07em;
  color: #ffcc33;
  font-family: 'Playfair Display';
}
#discover a div span {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0.78%,
    rgba(0, 0, 0, 0.5) 100%
  );
  width: 550px;
  display: inline-block;
  padding-left: 20px;
}
#consulting {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
#consulting > div {
  width: 300px;
  height: 560px;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
}
#consulting div.first {
  background-color: #54de31;
}
#consulting div.second {
  background-color: #ffcc33;
}
#consulting div.third {
  background-color: #ef3c7c;
}
#consulting div.fourth {
  background-color: #3a1c90;
}
.white-circle {
  width: 270px;
  height: 270px;
  border: 10px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  margin-top: 120px;
  margin-left: 15px;
  font-weight: 400;
  font-size: 150px;
  line-height: 200px;
  letter-spacing: -0.07em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display';
}
.circle-text {
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  margin-top: 60px;
  height: 85px;
  text-decoration: none;
}
#statistics {
  margin-top: 80px;
}
#statistics h1 {
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}
#statistics img {
  width: 534px;
  margin: 0 auto;
  display: flex;
}
.num {
  width: 250px;
}
.num h1 {
  font-weight: 400;
  font-size: 110px;
  line-height: 129px;
  letter-spacing: -0.07em;
  color: #3a1c90;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.num p {
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: -0.07em;
  color: #3a1c90;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.num1 {
  position: absolute;
  margin-top: -350px;
  margin-left: 150px;
}
.num2 {
  position: absolute;
  margin-top: -130px;
  margin-left: 105px;
}
.num3 {
  position: absolute;
  margin-top: -20px;
  margin-left: 500px;
}
.num4 {
  position: absolute;
  margin-top: -60px;
  margin-left: 900px;
}
.num5 {
  position: absolute;
  margin-top: -270px;
  margin-left: 950px;
}
</style>