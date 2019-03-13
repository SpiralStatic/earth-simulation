<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/starmap.jpg`)"></vgl-texture>
    <vgl-sphere-geometry :name="name" :radius="15000" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}-material`" :map="`${name}-map`" side="back"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`"></vgl-mesh>
  </vgl-group>
</template>

<script>
export default {
  name: "Skybox",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
