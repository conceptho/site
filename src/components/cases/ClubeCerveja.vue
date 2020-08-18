<template>
  <section class="club-section section-item" data-class="club" id="club-section">
    <div class="bg-image-club d-none d-md-block"></div>
    <div class="bg-image-club-mobile d-none"></div>
    <div class="container-fluid">
      <div class="fullheight row">
        <div class="col-12 align-self-center pl-4 pl-md-5">
          <div class="row">
            <div ref="title-club" class="col-12 offset-md-6 col-md-6 title-club">
              <h4 class="display-4" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Clube da') }}</h4>
              <h4 class="display-4" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Cerveja') }}</strong></h4>
            </div>
            <div ref="club-info" class="col-12 offset-md-6 col-md-6">
              <div class="sub-slogan font-weight-light pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                {{ $t('Mobile application for beer lovers, which aims to provide benefits to its members. For android and ios, with development of the prototype for continuous integration. It is the best platform to discover the biggest promotions in the region.') }}
              </div>
              <div class="pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                <span class="badge badge-dark mr-2">Vue</span>
                <span class="badge badge-dark mr-2">GraphQl</span>
                <span class="badge badge-dark mr-2">Client</span>
                <span class="badge badge-dark mr-2">Swift</span>
                <span class="badge badge-dark mr-2">Objective-C</span>
                <span class="badge badge-dark mr-2">Java</span>
                <span class="badge badge-dark mr-2">Flutter</span>
                <span class="badge badge-dark mr-2">Typescript</span>
                <span class="badge badge-dark">Docker</span>
              </div>
              <div class="pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                <a href="https://apps.apple.com/us/app/id1479587151">
                  <AppleButton class="mr-3" href="https://www.google.com.br/" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.conceptho.clubecerveja">
                  <GoogleButton />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleButton from '../GoogleButton'
import AppleButton from '../AppleButton'
import EffectScroll from '../../utils/scrollEffect'

export default {
  name: 'ClubeCerveja',
  components: { GoogleButton, AppleButton },
  mounted () {
    EffectScroll.opacity(this.$refs['title-club'], 0.96)
    EffectScroll.opacity(this.$refs['club-info'], 0.99)
    EffectScroll.init()
  }
}
</script>

<style lang="scss">
$bg-image-club : url('../../assets/img/cerveja.png');
$bg-image-club-mobile : url('../../assets/img/club-mobile.jpg');
.club-section {
  position: relative;
  .bg-image-club {
    opacity: 0;
  }
}
.title-club {
  opacity: 0;
  transition: opacity .12s linear;
}
.body-bg-club, .bg-club {
  background-color: #fff;
  .club-section {
    .bg-image-club {
      opacity: 1;
    }
    .title-club {
      opacity: 1;
    }
  }
  .container-submenu {
    opacity: 1;
    visibility: visible;
    text-align: right;
  }
}
.bg-image-club {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: $bg-image-club;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .3s linear;
}

.bg-image-club-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-image: $bg-image-club-mobile;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}
</style>
