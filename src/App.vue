<template>
  <v-app :class="this.store.IsDark ? 'Contentdark' : 'Content'">
    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Aos from "aos"
import {DarkLight} from "@/store/darkLighMode"
export default {
  name: 'App',  
  setup(){
    const store=DarkLight();
    return {store}
  },
  data: () => ({
    
  }),
  mounted(){
    Aos.init();
  }
};
</script>

<style >

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:   Helvetica, sans-serif;
  
}

</style>
