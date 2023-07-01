<template>
  <div class="container">
    <cropper-area></cropper-area>
    <input-area></input-area>
  </div>
</template>

<script>
import CropperArea from '@/components/CropperArea.vue'
import InputArea from '@/components/InputArea.vue'

export default {
  name: 'App',
  components: {
    CropperArea,
    InputArea,
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  width: 900px;
  height: 550px;
  margin: 20px auto 20px 20px;
  border: 1px solid black;
  background-color: blanchedalmond;

  
}
</style>
