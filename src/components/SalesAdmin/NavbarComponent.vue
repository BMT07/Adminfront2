<template>
    <div>
      <div class="header">
           <div class="content">
              <div class="menu" >
                   <v-icon color="#fff" @click="drawer=true"  >mdi-menu</v-icon>
               </div>
               <div>
                   {{Poste}}
               </div>
               <div class="Right_Side">
                  <div class="image_user">
                      <v-avatar size="50" color="#01BE63">
                          <img src="../../assets/Users/pro.jpg" alt="User Avatar">
                      </v-avatar>
                  </div>
                  <div>
                      Hello Foulen
                  </div>
                  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon   v-bind="attrs"
          v-on="on" color="#fff">mdi-arrow-down-drop-circle-outline</v-icon>
          </template>
      <v-list>
        <v-list-item
        >
          <v-list-item-title ><v-icon>mdi-logout</v-icon>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                  
                 </div>
                </div>
           </div>
      </div>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
      
        <nav>
        <ul > 
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
                <span class="nav-item">Commande </span>
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
                    <a href="#"  @click="changerView('Approved_Product')" :class="view.view=='Approved_Product' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">Product</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('Approved_Fournisseur')" :class="view.view=='Approved_Fournisseur' ? 'active' : ''">
                        <v-icon class="icon">mdi-check-decagram</v-icon>
                        <span class="nav-item">Fournisseur</span>
                    </a>
                </li>
                <li>
                    <a href="#"  @click="changerView('stat')" :class="view.view=='stat' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-line</v-icon>
                        <span class="nav-item">Statistique</span>
                    </a>
                </li>
            </ul>
           </nav>
      </v-list>
    </v-navigation-drawer>
    </div>
  </template>
  
  <script>
  import {CurentView} from "@/store/StoreView"
  export default {
    props:{
        Poste:String
    },
    setup(){
        const view=CurentView();
        return{view}
    },
    created() {
      window.addEventListener("resize", this.checkMobile);
      this.checkMobile();
  },
    data() {
      return {
        drawer: null,
        isMobile: window.innerWidth <= 1036,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        subMenuState:{
                name:"Commande",
                stat:false
            },
            img:require('../../assets/Logo/Hand Made (2).png'),
        items: [
          { name: "Contract", icon: "file-sign", link: "" },
          { name: "Personal Info", icon: "account-edit", link: "" },
          { name: "Settings", icon: "cog", link: "" },
          { name: "Privacy Policy", icon: "police-badge-outline", link: "" },
          { name: "Help & Assistance", icon: "help-box-multiple", link: "" },
          { name: "Logout", icon: "logout", link: "" },
        ],
      };
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
      changerView(data){
            this.view.suppView();
            this.view.setView(data);
        },
      checkMobile() {
      this.isMobile = window.innerWidth <= 1036;
    },
  },
  watch: {
    isMobile(newValue) {
      if (!newValue) {
        this.drawer = false;
      }
    },
    }
  };
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

  .header {
    position: absolute;
    max-height: 60px;
    background: #01BE63;
    top: 5px;
    height: 100vh;
    border-radius: 30px;
    transition: all  0.5s ease;
    width: 100%;
    color: #fff;
}
.image_user{
  top: 0;
}
.content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  padding-left: 20px;
  padding-right: 20px;
}


.Right_Side{
  display: flex;
  align-items: center;
  gap: 15px;
}


.menu{
    display: none;
  }

  @media screen and (max-width: 1036px) {
    .menu{
     display: block;
    }
  }
  nav{
        transition:all 0.2s ease-in-out;
        width: 280px;
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
                line-height: 55px;
                margin-top: 15px;
                margin-left: 15%;
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


     ul li .active{
         background: #fff;
         border-top-left-radius: 30px;
         border-bottom-left-radius: 30px;
         transition: all  0.5s ease;
    }
        .active .nav-item{
            color:#01BE63 !important;
            font-weight: bold;
            margin-left: 20px !important;
        }
        .active .icon{
            color:#01BE63 !important;
            margin-left: 20px !important;
        }
        a.active{
            gap: 0px !important;
        }
   

  </style>
  