<template>
  <div id="app">
    <Canvas :focus="focus" :helpers="helpers" />
    <div id="ui">
      <div id="focus__buttons" class="ui__section">
        <div>
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
      </div>
      <header id="title">
        <h1>A virtual Sun-Earth-Moon system</h1>
      </header>
      <div id="helper__buttons" class="ui__section">
        <div>
          <h2>Earth</h2>
          <ul>
            <li id="earth-orbit-helper">
              <button class="ui-button" :class="{active: helpers.earth.showOrbit}" @click.prevent="helpers.earth.showOrbit = !helpers.earth.showOrbit">Toggle Orbit</button>
            </li>
            <li id="earth-axis-helper">
              <button class="ui-button" :class="{active: helpers.earth.showAxis}" @click.prevent="helpers.earth.showAxis = !helpers.earth.showAxis">Toggle Axis</button>
            </li>
          </ul>
        </div>
        <div>
          <h2>Moon</h2>
          <ul>
            <li id="moon-orbit-helper">
              <button class="ui-button" :class="{active: helpers.moon.showOrbit}" @click.prevent="helpers.moon.showOrbit = !helpers.moon.showOrbit">Toggle Orbit</button>
            </li>
            <li id="moon-axis-helper">
              <button class="ui-button" :class="{active: helpers.moon.showAxis}" @click.prevent="helpers.moon.showAxis = !helpers.moon.showAxis">Toggle Axis</button>
            </li>
          </ul>
        </div>  
      </div>
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
      focus: 'earth',
      helpers: {
        earth: {
          showOrbit: true,
          showAxis: false
        },
        moon: {
          showOrbit: true,
          showAxis: false
        }
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import 'reset.css';

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

#ui {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 2vw;
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
  flex-wrap: wrap;
}

.ui__section > div {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  margin-bottom: 2rem;
}

.ui__section > div > ul {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ui__section > div > h2 {
  margin-left: 1vw;
  flex-basis: 15%;
  font-size: calc(12px + 0.25rem);
}

.ui-button {
  height: calc(24px + 0.25rem);
  width: calc(96px + 0.25rem);
  margin-top: calc(24px + 0.25rem);
  margin-right: calc(12px + 0.25rem);
  background-color: white;
  border: 2px solid black;
}

.ui-button:hover {
  cursor: pointer;
  border: 2px solid silver;
}

.ui-button.active {
  background-color: gold;
}

</style>
