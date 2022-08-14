<template>
  <div class="navbar">
    <img v-if="$route.path == '/'" src="@/static/logo.svg" alt="" class="logo" />
    <img v-else src="@/static/logo2.svg" alt="" class="logo" />
    <div v-if="$route.path == '/'" class="right">
    <ul>
      
      <li v-for="(e, i) in links" :key="i">
        <nuxt-link :to="e.href">
          {{ $tt(e.name_tm, e.name_en, e.name_ru) }}
        </nuxt-link>
      </li>
    </ul>
    <div class="lang">
      <button class="dropbtn">{{ lang }}</button>
      <div class="lang-content">
        <div v-for="(e, i) in locales" :key="i">
          <button @click="$i18n.setLocale(e.code)" v-if="e.code != lang">
            {{ e.name }}
          </button>
        </div>
      </div>
    </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    const links = [
      {
        id: 1,
        href: '/registration',
        name_tm: 'Agza bolmak',
        name_ru: 'Регистрация',
        name_en: 'Registration',
        active: false,
      },
      {
        id: 2,
        href: '#consulting',
        name_tm: 'Maslahat',
        name_ru: 'Консультация',
        name_en: 'Consulting',
        active: false,
      },
      {
        id: 3,
        href: '#contacts',
        name_tm: 'Habarlaşmak',
        name_ru: 'Контакты',
        name_en: 'Contacts',
        active: false,
      },
      {
        id: 4,
        href: '#about',
        name_tm: 'Biz barada',
        name_ru: 'О нас',
        name_en: 'About us',
        active: false,
      },
    ]

    return {
      links,
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    locales() {
      return this.$i18n.locales
    },
    router_path(){
      return this.$route.path
    }
  },
}
</script>

<style>
</style>