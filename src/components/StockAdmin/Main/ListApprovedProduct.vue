<template>
   <div>
    <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog_editid"
            >
      <template>
        <v-card>
          <v-toolbar color="blue" style="color:#fff">Edit Id</v-toolbar>
            <card-text class="m-5 p-5">
              <v-text-field class="m-5"
            label="Id"
          ></v-text-field>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog_editid=false"  color="blue" >Edit</v-btn>
            <v-btn  @click="dialog_editid=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

      <div style="display: flex;justify-content: space-between;">
         <div>
            <p>Products</p>
         </div>
         <div class="d-flex gap-4">
            <v-btn text  color="primary">
               Accepted
            </v-btn>
         </div>
      </div>
    
       <div class="container">
           <div class="row">
               <div class="col-lg-4" v-for="itm in 10"> 
                 <div class="card mb-3 shadow " :style="typeProduct=='rejected' ? 'border:2px solid red' : typeProduct=='accepted' ? 'border:2px solid green' : 'border:2px solid #000'" >
                 <div class="row g-0 p-1">
                    <div class="col-md-4 mt-5 py-5">
                      <img src="../../../assets/logo.png" class="img-fluid rounded-start" alt="...">
                     </div>
                     <div class="col-md-8">
                       <div class="card-body">
                         <div class="card-text">
                              <div class="title">
                               Name Product
                              </div>
                              <div class="text">
                                Prod1
                              </div>
                         </div>
                         <div class="card-text">
                              <div class="title" >
                               idprod
                              </div>
                              <div class="text"> 
                                <v-chip @click="dialog_editid=true" color="blue" style="cursor: pointer;color: #fff;">Add</v-chip>
                              </div>
                         </div>
                         <div class="card-text">
                              <div class="title">
                               idFournisseur
                              </div>
                              <div class="text">
                                #000
                              </div>
                         </div>
                         <div class="text-center">
                            <v-btn color="#01BE63" @click="dialog=true" style="color:#fff">Info</v-btn>
                         </div>
                       </div>
              </div>
        </div>
         </div>
               </div>
           </div>
           <v-dialog
              transition="dialog-bottom-transition"
              max-width="800"
             v-model="dialog"
           >
     <template>
       <v-card>
         <v-toolbar color="#01BE63" style="color:#fff">
          <div>
            Info Commande
          </div>
             <v-spacer></v-spacer>
            <v-btn color="primary" @click="infoStandrd=!infoStandrd" style="color: #fff;">
              {{ infoStandrd ? "Standard" :"personaliser" }}
            </v-btn>
         </v-toolbar>
         <v-card-text>
           <div class="text-h5 text-center gap-5 m-5 py-2">
               <div class="card-text ">
                   <div class="title">
                      Category :
                   </div>
                   <div  class="text">
                      Beauty
                   </div>
               </div>
               <div class="card-text gap-5">
                 <div  class="title"> 
                  Material :
                   </div>
                   <div class="text">
                      Wood
                   </div>
               </div>
               <div class="card-text gap-5">
                 <div class="title">
                  Type :
                   </div>
                   <div class="text">
                      Mix
                   </div>
               </div>
               <div class="card-text gap-5">
                 <div class="title">
                  Description :
                   </div>
                   <div  class="text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, est.
                   </div>
               </div>
               <div class="card-text gap-5">
                <div class="title">
                 Dimension:
                  </div>
                  <div >
                    <div class="shadow p-2 "  :style="infoStandrd ? 'font-size: 15px !important;' : 'font-size: 15px !important;background-color: yellow'">
                        <div class="d-flex align-items-center gap-4" >
                          <div style="font-weight: bold;color: #000;">
                            1 piece -> 5 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 Dt
                          </div>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                          <div style="font-weight: bold;color: #000;">
                            5 piece -> 10 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 Dt
                          </div>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                          <div style="font-weight: bold;color: #000;">
                            10 piece -> 20 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 Dt
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
              <div class="card-text gap-5">
                <div class="title">
                 Temps:
                  </div>
                  <div >
                    <div class="shadow-lg p-2" :style="infoStandrd ? 'font-size: 15px !important;' : 'font-size: 15px !important;background-color: yellow'">
                        <div class="d-flex align-items-center gap-4">
                          <div style="font-weight: bold;color: #000;">
                            1 piece -> 5 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 hour
                          </div>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                          <div style="font-weight: bold;color: #000;">
                            5 piece -> 10 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 hour
                          </div>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                          <div style="font-weight: bold;color: #000;">
                            10 piece -> 20 piece  :
                          </div>
                          <div style="font-weight: bold;color: green;">
                            15 hour
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
              <div class="card-text mt-3" v-if="infoStandrd==false">
                 <div class="title">
                   Option
                 </div>
                 <div class="title">
                    Image and Text
                 </div>
              </div>
               <div class="card-text gap-5">
                 <div class="title">
                  Comment:
                   </div>
                   <div class="text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium repellat facere est!   
                   </div>
               </div>

               <div class="card-text gap-5">
                  <div class="title">
                       Quantity:
                   </div>
                   <div >
                      <div class="">
                        <div>
                          <v-text-field class="m-5 mb-5" v-model="qt"
                            label="Quantity"
                       ></v-text-field>
                        </div>
                       <div>
                        <v-btn color="yellow" style="color:#fff" @click="dialog=false">Edit</v-btn>
                       </div>
                      </div>
                   </div>
               </div>
           </div>
           <!-- <div class="text-center">
              <v-btn class="mx-2" color="success">Accepter</v-btn>
              <v-btn color="error">Rejeter</v-btn>
           </div> -->
         </v-card-text>
         <v-card-actions class="justify-end">
           <v-btn  @click="dialog=false" text style="color: #01BE63" >Close</v-btn>
         </v-card-actions>
       </v-card>
     </template>
   </v-dialog>
       </div>
   </div>
 </template>
 
 <script>
 export default {

   data() {
     return {
       dialog:false,
       infoStandrd:true,
       typeProduct:"new",
       dialog_editid:false,
       qt:0
     };
   },
   methods: { 
   
 }
}
 </script>

 <style scoped>
 .card-text{
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 5px;
 }

 .title{
   font-weight: bold;
   color: #000 !important;
   font-size: 15px !important;
 }

 .text{
   font-size: 12px !important;
   color: #000 !important;
   font-weight: normal;
 }

 .titre{
   color: #000;
   font-size: 20px;
   font-weight: bold;
 }

</style>