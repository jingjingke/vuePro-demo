<template>
  <li @click='goClick'>
    <p v-html='title'></p>
    <slot name="right"></slot>
  </li>
</template>
<script>
  export default {
    props: ['title'],
    methods: {
      goClick() {
        this.$emit('click')
      }
    }
  }
</script>
