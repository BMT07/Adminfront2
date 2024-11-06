import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {
    VImg,
    VCard,
    VCardText,
    VPagination,
    VTextField,
    VExpandTransition,
  } from 'vuetify/lib';
  
Vue.use(Vuetify);

export default new Vuetify({
    components: {
        VImg,
        VCard,
        VCardText,
        VPagination,
        VTextField,
        VExpandTransition,
      },
});
