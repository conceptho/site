<template>
  <div ref="about-section" class="about-section bg-base">
    <div class="bg-elastic rellax-vertical" ref="elastic" data-rellax-speed="3" data-rellax-percentage="1">
      <img src="../assets/img/elastic.png" alt="Elastic">
    </div>
    <section ref="slogan-section" class="top-section section-item" data-class="base" id="about-section">
      <div class="container fullheight d-flex justify-content-center">
        <div class="row justify-content-center">
          <div class="col-md-9 align-self-center">
            <div class="conceptho-slogan roboto-mono">
              <div ref="main-slogan" class="main-slogan">
                <h4 class="display-4 font-weight-light">{{ $t('Making the web') }}</h4>
                <h4 class="display-4">{{ $t('a more') }} <span class="font-weight-normal">{{ $t('human') }}</span> {{ $t('place') }}</h4>
              </div>
              <div class="sub-slogan mt-3 pl-5 ml-5 rellax-vertical" data-rellax-speed="1.2">
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

    <section class="section-item roboto-mono" data-class="violet" id="cases-section">
      <div class="container fullheight d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
          <div class="col-12 text-center align-self-center">
            <h4 class="display-4 font-weight-light rellax-vertical" data-rellax-speed="-1" data-rellax-percentage="0.5">{{ $t('Something') }} <strong>{{ $t('important') }}</strong> {{ $t('here') }}</h4>
            <h4 class="display-4 font-weight-light rellax-vertical" data-rellax-speed="1" data-rellax-percentage="0.5">{{ $t('Another thing') }}</h4>
          </div>
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

    <section class="section-item roboto-mono" data-class="white" id="contact-section">
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
  name: 'AboutSection',
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
@import "../assets/styles/variables";
@import "../assets/styles/bootstrap";
$bg-image-01 : url('../assets/img/bg-team-01.jpg');
$bg-image-02 : url('../assets/img/bg-team-02.jpg');
$bg-image-03 : url('../assets/img/bg-team-03.jpg');

.top-section {
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
  background-position: center;
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
    background-image: $bg-image-03, $bg-image-03;
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
      background-image: $bg-image-03, $bg-image-03;
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
      background-image: $bg-image-03, $bg-image-03;
      background-blend-mode: difference;
      background-position:
        calc(50% - 1px) calc(50% - 1px),
        calc(50% + 1px) calc(50% + 1px);
      filter: brightness(2) invert(1) grayscale(1);
      box-shadow: inset 0 0 0 1px black;
    }

    &:after {
      background-image: $bg-image-03;
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
.bg-base {
  @extend .contrast-bg-color;
}
.bg-violet {
  background-color: #7A4EAB;
  color: #fff;
}
.bg-team {
  @extend .contrast-bg-color;
  .team-section {
    .bg-image {
      opacity: 1;
    }
  }
}
.bg-blue {
  background-color: #2F8FED;
  color: #fff;
}
.bg-white {
  background-color: #fff;
}
.text-our-team{
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
</style>
