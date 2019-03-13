<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/earthmap.jpg`)"></vgl-texture>
    <vgl-sphere-geometry :name="name" :radius="100" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}-material`" :map="`${name}-map`" :specular-map="require('../assets/earthspecular.jpg')" :bump-map="require(`../assets/earthbump.jpg`)"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`" :position="position" :rotation="getEarthsRotation"></vgl-mesh>

    <vgl-texture :name="`${name}_cloud-map`" :src="require(`../assets/earthcloud.png`)"></vgl-texture>
    <vgl-sphere-geometry :name="`${name}_cloud`" :radius="100" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}_cloud-material`" :map="`${name}_cloud-map`" :opacity="0.9" :transparent="true" :depthWrite="false"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}_cloud-mesh`" :geometry="name" :material="`${name}_cloud-material`" :position="position"></vgl-mesh>
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
    }
  },
  computed: {
    getEarthsRotation() {
      const zRotation = (23.5 / 180) * Math.PI;
      return new Euler(0, 0, zRotation, 'xyz');
    }
  }
};
</script>
