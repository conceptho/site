/* eslint-disable no-console */
import logo from '../assets/img/logo.svg'
import wink from '../assets/img/piscadinha.png'

const concepthoTermVersion = '1.0.0'

const ga = window.ga || function (name, config) {
  // console.warn('Event called: ', name)
  // console.warn('Config object: ', config)
}

const containers = [
  { id: '510bda3972fd', image: 'conceptho/site         ', command: '"./home.exe" ', status: 'Up 11 days', ports: '80/tcp', names: 'conceptho_site_1', status_c: 'up' },
  { id: '510bda3972fd', image: 'conceptho/notfound-game', command: '"./phaser.sh"', status: 'Up 11 days', ports: '      ', names: 'conceptho_game_1', status_c: 'up' }
]

const files = [
  { permission: 'drwxr-xr-x', n: 5, group: 'root', user: 'root', size: '4096', date: 'abr 12 17:46', file: './', deleted: false },
  { permission: 'drwxr-xr-x', n: 8, group: 'root', user: 'root', size: '4096', date: 'abr  8 11:36', file: '../', deleted: false },
  { permission: 'drwxr-xr-x', n: 2, group: 'root', user: 'root', size: '4096', date: 'abr 12 17:46', file: 'css/', deleted: false },
  { permission: 'drwxr-xr-x', n: 3, group: 'root', user: 'root', size: '4096', date: 'abr 12 17:46', file: 'img/', deleted: false },
  { permission: 'drwxr-xr-x', n: 2, group: 'root', user: 'root', size: '4096', date: 'abr 12 17:46', file: 'js/', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: '1707', date: 'abr 12 17:46', file: 'notfound.html', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: '1497', date: 'abr 12 17:46', file: 'index.html', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: '4286', date: 'abr 12 17:46', file: 'favicon.ico', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: ' 561', date: 'abr 12 17:46', file: 'manifest.json', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: '  24', date: 'abr 12 17:46', file: 'robots.txt', deleted: false },
  { permission: '-rw-r--r--', n: 1, group: 'root', user: 'root', size: '1069', date: 'abr 12 17:46', file: 'service-worker.js', deleted: false }
]

function ConcepthoTerm (config) {
  const term = config.el || document.getElementById('term')
  let termBuffer = config.initialMessage || ''
  let lineBuffer = config.initialLine || ''
  const cwd = config.cwd || '~/'
  const tags = config.tags || ['red', 'blue', 'white', 'bold']
  const processCommand = config.cmd || false
  const maxBufferLength = config.maxBufferLength || 8192
  const commandHistory = []
  let currentCommandIndex = -1
  const maxCommandHistory = config.maxCommandHistory || 100
  const autoFocus = config.autoFocus || false
  const coreCmds = {
    clear,
    help,
    version,
    '?': hummm,
    contact,
    shutdown,
    // fly,
    404: game,
    train,
    earthquake,
    update,
    docker,
    ls,
    rm
  }

  const fauxInput = document.createElement('textarea')
  fauxInput.className = 'faux-input'
  document.body.appendChild(fauxInput)
  if (autoFocus) {
    fauxInput.focus()
  }

  function getLeader () {
    return cwd + '$ '
  }

  function renderTerm () {
    const bell = '<span class="bell"></span>'
    const ob = termBuffer + getLeader() + lineBuffer
    term.innerHTML = ob
    term.innerHTML += bell
    term.scrollTop = term.scrollHeight
  }

  function renderPartialTerm () {
    term.innerHTML = termBuffer
  }

  function writeToBuffer (str) {
    termBuffer += str

    // Stop the buffer getting massive.
    if (termBuffer.length > maxBufferLength) {
      const diff = termBuffer.length - maxBufferLength
      termBuffer = termBuffer.substr(diff)
    }
  }

  function renderStdOut (str) {
    let i = 0
    const max = tags.length
    for (i; i < max; i++) {
      const start = new RegExp('{' + tags[i] + '}', 'g')
      const end = new RegExp('{/' + tags[i] + '}', 'g')
      str = str.replace(start, '<span class=<br>"' + tags[i] + '">')
      str = str.replace(end, '</span>')
    }
    return str
  }

  function clear (argv, argc) {
    termBuffer = ''
    return ''
  }

  function help (argv, argc) {
    const manText = '' +
      '<img style="margin: 15px 0 6px;height:40px;" src="' + logo + '"/><br>' +
      'version: ' + concepthoTermVersion + '<br>' +
      '-------------------------<br>' +
      '<strong>Usage:</strong> <span style="color:#5dc570;">[option]</span><br><br>' +
      'Options:<br>' +
      '  help          <span class="text-muted">Show this help</span><br>' +
      '  version       <span class="text-muted">Print the conceptho terminal version</span><br>' +
      '  ls            <span class="text-muted">List files and directories</span><br>' +
      '  rm            <span class="text-muted"><span class="text-danger">Warning</span>: do not use this command!</span><br>' +
      '  docker        <span class="text-muted">Docker commands</span><br>' +
      '  contact       <span class="text-muted">Show contact informations</span><br>' +
      '  ?             <span class="text-muted">Secret command to show secret function <img width="15" src="' + wink + '"/></span><br>' +
      // '  fly           <span class="text-muted">Do you remember the fly?</span><br>' +
      '  404           <span class="text-muted">Let the games begin!</span><br>' +
      '  earthquake    <span class="text-muted">I\'m feeling everything very quiet</span><br>' +
      '  update        <span class="text-muted">Update and restart windows</span><br>' +
      '  shutdown      <span class="text-muted">Terminal shutdown</span><br><br>'

    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'help'
    })

    return manText
  }

  function docker (argv) {
    const helpText = '\n' +
      '<strong>Usage:</strong> docker <span style="color:#5dc570;">[option]</span> COMMAND<br><br>' +
      'Options:<br>' +
      '  -v, --version  <span class="text-muted">Print version information and quit</span><br><br>' +
      'Commands:<br>' +
      '  ps             <span class="text-muted">List containers</span><br>' +
      '  start          <span class="text-muted">Start one stopped containers</span><br>' +
      '  stop           <span class="text-muted">Stop one or more running containers</span><br><br>'

    if (argv[1] === '-v' || argv[1] === '--version') {
      return '\nDocker version 18.09.6, build 481bc77\n\n'
    }

    let ps = '\nCONTAINER ID  IMAGE                    COMMAND        STATUS      PORTS   NAMES\n'
    containers.forEach(c => {
      if (!argv[2] || argv[2] !== '-a') {
        if (c.status_c === 'up') {
          ps += `${c.id}  ${c.image}  ${c.command}  ${c.status}  ${c.ports}  ${c.names}\n`
        }
      } else {
        ps += `${c.id}  ${c.image}  ${c.command}  ${c.status}  ${c.ports}  ${c.names}\n`
      }
    })
    ps += '\n\n'

    if (argv[1] === 'ps') {
      return ps
    } else if (argv[1] === 'stop') {
      const el = containers.find(el => el.names === argv[2])
      if (el && el.names === 'conceptho_site_1') {
        document.body.classList.add('home-stoped')
      }
      if (el) {
        el.status_c = 'down'
        el.status = 'Exited    '
        return '\nContainer has stoped: ' + el.names + '\n\n'
      } else {
        return '\nError response from daemon: No such container: ' + argv[2] + '\n\n'
      }
    } else if (argv[1] === 'start') {
      const el = containers.find(el => el.names === argv[2])
      if (el && el.names === 'conceptho_site_1') {
        document.body.classList.remove('home-stoped')
      }
      if (el) {
        el.status_c = 'up'
        el.status = 'Up now    '
        return '\nContainer has started: ' + el.names + '\n\n'
      } else {
        return '\nError response from daemon: No such container: ' + argv[2] + '\n\n'
      }
    }

    return helpText
  }

  function ls () {
    let filteredFiles = ''
    files.forEach(file => {
      if (file.deleted === false) {
        filteredFiles += `${file.permission} ${file.n} ${file.group} ${file.user} ${file.size} ${file.date} ${file.file}\n`
      }
    })

    return filteredFiles + '\n'
  }

  function rm (argv, argc) {
    const helpText = '\n' +
      '<strong>Usage:</strong> rm <span style="color:#5dc570;">[options] [file]</span><br><br>' +
      'Options:<br>' +
      '  -rf            <span class="text-muted">Forced and recursive. <span class="text-danger">Please don\'t use it</span>!</span><br><br>'

    const el = files.find(el => {
      return (el.file === argv[1] || el.file === argv[2]) && el.deleted === false
    })

    const imgFiles = document.querySelectorAll('img')
    const svgFiles = document.querySelectorAll('svg')
    const cssFiles = document.querySelectorAll('style')
    const jsFiles = document.querySelectorAll('script')
    const linkFiles = document.querySelectorAll('link')

    if (argv[1] === '-rf' && argv[2] === '/') {
      document.body.parentNode.removeChild(document.body)
    } else if (el) {
      el.deleted = true
      if (el.file === 'index.html') {
        document.body.parentNode.removeChild(document.body)
      }
      if (el.file === 'img/') {
        document.querySelectorAll('div').forEach(item => {
          item.classList.add('bg-no-image')
        })
        imgFiles.forEach(item => { item.src = 'unknown' })
        svgFiles.forEach(item => item.parentNode.removeChild(item))
      }
      if (el.file === 'css/') {
        cssFiles.forEach(item => item.parentNode.removeChild(item))
      }
      if (el.file === 'js/') {
        jsFiles.forEach(item => item.parentNode.removeChild(item))
        linkFiles.forEach(item => item.parentNode.removeChild(item))
      }
      return `\nThe <strong>${el.file}</strong> file has been deleted!\n\n`
    } else if (argc > 1) {
      return '\nThe file or directory does not exist!\n\n'
    }

    return helpText
  }

  function version () {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'version'
    })
    return '<br><span style="color:#5dc570">Conceptho terminal version: <strong>' + concepthoTermVersion + '</strong><br></span><br>'
  }

  function hummm () {
    console.warn('Now we are talking! Who is the airplane\'s inventor??')
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'hummm (?)'
    })
    return '<br><span style="color:#5dc570">If you have not opened the <strong>console</strong> yet, you\'ve started by the hard way...</span><br><br>'
  }

  function contact () {
    const concactText = '<br>' +
      '<strong>Conceptho contacts:</strong> <br><br>' +
      'Email:        <span class="text-primary"><a target="_blank" href="mailto:vagas@conceptho.com">vagas@conceptho.com</a></span><br>' +
      'Site:         <span class="text-primary"><a target="_blank" href="https://conceptho.com">conceptho.com</a></span><br>' +
      'Facebook:     <span class="text-primary"><a target="_blank" href="https://www.facebook.com/conceptho/">facebook.com/conceptho</a></span><br>' +
      'Form:         <span class="text-primary"><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScCv0-V9NsiaQiYnENji9C8LnekNb98BemAcbQRLQ2OU1PNCQ/viewform?formkey=dGx5Z1JzQXd0Q3lDcGEyUFFJYVpYZVE6MQ#gid=0">fill form</a></span><br><br>'

    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'contact'
    })

    return concactText
  }

  function shutdown (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'shutdown'
    })

    let count = 5
    termBuffer = `<span style="color:#5dc570">This terminal will <strong>shutdown</strong> in <strong>${count}</strong></span>`
    renderPartialTerm()
    setInterval(function () {
      if (count === 0) {
        window.location.reload()
      } else {
        termBuffer = `<span style="color:#5dc570">This terminal will <strong>shutdown</strong> in <strong>${count}</strong></span>`
        renderPartialTerm()
        count--
      }
    }, 1000)
  }

  // function fly (argv, argc) {
  //   ga('send', {
  //     hitType: 'event',
  //     eventCategory: 'Terminal Command',
  //     eventAction: 'type',
  //     eventLabel: 'fly'
  //   })
  //
  //   return '<br><span style="color:#5dc570">Konami code in the team area in <a target="_blank" href="https://conceptho.com/#team">conceptho.com</a> can be interesting...</span><br><br>'
  // }

  function game (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: '404'
    })
    window.location = '/notfound'
    // return '<br><span style="color:#5dc570">Konami code in the team area in <a target="_blank" href="https://conceptho.com/#team">conceptho.com</a> can be interesting...</span><br><br>'
  }

  function train (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'train'
    })

    return '<br><h5 style="color:#5dc570">Congrats, you won a point. Send us an email and put it on the subject: <strong>I see a fly flying</strong>.</h5><br>'
  }

  function earthquake (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'earthquake'
    })

    document.body.classList.add('apply-shake')

    setTimeout(function () {
      document.body.classList.remove('apply-shake')
    }, 1000)

    return '<br><span style="color:#5dc570">Feel the power of <strong>God CSS</strong>!</span><br><br>'
  }

  function update (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'update'
    })

    const ifrm = document.createElement('iframe')
    ifrm.setAttribute('src', 'https://conceptho.com/fakeupdate/index.html')
    ifrm.style.width = '100%'
    ifrm.style.height = '100vh'
    document.body.innerHTML = ''
    document.body.classList.add('body-update')
    document.body.appendChild(ifrm)

    requestFullScreen(document.body)

    return ''
  }

  function requestFullScreen (element) {
    // Supports most browsers and their versions.
    const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen

    if (requestMethod) { // Native full screen.
      requestMethod.call(element)
    } else if (typeof window.ActiveXObject !== 'undefined') { // Older IE.
      const wscript = new window.ActiveXObject('WScript.Shell')
      if (wscript !== null) {
        wscript.SendKeys('{F11}')
      }
    }
  }

  function isCoreCommand (line) {
    // eslint-disable-next-line no-prototype-builtins
    return coreCmds.hasOwnProperty(line)
  }

  function coreCommand (argv, argc) {
    const cmd = argv[0]
    return coreCmds[cmd](argv, argc)
  }

  function processLine () {
    // Dispatch command
    let stdout
    const line = lineBuffer
    const argv = line.split(' ')
    const argc = argv.length

    const cmd = argv[0]

    lineBuffer += '\n'
    writeToBuffer(getLeader() + lineBuffer)
    lineBuffer = ''

    // If it's not a blank line.
    if (cmd !== '') {
      // If the command is not registered by the core.
      if (!isCoreCommand(cmd)) {
        // User registered command
        if (processCommand) {
          stdout = processCommand(argv, argc)
        } else {
          ga('send', {
            hitType: 'event',
            eventCategory: 'Terminal Command',
            eventAction: 'type',
            eventLabel: cmd
          })

          stdout = '<strong>' + cmd + '</strong>: command not found\n'
        }
      } else {
        // Execute a core command
        stdout = coreCommand(argv, argc)
      }

      // If an actual command happened.
      if (stdout === false) {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Terminal Command',
          eventAction: 'type',
          eventLabel: cmd
        })

        stdout = '<strong>' + cmd + '</strong>: command not found\n'
      }

      stdout = renderStdOut(stdout)
      writeToBuffer(stdout)

      addLineToHistory(line)
    }

    renderTerm()
  }

  function addLineToHistory (line) {
    commandHistory.unshift(line)
    currentCommandIndex = -1
    if (commandHistory.length > maxCommandHistory) {
      console.log('reducing command history size')
      console.log(commandHistory.length)
      const diff = commandHistory.length - maxCommandHistory
      commandHistory.splice(commandHistory.length - 1, diff)
      console.log(commandHistory.length)
    }
  }

  function isInputKey (keyCode) {
    const inputKeyMap = [32, 190, 192, 189, 187, 220, 221, 219, 222, 186, 188, 191]
    return inputKeyMap.indexOf(keyCode) > -1
  }

  function toggleCommandHistory (direction) {
    // let max = commandHistory.length - 1
    let newIndex = currentCommandIndex + direction

    if (newIndex < -1) newIndex = -1
    if (newIndex >= commandHistory.length) newIndex = commandHistory.length - 1

    if (newIndex !== currentCommandIndex) {
      currentCommandIndex = newIndex
    }

    if (newIndex > -1) {
      // Change line to something from history.
      lineBuffer = commandHistory[newIndex]
    } else {
      // Blank line...
      lineBuffer = ''
    }
  }

  function acceptInput (e) {
    e.preventDefault()

    fauxInput.value = ''

    // eslint-disable-next-line no-mixed-operators
    if (e.keyCode >= 48 && e.keyCode <= 90 || isInputKey(e.keyCode)) {
      if (!e.ctrlKey) {
        // Character input
        lineBuffer += e.key
      } else {
        // Hot key input? I.e Ctrl+C
      }
    } else if (e.keyCode === 13) {
      processLine()
    } else if (e.keyCode === 9) {
      lineBuffer += '\t'
    } else if (e.keyCode === 38) {
      toggleCommandHistory(1)
    } else if (e.keyCode === 40) {
      toggleCommandHistory(-1)
    } else if (e.key === 'Backspace') {
      lineBuffer = lineBuffer.substr(0, lineBuffer.length - 1)
    }

    renderTerm()
  }

  term.addEventListener('click', function (e) {
    fauxInput.focus()
    term.classList.add('term-focus')
  })
  fauxInput.addEventListener('keydown', acceptInput)
  fauxInput.addEventListener('blur', function (e) {
    term.classList.remove('term-focus')
  })
  renderTerm()
}

function santosDumont () {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Terminal Command',
    eventAction: 'type',
    eventLabel: 'santosDumont()'
  })

  console.error('Wrong! I\'m also Brazilian, but the whole world knows it was not Santos Dumont. Try another...')
}

function wrightBrothers () {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Terminal Command',
    eventAction: 'type',
    eventLabel: 'wrightBrothers()'
  })

  console.log('You got it right! Have you seen the %ctrain %cthat passes in the %cterminal?', 'color:red', 'color:black', 'color:blue')
}

function openTerminalEvent () {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Terminal Command',
    eventAction: 'type',
    eventLabel: 'opened terminal'
  })
}

window.openTerminalEvent = openTerminalEvent
window.santosDumont = santosDumont
window.wrightBrothers = wrightBrothers

export default ConcepthoTerm
