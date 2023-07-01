<template>
  <div class="input__area">
      <my-label >Top</my-label>
      <my-input :value="$store.state.inputTop"
      @update="setInput1"
      ></my-input>
      
      <my-label>Left</my-label>
      <my-input :value="$store.state.inputLeft"
      @update="setInput2"
      ></my-input>
      
      <my-label>Height</my-label>
      <my-input :value="$store.state.inputHeight"
      @update="setInput3"
      ></my-input>
      
      <my-label>Width</my-label>
      <my-input :value="$store.state.inputWidth"
      @update="setInput4"
      ></my-input>

    </div>
</template>

<script>
import MyLabel from '@/components/UI/MyLabel.vue'
import MyInput from '@/components/UI/MyInput.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    MyLabel,
    MyInput,
  },
  methods: {
    setInput1(val) {
      this.$store.commit('setInputTop', val);
    },
    setInput2(val) {
      this.$store.commit('setInputLeft', val);
    },
    setInput3(val) {
      this.$store.commit('setInputHeight', val);
    },
    setInput4(val) {
      this.$store.commit('setInputWidth', val);
    }
  },
}
</script>

<style scoped lang="scss">
.input__area {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 90%;
  margin: auto 30px;
  // border: 1px solid greenyellow;
  
  
}
</style>
