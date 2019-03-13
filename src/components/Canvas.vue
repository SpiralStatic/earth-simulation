<template>
 <vgl-renderer id="canvas" name="earth_simulation" antialias alpha>
      <vgl-scene name="scene">
        <vgl-ambient-light name="ambient_light" color="#222222"></vgl-ambient-light>
        <skybox name="skybox" />
        <sun name="sun" />
        <earth name="earth" :position="earth.position" />          
      </vgl-scene>
      <vgl-perspective-camera name="camera" :fov="75" :near="10" :far="28000" :zoom="camera.zoom" orbit-position="7500 1000 500" :orbit-target="camera.target.join(' ')"></vgl-perspective-camera>
  </vgl-renderer>
</template>

<script>
import Earth from './Earth.vue';
import Skybox from './Skybox.vue';
import Sun from './Sun.vue';

export default {
  name: 'Canvas',
  components: {
    Earth,
    Skybox,
    Sun
  },
  data() {
    return {      
      camera: {
        target: [0, 0, 0],
        zoom: 1.5
      },
      earth: {
        position: [0, 0, 3000]
      },
    }
  },
  mounted() {
    this.camera = {
      target: this.earth.position,
      zoom: 3
    }
  }
}
</script>

<style scoped>
#canvas {
  height: 100vh;
  width: 100vw;
}
</style>
