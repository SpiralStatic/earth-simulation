<template>
 <vgl-renderer id="canvas" name="earth_simulation" antialias alpha>
      <vgl-scene name="scene">
        <vgl-ambient-light name="ambient_light" color="#222222"></vgl-ambient-light>
        <skybox name="skybox" />
        <sun name="sun" />
        <earth name="earth" :position="createVector(earth.position)" />
        <moon name="moon" :position="createVector(moon.position)"/>     
      </vgl-scene>
      <vgl-perspective-camera name="camera" :fov="75" :near="10" :far="28000" :zoom="camera.zoom" :position="createVector(camera.position)" :orbit-target="createVector(camera.target)"></vgl-perspective-camera>
  </vgl-renderer>
</template>

<script>
import Earth from './Earth.vue';
import Skybox from './Skybox.vue';
import Sun from './Sun.vue';
import Moon from './Moon.vue';
import { Vector3, Spherical } from 'three';

export default {
  name: 'Canvas',
  components: {
    Earth,
    Skybox,
    Sun,
    Moon
  },
  data() {
    return {
      camera: {
        position: {
          x: 7500,  
          y: 0,
          z: 0
        },
        target: {
          x: 0,
          y: 0,
          z: 0
        },
        zoom: 3
      },
      earth: {
        position: {
          x: 0,
          y: 0,
          z: -3000
        }
      },
      moon: {
        position: {
          x: 0,
          y: 0,
          z: -2750
        }
      }
    }
  },
  mounted() {
    this.camera = {
      ...this.camera,
      target: this.earth.position,
    }
  },
  methods: {
    createVector: function(vectorObject) {
      return new Vector3(vectorObject.x, vectorObject.y, vectorObject.z);
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
