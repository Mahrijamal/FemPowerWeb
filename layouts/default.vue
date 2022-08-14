<template>
<div class="main">
  <div class="header">
    <NavBar/>
  </div>
  <Nuxt/>
  <FooterMain/>
</div>
</template>

<script>
import NavBar from '@/components/template/NavBar.vue';
import FooterMain from '@/components/template/FooterMain.vue';


export default {
components:{
  NavBar,
  FooterMain,
}
}
</script>

<style>

</style>