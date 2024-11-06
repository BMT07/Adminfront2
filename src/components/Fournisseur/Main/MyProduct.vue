<template>
  <div>
      <PubComp></PubComp>
      <div class="row">
          <div class="col-lg-3 mb-4"  v-for="item in products" :key="item.id" >
   <v-card class="card"  @mouseenter="currentReveal=item.id" data-aos="fade-right"
                         @mouseleave="closeCard()">
  <div >
   <v-img
    height="150"
    src="../../../assets/logo.png"
  ></v-img>
  <div class="text-center">
      <div >
           Product Id:  : <span style="color:#EE8250">{{ item.id }}</span> 
       </div>
       <div>
           Product Name: <span style="color:#EE8250">{{ item.product_name }}</span> 
       </div>
       <!-- <div>
           Price On The Website :  <span style="color:#EE8250">{{ item.price_website }}$</span> 
       </div> -->
       <div>
           Price  : <span style="color:#EE8250">{{ item.price_website}}$</span> 
       </div>
       <div>
           Review  : <span style="color:#EE8250">{{ item.review}}$</span> 
       </div>
      </div>
  </div>
  <v-expand-transition>
    <v-card
    v-if="currentReveal === item.id"
      class="transition-fast-in-fast-out v-card--reveal "
      style="height: 100%;width: 100vw;"
    >
          <v-card-content style="padding-top: 15px; line-height: 60px; text-align: center !important;" class="text-center">
             <div >
               Description :{{ item.desc }}
             </div>
             <!-- <div>
               Review :{{ item.review }}
             </div> -->
             <div>
               Total Gain : 150$
             </div>
          </v-card-content>
    </v-card>
  </v-expand-transition>
               </v-card>
          </div>
      </div>
  <div class="text-center">
  <v-pagination
    v-model="page"
    :length="products.length"
    :total-visible="7"
    color="#01BE63"
  ></v-pagination>
</div>
  </div>
</template>

<script>

import productInfo from "../../../components/Fournisseur/Main/ProductInfoCard.vue"
import PubComp from "./Pub/PubComp.vue";
export default {
  data() {
    return {
      currentReveal: null,
      page: 1,
      products:[
          {id:'#0004',product_name:'Round Neck',
            price_website:15,desc:"llalala",review:"hjdhdjs"
          },
          {id:'#0002',product_name:'Round Neck',
          price_website:15,desc:"hdhdddh",review:"hjdhdjs"},
          {id:'#0003',product_name:'Round Neck',
          price_website:15,review:"hjdhdjs"},
          {id:'#0005',product_name:'Round Neck',desc:"hdjshdjs",review:"hjdhdjs"},
      ]
    };
  },
  computed: {
  },
  methods:{
      closeCard(){
          this.currentReveal=null;
      },
  },
  components:{
      productInfo,PubComp
  }
};
</script>

<style scoped lang="scss">
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

.card{
cursor: pointer;
}  
.v-card--reveal {
  bottom: 0;
  opacity: 0; /* Start with opacity 0 (hidden) */
  position: absolute;
  transition: opacity 0.3s; /* Add a smooth transition effect */
}

 .card:hover .v-card--reveal {
  opacity: 1; /* Show the reveal content on hover */
}
</style>
