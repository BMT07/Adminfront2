<template>
  <div>
        <PubComp></PubComp>
    <div class="row">
            <div class="col-lg-3 mb-4"  v-for="item in products" :key="item.id" >
     <v-card class="card"  data-aos="fade-down"
                         >
    <div class="text-center">
     <v-img
      height="150"
      src="../../../assets/logo.png"
    ></v-img>
    <div class="text-center p-3">
      <v-card-content class="text-center mb-3">
        <div style="font-size: 18px;font-weight: bold;">
           Product Id : <span style="color: #EE8250;">{{ item.id }}</span>
         </div>
         <div style="font-size: 18px;font-weight: bold;">
           Total Sales : <span style="color: #EE8250;">200 DT</span>
         </div>
      </v-card-content>
      <v-card-content style="display: flex;justify-content: space-between;margin-top: 9px;">
                <div >
                    <v-sheet @click="choseChartData(item,'visitor')" style="color: #fff;" class="p-2" color="#EE8250" rounded>
                        Total Visitors
                    </v-sheet>
                </div>
                <div>
                  <v-sheet  @click="choseChartData(item,'Shipped')" style="color: #fff;" class="p-2" color="#EE8250" rounded>
                        Total Shipped
                    </v-sheet>
                </div>
      </v-card-content>
      <v-card-content class="mt-2" style="display: flex;justify-content: space-between;">
        <div>
          <v-sheet @click="choseChartData(item,'Return')" style="color: #fff;"  class="p-2" color="#EE8250" rounded>
            Total Return
                </v-sheet>
        </div>
                  <div>
                    <v-sheet  @click="choseChartData(item,'Concelled')" style="color: #fff;" class="p-2" color="#EE8250" rounded>
                      Total Concelled 
                </v-sheet>
                  </div>
      </v-card-content>
      </div>
    </div>
                 </v-card>
            </div>
        </div>
        <v-dialog
            v-model="dialog"
        >
        <div >
            <div style="overflow: hidden;">
              <v-card>
                <p class="mx-5" style="font-size: 18px;font-weight: bold;">
                   Product Id  : <span style="color: #EE8250;">{{ selectedProd.id }}</span>
                </p>
                <p class="text-center" style="font-size: 18px;font-weight: bold;">
                    Titre Graphe
                </p>
                <v-chart class="chart" :option="option"  autoresize />
                <div class="text-center">
                  <small class="text-center">
                     <v-icon :color="Grpahe.color">mdi-minus</v-icon> {{ Grpahe.name }}
                </small>
                </div>
              </v-card>
            </div>
          </div>
         </v-dialog>
     
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
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import {  defineComponent } from 'vue';

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);
import productInfo from "../../../components/Fournisseur/Main/ProductInfoCard.vue"
import PubComp from './Pub/PubComp.vue';

export default defineComponent({
  
  data() {
    return {
      dialog:false,
      selectedProd:[],
      Grpahe:{
        name:"",
        color:""
      },
    
      currentReveal: null,
  
      products:[
          {id:'#0000',info:[
             1,2,3,4
          ]},
          {id:'#0002',info:[
            5,4,3,2
          ]},
          {id:'#0003',info:[
              4,5,3,6
          ]},
          {id:'#0004',info:[
             1,3,2,0
          ]},
          {id:'#0005',info:[
            0,6,5,4
          ]},
      ],
  
    option: {
      xAxis: {
           type: 'category',
           data: ['Time','Time','Time','Time'],
       },
      yAxis: {
          type: 'value',
     },
      series: [
        {
          name: 'Sample Data',
          type: 'line', 
          data: [0,6,2,4],
          lineStyle: {
            color: 'yellow', 
          },
        },
      ],
    },
    }
  },
  methods:{
      closeCard(){
          this.currentReveal=null;
      },
      choseChartData(data,name){
        this.selectedProd=data;
        this.dialog=true;
        for(let i=0;i<this.option.series[0].data.length;i++){
               let info=this.option.series[0].data;
               info[i]=data.info[i];
        }
        this.Grpahe.name=name;
        switch(name){
          case 'visitor':{
            this.option.series[0].lineStyle.color="blue"
            this.Grpahe.color="blue";
          };break;
          case 'Shipped':{
            this.option.series[0].lineStyle.color="#EE8250"
            this.Grpahe.color="#EE8250";
          };break;
          case 'Return':{
            this.option.series[0].lineStyle.color="grey"
            this.Grpahe.color="grey";
          };break;
          case 'Concelled':{
            this.option.series[0].lineStyle.color="yellow"
            this.Grpahe.color="yellow";
          };break;
        }
      },
  },
  components:{
      productInfo,VChart,PubComp
  }
});
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
.v-card--reveal {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
 }
 .chart {
  height: 50vh;
  width: 80%; 
  margin: 0 auto; 
}

.horizontal-line {
  height: 1px; 
  margin: 20px 0;
}

</style>
