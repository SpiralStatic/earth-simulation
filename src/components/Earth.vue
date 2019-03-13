<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/earthmap.jpg`)"></vgl-texture>
    <vgl-sphere-geometry :name="name" :radius="100" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}-material`" :map="`${name}-map`" :specular-map="require('../assets/earthspecular.jpg')" :bump-map="require(`../assets/earthbump.jpg`)"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`" :position="position.join(' ')"></vgl-mesh>
  </vgl-group>
</template>

<script>
export default {
  name: "Earth",
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: Array,
      required: true
    }
  }
};
</script>
