<template>
  <div id="Home" class="home">
    <v-card flat class="table">
      <v-card-title>What do you wish to see?</v-card-title>
      <v-card-actions>
        <v-list
          nav
          dense
          class="table"
        >
          <v-list-item link to="/filmes">
            <v-list-item-title>Filmes</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/atores">
            <v-list-item-title>Atores</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>