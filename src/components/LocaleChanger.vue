<template>
  <fragment>
    <a
      href="#"
      class="nav-link lang-option"
      :class="{ 'disabled': $i18n.locale === lang.locale }"
      @click.prevent="$i18n.locale = lang.locale"
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
  }
}
</script>

<style lang="scss">
.lang-option {
  &:nth-child(2) {
    padding: 0.5rem .2rem !important;
  }
  &:nth-child(3) {
    padding-left: 0.2rem !important;
    margin-right: 1rem !important;
  }
}
</style>
