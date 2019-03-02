<template>
  <div id="app">
    <header>
      <h1>A virtual Sun-Earth-Moon system</h1>
    </header>
    <Canvas />
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'

export default {
  name: 'app',
  components: {
    Canvas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
