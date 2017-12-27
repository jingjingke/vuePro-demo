<template>
  <p class="pageErrors">
    {{msg}}
    <slot name='cont'></slot>
  </p>
</template>
<script>
  export default {
    props: ['msg']
  }
</script>
