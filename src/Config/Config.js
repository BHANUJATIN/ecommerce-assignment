import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDY5j7qcrC-pb2v3t7dUUVOuDAYFPVrdVE",
  authDomain: "ecommerce-dfce1.firebaseapp.com",
  projectId: "ecommerce-dfce1",
  storageBucket: "ecommerce-dfce1.appspot.com",
  messagingSenderId: "933522699169",
  appId: "1:933522699169:web:0948fb61b5201d883a11e0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}