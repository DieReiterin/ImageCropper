<template>
    <div class="cropper__area-cropper"
    :style="{
        width: `${$store.state.inputWidth}px`,
        height: `${$store.state.inputHeight}px`,
        top: `${$store.getters.sliderCentralTop + 4 - $store.state.inputHeight / 2}px`,
        left: `${$store.getters.sliderCentralLeft + 4 - $store.state.inputWidth / 2}px`, 
    }">
    </div>
</template>

<script>
export default {
    components: {
    },
    methods: {       
  }
}
</script>

<style scoped lang="scss">  
.cropper__area-cropper {
    position: absolute;
    z-index: -1;
    background-color: aquamarine;    
}

</style>
