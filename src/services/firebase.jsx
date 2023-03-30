import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, getDocs} from "firebase/firestore"
import { setGlobalState } from "../store";

const firebaseConfig = {
  apiKey: "AIzaSyBKIzoay9reXYUD0UIc_jeqUB6OStcy2GM",
  authDomain: "orderquest-6e2fb.firebaseapp.com",
  projectId: "orderquest-6e2fb",
  storageBucket: "orderquest-6e2fb.appspot.com",
  messagingSenderId: "1044476363828",
  appId: "1:1044476363828:web:ed6958a17bc06bea6b3661"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const createQuestion = async(params) => {
  return  new Promise(async (resolve,reject) => {
        const docRef = await addDoc(collection(db, "questions"),params)
        if (docRef.id) {
          await getQuestions()
            resolve(docRef.id)
        }
        else{
            reject()
        }
    })
}


const getQuestions = async () => {
  return new Promise(async (resolve,reject) => {
    const quarySnapshot = await getDocs(collection(db, "questions"))
    const data = []
    quarySnapshot.forEach((doc) => {
      data.push(
        {
          id: doc.id,
          ...doc.data()
        }
      )
  })
  setGlobalState("questions",data)
  resolve(data)
  })
}
export {createQuestion, getQuestions}