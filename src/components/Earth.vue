<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/earthmap.jpg`)" />
    <vgl-sphere-geometry :name="name" :radius="100" :width-segments="64" :height-segments="32" />
    <vgl-mesh-phong-material :name="`${name}-material`" :map="`${name}-map`" :specular-map="require('../assets/earthspecular.jpg')" :bump-map="require(`../assets/earthbump.jpg`)" />
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`" :position="position" :rotation="getEarthsRotation" />

    <vgl-texture :name="`${name}_cloud-map`" :src="require(`../assets/earthcloud.png`)" />
    <vgl-sphere-geometry :name="`${name}_cloud`" :radius="100" :width-segments="64" :height-segments="32" />
    <vgl-mesh-phong-material :name="`${name}_cloud-material`" :map="`${name}_cloud-map`" :opacity="0.9" :transparent="true" :depthWrite="false" />
    <vgl-mesh :name="`${name}_cloud-mesh`" :geometry="name" :material="`${name}_cloud-material`" :position="position" />

    <vgl-geometry v-if="orbit" :name="`${name}_orbit`" :position-attribute="orbit" />
    <vgl-line-basic-material :name="`${name}_orbit-material`" color="#CC9900" />
    <vgl-line v-if="helpers.showOrbit" :name="`${name}_orbit-line`" :geometry="`${name}_orbit`" :material="`${name}_orbit-material`" :rotation="getEarthsOrbitRotation" />

    <vgl-axes-helper v-if="helpers.showAxis" :position="position" :size="200"></vgl-axes-helper>
  </vgl-group>
</template>

<script>
import { Euler, Vector3 } from 'three';

export default {
  name: 'Earth',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: Vector3,
      required: true
    },
    orbit: {
      type: String,
      required: false
    },
    helpers: Object
  },
  computed: {
    getEarthsRotation() {
      const zRotation = (23.5 / 180) * Math.PI;
      return new Euler(0, 0, zRotation, 'xyz');
    },
    getEarthsOrbitRotation() {
      const xRotation = (0.5 / 180) * Math.PI;
      return new Euler(xRotation, 0, 0, 'xyz');
    }
  }
};
</script>
