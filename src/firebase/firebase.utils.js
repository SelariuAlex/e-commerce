import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCKCZzi2MXql1zUdrS6HILW_7ZXdfZ11B0',
  authDomain: 'e-commerce-94a17.firebaseapp.com',
  databaseURL: 'https://e-commerce-94a17.firebaseio.com',
  projectId: 'e-commerce-94a17',
  storageBucket: '',
  messagingSenderId: '83156365209',
  appId: '1:83156365209:web:cba6b27923534305'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
