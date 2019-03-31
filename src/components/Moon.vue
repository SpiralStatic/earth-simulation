<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/moonmap.jpg`)"></vgl-texture>
    <vgl-sphere-geometry :name="name" :radius="28" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}-material`" :map="`${name}-map`" :bump-map="require(`../assets/moonbump.jpg`)"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`" :position="position"></vgl-mesh>

    <vgl-axes-helper v-if="helpers.showAxis" :position="position" :size="100"></vgl-axes-helper>
  </vgl-group>
</template>

<script>
import { Vector3 } from 'three';

export default {
  name: 'Moon',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: Vector3,
      required: true
    },
    helpers: Object
  },
};
</script>
