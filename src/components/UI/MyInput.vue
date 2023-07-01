<template>
    <input 
    type="number" 
    :value="modelValue" 
    @input="writeInput"
    >
</template>
  
<script>

export default {
    props: {
        modelValue: [Number],
    },
    methods: {
      writeInput(e) {
        this.$emit('update', e.target.value);   
      }
    }
}
</script>

<style scoped lang="scss">
input {
    font-size: 14px;
    margin-bottom: 15px;
  }
</style>