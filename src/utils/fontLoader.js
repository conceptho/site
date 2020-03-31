export default () => {
  window.WebFontConfig = {
    google: { families: ['Press+Start+2P'] }
  }

  const wf = document.createElement('script')
  wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  wf.type = 'text/javascript'
  wf.async = 'true'
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(wf, s)
}
