<template>
    <div >
        <div class="sidebar_position">
            <SideBarComponent :SideBarName="'Stock'" :IsOpenSide="IsOpenSide"  @changreetat="changreetat"></SideBarComponent>
          </div>
          <div :class="IsOpenSide == true ? 'content close ' : 'content'">
            <div class="header"> 
                <NavbarComponentSales :Poste="Poste"></NavbarComponentSales>
            </div>
            <div class="main">
                <div v-if="view.view=='Commande_stock'">
                    <CommandeComp></CommandeComp>
                </div> 
                <div v-else-if="view.view=='Product_Stock'">
                    <ListProdut></ListProdut>
                </div>
                <div v-else-if="view.view=='New_Product'">
                    <ProductApproved></ProductApproved>
                </div>
                <div v-else-if="view.view=='ontheway'">
                    <Ontheway></Ontheway>
                </div>
                <div v-else-if="view.view=='shipped'">
                    <shipped></shipped>
                </div>
                <div v-else-if="view.view=='returned'">
                    <returned></returned>
                </div>
          </div>    
       </div>
    </div>
</template>

<script>
import returned from "@/components/StockAdmin/Main/Returned.vue"
import shipped from "@/components/StockAdmin/Main/Shipped.vue"
import ListProdut from "@/components/StockAdmin/Main/ListProduct.vue"
import  SideBarComponent from '@/components/Fournisseur/SideBarComponent.vue';
import  NavbarComponentSales from "@/components/SalesAdmin/NavbarComponent.vue"
 import ProductApproved from '@/components/StockAdmin/Main/ListApprovedProduct.vue';
 import CommandeComp from "@/components/StockAdmin/Main/commande.vue"
import{CurentView} from "@/store/StoreView"
import Ontheway from "@/components/StockAdmin/Main/Ontheway.vue";
export default{
    setup(){
        const view=CurentView();
        return{view}
    },
    data(){
    return{
            Poste:"StockAdmin",
            iSsales:true,
            IsOpenSide:false
        }
    },
    methods:{
        changreetat(etat){
            this.IsOpenSide=etat;
        },
    },
    components:{
        SideBarComponent,NavbarComponentSales,CommandeComp,ListProdut,ProductApproved,Ontheway,shipped
        ,returned
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