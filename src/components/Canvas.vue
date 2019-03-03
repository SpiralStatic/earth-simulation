<template>
 <vgl-renderer id="canvas" name="earth_simulation" antialias alpha>
      <vgl-scene name="scene">
        <!-- Ambient Light -->
        <vgl-ambient-light name="ambient_light" color="#222222"></vgl-ambient-light>

        <!-- Skybox -->
        <vgl-texture name="skybox-map" :src="require(`../assets/starmap.jpg`)"></vgl-texture>
        <vgl-sphere-geometry name="skybox" :radius="15000" :width-segments="20" :height-segments="20"></vgl-sphere-geometry>
        <vgl-mesh-phong-material name="skybox-material" map="skybox-map" side="back"></vgl-mesh-phong-material>
        <vgl-mesh name="skybox-mesh" geometry="skybox" material="skybox-material"></vgl-mesh>

        <!-- Sun -->
        <vgl-texture name="sun-map" :src="require(`../assets/sunmap.jpg`)"></vgl-texture>
        <vgl-sphere-geometry name="sun" :radius="1090" :width-segments="24" :height-segments="24"></vgl-sphere-geometry>
        <vgl-mesh-phong-material name="sun-material" color="#fdb813" map="sun-map"></vgl-mesh-phong-material>
        <vgl-mesh name="sun-mesh" geometry="sun" material="sun-material"></vgl-mesh>
        <vgl-point-light color="#ffffff" :distance="15000" :intensity="2" :cast-shadow="true"></vgl-point-light>

        <vgl-texture name="sun_skin-map" :src="require(`../assets/sunmapskin.png`)"></vgl-texture>
        <vgl-sphere-geometry name="sun_skin" :radius="1100" :width-segments="24" :height-segments="24"></vgl-sphere-geometry>
        <vgl-mesh-phong-material name="sun_skin-material" color="#fdb813" map="sun_skin-map" side="double" :opacity="0.4" :transparent="true"></vgl-mesh-phong-material>
        <vgl-mesh name="sun_skin-mesh" geometry="sun_skin" material="sun_skin-material"></vgl-mesh>

        <vgl-texture name="sun_corona-map" :src="require(`../assets/corona.png`)"></vgl-texture>
        <vgl-sprite-material name="sun_corona-material" color="#fdb813" map="sun_corona-map" :blending="2"></vgl-sprite-material>
        <vgl-sprite name="sun_corona-sprite" material="sun_corona-material" scale="3300 3300 1"></vgl-sprite>
      </vgl-scene>
      <vgl-perspective-camera name="camera" :fov="75" :near="10" :far="28000" :zoom="1.5" orbit-position="7500 1000 500"></vgl-perspective-camera>
  </vgl-renderer>
</template>

<script>
export default {
  name: 'Canvas'
}
</script>

<style scoped>
#canvas {
  height: 100vh;
  width: 100vw;
}
</style>
