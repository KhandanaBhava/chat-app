import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCyf6MaHe4__1hDgSOeTvTaGCKS8s-41N0',
  authDomain: 'chat-web-app-47e8a.firebaseapp.com',
  databaseURL: 'https://chat-web-app-47e8a-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-47e8a',
  storageBucket: 'chat-web-app-47e8a.appspot.com',
  messagingSenderId: '369947816259',
  appId: '1:369947816259:web:05d0c4ecff02254145bff6',
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
