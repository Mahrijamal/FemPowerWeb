<template>
  <div>
    <form action="">
      <div>
        <label for="name">{{ $t('name') }}</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="email">{{ $t('email') }}</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label for="dob">{{ $t('birth') }}</label>
        <input class="dob" type="date" name="dob" />
      </div>
      <div>
        <label for="number">{{ $t('phone') }}</label>
        <input class="number" type="number" name="number" />
      </div>
      <div class="visit">
        <p>Is this is your first visit?</p>
        <div>
          <div>
            <label for="visit">Yes</label>
            <input type="radio" class="radio" name="val1" value="yes" />
          </div>
          <div>
            <label for="visit">No</label>
            <input type="radio" class="radio" name="val2" value="no" />
          </div>
        </div>
      </div>
      <div class="inform">Appoinment Information</div>
      <div class="d_flex">
        <div>
          <label for="appDate">Appoinment date</label>
          <input class="appDate" type="date" name="appDate" />
        </div>
        <div>
          <label for="time">Time</label>
          <input class="time" type="time" name="time" />
        </div>
      </div>
      <div>
        <label for="describe">Please describe the reason for the visit</label>
        <input type="text" name="describe" />
      </div>
      <input class="submit" type="submit" value="Book Appoinment" />
    </form>
  </div>
</template>
<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
input {
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
input.radio {
  width: 15px;
  height: 15px;
  margin-bottom: 0;
  margin-left: 10px;
}
.visit {
  width: 50%;
}
.visit p {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.05em;

  color: #3a1c90;
}
.visit div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dob,
.number {
  width: 50%;
}
.inform {
  font-weight: 400;
  font-size: 30px;
  line-height: 23px;
  letter-spacing: -0.05em;
  background-color: #3a1c90;
  color: #ffff;
  padding: 10px 20px;
  margin: 20px 0;
}
.d_flex {
  display: flex;
}
.d_flex div {
  width: 50%;
}
.d_flex div input {
  width: 100%;
}
.submit {
  background: #3a1c90;
  border: 1px solid #3a1c90;
  font-weight: 400;
  font-size: 23px;
  line-height: 27px;
  letter-spacing: -0.05em;
  color: #ffffff;
  width: 350px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 0 !important;
  cursor: pointer;
}
</style>
