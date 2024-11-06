<template>
    <div>
        <p style="font-weight:bold"> New Orders </p>
         <div  class="mb-5 search_type">
         
          <div>
            <v-tooltip bottom v-if="personnaliser==false">
           <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                @click="personnaliser=!personnaliser"
            >
              PP
            </v-btn>
          </template>
          <span>Commande Personnaliser</span>
          </v-tooltip>
          <v-tooltip bottom v-else>
           <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                @click="personnaliser=!personnaliser"
            >
             PS
            </v-btn>
          </template>
          <span>Commande Standard</span>
          </v-tooltip>
          </div>

          <div>
            <v-text-field
                append-icon="mdi-magnify"
                 label="Search By Num Commande"
                 max-width="100"
                 single-line
                 hide-details
              ></v-text-field>
          </div>
         </div>
         <table class="table table-primary  table-responsive table-striped    mt-5">
            <thead class="table-dark table-sm">
                <tr>
                   <th>Num Commande</th>
                   <th>Nom Produit</th>
                   <th>Id User</th>
                   <th>Id Produit</th>
                   <th>Nbr Article</th>
                   <th>Date</th>
                   <th>Price</th>
                   <th>Choix</th>
                   <th>Operation</th>
                </tr>
            </thead>
            <tbody class="table-sm">
               <tr v-for="i in 20">
                  <td>4</td>
                  <td>Prod</td>
                  <td>4</td>
                  <td>1</td>
                  <td>20</td>
                  <td>11/15/2022</td>
                  <td>15 TND</td>
                  <td>{{ i>3 ? 'payment en ligne' : 'Cache deliverer'}}</td>
                  <td>
                     <v-chip  class="mx-1" color="green" style="color:#fff;cursor: pointer;" @click="dialog=true">Send With</v-chip>
                 </td>
               </tr>
            </tbody>
         </table>
         <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog"
            >
      <template>
        <v-card>
          <v-toolbar color="green" style="color:#fff">Chose Your CompagneLivraison</v-toolbar>
            <card-text class=" d-flex justify-content-center gap-3 m-5 p-3">
                <div>
                   <img src="../../../assets/Deleviry/aramex.jpg" alt=""  width="100px">
                </div>
                <div>
                   <img src="../../../assets/Deleviry/ems.png" alt="" width="100px">
                </div>
                <div>
                   <img src="../../../assets/Deleviry/fedex.png" alt="" width="100px">
                </div>
                <div>
                   <img src="../../../assets/Deleviry/ups.jpg" alt="" width="100px">
                </div>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog=false"  color="green" >Confirm</v-btn>
            <v-btn  @click="dialog=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
         <v-snackbar color="blue" v-model="snack">
            Message for reclamataion
          <template v-slot:action="{ attrs }">
            <v-btn
              color="#000"
              text
              v-bind="attrs"
              @click="snack = false"
            >
              Concel
            </v-btn>
          </template>
        </v-snackbar>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        snack:false,
        personnaliser:false,
        dialog:false
      };
    },
    methods: { 
    }
}
  </script>

  <style scoped>
  .search_type{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img{
    cursor: pointer;
  }

  img:hover{
    transform: translateY(10px);
  }
  
  img:active{
    filter: grayscale(1500);
  }
</style>