import { TextureLoader } from 'three';

export default {
  name: 'VueGlExtensions',
  props: {
    opacity: {
      type: Number,
      default: 1
    },
    transparent: {
      type: Boolean,
      default: false
    },
    blending: {
      type: Number,
      default: 1
    },
    bumpMap: {
      type: String
    },
    specularMap: {
      type: String
    },
    depthWrite: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    inst: {
      handler(inst) {
        if (inst != null && inst.opacity !== null) {
          Object.assign(inst, {
            opacity: parseFloat(this.opacity),
          });
        }
        if (inst != null && inst.transparent !== null) {
          Object.assign(inst, {
            transparent: this.transparent === true || this.transparent === 'true',
          });
        }
        if (inst != null && inst.blending !== null) {
          Object.assign(inst, {
            blending: parseInt(this.blending)
          });
        }
        if (inst != null && inst.bumpMap !== null) {
          Object.assign(inst, {
            bumpMap: new TextureLoader().load(this.bumpMap)
          });
        }
        if (inst != null && inst.specularMap !== null) {
          Object.assign(inst, {
            specularMap: new TextureLoader().load(this.specularMap)
          });
        }
        if (inst != null && inst.depthWrite !== null) {
          Object.assign(inst, {
            depthWrite: this.depthWrite === true || this.depthWrite === 'true',
          });
        }
      },
      immediate: true,
    },
    opacity(opacity) {
      if (this.inst != null && this.inst.opacity != null) this.inst.opacity = parseFloat(opacity);
    },
    transparent(transparent) {
      if (this.inst != null && this.inst.transparent != null) this.inst.transparent = transparent === true || transparent === 'true'
    },
    blending(blending) {
      if (this.inst != null && this.inst.blending != null) this.inst.blending = parseInt(blending)
    },
    bumpMap(texture) {
      if (this.inst != null && this.inst.bumpMap != null) this.inst.bumpMap = texture
    },
    specularMap(texture) {
      if (this.inst != null && this.inst.specularMap != null) this.inst.specularMap = texture
    },
    depthWrite(depthWrite) {
      if (this.inst != null && this.inst.depthWrite != null) this.inst.depthWrite = depthWrite === true || depthWrite === 'true'
    },
  }
};