<template>
  <div class="top-menu pt-2 pt-md-3">
    <div class="mobile-menu" :class="{ 'active': mobileMenuActive }">
      <nav class="nav nav-mobile-menu">
        <LocaleChanger />
        <a ref="nav-about" class="nav-link active" href="#" @click.prevent="goToSection('about')">{{ $t('about') }}</a>
        <a ref="nav-club" class="nav-link" href="#" @click.prevent="goToSection('club')">{{ $t('cases') }}</a>
        <a ref="nav-team" class="nav-link" href="#" @click.prevent="goToSection('team')">{{ $t('team') }}</a>
        <a ref="nav-contact" class="nav-link" href="#" @click.prevent="goToSection('contact')">{{ $t('contact') }}</a>
      </nav>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 align-self-center">
          <div class="logo ml-2 ml-md-3 mt-3">
            <a href="#about-section" @click="goToSection('about')" style="color: inherit;">
              <LogoVertical width="500" />
            </a>
          </div>
          <div class="d-block d-md-none text-right mt-3">
            <div class="checkbox-menu-collapse">
              <input type="checkbox" id="menu" v-model="mobileMenuActive">
              <label for="menu" class="icon">
                <div class="menu"></div>
              </label>
            </div>
          </div>
          <nav class="nav justify-content-end d-none d-md-flex">
            <div ref="nav-active" class="active-nav-bar"></div>
            <LocaleChanger @toggle-locale="toggleLocale()" />
            <router-link class="nav-link nav-about active" href="#" :to="{ hash: '#about-section' }">{{ $t('about') }}</router-link>
            <router-link class="nav-link nav-club" href="#" :to="{ hash: '#club-section' }">{{ $t('cases') }}</router-link>
            <router-link class="nav-link nav-team" href="#" :to="{ hash: '#team-section' }">{{ $t('team') }}</router-link>
            <router-link class="nav-link nav-contact" href="#" :to="{ hash: '#contact-section' }">{{ $t('contact') }}</router-link>
            <router-link class="nav-link nav-notfound" :to="{ name: 'NotFound' }">{{ $t('404') }}</router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoVertical from './LogoVertical'
import LocaleChanger from './LocaleChanger'

export default {
  name: 'TheTopMenu',
  components: {
    LogoVertical,
    LocaleChanger
  },
  data () {
    return {
      mobileMenuActive: false
    }
  },
  async mounted () {
    this.initSection()
  },
  created () {
    document.addEventListener('changesection', event => {
      this.goToSection(event.detail, true)
    })
  },
  methods: {
    goToSection (section, withoutHash) {
      this.mobileMenuActive = false
      const sectionRef = document.querySelector(`.nav-${section}`)

      if (!withoutHash) {
        this.$router.push({ hash: `#${section}-section` })
      }

      const offsetNavActive = this._getOffset(this.$refs['nav-active'])
      const offsetNavSection = this._getOffset(sectionRef)
      const navActive = this.$refs['nav-active']

      if (offsetNavActive.left < offsetNavSection.left) {
        navActive.style.width = `calc(${Math.round(Math.abs(offsetNavActive.left - offsetNavSection.left - offsetNavActive.width))}px + 1.3rem)`
      } else {
        navActive.style.left = `calc(${Math.round(offsetNavSection.left)}px)`
        navActive.style.width = `calc(${Math.round(offsetNavActive.left - offsetNavSection.left + offsetNavActive.width)}px - 1.3rem)`
      }

      setTimeout(() => {
        navActive.style.width = `${Math.round(offsetNavActive.width)}px`

        if (offsetNavActive.left < offsetNavSection.left) {
          navActive.style.left = `${Math.round(offsetNavSection.left)}px`
        }
      }, 120)
    },
    _getOffset (el) {
      const rect = el.getBoundingClientRect()
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width
      }
    },
    toggleLocale () {
      setTimeout(() => {
        this.initSection()
      }, 100)
    },
    initSection () {
      const routeHash = this.$route.hash
      if (routeHash) {
        this.goToSection(routeHash.split('-')[0].split('#')[1], true)
      } else {
        this.goToSection('about')
      }
    }
  }
  // watch: {
  //   mobileMenuActive (value) {
  //     this.$emit('in-logo-animated', value)
  //   }
  // }
}
</script>

<style lang="scss">
@import "../assets/styles/general";
.mobile-menu {
  position: absolute;
  z-index: 99999;
  width: 80%;
  height: 100vh;
  left: -80%;
  color: #fff !important;
  transition: transform .12s linear;
  &.active {
    transform: translateX(100%);
  }
  &:before {
    @extend .shadow-lg;
    @extend .contrast-bg-color;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: .90;
  }
  nav {
    @extend .d-block;
    @extend .pt-5;
    a {
      @extend .p-3;
      @extend .pl-4;
      @extend .d-block;
      display: block;
    }
  }
}
.checkbox-menu-collapse {
  z-index: 9999;
  input#menu {
    display: none;
  }

  .icon {
    position: relative;
    cursor: pointer;
    display: block;
    height: 24px;
    padding: 16px;
    width: 24px;
  }
  label.icon {
    position: absolute;
    top: 28px;
    right: 15px;
    z-index: 9999;
  }

  .icon .menu,
  .icon .menu::before,
  .icon .menu::after {
    background: #9FB1BD;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    transition: background ease .3s, top ease .3s .3s, transform ease .3s;
    width: 30px;
  }

  .icon:hover .menu,
  .icon:hover .menu::before,
  .icon:hover .menu::after {
    background: #47B74B;
  }

  .icon .menu {
    left: 0;
    top: 0;
  }

  .icon .menu::before {
    top: -10px;
  }

  .icon .menu::after {
    top: 10px;
  }

  #menu:checked + .icon .menu {
    background: transparent;
  }

  #menu:checked + .icon .menu::before {
    transform: rotate(45deg);
  }

  #menu:checked + .icon .menu::after {
    transform: rotate(-45deg);
  }

  #menu:checked + .icon .menu::before,
  #menu:checked + .icon .menu::after {
    top: 0;
    transition: top ease .3s, transform ease .3s .3s;
  }

  #menu:checked ~ nav {
    width: 200px;
  }
}

.top-menu {
  position: fixed;
  z-index: 9;
  width: 100%;

  .active-nav-bar {
    position: fixed;
    width: 80px;
    height: 2px;
    background-color: $conceptho-primary-color;
    margin-left: 1.3rem;
    top: 3.2rem;
    transition: all .12s ease-out;
  }
  .nav {
    font-family: 'Roboto', sans-serif;
    .nav-link {
      font-size: 16px;
      padding: 0.5rem 1.3rem;
      letter-spacing: .2em;
      transition: color .12s linear;

      &:not(.disabled) {
        color: #fff;
      }

      &:hover {
        color: $conceptho-primary-color;
      }

      &.active {
        //position: relative;
        //&:before {
        //  position: absolute;
        //  content: '';
        //  border-bottom: 2px solid $conceptho-primary-color;
        //  width: 80%;
        //  bottom: .4rem;
        //}
      }
    }
  }

  &.menu-bg-base {
    .nav:not(.nav-mobile-menu) {
      .nav-link {
        &:not(.disabled) {
          color: #fff;
        }

        &:hover {
          color: $conceptho-primary-color;
        }
      }
    }
  }
  &.menu-bg-team {
    .logo {
      color: #fff;
    }
  }
  &.menu-bg-cases {
    .logo {
      color: $conceptho-primary-color;
    }
    .nav:not(.nav-mobile-menu) {
      .nav-link {
        &:not(.disabled) {
          color: $conceptho-secondary-bg-color;
        }
        &:hover {
          color: $conceptho-primary-color;
        }
      }
    }
  }
  &.menu-bg-godiamond, &.menu-bg-club {
    .logo {
      color: #fff;
    }
    .nav:not(.nav-mobile-menu) {
      .nav-link {
        &:not(.disabled) {
          color: $conceptho-secondary-bg-color;
        }
        &:hover {
          color: $conceptho-primary-color;
        }
      }
    }
  }
  &.menu-bg-club .logo {
    color: #000;
  }
  &.menu-bg-contact {
    .logo {
      color: $conceptho-secondary-bg-color;
    }
    .nav:not(.nav-mobile-menu) {
      .nav-link {
        &:not(.disabled) {
          color: $conceptho-secondary-bg-color;
        }
        &:hover {
          color: $conceptho-primary-color;
        }
      }
    }
  }
}
.logo {
  position: fixed;
  z-index: 9999;
  color: $conceptho-primary-color;
  transition: color .3s linear;
  transition: opacity .2s linear;
  &:hover {
    opacity: .5;
  }
}
</style>
