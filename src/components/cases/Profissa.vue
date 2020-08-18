<template>
  <section class="profissa-section section-item" data-class="profissa" data-scroll-disabled="true" id="profissa-section">
    <div class="bg-image-profissa d-none d-md-block"></div>
    <div class="bg-image-profissa-mobile d-none"></div>
    <div class="container-fluid">
      <div class="fullheight row">
        <div class="col-12 col-md-8 align-self-center pr-4 pr-md-5">
          <div class="row">
            <div class="col-12 offset-md-6 col-md-6 text-right text-md-left">
              <h4 ref="title-profissa" class="display-4 title-profissa" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Profissa') }}</strong></h4>
            </div>
            <div ref="profissa-info" class="col-12 offset-md-2 col-md-7">
              <div class="text-right font-weight-light pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                {{ $t('Profissa simplifies the way to get a new job, guiding the process of creating a professional curriculum and connecting thousands of people to companies across Brazil.') }}
              </div>
              <div class="text-right pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                <span class="badge badge-dark mr-2">PHP</span>
                <span class="badge badge-dark mr-2">Angular JS</span>
                <span class="badge badge-dark mr-2">ElasticSearch</span>
                <span class="badge badge-dark mr-2">MySQL</span>
              </div>
              <div class="text-right pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
                <div  class="btn btn-secondary mr-2">
                  <a href="https://profissa.net">
                    Visit the profissa website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 align-self-end d-none d-md-block"><img class="img-fluid" src="../../assets/img/profissa_rocket.png"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import EffectScroll from '../../utils/scrollEffect'

import EffectScroll from '../../utils/scrollEffect'

export default {
  name: 'Profissa',
  mounted () {
    EffectScroll.opacity(this.$refs['title-profissa'], 0.96)
    EffectScroll.opacity(this.$refs['profissa-info'], 0.99)
    EffectScroll.init()
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/general";
$bg-image-profissa : #dd5752;
.profissa-section {
  position: relative;
  .bg-image-profissa {
    opacity: 0;
  }
}
.title-profissa {
  opacity: 0;
  transition: opacity .12s linear;
}
.bg-image-profissa {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: $bg-image-profissa;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.rocket-profissa {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}

.bg-image-profissa-mobile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 75%;
  background-color: $bg-image-profissa;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}
.bg-profissa {
  background-color: #FFF;
  color: #000;
  @extend .contrast-bg-color;
  .profissa-section {
    .bg-image-profissa, .bg-image-profissa-mobile {
      opacity: 1;
    }
  }
}
.body-bg-profissa, .bg-profissa {
  .profissa-section {
    .bg-image-profissa, .bg-image-profissa-mobile {
      opacity: 1;
    }
    .title-profissa {
      opacity: 1;
    }
  }
  .container-submenu {
    opacity: 1;
    visibility: visible;
    text-align: right;
    left: 0;
    right: initial;
    text-align: left;
    color: #000;
  }
}
</style>
