<template>
  <div ref="about-section" class="about-section bg-about">
    <div class="bg-elastic rellax-vertical" ref="elastic" data-rellax-speed="3" data-rellax-percentage="1">
      <img src="../assets/img/elastic.png" alt="Elastic">
    </div>
    <section ref="slogan-section" class="slogan-section section-item" data-class="about" id="slogan-section">
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

    <section style="height: 100%;" class="roboto-mono">
      <div class="d-inline-block container-submenu">
        <SubMenuCases class="submenu sticky-top"/>
      </div>
      <ClubeCerveja />
      <TribunaOnline />
      <GoDiamond />
      <Profissa />
    </section>

    <section class="section-item team-section fullheight d-flex justify-content-center align-items-center" data-class="team" id="team-section">
      <div class="bg-image"></div>
      <div>
        <h4 class="display-4 font-weight-light text-our-team rellax-vertical shadow-lg" data-rellax-speed="2" data-rellax-percentage="0.5">
          {{ $t('Our Team') }}
        </h4>
      </div>
    </section>

    <section class="section-item roboto-mono ml-5 mr-5" data-class="contact" id="contact-section">
      <div class="container-fluid ">
        <div class="row fullheight">
          <div class="col-12 col-md-4 align-self-center">
            <h3 class="font-weight-light pb-3" ><strong>{{ $t('Speak to Us') }}</strong></h3>
            <h4 class="font-weight-light">{{ $t('+55 (27) 3022 1310') }}</h4>
            <h4 class="font-weight-light">{{ $t('contato@conceptho.com') }}</h4>
          </div>
          <div class="col-12 col-md-4 align-self-center">
            <h3 class="font-weight-light pb-3"><strong>{{ $t('Headquarters') }}</strong></h3>
            <h4 class="font-weight-light">{{ $t('44 Comissário Octávio Queiroz St.') }}</h4>
            <h4 class="font-weight-light">{{ $t('Vitória - ES') }}</h4>
          </div>
          <div class="col-12 col-md-4 align-self-center">
            <h3 class="font-weight-light pb-3"><strong>{{ $t('See yourself here?') }}</strong></h3>
            <h4 class="font-weight-light">
              {{ $t('We are always looking for new members to join our team.') }}
            </h4>
            <h4 class="font-weight-light">
              {{ $t('Send us an e-mail. 😄') }}
            </h4>
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
import SubMenuCases from './SubMenuCases'
import ClubeCerveja from '../components/cases/ClubeCerveja'
import TribunaOnline from '../components/cases/TribunaOnline'
import GoDiamond from '../components/cases/GoDiamond'
import Profissa from '../components/cases/Profissa'

AOS.init()

export default {
  name: 'ScrollHome',
  components: { MouseIcon, ClubeCerveja, TribunaOnline, GoDiamond, Profissa, SubMenuCases },
  data () {
    return {
      rellax: {
        vertical: null,
        horizontal: null
      }
    }
  },
  mounted () {
    EffectScroll.opacity(this.$refs['main-slogan'], 0.95)
    // EffectScroll.opacity(this.$refs.elastic, 1)
    // EffectScroll.opacity(this.$refs['mouse-icon'], 0)
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
$bg-image-club : url('../assets/img/cerveja.png');
$bg-image-club-mobile : url('../assets/img/club-mobile.jpg');
$bg-image-tribuna : url('../assets/img/tribuna.png');
$bg-image-diamond : #007aff;
$bg-image-profissa : #dd5752;

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
  .title-cases {
    letter-spacing: 0.2em;
  }
}
.container-submenu {
  height: 100%;
  position: absolute;
  opacity: 0;
  right: 0;
  visibility: hidden;
  transition: opacity .12s linear;
}
.submenu {
  top: 100px !important;
  right: 1.3rem;
  bottom: 0;
  z-index: 10;
  padding: 0 30px 0;
  .active {
    margin-right: 20px;
    font-weight: bold;
  }
}

.submenu-left {
  position: absolute;
  top: 110px;
  z-index: 10;
  .nav-link{
    color: #fff !important;
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
  .mouse-icon {
    opacity: 1 !important;
  }
}
.bg-cases {
  background-color: #FFF;
  color: #000;
}
.body-bg-cases {
  background-color: #fff;
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
  opacity: 0;
  transition: opacity .12s linear;
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

.btn-primary {
  background-color: $conceptho-primary-color !important;
  border-color: $conceptho-primary-color !important;
  border-radius: 50px !important;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  a, a:hover {
    color: #fff;
  }
}
.btn-secondary {
  background-color: $conceptho-secondary-bg-color !important;
  border-color: $conceptho-secondary-bg-color !important;
  border-radius: 50px !important;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  a, a:hover {
    color: #fff;
  }
}
</style>
