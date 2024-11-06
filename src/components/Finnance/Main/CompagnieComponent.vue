<template>
    <div>
        <p style="font-weight:bold">Compagnie </p>
    <div class="row">
                <div class="col-lg-4" v-for="item in tab"> 
                  <div class="card mb-3 shadow " style="max-width: 400px;height: 300px;border: none;" >
                  <div class="row g-0 p-1">
                     <div class="col-md-12 text-center mt-5 py-5">
                       <img :src="item.img" width="100px" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-lg-12 text-center">
                        <div class="card-body">
                          <div class="card-text">
                               <div class="title">
                                Yearly Wallet : <span class="text">{{item.year}} DT</span>
                             </div>
                          </div>
                          <div class="card-text">
                               <div class="title">
                                Monthly Wallet : <span class="text">{{item.month}} DT</span>
                               </div>
                          </div>
                          <div class="card-text mt-2 py-3">
                             <v-btn mat-raised-button color="primary" @click="ShowInfo(item)">Info</v-btn>
                          </div>
                        </div>
               </div>
         </div>
          </div>
                </div>
            </div>
  
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{selectCompagnie.nom}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="container">
        <p style="font-weight:bold"> Command {{type}} </p>
        <div  class="mb-5 search_type">
          <div class="d-flex align-items-center">
            <div>
            <v-tooltip bottom v-if="type=='Shipped'">
           <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                @click="type='Returned'"
            >
              Shipped
            </v-btn>
          </template>
          <span>Command Shipped</span>
          </v-tooltip>
          <v-tooltip bottom v-else>
           <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                @click="type='Shipped'"
            >
            Returned
            </v-btn>
          </template>
          <span>Command Returned</span>
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
                  <option >Filter By IDUSER</option>
                  <option >4</option>
                  <option >1</option>
                  <option >12</option>
                  <option >Autre</option>
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
               </tr>
            </tbody>
         </table>
    </div>
      
      </v-card>
    </v-dialog>
  
            </div>
</template>

<script>
  export default{
    data(){
        return{
            selectCompagnie:{},
            dialog:false,
            snack:false,
             type:"Shipped",
            tab:[
                {id:1,nom:"aramex",img:require("../../../assets/Deleviry/aramex.jpg"),year:15,month:200},
                {id:2,nom:"FEDEX",img:require("../../../assets/Deleviry/fedex.png"),year:12,month:28},
                {id:3,nom:"UPS",img:require("../../../assets/Deleviry/ups.jpg"),year:10,month:45},
                {id:4,nom:"EMS",img:require("../../../assets/Deleviry/ems.png"),year:13,month:250},
            ]
        }
    },
    methods:{
        ShowInfo(compagnie){
            this.dialog=true;
            this.selectCompagnie=compagnie;
        }
    }
  }
</script>