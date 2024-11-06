<template>
     <div>
        <div class="Image">
          <img :src="currentImage" width="90%" height="250px">
      </div>
      <div v-if="store.view!='Settings' && store.view!='Personal Info'"  class="search_input">
        <div class="input">
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :prepend-icon="icon"
            label="Search"
            type="text"
            @click:prepend="changeIcon"
          ></v-text-field>
        </div>
      </div>
     </div>
</template>

<script>
import {CurentView} from "@/store/StoreView"
export default{
  setup(){
    const store=CurentView();
    return {store}
  },
    data(){
        return{
        viewUnique:['Settings','Personal Info'],
        search: 'Search For Product!',
        iconIndex: 0,
        icons: [
            'mdi-emoticon-happy',
            'mdi-emoticon-sad',
        ],
        i: 0,
        currentReveal: null,
        page: 1,
        Images: [
          require('../../../../assets/Pub/pub2.jpg'),
          require('../../../../assets/Pub/pub3.jpg'),
          require('../../../../assets/Pub/pub1.jpg'),
        ],
        }
    },
    methods:{
        changeIcon () {
            this.iconIndex === this.icons.length - 1
                 ? this.iconIndex = 0
                        : this.iconIndex++
      },
    },
    mounted() {
      setInterval(() => {
        this.i++;
      }, 3000);
    },
    computed:{
        currentImage() {
           return this.Images[this.i % this.Images.length];
      },
      icon(){
        return this.icons[this.iconIndex % this.icons.length];
      }
    }
}
</script>

<style scoped>
.Image {
   text-align: center;
   justify-items: center;
  }
  .Image img{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 25px;
  }
  .search_input{
    margin-top: 15px;
    justify-content: center;
    display: flex;
    .input{
        width: 50%;
    }
  }
</style>