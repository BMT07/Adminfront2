<template>
    <div>
      <div class="header">
        <div  class="content">
          <div class="menu" @click="drawer=true">
            <v-icon>mdi-menu</v-icon>
          </div>
          <div class="LogoSite">
            <v-avatar size="60" color="#01BE63">
              <img src="../../assets/Logo/Hand Made (2).png" alt="LogoSite">
            </v-avatar>
          </div>
          <div class="text">
            <p class="mt-4"> {{ $t('welcome') }} </p>
          </div>
          <div>
            <v-sheet class="card"
                elevation="5"
                height="40"
                width="150"
                rounded="true"
            >
            <p>
                Web Developer
            </p>
           </v-sheet>
          </div>
          <div >
            <v-sheet class="wallet"
                elevation="5"
                height="55"
                width="150"
            >
              <p>Wallet</p>
            <p>
              <v-chip>15 TND</v-chip>
            </p></v-sheet>
          
          </div>
          <div class="image_user">
            <v-avatar size="60" color="#01BE63">
              <img src="../../assets/Users/pro.jpg" alt="User Avatar">
            </v-avatar>
          </div>
          <div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#EE8250" text v-bind="attrs" v-on="on">
                  <v-icon>mdi-filter-variant</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title class="list_menu" @click="changerView(item.name)">
                    <div class="name">{{ item.name }}</div>
                    <div><v-icon class="icon">mdi-{{ item.icon }}</v-icon></div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>

  <v-navigation-drawer style="background-color: #01BE63;"
      v-model="drawer"
      absolute
      temporary
    >
    <nav >
            <ul>
                <li>
                    <div class="logo">
                        <img src="../../assets/Users/pro.jpg" alt="">
                    </div>
                    <div style="margin-left: 29%;">
                      Talel Mejri
                    </div>
                    <div style="margin-left: 25%;color: white;">
                        Web Developer
                    </div>
                    <div style="margin-left: 25%;color: white;">
                      Wallet : 150Dt
                    </div>
                </li>
               
                <v-divider color="white" class="mb-5"></v-divider>
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
                    <a href="#"   @click="changerView('Special')" :class="view.view=='Special' ? 'active' : ''">
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
                    <a href="#" @click="changerView('General')" :class="view.view=='General' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-line</v-icon>
                        <span class="nav-item">General Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click="changerView('Total')" :class="view.view=='Total' ? 'active' : ''">
                        <v-icon class="icon">mdi-chart-bar</v-icon>
                        <span class="nav-item">Total Growth</span>
                    </a>
                </li>
            </ul>
        </nav>

      

    </v-navigation-drawer>
    </div>
  </template>
  
  <script>
  import {CurentView} from "@/store/StoreView"
  export default {
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
  .header {
    position: absolute;
    max-height: 90px;
    padding:5px 10px;
    background: #fff;
    top: 0;
    height: 100vh;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 4px 8px 0 #CAB1A6,0 6px 20px 0 #CAB1A6;
    transition: all  0.5s ease;
    width: 100%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .card{
    display: flex;
    border-radius: 15px;
    justify-content: space-around;
    padding-top: 15px;
    align-items: center;
    p{
        color: #08C067;
    }
     }
     p{
        color: #EE8250;
        font-size: 18px;
     }
  .wallet{
    display: flex;
    justify-content: space-around;
    background-color: #08C067;
    padding-top: 15px;
    align-items: center;
    border-radius: 15px;
    p{
        color: #fff;
        font-weight: bold;
    }
  }

}
.list_menu{
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    .name{
      color: #000;
      font-weight: 500;
    }
    .icon{
      color: #08C067;
    }
  }
  .menu{
    display: none;
  }
  .hidden_sidebar{
    display: none;
  }

 .LogoSite{
  display: none;
 }
  @media screen and (max-width: 1036px) {
    .menu{
     display: block;
    }
   .LogoSite{
    display: block;
   }
    .image_user{
      display: none;
    }
    .content .card,.content .wallet{
      display: none;
    }

    .text{
      margin-left:10%;
    }

    .header{
      width: 100vw;
      left: 0;
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
  