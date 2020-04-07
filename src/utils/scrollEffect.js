class EffectScroll {
  constructor () {
    this.functions = []
  }

  opacity (element, rate) {
    this.functions.push(
      () => {
        let height = window.innerHeight
        const scrollTop = (window.pageYOffset !== undefined)
          ? window.pageYOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollTop

        height = height / rate
        element.style.opacity = (height - scrollTop) / height
      }
    )
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

            const topMenu = document.querySelector('.top-menu')
            const topMenuClasses = topMenu.getAttribute('class').match(/(^|\s)menu-bg-\S+/g)
            if (topMenuClasses) {
              topMenuClasses.forEach(item => {
                topMenu.classList.remove(item.trim())
              })
            }

            topMenu.classList.add(`menu-bg-${panel.dataset.class}`)
          }
        })
      }
    )
  }

  init () {
    document.addEventListener('scroll', () => {
      this.functions.forEach(func => func())
    })
  }
}

// const hexToRgb = hex => {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b
//   })
//
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null
// }

export default new EffectScroll()
