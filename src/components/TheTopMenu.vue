<template>
  <div class="top-menu">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 align-self-center">
          <div class="logo ml-3 mt-3">
            <a href="#top-section" @click="goToSection('about')" style="color: inherit;">
              <LogoVertical width="500" />
            </a>
          </div>
          <nav class="nav justify-content-end">
            <div ref="nav-active" class="active-nav-bar"></div>
            <LocaleChanger />
            <a ref="nav-about" class="nav-link active" href="#" @click.prevent="goToSection('about')">{{ $t('about') }}</a>
            <a ref="nav-cases" class="nav-link" href="#" @click.prevent="goToSection('cases')">{{ $t('cases') }}</a>
            <a ref="nav-team" class="nav-link" href="#" @click.prevent="goToSection('team')">{{ $t('team') }}</a>
            <a ref="nav-contact" class="nav-link" href="#" @click.prevent="goToSection('contact')">{{ $t('contact') }}</a>
            <router-link ref="nav-notfound" class="nav-link" :to="{ name: 'NotFound' }">{{ $t('404') }}</router-link>
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
  async mounted () {
    const routeHash = this.$route.hash
    if (routeHash) {
      await this.goToSection(routeHash.split('-')[0].split('#')[1], true)
    } else {
      await this.goToSection('about')
    }
  },
  methods: {
    goToSection (section, withoutHash) {
      const sectionRef = this.$refs[`nav-${section}`]

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
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
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
    top: 2.2rem;
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
    .nav {
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
  &.menu-bg-violet, &.menu-bg-team {
    .logo {
      color: #fff;
    }
  }
  &.menu-bg-white {
    .logo {
      color: $conceptho-secondary-bg-color;
    }
    .nav {
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
  color: $conceptho-primary-color;
  transition: color .3s linear;
  transition: opacity .2s linear;
  &:hover {
    opacity: .5;
  }
}
</style>
