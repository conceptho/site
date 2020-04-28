<template>
  <div class="term-container" :class="{ 'active': opened }">
    <div class="window-bar d-flex" @click="opened = !opened">
      <div>
        <i class="fal fa-sm fa-terminal"></i>
        Terminal
      </div>
      <div class="ml-auto">
        <i class="fal" :class="opened ? 'fa-minus' : 'fa-window-maximize'"></i>
      </div>
    </div>
    <div ref="term" class="term"></div>
  </div>
</template>

<script>
import terminal from '../utils/terminal'

export default {
  name: 'ConcepthoTerminal',
  data () {
    return {
      opened: false
    }
  },
  mounted () {
    terminal({
      el: this.$refs.term,
      cwd: 'guest@conceptho.com:/',
      initialMessage: 'Welcome to conceptho.com!\n',

      tags: ['red', 'blue', 'white', 'bold'],
      maxBufferLength: 8192,
      maxCommandHistory: 500,
      cmd: function (argv, argc) {
        return false
      }
    })
  }
}
</script>

<style lang="scss">
/* Base colors */
$primary: #464648; //Cinza
$secondary: #5dc570; //Verde
$black: #100f0d; //Preto
$grey: #e8e8e7; //Cinza Claro

$gutter: 15px;

/* Tipografia */
@import url(https://fonts.googleapis.com/css?family=Dosis:300,400,700);
$main-font: "Dosis", sans-serif;

.term-container {
  position: fixed;
  bottom: 0;
  z-index: 999;
  right: 60px;
  width: 140px;
  transition: all .12s linear;
  transform: translateY(calc(100% - 40px));
  &.active {
    transform: translateY(0);
    width: 800px;
  }
}
.window-bar {
  background-color: rgba(16, 15, 13, 1);
  padding: 10px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  color: #fff;
  font-family: Monaco, monospace;
  font-size: 13px;
}
.faux-input {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.term {
  background-color: rgba(16, 15, 13, .9);
  width: 100%;
  height: 500px;
  font-family: Monaco, monospace;
  font-weight: 400;
  font-smooth: never;
  -webkit-font-smoothing : none;
  font-size: 10.5pt;
  padding: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  display: block;
  line-height: 1.2em;
  overflow-y: scroll;
  position: relative;
  color: #888;
  /*border-top-right-radius: 6px;*/
  /*border-top-left-radius: 6px;*/

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

.term-focus {
  text-shadow: none;
  color: #ccc;
}

.term .red {
  color: red;
}
.term .blue {
  color: blue;
}
.term .white {
  color: #fff;
}
.term .bold {
  font-weight: bold;
}

.bell {
  width: 0.1em;
  height: 1.1em;
  line-height: 1.2em;
  background: #fff;
  position: absolute;
  animation: flash 1s infinite;
}

@keyframes flash {
  0% {
    visibility: visible;
  }
  49% {
    visibility: visible;
  }
  50% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

/* Let's get this party started */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: $primary;
}

.terminal-box {
  bottom: -500px;
  width: 100%;
  transition: bottom .12s linear;
  position: fixed;
}

.slide-state {
  opacity: 0;
  display: none;
}

.slide-state:checked ~ .terminal-box {
  bottom: 0 !important;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.apply-shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}
</style>
