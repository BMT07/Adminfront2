
<template>
  <div>
      <p style="font-weight:bold"> Products </p>
       <div style="width:40%" class="mb-5">
          <v-text-field
              append-icon="mdi-magnify"
               label="Search Nom Produit"
               max-width="100"
               single-line
               hide-details
            ></v-text-field>
       </div>
       <div class="d-flex justify-space-between">
           <div>
               <select class="form-control">
                  <option >Filter By Id user</option>
                  <option >2</option>
                  <option >3</option>
                  <option >4</option>
               </select>
           </div>
           <div>
               <select class="form-control">
                  <option >Filter By Categorie</option>
                  <option >Electrical</option>
                  <option >Fer</option>
               </select>
           </div>
           <div>
               <select class="form-control">
                  <option >Filter By Quantite</option>
                  <option >15</option>
                  <option >5</option>
                  <option >7</option>
               </select>
           </div>
       </div>
       <table class="table mt-5 ">
          <thead class="table-primary ">
              <tr>
                 <th>Photo</th>
                 <th>idUser</th>
                 <th>IdProduit</th>
                 <th>NamePrduit</th>
                 <th>Quantité</th>
              </tr>
          </thead>
          <tbody>
             <tr v-for="i in 12">
                <td>
                  <img src="../../../assets/Logo/Hand Made (2).png" width="15%"/>
                </td>
                <td>15</td>
                <td>4</td>
                <td>Prod1</td>
                <td :style="i<10 ? 'color:red': 'color:green'" >
                    {{ i }}
                </td>
             </tr>
          </tbody>
       </table>
       <v-snackbar color="blue" v-model="snack">
          Message for reclamataion
        <template v-slot:action="{ attrs }">
          <v-btn
            color="#000"
            text
            v-bind="attrs"
            @click="snack = false"
          >
            close
          </v-btn>
        </template>
      </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snack:false
    };
  },
  methods: { 
  }
}
</script>