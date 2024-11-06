<template>
    <div>
      <div class="Image">
          <img :src="currentImage" width="90%" height="250px">
      </div>
        <div class="mt-5">
            <div class="row text-center">
                <div class="col-lg-4" style="color: #01BE63;font-size: 20px;font-weight: bold;">
                   Supplier Id: <span style="color:#EE8250">#006</span> 
                </div>
                <div class="col-lg-4 py-2" style="color: #01BE63;font-size: 20px;font-weight: bold;">
                   General Customer rate : <span style="color:#EE8250">4.2/5 </span> 
                </div>
                <div class="col-lg-4" style="color: #01BE63;font-size: 20px;font-weight: bold;">
                  Total Sales :<span style="color:#EE8250">11 893DT</span> 
                </div>
            </div>
        </div>
        <div class="row ">
          <div class="col-lg-8 text-center">
            <v-chart class="chart" :option="option"  autoresize />
          </div>
          <div class="col-lg-4 mt-5 py-5 ">
            <div class="shadow_class">
              <p>Chose Your Growth</p>
      <v-radio-group v-model="radioGroup" >
        <v-radio
           v-for="(n,index) in arrayGraphic"  :key="index"
            :label="n.name"
            :value="n.name"
            @click="changeGraph(index)"
         ></v-radio>
        </v-radio-group>
            </div>
         </div>
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
  export default  defineComponent({
    data() {
      return {
        radioGroup:"Total Visitor",
        arrayGraphic:[
          {name:"Total Visitor",color:'blue'},
          {name:"Total Shipped",color:'#EE8250'},
          {name:"Total return",color:'grey'},
          {name:"Total Conceled",color:'yellow'},
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
          data: [4,5,6,2],
          lineStyle: {
            color: 'blue', 
          },
        },
      ],
    },
        i: 0,
        Images: [
          require('../../../assets/Pub/pub2.jpg'),
          require('../../../assets/Pub/pub3.jpg'),
          require('../../../assets/Pub/pub1.jpg'),
        ],
      };
    },
    computed: {
      currentImage() {
        return this.Images[this.i % this.Images.length];
      },
    
    },
    mounted() {
      setInterval(() => {
        this.i++;
      }, 3000);
    },
    methods:{
      changeGraph(index){
        switch(index){
          case 0:{
            let datainfo=[4,5,6,2]
            for(let i=0;i<this.option.series[0].data.length;i++){
              let info=this.option.series[0].data;
                info[i]=datainfo[i];
             }
            this.option.series[0].lineStyle.color="blue"
          };break;
          case 1:{
            let datainfo=[1,6,3,5]
            for(let i=0;i<this.option.series[0].data.length;i++){
              let info=this.option.series[0].data;
                info[i]=datainfo[i];
             }
            this.option.series[0].lineStyle.color="#EE8250"
          
          //  this.Grpahe.color="#EE8250";
          };break;
          case 2:{
            let datainfo=[6,4,2,0]
            for(let i=0;i<this.option.series[0].data.length;i++){
              let info=this.option.series[0].data;
                info[i]=datainfo[i];
             }
            this.option.series[0].lineStyle.color="grey"
          
           // this.Grpahe.color="grey";
          };break;
          case 3:{
            let datainfo=[6,3,5,3]
            for(let i=0;i<this.option.series[0].data.length;i++){
              let info=this.option.series[0].data;
                info[i]=datainfo[i];
             }
            this.option.series[0].lineStyle.color="yellow"
           // this.Grpahe.color="yellow";
          };break;
        }
      }
    },
    components:{
      VChart
    }
  });
  </script>
  
  <style scoped lang="scss">
  .Image {
   text-align: center;
   justify-items: center;
  }

  .shadow_class{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 25px;
    display: inline-block;
    padding: 30px;
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
  .chart {
  height: 50vh;
  width: 80%; 
  margin: 0 auto; 
}
  
  </style>
  