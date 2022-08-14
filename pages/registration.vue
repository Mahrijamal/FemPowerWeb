<template>
  <div class="wrapper">
    <div class="bg-violet"></div>
    <h3 class="title">Register form</h3>
    <nuxt-link to="/" class="toHome">
      <p>Home page</p>
      <img src="@/assets/images/arrow-left.svg" alt="" />
    </nuxt-link>
    <div class="form">
      <div class="profile-img">
        <img src="@/assets/images/anketa.svg" alt="" />
        <p>Edit image</p>
      </div>
      <form action="" method="post">
        <div>
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label for="number">Phone Number</label>
          <input type="text" name="number" />
        </div>
        <div>
          <label for="age">Age</label>
          <input type="number" name="age" />
        </div>
        <div>
          <label for="course">Course</label>
          <select name="course" id="">
            <option value="1">Supervisor</option>
            <option value="2">Murchendiser</option>
            <option value="3">Assistent</option>
          </select>
        </div>
        <div class="test">
          <div>
            <p>Which is greater</p>
            <div class="answers">
              <div>
                <label for="test11">1/5</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/5"
                  id="val11"
                  name="test11"
                />
              </div>
              <div>
                <label for="test12">2/15</label>
                <input
                  class="radio"
                  type="radio"
                  value="2/15"
                  id="val12"
                  name="test12"
                />
              </div>
              <div>
                <label for="test13">1/10</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/10"
                  id="val13"
                  name="test13"
                />
              </div>
            </div>
          </div>
          <div>
            <p>Which is greater</p>
            <div class="answers">
              <div>
                <label for="test21">1/5</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/5"
                  id="val21"
                  name="test21"
                />
              </div>
              <div>
                <label for="test22">2/15</label>
                <input
                  class="radio"
                  type="radio"
                  value="2/15"
                  id="val22"
                  name="test22"
                />
              </div>
              <div>
                <label for="test23">1/10</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/10"
                  id="val23"
                  name="test23"
                />
              </div>
            </div>
          </div>
          <div>
            <p>Which is greater</p>
            <div class="answers">
              <div>
                <label for="test31">1/5</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/5"
                  id="val31"
                  name="test31"
                />
              </div>
              <div>
                <label for="test32">2/15</label>
                <input
                  class="radio"
                  type="radio"
                  value="2/15"
                  id="val32"
                  name="test32"
                />
              </div>
              <div>
                <label for="test33">1/10</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/10"
                  id="val33"
                  name="test33"
                />
              </div>
            </div>
          </div>
          <div>
            <p>Which is greater</p>
            <div class="answers">
              <div>
                <label for="test41">1/5</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/5"
                  id="val41"
                  name="test41"
                />
              </div>
              <div>
                <label for="test42">2/15</label>
                <input
                  class="radio"
                  type="radio"
                  value="2/15"
                  id="val42"
                  name="test42"
                />
              </div>
              <div>
                <label for="test43">1/10</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/10"
                  id="val43"
                  name="test43"
                />
              </div>
            </div>
          </div>
          <div>
            <p>Which is greater</p>
            <div class="answers">
              <div>
                <label for="test51">1/5</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/5"
                  id="val51"
                  name="test51"
                />
              </div>
              <div>
                <label for="test52">2/15</label>
                <input
                  class="radio"
                  type="radio"
                  value="2/15"
                  id="val52"
                  name="test52"
                />
              </div>
              <div>
                <label for="test53">1/10</label>
                <input
                  class="radio"
                  type="radio"
                  value="1/10"
                  id="val53"
                  name="test53"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="aim-part">
          <label for="aim">Write your aim/plan</label>
          <input type="text" name="aim" />
        </div>
        <div class="register">
          <nuxt-link to="#">Consulting</nuxt-link>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
    <div class="training">
      <h1>Training Courses</h1>
      <div class="lines">
        <div></div>
        <div></div>
      </div>
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
<style scoped>
/* .wrapper {
  width: 1440px;
  margin: 0 auto;
} */
.bg-violet {
  background-color: #3a1c90;
  /* width: 100%; */
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
.test {
  width: 100%;
  padding: 15px;
  background: #f9f9f9;
  border: 1px solid #3a1c90;
  border-radius: 5px;
  display: flex;
}
.test p {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #3a1c90;
  margin-bottom: 10px;
}
.test > div {
  border-right: 1px solid rgba(58, 28, 144, 0.5);
  width: 20%;
  padding: 0 10px;
}
.test > div:last-child {
  border-right: none;
}
input.radio {
  width: 15px;
  height: 15px;
}
.answers {
  display: flex;
  justify-content: space-between;
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
