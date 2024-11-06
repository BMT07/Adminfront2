<template>
    <div>
        <template class="mt-5 py-5">
            <v-card >
                <v-tabs
                fixed-tabs
                background-color="#01BE63"
                dark
              >
                <v-tab @click="page=0">
                    Update Info Personnel
                </v-tab>
                <v-tab @click="page=1">
                    Update Password
                </v-tab>
                <v-tab @click="page=2">
                    Update Email
                </v-tab>
                <v-tab @click="page=3">
                    Update Links
                </v-tab>
              </v-tabs>
              <v-card-text v-if="page==0" >
               <form  @submit.prevent="EditUser()" enctype="multipart/form-data">
                 <div class="mx-5 px-5">
                    <div class="row py-3">
                        <div class="col-lg-6">
                            <v-text-field
                            label="Supplier Id"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="Email"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="Prenom"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                             <v-text-field
                                 readonly
                                 label="Nom"
                              ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="Num tlf"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6 mt-3">
                          <v-text-field
                            label="Adresse"
                          ></v-text-field>
                        </div>
                    </div>
                 </div>
               <v-divider></v-divider>
              <v-card-actions class="justify-center py-3">
                <v-btn :loading="loadingEdit" style="color:#fff" class="mx-2" type="submit" color="#01BE63">
                     Updated
                </v-btn>
              </v-card-actions>
              </form>
             </v-card-text>
             <v-card-text v-else-if="page==1">
               <changerPassword></changerPassword>
              </v-card-text>
              <v-card-text v-else-if="page==2">
                <ChangerEmail></ChangerEmail>
              </v-card-text>
              <v-card-text v-else>
                <ChangerLinks></ChangerLinks>
              </v-card-text>
            </v-card>
          </template>
    </div>
</template>
<script>
import changerPassword from '@/components/Fournisseur/Main/EditInfo/ChangerPassword.vue'
import ChangerEmail from '@/components/Fournisseur/Main/EditInfo/ChangerEmail.vue'
import ChangerLinks from './ChangerLinks.vue'

export default{
    data(){
        return{
            page:0,
            loadingEdit:false
        }
    },
    methods:{
        EditUser()
        {

        }
    },
    components:{
        changerPassword,ChangerEmail,ChangerLinks
    }
 
}
</script>

