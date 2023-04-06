import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { setGlobalState } from "../store";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKIzoay9reXYUD0UIc_jeqUB6OStcy2GM",
  authDomain: "orderquest-6e2fb.firebaseapp.com",
  projectId: "orderquest-6e2fb",
  storageBucket: "orderquest-6e2fb.appspot.com",
  messagingSenderId: "1044476363828",
  appId: "1:1044476363828:web:ed6958a17bc06bea6b3661",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const createQuestion = async (params) => {
  return new Promise(async (resolve, reject) => {
    const docRef = await addDoc(collection(db, "questions"), params);
    if (docRef.id) {
      await getQuestions();
      resolve(docRef.id);
    } else {
      reject();
    }
  });
};

const getQuestions = async () => {
  return new Promise(async (resolve, reject) => {
    const quarySnapshot = await getDocs(collection(db, "questions"));
    const data = [];
    quarySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setGlobalState("questions", data);
    resolve(data);
  });
};

const deleteQuestion = async (id) => {
  return new Promise(async (resolve, reject) => {
    await deleteDoc(doc(db, "questions", id))
      .then(async () => {
        await getQuestions();
        resolve();
      })
      .catch(() => reject);
  });
};

const updateQuestion = async (id, params) => {
  return new Promise(async (resolve, reject) => {
    await updateDoc(doc(db, "questions", id), params)
      .then(async () => {
        await getQuestions();
        resolve();
      })
      .catch(() => reject);
  });
};

const signUpUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const signInUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const LogOut = async () => {
  return new Promise(async (resolve, reject) => {
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

const isUserLoggedIn = async () => {
  return new Promise(async (resolve, reject) => {
    const user = auth.currentUser;
    if (user) {
      resolve(true);
    } else{
      reject(false)
    }
  });
};

export {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  signUpUser,
  signInUser,
  LogOut,
  isUserLoggedIn
};
