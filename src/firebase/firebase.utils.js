import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

const config = {
  apiKey: 'AIzaSyCKCZzi2MXql1zUdrS6HILW_7ZXdfZ11B0',
  authDomain: 'e-commerce-94a17.firebaseapp.com',
  databaseURL: 'https://e-commerce-94a17.firebaseio.com',
  projectId: 'e-commerce-94a17',
  storageBucket: '',
  messagingSenderId: '83156365209',
  appId: '1:83156365209:web:cba6b27923534305'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
