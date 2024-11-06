<template>
  <div>
    <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog"
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
            <v-btn  @click="dialog=false"  color="blue" >Edit</v-btn>
            <v-btn  @click="dialog=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>


    <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog_accpted"
            >
      <template>
        <v-card>
          <v-toolbar color="green" style="color:#fff">Confirm</v-toolbar>
            <card-text class="m-5 p-5">
              <div class="m-5">
                Are You Sure You Wannt to Confirm Supplier : Mejri Talel ?
              </div>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog_accpted=false"  color="green" >Confirm</v-btn>
            <v-btn  @click="dialog_accpted=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>


    
    <v-dialog
               transition="dialog-bottom-transition"
               max-width="500"
              v-model="dialog_deleted"
            >
      <template>
        <v-card>
          <v-toolbar color="red" style="color:#fff">Confirm</v-toolbar>
            <card-text class="m-5 p-5">
              <div class="m-5">
                Are You Sure You Wannt to Reject Supplier : Mejri Talel ?
              </div>
            </card-text>
          <v-card-actions class="justify-end">
            <v-btn  @click="dialog_deleted=false"  color="red" >Reject</v-btn>
            <v-btn  @click="dialog_deleted=false"  style="color: gray" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
                
     <div style="display: flex;justify-content: space-between;">
        <div>
           <p>Fournisseurs</p>
        </div>
        <div class="d-flex gap-4">
           <v-btn  @click="typeProduct='new'" :text="typeProduct=='new' ? false : true" color="primary">
              New 
           </v-btn >
           <v-btn text @click="typeProduct='accepted'" :text="typeProduct=='accepted' ? false : true" color="primary">
              Accepted
           </v-btn>
           <v-btn text @click="typeProduct='rejected'" :text="typeProduct=='rejected' ? false : true" color="primary">
              Rejected
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
                        <div class="card-text" v-if="typeProduct=='accepted'">
                            <div class="title" >
                                Id
                             </div>
                             <div class="text">
                              <v-chip @click="dialog=true" color="blue" style="color: #fff;cursor: pointer;">Add</v-chip>
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title">
                              Nom
                             </div>
                             <div class="text">
                              Mejri
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title" >
                              Prenom
                             </div>
                             <div class="text"> 
                               Talel
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title">
                              Email
                             </div>
                             <div class="text">
                               talel@gmail.com
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title">
                              Adresse
                             </div>
                             <div class="text">
                               El KEF
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title">
                              Num Tlf
                             </div>
                             <div class="text">
                               29036027
                             </div>
                        </div>
                        <div class="card-text">
                             <div class="title">
                              Date Naissance 
                             </div>
                             <div class="text">
                               25/04/2002
                             </div>
                        </div>
                        
                      </div>
                      <div v-if="typeProduct=='new'">
                  <v-btn class="mx-2" @click="dialog_accpted=true" color="green" style="color: #fff;">
                     Confirm
                  </v-btn>
                  <v-btn color="red" style="color: #fff;" @click="dialog_deleted=true">
                     Reject
                  </v-btn>
              </div>
             </div>

       </div>
     
        </div>
              
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      dialog:false,
      typeProduct:"new",
      dialog_accpted:false,
      dialog_deleted:false
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