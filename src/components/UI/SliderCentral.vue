<template>
    <div class="slider__central"    
    @mousemove="doDrag"
    @mouseup="$store.commit('stopDrag')"    
    :style="{
        top: `${$store.getters.sliderCentralTop - $store.state.sliderCentralSizes / 2 + 3}px`,
        left: `${$store.getters.sliderCentralLeft - $store.state.sliderCentralSizes / 2 + 3}px`,  
        width: `${$store.state.sliderCentralSizes}px`,
        height: `${$store.state.sliderCentralSizes}px`,
    }">
    <div class="slider__central-visual"
    @mousedown="$store.commit('startDrag')"
    :style="{          
        backgroundColor: $store.state.myBackground,
        top: `${$store.state.sliderCentralSizes / 2 - 4}px`,
        left: `${$store.state.sliderCentralSizes / 2 - 4}px`, 
    }"></div>
    </div>
    <cropper-elem></cropper-elem>   
    
    <my-slider
    @mousedown="$store.commit('startScalingTop')"
    @mousemove="doScalingTop"
    :style="{
        top: `${$store.getters.sliderCentralTop - $store.state.inputHeight / 2 - 2 - 19}px`,
        left: `${$store.getters.sliderCentralLeft - 18}px`,
        width: `${$store.state.sliderCentralSizes}px`,
        height: `${$store.state.sliderCentralSizes}px`,
        rotate: `-90deg`,
    }"
    ></my-slider>
    <my-slider
    @mousedown="$store.commit('startScalingRight')"
    @mousemove="doScalingRight"      
    :style="{
        top: `${$store.getters.sliderCentralTop - 18}px`,
        left: `${$store.getters.sliderCentralLeft + $store.state.inputWidth / 2 - 15}px`,
        width: `${$store.state.sliderCentralSizes}px`,
        height: `${$store.state.sliderCentralSizes}px`,
    }"
    ></my-slider>
    <my-slider
    @mousedown="$store.commit('startScalingBottom')"
    @mousemove="doScalingBottom" 
    :style="{
        top: `${$store.getters.sliderCentralTop + $store.state.inputHeight / 2 + 2 - 17}px`,
        left: `${$store.getters.sliderCentralLeft - 18}px`,
        width: `${$store.state.sliderCentralSizes}px`,
        height: `${$store.state.sliderCentralSizes}px`,
        rotate: `90deg`,
    }"
    ></my-slider>
    <my-slider
    @mousedown="$store.commit('startScalingLeft')"
    @mousemove="doScalingLeft"
    :style="{
        top: `${$store.getters.sliderCentralTop - 18}px`,
        left: `${$store.getters.sliderCentralLeft - $store.state.inputWidth / 2 - 21}px`,
        width: `${$store.state.sliderCentralSizes}px`,
        height: `${$store.state.sliderCentralSizes}px`,
        rotate: `180deg`,
    }"     
    ></my-slider>
</template>
  
<script>
import CropperElem from '@/components/CropperElem.vue'
import MySlider from '@/components/UI/MySlider.vue'

export default {
    data() {
        return {            
        }
    },
    components: {
    CropperElem,
    MySlider,
  },
    methods: {        
        doDrag(val) {
            this.$store.commit('doDrag', val);
        },
        doScalingRight(val) {
            this.$store.commit('doScalingRight', val);
        },
        doScalingLeft(val) {
            this.$store.commit('doScalingLeft', val);
        },
        doScalingBottom(val) {
            this.$store.commit('doScalingBottom', val);
        },
        doScalingTop(val) {
            this.$store.commit('doScalingTop', val);
        },
  }
}
</script>

<style scoped lang="scss">
.slider__central {
    position: absolute;
    z-index: 1;
    // border: 1px solid red;
    .slider__central-visual {
        position: absolute;        
        width: 7px;
        height: 7px;
    }
}
</style>
  