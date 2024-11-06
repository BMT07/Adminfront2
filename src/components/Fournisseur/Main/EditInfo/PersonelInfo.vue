<template>
<div>
    <PubComp></PubComp>
    <div class="text-center py-5 mt-5">
        <v-container>
            <div class="row">
                <div class="col-lg-4">
                        <v-card style="padding: 15px;" class="edit-profile ">
                            <div class="mb-5">
                            <span class="text" style="font-weight: bold;color: #01BE63;">
                              Mejri Talel
                            </span>
                        </div>
                            <div class="mb-5">
                            <v-avatar size="120" v-if="loadimage==true" >
                                 <span></span>
                           </v-avatar>
                           <v-avatar size="120" v-else >
                                <img src="../../../../assets/logo.png" alt="">
                            </v-avatar>
                        </div>
                             <form class="mb-4 py-4"  @submit.prevent="UploadImage()" enctype="multipart/form-data" >
                                    <input
                                      name="image"
                                      type="file"
                                      class="form-control"
                                      ref="photo"
                                       @change="saveImage()"
                                     >
                                     <div class="mb-2">
                                    </div>
                                    <v-btn type="submit" style="color:#fff" class="mt-5" color="#01BE63"  :loading="loadimage">Upload</v-btn>
                             </form>
                             <p class="py-3" >
                                Member Since: 18/02/2023
                             </p>
                         </v-card>
                </div>
                <div class="col-lg-8">
                    <v-card >
                        <editInfoPersonnel></editInfoPersonnel>
                    </v-card>
                 </div>
            </div>
         </v-container>
    </div>
</div>
</template>

<script>

import editInfoPersonnel from "@/components/Fournisseur/Main/EditInfo/editInfoPersonnel.vue"
import PubComp from "../Pub/PubComp.vue";
export default{
    data(){
        return{
            loadimage:false,
        
        }
    },
    computed:{
     
    },
    methods:{
        UploadImage(){

        },
        saveImage(){

        }
    },
    components:{
        editInfoPersonnel,PubComp
    }
}
</script>

<style scoped>
.text{
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #1976D2;
    font-size: 20px;
    display: inline-block;
}


.Image {
   text-align: center;
   justify-items: center;
  }
  .Image img{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 25px;
  }

</style>