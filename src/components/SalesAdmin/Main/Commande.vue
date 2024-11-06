<template>
    <div>
        <p class="mx-2 text-center titre">Commandes</p>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="itm in 10"> 
                  <div class="card mb-3 shadow " style="max-width: 400px;border: none;" >
                  <div class="row g-0 p-1">
                     <div class="col-md-4 mt-5 py-5">
                       <img src="../../../assets/logo.png" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          
                          <div class="card-text">
                               <div class="title">
                                 NumCommande
                               </div>
                               <div class="text">
                                 #000
                               </div>
                          </div>
                          <div class="card-text">
                               <div class="title">
                                dateTime
                               </div>
                               <div class="text">
                                 15/15/12 13:25
                               </div>
                          </div>
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
                                 #000
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
                          <div class="card-text">
                               <div class="title">
                                iduser
                               </div>
                               <div class="text"> 
                                 #000
                               </div>
                          </div>
                          <div class="card-text">
                               <div class="title">
                                Price
                               </div>
                               <div class="text"> 
                                 15 Dt
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
               max-width="500"
              v-model="dialog"
            >
      <template>
        <v-card>
          <v-toolbar color="#01BE63" style="color:#fff">Info Commande</v-toolbar>
          <v-card-text>
            <div class="text-h5 text-center gap-5 m-5 py-2">
                <div class="card-text ">
                    <div class="title">
                       Nom :
                    </div>
                    <div  class="text">
                       Talel
                    </div>
                </div>
                <div class="card-text gap-5">
                  <div  class="title"> 
                       LastName :
                    </div>
                    <div class="text">
                       Mejri
                    </div>
                </div>
                <div class="card-text gap-5">
                  <div class="title">
                       Adresse :
                    </div>
                    <div class="text">
                       Bahra
                    </div>
                </div>
                <div class="card-text gap-5">
                  <div class="title">
                       Poste :
                    </div>
                    <div  class="text">
                       7116 el kef bahra
                    </div>
                </div>
                <div class="card-text gap-5">
                  <div class="title">
                       Email :
                    </div>
                    <div class="text">
                       talel@gmail.com
                    </div>
                </div>
                <div class="card-text gap-5">
                  <div class="title">
                       Num Tlf :
                    </div>
                    <div class="text">
                      29036027   
                    </div>
                </div>
            </div>
            <div class="text-center">
               <v-btn class="mx-2" color="success" @click="dialogConfirm=true">Confirm</v-btn>
               <v-btn color="error" @click="dialogDelete=true">cancel</v-btn>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog=false" text style="color: #01BE63" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog
        v-model="dialogConfirm"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>Do You Wanna Accept Commande</span>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="green"
              text
              @click="dialogConfirm = false"
            >
              Confirm
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="dialogConfirm = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      
    <v-dialog
        v-model="dialogDelete"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>Do You Wanna Reject Commande</span>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="red"
              text
              @click="dialogDelete = false"
            >
              Reject
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="dialogDelete = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        </div>
    </div>
  </template>
  
  <script>
  export default {

    data() {
      return {
        dialog:false,
        dialogConfirm:false,
        dialogDelete:false
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