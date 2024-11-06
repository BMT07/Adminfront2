<template>
    <div>
      <div class="image mb-5">
        <div class="overlay">
          <div class="text-center">
            <h1 class="white-text" >How Can I Help You</h1>
            <br>
            <div class="d-flex gap-2">
                 <v-text-field  label="Search" solo></v-text-field>
                 <v-btn class="mt-2 white-text" color="#01BE63" >Search</v-btn>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mt-5 py-5">
            <div class="col-lg-2" v-for="i in 6">
                <div class="shadow-lg  p-4  rounded text-center">
                    <div class="icon mb-2">
                        <v-icon class="icon_edit" color="#01BE63" size="35">mdi-account</v-icon>
                    </div>
                    <div class="text_icon py-1">
                        <p>Account</p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  .image {
    position: relative;
    height: 200px;
    background-image: url(../../../assets/help.png);
    background-size: cover;
    background-position: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(6, 39, 12, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .white-text {
    color: #fff !important;
    text-align: center;
  }

  .text_icon{
    color: #000;
  }

  @media screen and (max-width: 700px) {
        .image{
            display: none;
        }
  }

  </style>