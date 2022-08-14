<template>
  <div class="wrapper">
    <div class="bg-violet"></div>
    <h3 class="title">{{ $t('boost') }}</h3>
    <nuxt-link to="/" class="toHome">
      <p>{{ $t('home') }}</p>
      <img src="@/assets/images/arrow-left.svg" alt="" />
    </nuxt-link>
    <div class="form">
      <div class="profile-img">
        <img src="@/assets/images/boots.svg" alt="" />
        <p>{{ $t('edit') }}</p>
      </div>
      <form action="" method="post">
        <div>
          <label for="firstName">{{ $t('first') }}</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label for="email">{{ $t('email') }}</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label for="lastName">{{ $t('last') }}</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label for="number">{{ $t('phone') }}</label>
          <input type="text" name="number" />
        </div>
        <div>
          <label for="age">{{ $t('age') }}</label>
          <input type="number" name="age" />
        </div>
        <div>
          <label for="course">{{ $t('course') }}</label>
          <select name="course" id="">
            <option value="1">{{ $t('supervisor') }}</option>
            <option value="2">{{ $t('murchendiser') }}</option>
            <option value="3">{{ $t('assistent') }}</option>
          </select>
        </div>

        <div class="aim-part">
          <label for="aim">{{ $t('please') }}</label>
          <input type="text" name="aim" />
        </div>
        <div class="register">
          <nuxt-link to="#">{{ $t('consulting') }}</nuxt-link>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
    <div class="training">
      <h1>{{ $t('t_training') }}</h1>
      <div class="lines">
        <div></div>
        <div></div>
      </div>

      <!-- <swiper class="swiper news__slider" :options="bannerSliderOptions">
        <swiper-slide>
          <div>
            <h3>{{ $t('supervisor') }}</h3>
            <p>
              {{ $t('match') }}
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <h3>{{ $t('supervisor') }}</h3>
            <p>
              {{ $t('match') }}
            </p>
          </div>
        </swiper-slide>

        <div slot="pagination" class="swiper-pagination"></div>

        <div slot="button-prev" class="swiper-button-prev swiper-button"></div>
        <div slot="button-next" class="swiper-button-next swiper-button"></div>
      </swiper> -->

      <div class="circles">
        <div>
          <h3>{{ $t('supervisor') }}</h3>
          <p>
            {{ $t('match') }}
          </p>
        </div>
        <div>
          <h3>{{ $t('murchendiser') }}</h3>
          <p>{{ $t('create') }}</p>
        </div>
        <div>
          <h3>{{ $t('logistics') }}</h3>
          <p>{{ $t('allocating') }}</p>
        </div>
        <div>
          <h3>{{ $t('accountant') }}</h3>
          <p>{{ $t('analytic') }}</p>
        </div>
        <div>
          <h3>{{ $t('assistent') }}</h3>
          <p>{{ $t('reading') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      bannerSliderOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      },
    }
  },
}
</script>
<style scoped>
.bg-violet {
  background-color: #3a1c90;
  height: 232px;
  margin-top: -70px;
}
.toHome {
  display: flex;
  align-items: center;
  margin-top: -75px;
  justify-content: flex-end;
  margin-right: 40px;
  width: 270px;
  float: right;
}
.toHome img {
  width: 100px;
  height: 100px;
  margin-left: 15px;
}
.toHome p {
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.1em;
  color: #ffffff;
}
input,
select {
  display: block;
  background: #f9f9f9;
  border: 1px solid #3a1c90;
  border-radius: 5px;
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;
}
label {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #3a1c90;
}
.form {
  width: 1100px;
  margin: 0 auto;
}
form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}
form > div {
  width: 500px;
}
form > div:nth-child(2),
form > div:first-child {
  margin-top: 100px;
}
.aim-part {
  margin-top: 25px;
  width: 100%;
}
.aim-part input {
  width: 100%;
}
.register {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 102px;
}
.register a,
.register input {
  text-decoration: none;
  background: #3a1c90;
  border: 1px solid #3a1c90;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.05em;
  color: #ffffff;
  width: 410px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 !important;
}
.training h1 {
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-top: 85px;
  margin-bottom: 15px;
}
.lines {
  display: flex;
  justify-content: space-between;
}
.lines div {
  width: 45%;
  height: 5px;
  background: #ef3c7c;
}
.circles {
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
}
.circles div {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 0 35px;
}
.circles div h3 {
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-top: 55px;
  margin-bottom: 10px;
}
.circles div p {
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.07em;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.circles div:first-child,
.circles div:last-child {
  border: 10px solid #54de31;
}
.circles div:nth-child(2),
.circles div:nth-child(4) {
  border: 10px solid #ef3c7c;
}
.circles div:nth-child(3) {
  border: 10px solid #ffcc33;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -50px;
  margin-left: 54px;
}
.profile-img {
  position: absolute;
  margin-top: -105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 455px;
}
.profile-img img {
  width: 190px;
}
.profile-img p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.07em;
  color: #3a1c90;
}
</style>
