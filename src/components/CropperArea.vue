<template>
  <div class="cropper__area"
  @mouseup="$store.commit('stopAll')"
  >
    <slider-central></slider-central>
  </div>
</template>

<script>
import SliderCentral from '@/components/UI/SliderCentral.vue'

export default {
  components: {
    SliderCentral,
  }
}
</script>

<style scoped lang="scss">
.cropper__area {
  position: relative;
  z-index: 0;
  width: 700px;
  height: 500px;
  margin: auto 20px;
  border: 1px solid black;
}
</style>
