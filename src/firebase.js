import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDyBq4D9LqP5W25Sw_UnDyWFdy8KMyBUGc",
  authDomain: "jogo-da-forca-poc.firebaseapp.com",
  projectId: "jogo-da-forca-poc",
  storageBucket: "jogo-da-forca-poc.appspot.com",
  messagingSenderId: "1010612146844",
  appId: "1:1010612146844:web:1ee4072e4619840c259359"
};

firebase.initializeApp(firebaseConfig);

export default firebase;