import throttle from 'lodash/throttle'

const bodyThemeColors = {
  about: '#1B1D1E',
  cases: '#7A4EAB',
  team: '#1B1D1E',
  contact: '#FFFFFF'
}

const changeThemeColor = (section) => {
  // Web and Android
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  metaThemeColor.setAttribute('content', bodyThemeColors[section])

  // Apple
  const appleThemeColor = document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')
  appleThemeColor.setAttribute('content', bodyThemeColors[section])
}

class EffectScroll {
  constructor () {
    this.functions = []
    this.section = ''
    this.buildThresholdList = () => {
      const thresholds = []
      const numSteps = 20

      for (let i = 1.0; i <= numSteps; i++) {
        const ratio = i / numSteps
        thresholds.push(ratio)
      }

      thresholds.push(0)
      return thresholds
    }
  }

  opacity (element, rate, onEnter, onExit) {
    element.style.transition = 'opacity .3s linear'
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const intersectionRatio = entry.intersectionRatio
        if (intersectionRatio <= rate) {
          element.style.opacity = 0
          if (onExit) element.style.transform = onExit
        } else {
          element.style.opacity = intersectionRatio
          if (onEnter) element.style.transform = onEnter
        }
      })
    }, {
      root: null,
      threshold: this.buildThresholdList()
    })

    observer.observe(element)

    // this.functions.push(
    //   () => {
    //     let height = window.innerHeight
    //     const scrollTop = (window.pageYOffset !== undefined)
    //       ? window.pageYOffset
    //       : (document.documentElement || document.body.parentNode || document.body).scrollTop
    //
    //     height = height / rate
    //     element.style.opacity = (height - scrollTop) / height
    //   }
    // )
  }

  background (target, sectionClass) {
    this.functions.push(
      () => {
        const scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop
        const scroll = scrollTop + (window.innerHeight / 3)

        const panels = document.querySelectorAll(sectionClass)
        panels.forEach(panel => {
          if (panel.offsetTop <= scroll && panel.offsetTop + panel.offsetHeight > scroll) {
            const classAttr = target.getAttribute('class')
            if (classAttr) {
              classAttr
                .match(/(^|\s)bg-\S+/g)
                .forEach(item => {
                  target.classList.remove(item.trim())
                })
            }
            target.classList.add(`bg-${panel.dataset.class}`)

            const body = document.body
            const bodyClasses =
              body.getAttribute('class')
                ? body.getAttribute('class').match(/(^|\s)body-bg-\S+/g)
                : null

            if (bodyClasses) {
              bodyClasses.forEach(item => {
                body.classList.remove(item.trim())
              })
            }

            body.classList.add(`body-bg-${panel.dataset.class}`)

            const topMenu = document.querySelector('.top-menu')
            const topMenuClasses = topMenu.getAttribute('class') ? topMenu.getAttribute('class').match(/(^|\s)menu-bg-\S+/g) : null
            if (topMenuClasses) {
              topMenuClasses.forEach(item => {
                topMenu.classList.remove(item.trim())
              })
            }

            topMenu.classList.add(`menu-bg-${panel.dataset.class}`)
            const changeSection = new CustomEvent('changesection', { detail: panel.dataset.class })
            if (this.section !== panel.dataset.class && !panel.dataset.scrollDisabled) {
              document.dispatchEvent(changeSection)
              this.section = panel.dataset.class
            }

            changeThemeColor(panel.dataset.class)
          }
        })
      }
    )
  }

  init () {
    document.addEventListener('scroll', throttle(() => {
      this.functions.forEach(func => func())
    }, 300))
  }
}

export default new EffectScroll()
