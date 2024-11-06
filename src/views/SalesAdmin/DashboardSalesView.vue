<template>
    <div >
        <div class="sidebar_position">
            <SideBarComponent :SideBarName="'Sales'" :IsOpenSide="IsOpenSide"  @changreetat="changreetat"></SideBarComponent>
          </div>
          <div :class="IsOpenSide == true ? 'content close ' : 'content'">
            <div class="header"> 
                <NavbarComponentSales :Poste="Poste"></NavbarComponentSales>
            </div>
            <div class="main">
                <div v-if="view.view=='Commandee'">
                    <CommandeComp></CommandeComp>
                </div> 
                <div v-else-if="view.view=='Approved_Commande'">
                    <Approved_Commande></Approved_Commande>
                </div> 
                <div v-else-if="view.view=='Cancelled_Commande'">
                    <Cancelled_Commande></Cancelled_Commande>
                </div> 
                 <div v-else-if="view.view=='Approved_Fournisseur'">
                    <Approved_Fournisseur></Approved_Fournisseur>
                </div>
                <div v-else-if="view.view=='Approved_Product'">
                    <Approved_Product></Approved_Product>
                </div>
          </div>    
       </div>
    </div>
</template>

<script>
import Approved_Fournisseur from "@/components/SalesAdmin/Main/FournisseurComp.vue"
import Approved_Product from "@/components/SalesAdmin/Main/ProductComp.vue"
import CommandeComp from "@/components/SalesAdmin/Main/Commande.vue"
import  SideBarComponent from '@/components/Fournisseur/SideBarComponent.vue';
import  NavbarComponentSales from "@/components/SalesAdmin/NavbarComponent.vue"
import{CurentView} from "@/store/StoreView"
import Approved_Commande from "@/components/SalesAdmin/Main/CommandeApproved.vue"
import Cancelled_Commande from "@/components/SalesAdmin/Main/CommandeConcelled.vue"
export default{
    setup(){
        const view=CurentView();
        return{view}
    },
    data(){
    return{
            iSsales:true,
            IsOpenSide:false,
            Poste:"SalesAdmin"
        }
    },
    methods:{
        changreetat(etat){
            this.IsOpenSide=etat;
        },
    },
    components:{
        SideBarComponent,NavbarComponentSales,CommandeComp,Approved_Fournisseur,Approved_Product,
        Approved_Commande,Cancelled_Commande
    }
}
</script>

<style scoped >
.sidebar_position{
    position: fixed;
    z-index: 2 !important;
}
  .content {
    width: calc(100%-250px);
    position: relative;
    padding: 15px;
    scroll-behavior: smooth;
    transition: all 0.2s ease-in-out;
  }

   .content.close{
    width: calc(100%-90px) ;
    margin-left: 100px ;
    transition: all 0.2s ease-in-out;
    scroll-behavior: smooth;
  }
     .content {
         margin-left: 250px ;
         margin-right: 40px;
      }
      .main{
         margin-top: 90px; 
         margin-left: 10px;
      }

  @media screen and (max-width: 1036px) {
    .content {
        width: 97% !important;
        margin-left: 0 !important;
    }

}


 

</style>