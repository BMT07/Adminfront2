<template>
    <div>
      <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog_shipped"
            >
      <template>
        <v-card>
          <v-toolbar color="green" style="color:#fff">Make Commande Shipped</v-toolbar>
            <card-text class="m-5 p-5">
              <p></p>
              <p class="m-5">Do You Wannt Make Commande With Num:#000 Shipped</p>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog_shipped=false"  color="green" >Shipped</v-btn>
            <v-btn  @click="dialog_shipped=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog_return"
            >
      <template>
        <v-card>
          <v-toolbar color="warning" style="color:#fff">Make Commande </v-toolbar>
            <card-text class="m-5 p-5">
              <p></p>
              <p class="m-5">Do You Wannt Make Commande With Num:#000 Return</p>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog_return=false"  color="warning" >Return</v-btn>
            <v-btn  @click="dialog_return=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
        <p style="font-weight:bold"> OnTheWay </p>
         <div  class="mb-5 search_type">
          <div class="d-flex align-items-center">
          
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
            <v-spacer></v-spacer>
              <div>
                <div style="margin-top: -50px;" class="py-2">
              <v-text-field
                append-icon="mdi-magnify"
                 label="Search By Num Commande"
                 single-line
                 hide-details
              ></v-text-field>
            </div>
                <div>
               <select class="form-control">
                  <option >Filter By Compagnie</option>
                  <option >Aramex</option>
                  <option >BMS</option>
                  <option >UPS</option>
                  <option >FEDEX</option>
               </select>
           </div>
              </div>
          </div>
          <div>
       
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
                   <th>Compagnie</th>
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
                  <td>{{ i>3 ? 'aramex' : 'BMS'}}</td>
                  <td>
                    <v-chip  class="mx-1" color="green" style="color:#fff;cursor: pointer;" @click="dialog_shipped=true">Shipped</v-chip>
                     <v-chip  class="mx-1" color="warning" style="color:#fff;cursor: pointer;" @click="dialog_return=true">Returned</v-chip>
                 </td>
               </tr>
            </tbody>
         </table>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        snack:false,
        dialog_shipped:false,
        personnaliser:false,
        dialog_return:false,
      };
    },
    methods: { 
    }
}
  </script>

  <style scoped>

</style>