import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyDgFfKPlvpmduwu4nisNK_MunotyXXZNFY',
    authDomain: 'instagram-clone-2d9cf.firebaseapp.com',
    projectId: 'instagram-clone-2d9cf',
    storageBucket: 'instagram-clone-2d9cf.appspot.com',
    messagingSenderId: '677828926057',
    appId: '1:677828926057:web:c796d14a4bd44c45ea20f8',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
