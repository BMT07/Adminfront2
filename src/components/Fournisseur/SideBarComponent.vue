<template>
    <div>
        <nav :class="IsOpenSide ? 'close' : ''"  >
            <ul  v-if="SideBarName=='Fournisseur'"> 
                <li>
                    <div class="logo">
                        <img :src="img" alt="">
                    </div>
                </li>
                <li>
                    <a href="#"   @click="changerView('Dashboard')" :class="view.view=='Dashboard' ? 'active' : ''">
                        <v-icon class="icon">mdi-view-dashboard</v-icon>
                        <span class="nav-item">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('MYProduct')" :class="view.view=='MYProduct' ? 'active' : ''">
                        <v-icon class="icon">mdi-heart</v-icon>
                        <span class="nav-item">My Product</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Special')" :class="view.view=='Special' ? 'active' : ''">
                        <v-icon class="icon">mdi-star</v-icon>
                        <span class="nav-item">Special Orders</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Sell')" :class="view.view=='Sell' ? 'active' : ''">
                        <v-icon class="icon">mdi-cash</v-icon>
                        <span class="nav-item ">Add New  Product </span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Website')" :class="view.view=='Website' ? 'active' : ''">
                        <v-icon class="icon">mdi-monitor-eye</v-icon>
                        <span class="nav-item">View Website</span>
                    </a>
                </li>
              
                <li>
                    <a href="#"  @click="changerView('General')" :class="view.view=='General' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-line</v-icon>
                        <span class="nav-item">General Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Total')" :class="view.view=='Total' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-bar</v-icon>
                        <span class="nav-item">Total Growth</span>
                    </a>
                </li>
                <li @click="changer()">
                    <a href="#" class="close_side">
                        <v-btn
                               class="mx-2"
                                fab
                                dark
                                small
                                color="#fff"
                            >
                            <v-icon v-if="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-left-bold
                            </v-icon>
                            <v-icon v-else="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-right-bold
                            </v-icon>
                        </v-btn>
                    </a>
                </li>
            </ul>
            <ul v-else-if="SideBarName=='Stock'">
                <li>
                    <div class="logo">
                        <img :src="img" alt="">
                    </div>
                </li>
                <li>
                    <a href="#"  @click="changerView('Commande_stock')" :class="view.view=='Commande_stock' ? 'active' : ''">
                        <v-icon class="icon">mdi-shopping</v-icon>
                        <span class="nav-item ">New Orders </span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('ontheway')" :class="view.view=='ontheway' ? 'active' : ''">
                        <v-icon class="icon">mdi-truck</v-icon>
                        <span class="nav-item ">On The Way </span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('shipped')" :class="view.view=='shipped' ? 'active' : ''">
                        <v-icon class="icon">mdi-package-variant-closed-check</v-icon>
                        <span class="nav-item ">Shipped </span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('returned')" :class="view.view=='returned' ? 'active' : ''">
                        <v-icon class="icon">mdi-redo-variant</v-icon>
                        <span class="nav-item ">Returned</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Product_Stock')" :class="view.view=='Product_Stock' ? 'active' : ''">
                        <v-icon class="icon">mdi-monitor-eye</v-icon>
                        <span class="nav-item">Stock</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('New_Product')" :class="view.view=='New_Product' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">New Product</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('stat_stock')" :class="view.view=='stat_stock' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-bar</v-icon>
                        <span class="nav-item">Statistique</span>
                    </a>
                </li>
                <li @click="changer()">
                    <a href="#" class="close_side">
                        <v-btn
                               class="mx-2"
                                fab
                                dark
                                small
                                color="#fff"
                            >
                            <v-icon v-if="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-left-bold
                            </v-icon>
                            <v-icon v-else="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-right-bold
                            </v-icon>
                        </v-btn>
                    </a>
                </li>
            </ul>
            <ul v-else-if="SideBarName=='Sales'"> 
                <li>
                    <div class="logo">
                        <img :src="img" alt="">
                    </div>
                </li>
   <li>
    <a href="#" @click="toggleSubMenu()" :class="view.view === 'Commande' ? 'active' : ''">
        <v-icon class="icon">mdi-ticket-account</v-icon>
        <span class="nav-item">Commande</span>
        <v-icon class="arrow-icon" :class="isSubMenuOpen() ? 'active' : ''">mdi-chevron-down</v-icon>
    </a>
    <ul v-if="isSubMenuOpen()" class="sub-menu">
        <li>
            <a href="#" @click="changerView('Commandee')" :class="view.view === 'Commandee' ? 'active' : ''">
                <v-icon class="icon">mdi-format-list-bulleted</v-icon>
                <span class="nav-item">New Order </span>
            </a>
        </li>
        <li>
            <a href="#" @click="changerView('Approved_Commande')" :class="view.view === 'Approved_Commande' ? 'active' : ''">
                <v-icon class="icon">mdi-check-decagram</v-icon>
                <span class="nav-item">Approved </span>
            </a>
        </li>
        <li>
            <a href="#" @click="changerView('Cancelled_Commande')" :class="view.view === 'Cancelled_Commande' ? 'active' : ''">
                <v-icon class="icon">mdi-cancel</v-icon>
                <span class="nav-item">Cancelled </span>
            </a>
        </li>
    </ul>
</li>
<li>
                    <a href="#"  @click="changerView('Approved_Fournisseur')" :class="view.view=='Approved_Fournisseur' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">New Supplier</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Approved_Product')" :class="view.view=='Approved_Product' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">New Product</span>
                    </a>
                </li>
              
                <li>
                    <a href="#"  @click="changerView('stat')" :class="view.view=='stat' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-line</v-icon>
                        <span class="nav-item">Statistique</span>
                    </a>
                </li>
                <li @click="changer()">
                    <a href="#" class="close_side">
                        <v-btn
                               class="mx-2"
                                fab
                                dark
                                small
                                color="#fff"
                            >
                            <v-icon v-if="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-left-bold
                            </v-icon>
                            <v-icon v-else="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-right-bold
                            </v-icon>
                        </v-btn>
                    </a>
                </li>
            </ul>
            <ul v-else-if="SideBarName=='Finnance'"> 
                <li>
                    <div class="logo">
                        <img :src="img" alt="">
                    </div>
                </li>
                <li>
                    <a href="#"  @click="changerView('Sales')" :class="view.view=='Sales' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">Sales</span>
                    </a>
                </li>
<li>
                    <a href="#"  @click="changerView('Supplier')" :class="view.view=='Supplier' ? 'active' : ''">
                        <v-icon class="icon">mdi-account</v-icon>
                        <span class="nav-item">Supplier</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('DeleviryCompagnie')" :class="view.view=='DeleviryCompagnie' ? 'active' : ''">
                        <v-icon class="icon">mdi-truck-delivery</v-icon>
                        <span class="nav-item">Delivery Compagnie</span>
                    </a>
                </li>
                <li @click="changer()">
                    <a href="#" class="close_side">
                        <v-btn
                               class="mx-2"
                                fab
                                dark
                                small
                                color="#fff"
                            >
                            <v-icon v-if="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-left-bold
                            </v-icon>
                            <v-icon v-else="!IsOpenSide" style="color:#01BE63">
                                mdi-arrow-right-bold
                            </v-icon>
                        </v-btn>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {CurentView} from "@/store/StoreView"
 export default{
    setup() {
        const view = CurentView();
        return { view };
    },
    props:{
        IsOpenSide:Boolean,
        SideBarName:String
    },
    data(){
        return{
            subMenuState:{
                name:"Commande",
                stat:false
            },
            img:require('../../assets/Logo/Hand Made (2).png'),
        }
    },
    methods:{
        toggleSubMenu() {
            this.subMenuState.stat = !this.subMenuState.stat;
        },
       isSubMenuOpen () {
            return this.subMenuState.stat;
        },
        changerView(data){
            this.view.suppView();
            this.view.setView(data);
        },
        changer(){
            let etat=this.IsOpenSide==true ? false : true;
            this.$emit("changreetat", etat);
        },
    }
 }
</script>

<style scoped lang="scss">

    .sub-menu {
        padding-left: 25px;
    }

    .arrow-icon.active {
        transform: rotate(180deg);
    }

    nav{
        transition:all 0.2s ease-in-out;
        background-color: #01BE63;
        width: 120%;
        height: 100vh;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 999999999;
        bottom: 0;
        box-shadow: 0 20px 35px rgba(0,0,0,0.1);
        scroll-behavior: smooth;
        box-shadow: 0 4px 8px 0 #CAB1A6,0 6px 20px 0 #CAB1A6;
        ul li{
            list-style-type: none;
           
            a{
                line-height: 55px;
                margin-top: 15px;
                margin-left: 8%;
                text-decoration: none;
                display: flex;
                gap: 25px;
                .icon{
                    color: #fff;
                    font-size: 25px;
                }
                .nav-item{
                    color: #fff;
                }
            }
        }
        .logo img{
            width: 120px;
            top: 0;
            height: 120px;
            border-radius: 50%;
            padding: 10px;
            margin-left: 20%;
        }

        .close_side{
            position: absolute;
            bottom: 25px;
            margin-left: 80px;
        }
    }

    nav.close{
        transition:all 0.3s ease-in-out;
        background-color: #01BE63;
        width: 100px;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 999999999;
        bottom: 0;
        box-shadow: 0 20px 35px rgba(0,0,0,0.1);
        scroll-behavior: smooth;

        ul li{
            list-style-type: none;
            a{
                line-height: 30px;
                margin-left: 12%;
                text-decoration: none;
                display: flex;
                .icon{
                    color: #fff;
                    font-size: 25px;
                }
                .nav-item{
                    visibility: hidden;
                    color: #fff;
                }
            }
        }
        .logo img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            padding: 15px;
            margin-left: -20px;
            margin-bottom: 25px;
        }

        .close_side{
            position: absolute;
            bottom: 10px;
            margin-left: 1px;
         }
    }

     ul li .active{
         background: #fff;
         border-top-left-radius: 30px;
         border-bottom-left-radius: 30px;
         transition: all  0.5s ease;
    }
        .active .nav-item{
           // font-size: 22px !important;
            color:#01BE63 !important;
            font-weight: bold;
            margin-left: 15px !important;
        }
        .active .icon{
          //  font-size: 28px !important;
            color:#01BE63 !important;
            margin-left: 20px !important;
        }
        a.active{
            gap: 0px !important;
        }
   
    @media screen and (max-width: 1036px) {
            nav{
                display: none;
                transition: all 0.4 ease-in-out;
            }
    }

 
</style>