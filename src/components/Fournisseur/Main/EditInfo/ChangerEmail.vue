<template>
    <div>
        <form  @submit.prevent="ChangerEmail()" >
            <div class="mx-5 px-5">
               <div class="row col-lg-6">
                   <div class="col-lg-12">
                       <v-text-field
                         readonly
                         v-model="email"
                         label="email Current"
                     ></v-text-field>
                   </div>
                   <div class="col-lg-12">
                    <v-text-field
                      label="Nouvelle Email"
                  ></v-text-field>
                </div>
               </div>
            </div>
          <v-divider></v-divider>
         <v-card-actions class="justify-center">
           <v-btn class="mx-2" type="submit" color="#01BE63" style="color: #fff;" :loading="load">
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
        email:"Talelmejri8@gmail.com"
    }
  },
  methods:{
    ChangerEmail(){
        
    }
  }
  
  
}
</script>