function ConcepthoTerm (config) {
  let term = config.el || document.getElementById('term')
  let termBuffer = config.initialMessage || ''
  let lineBuffer = config.initialLine || ''
  let cwd = config.cwd || '~/'
  let tags = config.tags || ['red', 'blue', 'white', 'bold']
  let processCommand = config.cmd || false
  let maxBufferLength = config.maxBufferLength || 8192
  let commandHistory = []
  let currentCommandIndex = -1
  let maxCommandHistory = config.maxCommandHistory || 100
  let autoFocus = config.autoFocus || false
  let coreCmds = {
    'clear': clear,
    'help': help,
    'version': version,
    '?': hummm,
    'contact': contact,
    'shutdown': shutdown,
    'fly': fly,
    'train': train,
    'earthquake': earthquake,
    'update': update
  }

  let fauxInput = document.createElement('textarea')
  fauxInput.className = 'faux-input'
  document.body.appendChild(fauxInput)
  if (autoFocus) {
    fauxInput.focus()
  }

  function getLeader () {
    return cwd + '$ '
  }

  function renderTerm () {
    let bell = '<span class="bell"></span>'
    let ob = termBuffer + getLeader() + lineBuffer
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
      let diff = termBuffer.length - maxBufferLength
      termBuffer = termBuffer.substr(diff)
    }
  }

  function renderStdOut (str) {
    let i = 0; let max = tags.length
    for (i; i < max; i++) {
      let start = new RegExp('{' + tags[i] + '}', 'g')
      let end = new RegExp('{/' + tags[i] + '}', 'g')
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
    '<img style="margin: 15px 0 6px;height:40px;" src="//conceptho.com/img/logo-horizontal.png"/><br>' +
    'version: 0.0.1<br>' +
    '-------------------------<br>' +
    '<strong>Usage:</strong> <span style="color:#5dc570;">[option]</span><br><br>' +
    'Options:<br>' +
    '  help          <span class="text-muted">Show this help</span><br>' +
    '  version       <span class="text-muted">Print the conceptho terminal version</span><br>' +
    '  ?             <span class="text-muted">Secret command to show secret function <img width="15" src="//emojipedia.com.br/assets/img/emoji/1f609.png"/></span><br>' +
    '  contact       <span class="text-muted">Show contact informations</span><br>' +
    '  shutdown      <span class="text-muted">Terminal shutdown</span><br>' +
    '  fly           <span class="text-muted">Do you remember the fly?</span><br>' +
    '  earthquake    <span class="text-muted">I\'m feeling everything very quiet</span><br>' +
    '  update        <span class="text-muted">Update and restart windows</span><br><br>'

    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'help'
    })

    return manText
  }

  function version () {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'version'
    })
    return '<br><span style="color:#5dc570">Conceptho terminal version: <strong>0.0.1</strong><br></span><br>'
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

    var count = 5
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

  function fly (argv, argc) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Terminal Command',
      eventAction: 'type',
      eventLabel: 'fly'
    })

    return '<br><span style="color:#5dc570">Konami code in the team area in <a target="_blank" href="https://conceptho.com/#team">conceptho.com</a> can be interesting...</span><br><br>'
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
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen

    if (requestMethod) { // Native full screen.
      requestMethod.call(element)
    } else if (typeof window.ActiveXObject !== 'undefined') { // Older IE.
      var wscript = new ActiveXObject('WScript.Shell')
      if (wscript !== null) {
        wscript.SendKeys('{F11}')
      }
    }
  }

  function isCoreCommand (line) {
    if (coreCmds.hasOwnProperty(line)) {
      return true
    }
    return false
  }

  function coreCommand (argv, argc) {
    let cmd = argv[0]
    return coreCmds[cmd](argv, argc)
  }

  function processLine () {
    // Dispatch command
    let stdout; let line = lineBuffer; let argv = line.split(' '); let argc = argv.length

    let cmd = argv[0]

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
      let diff = commandHistory.length - maxCommandHistory
      commandHistory.splice(commandHistory.length - 1, diff)
      console.log(commandHistory.length)
    }
  }

  function isInputKey (keyCode) {
    let inputKeyMap = [32, 190, 192, 189, 187, 220, 221, 219, 222, 186, 188, 191]
    if (inputKeyMap.indexOf(keyCode) > -1) {
      return true
    }
    return false
  }

  function toggleCommandHistory (direction) {
    let max = commandHistory.length - 1
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

const termEl = document.getElementById('term')

if (termEl) {
  ConcepthoTerm({
    el: termEl,
    cwd: 'guest@conceptho.com:/',
    initialMessage: 'Welcome to conceptho.com!\n',

    tags: ['red', 'blue', 'white', 'bold'],
    maxBufferLength: 8192,
    maxCommandHistory: 500,
    cmd: function (argv, argc) {
      console.log(argv)
      return false
    }
  })
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
