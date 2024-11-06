<template>
    <div>
      <!-- First Navbar -->
      <div id="navbar">
        <div class="logo-search-container">
          <img src="../../assets/Logo/amazon logo.png" width="100px" class="logo">
          <a href="#">Livraison à 44000 nantes <br><v-icon>mdi-MapMarker</v-icon> Mettre à jours l'emplacement</a>
        </div>
        
        <div class="search">
          <div class="dropdown" @click="toggleDropdown">
            <button class="btn_drp">Toutes nos catégories </button>
            <div class="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
  
          <div class="search-group">
            <input placeholder="Rechercher Amazon.fr" type="search" class="input">
          </div>
  
          <button class="search-btn"><v-icon>mdi-magnify</v-icon></button>
        </div>
  
        <div class="nav-links">
          <ul>
            <a href="#">Bonjour, Identifier-vous <br> <strong>Compte et listes</strong></a>
            <li><a href="#">Retour <br><strong>et commandes</strong></a></li>
            <li><a href="#"><v-icon>mdi-mdiCart </v-icon></a></li>
          </ul>
        </div>
      </div>
  
      <!-- Second Navbar -->
      <div id="second-navbar">
        
        <div class="menu-icon" @click="toggleSideMenu">
          <v-icon>mdi-menu</v-icon>
        </div>
  
        <div class="content">
          <div class="side-menu" :class="{ 'show': isSideMenuOpen }">
            <div class="close-btn" @click="closeSideMenu">
            <v-icon>mdi-close</v-icon>
          </div>
          <div class="account">
            <h1><v-icon>mdiAccountCircle</v-icon>Bonjour, Identifier vous</h1>
          </div>
          <h2>Menu</h2>
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            <hr>
            <h2>Menu</h2>
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
  data() {
    return {
      isDropdownOpen: false,
      isSideMenuOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    closeSideMenu() {
      this.isSideMenuOpen = false;
    },
  },
};
</script>
  
  <style scoped>

.logo {
  margin: 5px;
}
.nav-links a , .nav-links li {
  text-decoration: none !important;

}
#navbar {
  background-color: #131921;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navbar a {
  text-decoration: none;
  color: white;
  margin: 0 15px;
}

#navbar a:hover {
  border-bottom: 2px solid white;
}

#navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

#navbar li {
  margin: 0 10px;
}

/* Search Bar  */
.logo-search-container {
  display: flex;
  align-items: center;
}

.search {
  display: flex;
  align-items: center;
}

.search-group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  margin-left: 20px;
}

.input {
  width: 600px;
  height: 50px;
  line-height: 28px;
  padding: 0 1rem;
  border: 2px solid transparent;

  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: .3s ease;
}

.input::placeholder {
  color: #9e9ea7;
  margin-left: 80px;
}


.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
.dropdown {
  position: relative;
  display: inline-block;
  height: 50px;
  line-height: 28px;
  margin-right: -20px;
}

.btn_drp {
  background-color: #d4d4d4;
  color: rgb(7, 7, 7);
  padding: 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 8px 0 0 8px;
  color: #6f7985;
}

.btn_drp::after {
  content: " ▼";
  font-size: 10px;
  color: #6f7985;
}

.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  min-width: 160px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content.show {
  display: block;
}

.dropdown-content a {
  color: #000!important;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.search-btn {
  background-color: #FF9900;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  height: 50px;
  line-height: 28px;
  padding: 0 1rem;
  border: 2px solid transparent; 
  outline: none;
  font-size: 16px;
  border-radius: 0 8px 8px 0px;
}

.search-btn:hover {
  background-color: #febd69;
}

#second-navbar {
  background-color: #232f3e;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-icon {
  cursor: pointer;
  margin-left: 10px;
}

.content {
  display: flex;
  align-items: center;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: white;
  padding-top: 20px;
  transition: left 0.3s ease;
}

.side-menu a {
  color: #232f3e;
  text-decoration: none;
  text-align: center;
font-size: 18px;
padding: 5px;
  display: block;
}

.side-menu hr {
  margin: 10px 0;
  border: 1px solid #000000;
}

.side-menu a:hover {
  background-color: #444;
}

.side-menu.show {
  left: 0;
}
.close-btn {
  cursor: pointer;
  top: 10px;
  right: 10px;
  color: white !important;
  margin-left: 400px;
    margin-top: 20px;
}

.account {
  display: flex;
  align-items: center;
  margin-top :-65px;
  background-color: #232f3e;
}
.account h1 {
  margin: 20px;
  color: white;
  text-align: center;
  font-size: 22px;
}
.side-menu h2 {
  margin: 20px;
  color: rgb(8, 8, 8)!important;
  text-align: center;
}
</style>