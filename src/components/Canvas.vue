<template>
 <vgl-renderer id="canvas" name="earth_simulation" antialias alpha>
      <vgl-scene name="scene">
        <vgl-ambient-light name="ambient_light" color="#222222" />
        <skybox name="skybox" />
        <sun name="sun" />
        <earth name="earth" :position="createVector(earth.position)" :orbit="earth.orbit.path"/>
        <moon name="moon" :position="createVector(moon.position)"/>
      </vgl-scene>
      <vgl-perspective-camera name="camera" :fov="75" :near="10" :far="28000" :zoom="camera.zoom" :position="createVector(camera.position)" :orbit-target="createVector(camera.target)" />
  </vgl-renderer>
</template>

<script>
import Earth from './Earth.vue';
import Skybox from './Skybox.vue';
import Sun from './Sun.vue';
import Moon from './Moon.vue';
import { Vector3, EllipseCurve } from 'three';

export default {
  name: 'Canvas',
  components: {
    Earth,
    Skybox,
    Sun,
    Moon
  },
  props: {
    focus: {
      type: String,
      default: 'earth'
    }
  },
  data() {
    return {
      camera: {
        position: {
          x: 7500,
          y: 1000,
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
          z: -4000
        },
        orbit: {
          radius: 4000,
          eccentricty: 1.3,
          offset: 800,
          path: ""
        }
      },
      moon: {
        position: {
          x: 0,
          y: 0,
          z: -4000 + 244
        }
      },
      sun: {
        position: {
          x: 0,
          y: 0,
          z: 0
        }
      },
    }
  },
  mounted() {
    this.camera.target = this[this.focus].position;
    const earthOrbitCurve = this.createOrbit(this.earth.orbit);
    const earthOrbitPath = earthOrbitCurve.getPoints(120); 
    this.earth.orbit.path = earthOrbitPath.map(function(point) {
      return [point.x, 0, point.y];
    }).join();
  },
  methods: {
    createVector: function(vectorObject) {
      return new Vector3(vectorObject.x, vectorObject.y, vectorObject.z);
    },
    createOrbit: function(orbitObject) {
      var circle = 2 * Math.PI;
      return new EllipseCurve(
        orbitObject.offset, 0, (orbitObject.radius * orbitObject.eccentricty),
        orbitObject.radius, 0, circle,  0, circle, false, 0)
    }
  },
  watch: {
    focus: function(newFocusedObject) {
      this.camera.target = this[newFocusedObject].position;
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
