// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

library.add(
				faTimes,
				faTrash,
				faCheck,
				faPen,
				faEllipsisH
				);

Vue.component('fai', FontAwesomeIcon);

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
 projectId: 'mbi-test', 
 databaseURL: 'https://mbi-test.firebaseio.com'
})
export const db = firebase.firestore()

import Vuex from 'vuex'
import Axios from 'axios'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
