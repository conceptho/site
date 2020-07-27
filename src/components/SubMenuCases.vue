<template>
  <div>
    <nav class="nav d-none d-md-block">
      <div class="sub-menu-tittle">
        <h4>{{ $t('Our ') }}<strong class="green">{{ $t('Work') }}</strong></h4>
      </div>
      <router-link class="nav-link active" href="#" :to="{ hash: '#cases-section' }">{{ $t('Clube da Cerveja') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-tribuna' }">{{ $t('Tribuna Online') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-diamond' }">{{ $t('GoDiamond') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-profissa' }">{{ $t('Profissa') }}</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/general";

.nav {
  font-family: 'Roboto', sans-serif;
  .green{
    color: $conceptho-primary-color;
  }
  .nav-link {
    font-size: 16px;
    padding: 0.5rem 1.3rem;
    letter-spacing: .2em;
    transition: color .12s linear;

    &:not(.disabled) {
      color: #000;
    }

    &:hover {
      color: $conceptho-primary-color;
    }
  }
}
</style>
