<template>
    <div class="justify-center">
       <form  @submit.prevent="ChangerPassword()">
            <div class="mx-5 px-5">
              <div class="col-xl-9 col-lg-6 text-center">
               <div class="row d-flex justify-content-center">
                   <div class="col-lg-12">
                       <v-text-field
                       append-icon='mdi-eye-off'
                      type='password'
                      label="Actuel Password"
                     ></v-text-field>
                   </div>
                   <div class="col-lg-12">
                      <v-text-field
                      append-icon='mdi-eye-off'
                      type='password'
                      label="New Password"
                    ></v-text-field>
                  </div>
                  <br>
                  <div class="col-lg-12">
                      <v-text-field
                      append-icon='mdi-eye-off'
                      type='password'
                      label="Confirme New Password"
                    ></v-text-field>
                  </div>
               </div>
              </div>
            </div>
          <v-divider></v-divider>
         <v-card-actions class="justify-center">
           <v-btn class="mx-2" style="color:#fff" type="submit" color="#01BE63" :loading="load"
               >
            Update
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
      ChangerPassword(){

      }
  }
}
</script>