<template>
  <div>
    <div>
          <div class="">
              <h5 class="text-center">Info</h5>
              <p style="top: 0;position: absolute;" > <v-btn plain @click="closeCard">
                   <v-icon color="red">mdi-close</v-icon>
              </v-btn></p>
          </div>
        <div v-for="info in item.info" style="padding: 4px;">
            <div style="font-size:15px;display: flex;justify-content: space-between;" >
                  <div style="font-weight: bold;color: black;">{{ info.name }}</div>    
                  <div style="color: #EE8250;">{{ info.nbr }}</div>              
            </div>
        </div>
      </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      item:Array
    },
    methods:{
        closeCard(){
            this.$emit('closeCard');
        }
    }
  };
  </script>