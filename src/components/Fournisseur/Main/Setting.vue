<template>
  <div class="settings-card">
     <PubComp></PubComp>
    <div class="mt-5 py-5 mx-5">
      <div class="mx-5">
        <p style="color: #01BE63; font-size: 22px; font-weight: bold;" class="mx-5">Settings</p>
      </div>
    </div>
    <div class="card_shadow p-5">
      <div class="text-center w-50 mx-5 px-5">
        <div class="card_language d-flex gap-5 "> 
          <div class="d-flex mx-5 px-2">
            <div>
              <v-icon color="#01BE63">mdi-translate-variant</v-icon>
            </div>
            <div style="color: #000; font-weight: 500;">Languages</div>
          </div>
          <div class="mx-5">
            <v-select
                @change="changeLangauge()"
                v-model="select"
                :items="items"
                label="Choose Language"
            ></v-select>
          </div>
        </div>
        <div class="mx-3  d-flex gap-5"> 
          <div class="d-flex mx-5 px-2">
            <div>
              <v-icon color="#01BE63">mdi-theme-light-dark</v-icon>
            </div>
            <div style="color: #000; font-weight: 500;">ModeDark</div>
          </div>
          <div class="mx-5">
              <v-btn text @click="changeMode()">
                 <v-icon>
                   mdi-{{ DayNight.IsDark==true ? 'white-balance-sunny' :'brightness-6' }} 
                 </v-icon>
                </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DarkLight} from "@/store/darkLighMode"
import PubComp from './Pub/PubComp.vue';
export default {
  setup(){
    const DayNight=DarkLight();
    return {DayNight}
  },
  data() {
    return {
      iconIndex: 0,
      select: "Anglais",
      page: 1,
      items: ["Anglais", "Francais","Arabic","Tunisia"],
    };
  },
  computed: {

  },
 
  
  methods: {
    changeLangauge(){
      switch(this.select){
        case "Anglais":
        this.$i18n.locale = 'en';break;
        case "Francais":
        this.$i18n.locale = 'fr';break;
        case "Tunisia":
        this.$i18n.locale = 'tn';break;
        case "Arabic":
        this.$i18n.locale = 'ar';break;
      }
    },
    changeMode(){
       this.DayNight.suppMode();
       this.DayNight.setMode(this.DayNight.IsDark==true ? false :true)
    }
  },
  components: {
    PubComp
  },
};
</script>

<style scoped lang="scss">
.settings-card {
  text-align: center;
  justify-items: center;
}

.settings-card img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25px;
}

.card_shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

.card_language {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-select {
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
}

</style>
