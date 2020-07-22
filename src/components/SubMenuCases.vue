<template>
  <div class="sub-menu">
    <nav class="nav d-none d-md-block">
      <div class="sub-tittle d-flex">
        <h4>{{ $t('Our ') }}<strong class="green">{{ $t('Work') }}</strong></h4>
      </div>
      <router-link class="nav-link active" href="#" :to="{ hash: '#cases-section' }">{{ $t('Clube da Cerveja') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-tribuna' }">{{ $t('Tribuna Online') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-diamond' }">{{ $t('GoDiamond') }}</router-link>
      <router-link class="nav-link" href="#" :to="{ hash: '#cases-section-profissa' }">{{ $t('Profissa') }}</router-link>
    </nav>
  </div>
</template>
