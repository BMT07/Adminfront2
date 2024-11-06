<template>
    <div class="justify-center">
        <form  @submit.prevent="EditLinks()" enctype="multipart/form-data">
                 <div class="mx-5 px-5">
                    <div class="row py-3">
                        <div class="col-lg-6">
                            <v-text-field
                            label="LinkFacebook"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="LinkInstagram"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="LinkTiktok"
                          ></v-text-field>
                        </div>
                        <div class="col-lg-6">
                            <v-text-field
                            label="LinkLinkiden"
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
    </div>
</template>
<script>

export default{
  data(){
    return{
      load:false
    }
  },
  methods:{
    EditLinks(){

      }
  }
}
</script>