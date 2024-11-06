import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: require('@/assets/Locales/en.json'),
  fr: require('@/assets/Locales/fr.json'),
  ar: require('@/assets/Locales/ar.json'),
  tn: require('@/assets/Locales/tn.json'),
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;