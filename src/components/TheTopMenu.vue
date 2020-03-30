<template>
  <div class="top-menu">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 align-self-center">
          <h1 class="m-0">Olá</h1>
        </div>
        <div class="col-9 align-self-center">
          <nav class="nav justify-content-end">
            <div ref="nav-active" class="active-nav-bar"></div>
            <a class="nav-link lang-option disabled" href="#">pt</a>
            <a class="nav-link lang-option" href="#" tabindex="-1" aria-disabled="true">en</a>
            <a ref="nav-about" class="nav-link active" href="#" @click.prevent="goToSection('about')">about</a>
            <a ref="nav-cases" class="nav-link" href="#" @click.prevent="goToSection('cases')">cases</a>
            <a ref="nav-team" class="nav-link" href="#" @click.prevent="goToSection('team')">team</a>
            <a ref="nav-contact" class="nav-link" href="#" @click.prevent="goToSection('contact')">contact</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTopMenu',
  async mounted () {
    await this.goToSection('cases')
    await this.goToSection('about')
  },
  methods: {
    goToSection (section) {
      const offsetNavActive = this._getOffset(this.$refs['nav-active'])
      const offsetNavSection = this._getOffset(this.$refs[`nav-${section}`])
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

      &.lang-option {
        &:nth-child(2) {
          padding: 0.5rem .2rem;
        }
        &:nth-child(3) {
          padding-left: 0.2rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
