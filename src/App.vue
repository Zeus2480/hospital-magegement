<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless  class=" indigo lighten-1 white--text text-center">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Ezy Hospitals </strong>
      </v-col>
      <v-col class="text-center" cols="12"> Kr. Rishabh </v-col>
      <v-col class="text-center" cols="12"> Shreyash Dhande </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
</style>
