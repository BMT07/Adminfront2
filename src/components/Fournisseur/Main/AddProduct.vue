<template>
    <div class="container">
  <div class="d-flex justify-space-between gap-4"> 
    <div class="w-100">
      <p class="text-center text">
             Add Product
        </p>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step   :complete="e1 >3" step="3">
        step 3
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step   :complete="e1 > 4" step="4">
        Final Step
      </v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
        color=" lighten-1"
        class="mb-12"
      >
      <div class="box_form">
                      <label>Upload Photo</label>
                      <input type="file">
                 </div>
                 <div class="box_form">
                     <v-text-field label="Product Name*"></v-text-field>
                 </div>
                 <div class="box_form">
                    <v-select
                        v-model="select_cat"
                        :items="Categories"
                        label="Chose Categorie"
                     ></v-select>
                 </div>
    </v-card>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color=" lighten-1"
        >
        <div class="box_form">
                    <v-select
                        v-model="select_mat"
                        :items="Material"
                        label="Chose Material"
                     ></v-select>
                 </div>
                 <div class="box_form">
                    <v-select
                        v-model="select_typ"
                        :items="TypeCat"
                        label="Chose Type"
                     ></v-select>
                 </div>
                 <div class="box_form">
                    <v-textarea
                        label="Description"
                     ></v-textarea>
                 </div>
      </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color=" lighten-1"
        >
        <div class="box_form">
                    <label>Dimension (cm)</label>
                    <div class="box_temps">
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 1"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 2"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 3"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                    </div>
                 </div>
                 <div class="box_form">
                    <label>Temps Preparation</label>
                    <div class="box_temps">
                        <div class="d-flex align-items-center gap-4">
                            1 piece -> 5 piece    <v-text-field   solo></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            5 piece -> 10 piece    <v-text-field  solo></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            10 piece -> 20 piece    <v-text-field  solo></v-text-field>
                        </div>
                    </div>
                 </div>
             
      </v-card>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
        color=" lighten-1"
        class="mb-12"
      >
      <div class="box_form">
                    <label>Personaliser</label>
                    <v-radio-group
                         v-model="personnaliser"
                         row
                    >
                    <v-radio
                        label="Yes"
                        value="yes"
                     ></v-radio>
                     <v-radio
                        label="No"
                        value="no"
                     ></v-radio>
                 </v-radio-group>
                 </div>
                 <div class="shadow-lg p-5" v-if="personnaliser=='yes'"  data-aos="fade-left">
                     <p style="color:#01BE63">Personnaliser</p>
                     <div class="box_form">
                    <label>Dimension (cm)</label>
                    <div class="box_temps">
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 1"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 2"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            <v-text-field   label="Dimension 3"></v-text-field>    <v-text-field label="Prix"   ></v-text-field>
                        </div>
                    </div>
                 </div>
                 <div class="box_form">
                    <label>Temps Preparation</label>
                    <div class="box_temps">
                        <div class="d-flex align-items-center gap-4">
                            1 piece -> 5 piece    <v-text-field   solo></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            5 piece -> 10 piece    <v-text-field  solo></v-text-field>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                            10 piece -> 20 piece    <v-text-field  solo></v-text-field>
                        </div>
                    </div>
                 </div>
                 <div class="box_form" >
                    <label>Option</label>
                    <v-radio-group
                    v-model="option"
                         columnn
                    >
                    <v-radio
                        label="Image"
                        value="Image"
                     ></v-radio>
                     <v-radio
                        label="Text"
                        value="Text"
                     ></v-radio>
                     <v-radio
                        label="Autre"
                        value="Autre"
                     ></v-radio>
                 </v-radio-group>
                 </div>
                 <div class="box_form" v-if="option=='Autre'" data-aos="fade-left">
                     <v-text-field label="Give Us New Option" ></v-text-field>
                 </div>
                </div>
                 <div class="box_form">
                     <v-text-field label="Comment" ></v-text-field>
                 </div>
    </v-card>
        <v-btn
          color="success"
        >
          Add
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </div>
    <div class="w-100">
            <div>
                  <p class="text-center text">
                         Product In Review 
                  </p>
                  <table class="table  mt-5 py-5">
                        <thead>
                           <th>Photo</th>
                           <th>ProductName</th>
                           <th>Category</th>
                           <th>Material</th>
                           <th>Type</th>
                           <th>Description</th>
                           <th>Dimension</th>
                           <th>Temps</th>
                           <th>Comment</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="9" class="text-center">
                                    No Product Yet
                                </td>
                            </tr>
                        </tbody>
                  </table>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default{
    data(){
        return{
            e1: 1,
            personnaliser:false,
            select_cat:"",
            personnaliser:'no',
            select_mat:"",
            option:"",
            select_typ:"",
            Material:['wood', 'olive wood','glass','Plastic','autre'],
            Categories:['beauty', 'décor','accessory', 'games', 'autres'],
            TypeCat:['Tradionnel','Modern', 'Mix']
        }
    }
}
</script>

<style lang="scss">

.text{
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #01BE63;
    font-size: 25px;
    font-weight: bold;
 }
 .box_form{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    label{
        color: #EE8250;
    }
 }
 .box_temps{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

</style>