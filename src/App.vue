<template>
  <div id="app">
    <Canvas :focus="focus"/>
    <div id="ui">
      <header id="title">
        <h1>A virtual Sun-Earth-Moon system</h1>
      </header>
      <div id="focus__buttons" class="ui__section">
        <h2>Focus</h2>
        <ul>
          <li id="sun-focus">
            <button class="ui-button" :class="{active: focus === 'sun'}" @click.prevent="focus = 'sun'">Sun</button>
          </li>
          <li id="earth-focus">
            <button class="ui-button" :class="{active: focus === 'earth'}" @click.prevent="focus = 'earth'">Earth</button>
          </li>
          <li id="moon-focus">
            <button class="ui-button" :class="{active: focus === 'moon'}" @click.prevent="focus = 'moon'">Moon</button>
          </li>
        </ul>
      </div>
      <h2></h2>
    </div>
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'

export default {
  name: 'app',
  components: {
    Canvas
  },
  data() {
    return {
      focus: 'earth'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import 'reset.css';

body {
  height: 100vh;
  width: 100vw;
  max-width: 100%;    
  overflow: hidden;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#ui {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1vw;
}

#ui > * {
  height: calc(24px + 0.25rem);
}

#title {
  flex-basis: 50%;
  text-align: center;
}

#title > h1 {
  font-size: calc(16px + 0.25rem);
  color: white;
}

.ui__section {
  flex-basis: 25%;
  display: flex;
  align-items: center;
  background-color: aliceblue;
}

.ui__section > ul {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ui__section > h2 {
  margin-left: 1vw;
  flex-basis: 15%;
  font-size: calc(12px + 0.25rem);
}

.ui-button {
  height: calc(24px + 0.25rem);
  width: calc(72px + 0.25rem);
  margin-top: calc(24px + 0.25rem);
  margin-right: calc(12px + 0.25rem);
  border: 2px solid black;
}

.ui-button:hover {
  cursor: pointer;
   border: 2px solid white;
}

.ui-button.active {
  background-color: gold;
}

</style>
