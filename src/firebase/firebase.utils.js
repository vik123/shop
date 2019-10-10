import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4WpI-f00koRFshqRJ8gP0kjrYR2g7AFs",
    authDomain: "react-shop-db-bcc0a.firebaseapp.com",
    databaseURL: "https://react-shop-db-bcc0a.firebaseio.com",
    projectId: "react-shop-db-bcc0a",
    storageBucket: "",
    messagingSenderId: "581742279934",
    appId: "1:581742279934:web:b8e7bc8d4e864fe756f9af"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;