import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import Vue from 'vue'

let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

Vue.prototype.$fs = firebase.firestore()
