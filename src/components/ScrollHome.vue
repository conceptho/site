<template>
  <div ref="about-section" class="about-section bg-about">
    <div class="bg-elastic rellax-vertical" ref="elastic" data-rellax-speed="3" data-rellax-percentage="1">
      <img src="../assets/img/elastic.png" alt="Elastic">
    </div>
    <section ref="slogan-section" class="about-section section-item" data-class="about" id="about-section">
      <div class="container fullheight d-flex justify-content-center">
        <div class="row justify-content-center">
          <div class="col-md-9 align-self-center">
            <div class="conceptho-slogan roboto-mono">
              <div ref="main-slogan" class="main-slogan px-3 px-md-0">
                <h4 class="display-4 font-weight-light">{{ $t('Making the web') }}</h4>
                <h4 class="display-4">{{ $t('a more') }} <span class="font-weight-normal">{{ $t('human') }}</span> {{ $t('place') }}</h4>
              </div>
              <div class="sub-slogan mt-3 pl-5 pr-2 ml-md-5 rellax-vertical" data-rellax-speed="1.2">
                {{ $t('World-class outcomes for brands and people through design, content, user experience and technology.') }}
              </div>
            </div>
          </div>
        </div>
        <div ref="mouse-icon" class="mb-3 mouse-icon">
          <MouseIcon />
        </div>
      </div>
    </section>

    <section class="section-item roboto-mono cases-section" data-class="cases" id="cases">
      <div class="container-fluid">
        <div class="fullheight row justify-content-center">
          <div class="bg-image-club d-none d-md-block"></div>
          <div class="bg-image-club-mobile d-md-none"></div>
          <div class="col-12 align-self-center">
            <div class="offset-md-3 col-5">
              <h4 class="display-4 rellax-vertical tittle-cases" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Clube da') }}</h4>
              <h4 class="display-4 rellax-vertical" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Cerveja') }}</strong></h4>
            </div>
            <div class="sub-slogan offset-md-5 col-md-5 font-weight-light rellax-vertical pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
              {{ $t('Mobile app for android and ios, with development from the prototype to continuous integration') }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-item roboto-mono cases-section tribuna-section" data-class="tribuna" id="cases-section-tribuna">
      <div class="container-fluid">
        <div class="fullheight row justify-content-center">
          <div class="bg-image-tribuna d-none d-md-block"></div>
          <div class="bg-image-tribuna-mobile d-md-none"></div>
          <div class="col-12 align-self-center">
            <div class="offset-md-4 col-4">
              <h4 class="display-4 rellax-vertical tittle-tribuna tittle-cases" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Tribuna') }}</h4>
              <h4 class="display-4 rellax-vertical tittle-tribuna" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Online') }}</strong></h4>
            </div>
            <div class="sub-slogan text-right offset-md-1 col-md-5 font-weight-light rellax-vertical pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
              {{ $t('Complete restructuring of the Espírito Santo news portal, with a load reduction of more than 70%') }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-item roboto-mono cases-section" data-class="cases" id="cases-section-diamond">
      <div class="container-fluid">
        <div class="fullheight row justify-content-center">
          <div class="bg-image-diamond d-none d-md-block"></div>
          <div class="bg-image-diamond-mobile d-md-none"></div>
          <div class="col-12 align-self-center">
            <div class="offset-md-4 col-5">
              <h4 class="display-4 rellax-vertical tittle-cases" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Go') }}<strong>{{ $t('Diamond') }}</strong></h4>
            </div>
            <div class="sub-slogan text-right offset-md-2 col-md-4 font-weight-light text-white rellax-vertical pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
              {{ $t('Android and iOS app that organizes contacts for multi-level marketers.') }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-item roboto-mono cases-section profissa-section" data-class="profissa" id="cases-section-profissa">
      <div class="container-fluid">
        <div class="fullheight row justify-content-center">
          <div class="bg-image-profissa d-none d-md-block">
          </div>
          <div class="bg-image-profissa-mobile d-md-none"></div>
          <div class="col-7 col-md-7 align-self-center">
            <div class="offset-md-5 col-md-4">
              <h4 class="display-4 rellax-vertical" data-rellax-speed="-1" data-rellax-percentage="0.5"><strong>{{ $t('Profissa') }}</strong></h4>
            </div>
            <div class="sub-slogan text-right offset-md-3 col-md-5 font-weight-light rellax-vertical pt-2" data-rellax-speed="1" data-rellax-percentage="0.5">
              {{ $t('Android and iOS app that organizes contacts for multi-level marketers.') }}
            </div>
          </div>
          <div class="col-md-3 align-self-end"><img class="img-fluid" src="../assets/img/profissa_rocket.png"></div>
        </div>
      </div>
    </section>

    <section class="section-item team-section fullheight d-flex justify-content-center align-items-center" data-class="team" id="team-section">
      <div class="bg-image"></div>
      <div>
        <h4 class="display-4 font-weight-light text-our-team rellax-vertical shadow-lg" data-rellax-speed="2" data-rellax-percentage="0.5">
          {{ $t('Our Team') }}
        </h4>
      </div>
    </section>

    <section class="section-item roboto-mono" data-class="contact" id="contact-section">
      <div class="container fullheight d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
          <div class="col-12 text-center align-self-center">
            <h4 class="display-4 font-weight-light rellax-vertical" data-rellax-speed="-1" data-rellax-percentage="0.5">Sei lá, <strong>cara</strong></h4>
            <h4 class="display-4 font-weight-light rellax-vertical" data-rellax-speed="1" data-rellax-percentage="0.5">Outra coisa</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos'
import EffectScroll from '../utils/scrollEffect'
import MouseIcon from './MouseIcon'
import Rellax from 'rellax'
import 'aos/dist/aos.css'

AOS.init()

export default {
  name: 'ScrollHome',
  components: { MouseIcon },
  data () {
    return {
      rellax: {
        vertical: null,
        horizontal: null
      }
    }
  },
  mounted () {
    EffectScroll.opacity(this.$refs['main-slogan'], 2.2)
    // EffectScroll.opacity(this.$refs.elastic, 1)
    EffectScroll.opacity(this.$refs['mouse-icon'], 2.2)
    EffectScroll.background(this.$refs['about-section'], '.section-item')
    EffectScroll.init()
    this.rellax.vertical = new Rellax('.rellax-vertical', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
  }
}
</script>

<style lang="scss">
@import "../assets/styles/general";
$bg-image-01 : url('../assets/img/bg-team-01.jpg');
$bg-image-02 : url('../assets/img/bg-team-02.jpg');
$bg-image-03 : url('../assets/img/bg-team-03.jpg');
$bg-image-club : url('../assets/img/club.jpg');
$bg-image-club-mobile : url('../assets/img/club-mobile.jpg');
$bg-image-tribuna : url('../assets/img/tribuna.jpg');
$bg-image-diamond : $conceptho-secondary-bg-color;
$bg-image-profissa : $conceptho-primary-color;

.about-section {
  position: relative;
}
.bg-elastic {
  position: absolute;
  width: 100%;
  opacity: .5;
  img {
    max-width: 100%;
  }
}
.about-section {
  transition: all 1.2s ease;
}

.cases-section {
  position: relative;
  .bg-image-club, .bg-image-club-mobile, .bg-image-tribuna, .bg-image-tribuna-mobile, .bg-image-diamond,.bg-image-diamond-mobile, .bg-image-profissa, .bg-image-profissa-mobile {
    opacity: 0;
  }
  .tittle-cases{
    letter-spacing: 0.2em;
  }
}

.tribuna-section {
  .tittle-tribuna{
    color: $conceptho-primary-color;
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
  background-size: contain;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
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
  background-size: contain;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.bg-image-club-mobile {
  position: absolute;
  top: 10%;
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
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.bg-image-diamond {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: $bg-image-diamond;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}

.bg-image-diamond-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: $bg-image-diamond;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
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

.rocket-profissa{
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
  height: 55%;
  background-color: $bg-image-profissa;
  transition: all .8s linear;
  &:before, &:after {
    transition: all .2s linear;
  }
}
.team-section {
  position: relative;
  .bg-image {
    opacity: 0;
  }
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: $bg-image-03;
  background-size: cover;
  background-position: center 30%;
  transition: all .8s linear;
  filter: sepia(80%);
  &:before, &:after {
    transition: all .2s linear;
  }
  &:hover {
    filter: sepia(50%);
    // @extend .effect-one;
  }
}

.effect-one {
  $offset : 5px;
  @supports (mix-blend-mode: multiply) {
    overflow: hidden;
    background-color: magenta;
    background-blend-mode: screen;

    &:before, &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: inherit;
      mix-blend-mode: multiply;
      transform: scale(1.05);
    }

    &:before {
      background-color: yellow;
      background-blend-mode: screen;
      transform-origin: top left;
    }

    &:after {
      background-color: cyan;
      background-blend-mode: screen;
      transform-origin: bottom right;
    }
  }
}

.effect-two {
  @supports (filter: brightness(3)) and (mix-blend-mode: color) {
    &:before, &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: inherit;
      background-color: red;
      background-blend-mode: screen;
      mix-blend-mode: color;
      filter: brightness(3);
    }
  }
}

.effect-three {
  @supports (filter: invert(1)) and (background-blend-mode: difference) {
    background-image: $bg-image-03, $bg-image-03, $bg-image-club, $bg-image-club, $bg-image-club-mobile, $bg-image-club-mobile, $bg-image-tribuna, $bg-image-tribuna, $bg-image-diamond, $bg-image-diamond, $bg-image-profissa, $bg-image-profissa;
    background-blend-mode: difference;
    background-position:
      calc(50% - 1px) calc(50% - 1px),
      calc(50% + 1px) calc(50% + 1px);
    filter: brightness(2) invert(1) grayscale(1);
    box-shadow: inset 0 0 0 1px black;
  }
}

.effect-four {
  @supports (filter: invert(1)) and (mix-blend-mode: color) {
    &:before,
    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      box-shadow: inset 0 0 0 1px black;
    }

    &:before {
      background-image: $bg-image-03, $bg-image-03, $bg-image-club, $bg-image-club, $bg-image-club-mobile, $bg-image-club-mobile, $bg-image-tribuna, $bg-image-tribuna, $bg-image-diamond, $bg-image-diamond, $bg-image-profissa, $bg-image-profissa;
      background-blend-mode: difference;
      background-position:
        calc(50% - 1px) calc(50% - 1px),
        calc(50% + 1px) calc(50% + 1px);
      filter: brightness(2) invert(1) grayscale(1);
    }

    &:after {
      background: inherit;
      mix-blend-mode: color;
    }
  }
}

.effect-five {
  @supports (filter: blur(2px)) and (mix-blend-mode: multiply) {
    overflow: hidden;

    &:before, &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
    }

    &:before {
      background-image: $bg-image-03, $bg-image-03, $bg-image-club, $bg-image-club, $bg-image-club-mobile, $bg-image-club-mobile, $bg-image-tribuna, $bg-image-tribuna, $bg-image-diamond, $bg-image-diamond, $bg-image-profissa, $bg-image-profissa;
      background-blend-mode: difference;
      background-position:
        calc(50% - 1px) calc(50% - 1px),
        calc(50% + 1px) calc(50% + 1px);
      filter: brightness(2) invert(1) grayscale(1);
      box-shadow: inset 0 0 0 1px black;
    }

    &:after {
      background-image: $bg-image-03, $bg-image-club, $bg-image-club-mobile, $bg-image-tribuna, $bg-image-diamond, $bg-image-profissa;
      background-position: center;
      mix-blend-mode: multiply;
      filter: brightness(1.3) blur(2px) contrast(2);
    }
  }
}

.roboto-mono {
  font-family: "Roboto Mono";
}
.sub-slogan {
  font-size: 20px;
  width: 75%;
}
.bg-about {
  @extend .contrast-bg-color;
}
.body-bg-about {
  background-color: $conceptho-secondary-bg-color;
}
.bg-cases {
  background-color: #FFF;
  color: #000;
  @extend .contrast-bg-color;
  .cases-section {
    .bg-image-club, .bg-image-club-mobile, .bg-image-diamond, .bg-image-diamond-mobile {
      opacity: 1;
    }
  }
}
.body-bg-cases {
  background-color: #FFF;
}
.bg-profissa{
  background-color: #FFF;
  color: #000;
  @extend .contrast-bg-color;
  .profissa-section {
    .bg-image-profissa, .bg-image-profissa-mobile {
      opacity: 1;
    }
  }
}
.bg-tribuna {
  background-color: $conceptho-secondary-bg-color;
  color: #fff;
  @extend .contrast-bg-color;
  .tribuna-section {
    .bg-image-tribuna, .bg-image-tribuna-mobile {
      opacity: 1;
    }
  }
}
.bg-team {
  @extend .contrast-bg-color;
  .team-section {
    .bg-image {
      opacity: 1;
    }
  }
}
.body-bg-team {
  background-color: $conceptho-secondary-bg-color;
}
.bg-blue {
  background-color: #2F8FED;
  color: #fff;
}
.body-bg-blue {
  background-color: #2F8FED;
}
.bg-contact {
  background-color: #fff;
}
.body-bg-contact {
  background-color: #fff;
}
.text-our-team {
  @extend .contrast-bg-color;
  position: relative;
  font-family: "Roboto Mono";
  padding: 5px 15px;
  margin-top: 200px;
}
.mouse-icon {
  position: fixed;
  bottom: 0;
}

@include media-breakpoint-down(md) {
  .conceptho-slogan {
    margin-top: 140px;
  }

  h4.display-4 {
    font-size: 30px;
  }

  .sub-slogan {
    font-size: 14px;
    width: 100%;
  }
}
</style>
