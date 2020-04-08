<template>
  <fragment>
    <a
      href="#"
      class="nav-link lang-option"
      :class="{ 'disabled': $i18n.locale === lang.locale }"
      @click.prevent="changeLocale(lang.locale)"
      v-for="(lang, i) in langs"
      :key="`Lang${i}`">
      {{ lang.label }}
    </a>
  </fragment>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data () {
    return {
      langs: [
        { locale: 'en', label: 'en' },
        { locale: 'pt-BR', label: 'br' }
      ]
    }
  },
  methods: {
    changeLocale (locale) {
      this.$emit('toggle-locale')
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/general";
.lang-option {
  &:nth-child(2) {
    padding: 0.5rem .2rem !important;
  }
  &:nth-child(3) {
    padding-left: 0.2rem !important;
    margin-right: 1rem !important;
  }
}
@include media-breakpoint-down(md) {
  a.nav-link.lang-option {
    display: inline-block !important;
    margin-bottom: 30px;
  }
}
</style>
