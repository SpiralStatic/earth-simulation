<template>
  <vgl-group>
    <vgl-texture :name="`${name}-map`" :src="require(`../assets/sunmap.jpg`)"></vgl-texture>
    <vgl-sphere-geometry :name="name" :radius="1090" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}-material`" color="#fdb813" :map="`${name}-map`"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}-mesh`" :geometry="name" :material="`${name}-material`"></vgl-mesh>
    <vgl-point-light color="#ffffff" :distance="15000" :intensity="2" :cast-shadow="true"></vgl-point-light>

    <vgl-texture :name="`${name}_skin-map`" :src="require(`../assets/sunmapskin.png`)"></vgl-texture>
    <vgl-sphere-geometry :name="`${name}_skin`" :radius="1100" :width-segments="64" :height-segments="32"></vgl-sphere-geometry>
    <vgl-mesh-phong-material :name="`${name}_skin-material`" color="#fdb813" :map="`${name}_skin-map`" side="double" :opacity="0.4" :transparent="true"></vgl-mesh-phong-material>
    <vgl-mesh :name="`${name}_skin-mesh`" :geometry="`${name}_skin`" :material="`${name}_skin-material`"></vgl-mesh>

    <vgl-texture :name="`${name}_corona-map`" :src="require(`../assets/corona.png`)"></vgl-texture>
    <vgl-sprite-material :name="`${name}_corona-material`" color="#fdb813" :map="`${name}_corona-map`" :blending="2"></vgl-sprite-material>
    <vgl-sprite :name="`${name}_corona-sprite`" :material="`${name}_corona-material`" scale="3300 3300 1"></vgl-sprite>
  </vgl-group>
</template>

<script>
export default {
  name: "Sun",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
