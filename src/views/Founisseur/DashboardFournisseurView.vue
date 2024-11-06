<template>
    <div >
        <div class="sidebar_position">
            <SideBarComponent :SideBarName="'Fournisseur'"  :IsOpenSide="IsOpenSide"  @changreetat="changreetat"></SideBarComponent>
          </div>
          <div :class="IsOpenSide == true ? 'content close ' : 'content'">
            <div class="header"> 
                <navbarFournisseur ></navbarFournisseur>
            </div >
            <div class="main">
                <div v-if="store.view=='Dashboard'" >
                    <dashboardComp></dashboardComp>
                </div>
                <div v-else-if="store.view=='MYProduct'">
                     <MyProduct ></MyProduct>
                </div>
                <div v-else-if="store.view=='Special'">
                    <SpecialOrders ></SpecialOrders>
                </div>
                <div v-else-if="store.view=='General'">
                    <GeneralReports></GeneralReports>
                </div>
                <div v-else-if="store.view=='Total'">
                        <TotalGrowth></TotalGrowth>
                </div>
                <div v-else-if="store.view=='Settings'">
                        <Setting></Setting>
                </div>
                <div v-else-if="store.view=='Sell'">
                        <AddProduct></AddProduct> 
                </div>
                <div v-else-if="store.view=='Personal Info'">
                     <PersonalInfo></PersonalInfo>
                </div>
                <div v-else-if="store.view=='Help & Assistance'">
                     <HelpAndAssistance></HelpAndAssistance>
                </div>
                <div v-else-if="store.view=='Privacy Policy'">
                     <Privacy_Policy></Privacy_Policy>
                </div>
                <div v-else-if="store.view=='Contract'">
                     <ContractVue></ContractVue>
                </div>
          </div>    
       </div>
    </div>
</template>

<script>
import ContractVue  from "@/components/Fournisseur/Main/Contract.vue"
import Privacy_Policy from "@/components/Fournisseur/Main/Privacy_Policy.vue";
import HelpAndAssistance from "@/components/Fournisseur/Main/HelpAndAssistance.vue";
import AddProduct from "@/components/Fournisseur/Main/AddProduct.vue";
import PersonalInfo from "@/components/Fournisseur/Main/EditInfo/PersonelInfo.vue";
import TotalGrowth from "@/components/Fournisseur/Main/TotalGrowth.vue";
import GeneralReports from "@/components/Fournisseur/Main/GeneralReports.vue";
import SpecialOrders from "@/components/Fournisseur/Main/SpecialOrders.vue";
import MyProduct from "@/components/Fournisseur/Main/MyProduct.vue";
import {CurentView} from "@/store/StoreView"
import Setting from "@/components/Fournisseur/Main/Setting.vue"
import dashboardComp from "../../components/Fournisseur/Main/dashboardComp.vue"
import navbarFournisseur from '@/components/Fournisseur/navbarFournisseur.vue';
import SideBarComponent from '@/components/Fournisseur/SideBarComponent.vue';
export default{
    setup(){
        const store=CurentView();
        return{store};
    },
    data(){
        return{
            IsOpenSide:false
        }
    },
    methods:{
        changreetat(etat){
            this.IsOpenSide=etat;
        },
    },
    components:{
        AddProduct,PersonalInfo,Setting,TotalGrowth,SideBarComponent,HelpAndAssistance,Privacy_Policy,
        navbarFournisseur,dashboardComp,MyProduct,SpecialOrders,GeneralReports,ContractVue
    }
}
</script>

<style scoped >
.sidebar_position{
    position: fixed;
    z-index: 2 !important;
}
  .content {
    width: calc(100%-280px);
    position: relative;
    padding: 15px;
    scroll-behavior: smooth;
    transition: all 0.2s ease-in-out;
  }

   .content.close{
    width: calc(100%-100px) ;
    margin-left: 100px ;
    transition: all 0.2s ease-in-out;
    scroll-behavior: smooth;
  }
     .content {
         margin-left: 280px ;
      }
      .main{
         margin-top: 90px; 
         margin-left: 30px;
      }

  @media screen and (max-width: 1036px) {
    .content {
        width: 100% !important;
        margin-left: 0 !important;
    }

 
}


 

</style>