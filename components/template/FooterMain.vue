<template>
  <div class="footer">
    <div>
      <img src="@/static/phone.svg" alt="" />
      <p>+993 65 555 272</p>
    </div>
    <div>
      <img src="@/static/mail.svg" alt="" />
      <p>decisivestepwomen@gmail.com</p>
    </div>
    <div>
      <img src="@/static/twitter.svg" alt="" />
      <p>#decisivestepwomen</p>
    </div>
    <div>
      <img src="@/static/insta.svg" alt="" />
      <p>@decisivestepwomen</p>
    </div>
    <div>
      <img src="@/static/facebook.svg" alt="" />
      <p>decisivestepwomen</p>
    </div>
    <div>
      <img src="@/static/linkedin.svg" alt="" />
      <p>decisivestepwomen</p>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background: #3a1c90;
  padding: 55px 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 180px;
}
.footer > div {
  display: flex;
  align-items: center;
  width: 26%;
  margin-bottom: 50px;
}
.footer > div:nth-child(n + 4) {
  margin-bottom: 0 !important;
}
.footer p {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-left: 20px;
}
</style>