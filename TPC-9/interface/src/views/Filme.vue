<template>
    <Filme :id="$route.params.id"></Filme>
</template>
<script>
import Filme from '@/components/Filme.vue'
export default {
  name: 'Principal',
  components: {
    Filme
  }
}
</script>