<template>
    <div>
      <PubComp></PubComp>
    <div class="row">
       <div class="col-lg-3 mb-4"    v-for="(item,index) in products" :key="item.id"  >
     <v-card class="card" data-aos="fade-right" >
    <div class="text-center">
     <v-img class="mb-5"
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-content class="mt-2">
        <div>
          Id : <span style="color:#EE8250">{{ item.id }}</span> 
        </div>
        <div>
          Name : <span style="color:#EE8250">Prouct {{ index }}</span> 
        </div>
    </v-card-content>
    <v-divider class="mx-4"></v-divider>
         <v-card-content class="mb-2">
         <div class="mt-2 text-center">
             <v-chip  @click="currentReveal = item.id" style="background-color: #EE8250;cursor: pointer;color: #fff;margin-bottom: 10px;" >Info &nbsp; <v-icon color="#fff">mdi-information</v-icon></v-chip>
         </div>
        </v-card-content>
    </div>
    <v-expand-transition>
      <v-card
      v-if="currentReveal === item.id"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;width: 100vw;"
      >
          <productInfo @closeCard="closeCard" :item="item"></productInfo>
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

  import PubComp from "@/components/Fournisseur/Main/Pub/PubComp.vue"
  import productInfo from "../../../components/Fournisseur/Main/ProductInfoCard.vue"
  export default {
    data() {
      return {
        page:0,
        currentReveal:"",
        products:[
            {id:'#0000',info:[
            {name:"STOCK ",nbr:20},
              {name:"All Orders",nbr:14},
              {name:"New Ordres",nbr:3},
              {name:"Conceled Ordres",nbr:7},
              {name:"Confirmed Ordres",nbr:2},
              {name:"On The Way",nbr:5},
              {name:"Returned Ordres",nbr:6},
              {name:"Shipped Ordres",nbr:45},
            ]},
            {id:'#0002',info:[
            {name:"STOCK ",nbr:20},
              {name:"All Orders",nbr:14},
              {name:"New Ordres",nbr:3},
              {name:"Conceled Ordres",nbr:7},
              {name:"Confirmed Ordres",nbr:2},
              {name:"On The Way",nbr:5},
              {name:"Returned Ordres",nbr:6},
              {name:"Shipped Ordres",nbr:45},
            ]},
            {id:'#0003',info:[
            {name:"STOCK ",nbr:20},
              {name:"All Orders",nbr:14},
              {name:"New Ordres",nbr:3},
              {name:"Conceled Ordres",nbr:7},
              {name:"Confirmed Ordres",nbr:2},
              {name:"On The Way",nbr:5},
              {name:"Returned Ordres",nbr:6},
              {name:"Shipped Ordres",nbr:45},
            ]},
            {id:'#0004',info:[
              {name:"STOCK ",nbr:20},
              {name:"All Orders",nbr:14},
              {name:"New Ordres",nbr:3},
              {name:"Conceled Ordres",nbr:7},
              {name:"Confirmed Ordres",nbr:2},
              {name:"On The Way",nbr:5},
              {name:"Returned Ordres",nbr:6},
              {name:"Shipped Ordres",nbr:45},
            ]},
            {id:'#0005',info:[
              {name:"STOCK ",nbr:20},
              {name:"All Orders",nbr:14},
              {name:"New Ordres",nbr:3},
              {name:"Conceled Ordres",nbr:7},
              {name:"Confirmed Ordres",nbr:2},
              {name:"On The Way",nbr:5},
              {name:"Returned Ordres",nbr:6},
              {name:"Shipped Ordres",nbr:45},
            ]},
        ]
      };
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
  
  .v-card--reveal {
        bottom: 0;
        opacity: 1 !important;
        position: absolute;
   }
 
 
  </style>
  