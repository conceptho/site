<template>
  <section class="godiamond-section section-item" data-class="godiamond" data-scroll-disabled="true" id="godiamond-section">
    <div class="bg-image-godiamond d-none d-md-block"></div>
    <div class="bg-image-godiamond-mobile d-md-none"></div>
    <div class="container-fluid">
      <div class="fullheight row">
        <div class="col-12 align-self-center pr-4 pr-md-5">
          <div class="row">
            <div class="col-12 offset-md-4 col-md-5 text-right text-md-left">
              <h4 ref="title-godiamond" class="display-4 title-godiamond">{{ $t('Go') }}<strong>{{ $t('Diamond') }}</strong></h4>
            </div>
            <div ref="godiamond-info" class="col-12 offset-md-2 col-md-4">
              <div class="text-right text-white font-weight-light pt-2 title-godiamond" data-rellax-speed="1" data-rellax-percentage="0.5">
                {{ $t('Android and iOS application that managing tasks and contacts for multi-level marketers.') }}
              </div>
              <div class="text-right pt-2">
                <span class="badge badge-dark mr-2">Flutter</span>
                <span class="badge badge-dark mr-2">Dart</span>
                <span class="badge badge-dark mr-2">GraphQL</span>
                <span class="badge badge-dark mr-2">Typescript</span>
                <span class="badge badge-dark mr-2">Docker</span>
              </div>
              <div class="text-right pt-2">
                <a href="https://apps.apple.com/us/app/id1472782302">
                  <AppleButton href="https://www.google.com.br/" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=app.godiamond">
                  <GoogleButton class="ml-3" />
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
  name: 'GoDiamond',
  components: { GoogleButton, AppleButton },
  mounted () {
    EffectScroll.opacity(this.$refs['title-godiamond'], 0.96)
    EffectScroll.opacity(this.$refs['godiamond-info'], 0.99)
    EffectScroll.init()
  }
}
</script>

<style lang="scss">
$bg-image-diamond : #007aff;
.title-godiamond {
  color: #000;
  opacity: 0;
  transition: opacity .12s linear;
}
.godiamond-section {
  position: relative;
  .bg-image-godiamond {
    opacity: 0;
  }
}
.bg-image-godiamond {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: $bg-image-diamond;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.bg-image-godiamond-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-image-diamond;
  transition: all .12s linear;
  &:before, &:after {
    transition: all .12s linear;
  }
}
.body-bg-godiamond, .bg-godiamond {
  color: #fff;
  .godiamond-section {
    .bg-image-godiamond, .bg-image-godiamond-mobile {
      opacity: 1;
    }
    .title-godiamond {
      opacity: 1;
    }
  }
  .container-submenu {
    opacity: 1;
    visibility: visible;
    text-align: right;
    right: 0;
    color: #000;
  }
}
</style>
