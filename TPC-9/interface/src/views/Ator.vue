<template>
    <Ator :id="$route.params.id"></Ator>
</template>
<script>
import Ator from '@/components/Ator.vue'
export default {
  name: 'Principal',
  components: {
    Ator
  }
}
</script>