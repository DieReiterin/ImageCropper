<template>
    <div class="slider"
    >
    <div class="slider-visual"
    :style="{          
        backgroundColor: $store.state.myBackground,
        top: `${$store.state.sliderCentralSizes / 2 - 6}px`,
        left: `${$store.state.sliderCentralSizes / 2 - 3}px`, 
    }"></div>
    </div>
</template>
  
<script>

export default {

}
</script>

<style scoped lang="scss">
.slider {
    position: absolute;
    z-index: 2;
    margin: 1px;
    // border: 1px solid red;
    .slider-visual {
        position: absolute;        
        width: 5px;
        height: 12px;
    }               
}
</style>
  