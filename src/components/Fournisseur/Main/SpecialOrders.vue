<template>
  <div>
    <PubComp></PubComp>
      <div class="row text-center ">
            <table class="tableaux">
               <tr>
                 <th>Info</th>
                 <th>Deadline</th>
                 <th>Total</th>
               </tr>
               <tbody>
                  <tr v-for="i in 4" :key="i" class="align-items-center">
                    
                      <td class="py-2">
                          <img class="mb-2" src="../../../assets/logo.png" width="60px"> 
                          <br>
                          Product Name : prod 1
                          <br>
                          Product Id : #000
                          <br>
                          Nombre des Articles : 4
                          <br>
                          Nombre des produits : 25
                      </td>
                      <td>
                        <span  style="color: red;" @click="dialog=true">17/02/2024</span> 
                        <br>
                        <span style="color: orange;">17/02/2024</span>
                         <br>
                         <span style="color: green;">17/02/2024</span>
                         <br> 
                      </td>
                      <td>
                            Total
                            4500DT
                            <br>
                            Money recived (30% or more)
                            2000DT
                            <br>
                            Remain
                            2500DT
                      </td>
                  </tr>
               </tbody>
               <v-dialog
                 v-model="dialog"
                 max-width="610px"
    >
          <v-card >  
                <div class="p-3">
                  <div>
                      <div class="text-center">
                        <img class="mb-2" src="../../../assets/logo.png" width="100px"> 
                        <p style="font-size: 20px;color: red;">
                            17/02/2024
                        </p>
                      </div>
                      <div class="d-flex justify-space-between align-items-center mt-2">
                            <p> <span>Product Name</span> : prod 1</p>
                              <p> <span>Product Id</span> : #000</p>
                      </div>
                      <div class="d-flex justify-space-between align-items-center mt-2">
                          <p>  <span>Nombre des Articles</span>  : 4</p>
                            <p>
                                 <span>Days remain</span> : 3 days
                            </p>
                      </div>
                      <div class="d-flex justify-space-between align-items-center mt-2">
                        <p>
                          <span>Money received</span> :80</p>
                            <p>
                              <span>Remained</span> : 160
                            </p>
                      </div>
                  </div>
                </div>
                <div >
                       <div class="text-center mb-2">
                            <span>Chose File</span> 
                         </div>
                   <div class="d-flex justify-content-center align-items-center gap-4">
                         <div>
                          <p>
                              <input type="file">
                            </p>
                         </div>
                      </div>
                      <div class="d-flex justify-content-center align-items-center gap-4">
                         <div>
                          <p>
                            <v-textarea
                        label="Description"
                     ></v-textarea>
                            </p>
                         </div>
                      </div>
                      <div class="d-flex justify-content-center align-items-center gap-4">
                         <div>
                          <p>
                            <v-select
                        v-model="select_typ"
                        :items="places"
                        label="Chose Type"
                     ></v-select> 
                            </p>
                         </div>
                      </div>
                      <div class="text-center ">
                        <v-btn color="green" style="color: #fff;">Add</v-btn>
                      </div>
                </div>
          </v-card>
    </v-dialog>
            </table>
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
import PubComp from './Pub/PubComp.vue';
export default {
  data() {
    return {
      select_typ:"Places",
      dialog:false,
      page: 1,
      places:['Places','centre', 'left side', 'upper right side', 'bottom left side'],
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
    PubComp
  }
};
</script>

<style scoped lang="scss">
span{
  color: #000;
  font-weight: bold;
}
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


.tableaux tr th{
  color: #01BE63;
}

</style>
