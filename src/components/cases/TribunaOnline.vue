<template>
  <section class="tribuna-section section-item" data-class="tribuna" data-scroll-disabled="true" id="tribuna-section">
    <div class="bg-image-tribuna d-none d-md-block"></div>
    <div class="bg-image-tribuna-mobile d-none"></div>
    <div class="container-fluid">
      <div class="fullheight row">
        <div class="col-12 align-self-center pr-4 pr-md-5">
          <div class="row">
            <div ref="title-tribuna" class="col-12 offset-md-2 col-md-4 text-right">
              <h4 class="display-4 title-cases title-tribuna" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Tribuna') }}</h4>
              <h4 class="display-4 title-tribuna" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Online') }}</strong></h4>
            </div>
            <div class="w-100"></div>
            <div ref="tribuna-info" class="col-12 offset-md-2 col-md-4">
              <div class="text-right font-weight-light pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                {{ $t('Complete restructuring of the Espírito Santo news portal, with a load reduction of more than 70% and 103% increase in page views.') }}
              </div>
              <div class="text-right pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                <span class="badge badge-light mr-2">Bolt</span>
                <span class="badge badge-light mr-2">Vue</span>
                <span class="badge badge-light mr-2">PHP</span>
                <span class="badge badge-light mr-2">MySQL</span>
                <span class="badge badge-light mr-2">ElasticSearch</span>
                <span class="badge badge-light mr-2">Redis</span>
                <span class="badge badge-light mr-2">Docker</span>
                <span class="badge badge-light mr-2">Varnish</span>
              </div>
              <div class="pt-2 text-right" data-rellax-speed="1" data-rellax-percentage="0.5">
                <div  class="btn btn-primary btn-site mr-2">
                  <a href="https://tribunaonline.com.br">
                    Visit the Tribuna Online website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EffectScroll from '../../utils/scrollEffect'

export default {
  name: 'TribunaOnline',
  mounted () {
    EffectScroll.opacity(this.$refs['title-tribuna'], 0.96)
    EffectScroll.opacity(this.$refs['tribuna-info'], 0.99)
    EffectScroll.init()
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/general";
$bg-image-tribuna : url('../../assets/img/tribuna.png');
.tribuna-section {
  position: relative;
  .bg-image-tribuna {
    opacity: 0;
  }
}
.title-tribuna {
  color: $conceptho-primary-color;
  opacity: 0;
  transition: opacity .12s linear;
}
.bg-image-tribuna {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: $bg-image-tribuna;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.bg-image-tribuna-mobile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background-image: $bg-image-tribuna;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .12s linear;
}
.body-bg-tribuna, .bg-tribuna {
  background-color: $conceptho-secondary-bg-color;
  color: #fff;
  @extend .contrast-bg-color;
  .tribuna-section {
    .bg-image-tribuna, .bg-image-tribuna-mobile {
      opacity: 1;
    }
    .title-tribuna {
      opacity: 1;
    }
  }
  .container-submenu {
    opacity: 1;
    visibility: visible;
    text-align: left;
    left: 0;
    right: initial;
    .nav-link {
      color: #fff;
      &:hover {
        color: $conceptho-primary-color;
      }
    }
  }
}
</style>
