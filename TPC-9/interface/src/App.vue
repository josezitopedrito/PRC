<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <appFooter></appFooter>
    </v-content>
  </v-app>
</template>

<script>

import Footer from './components/footer.vue'
export default {

  components: {
    'appFooter':Footer
  },

  data: () => ({
    //
  }),
};
</script>