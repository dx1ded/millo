import { initializeApp } from "firebase/app"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  startAt,
  endAt
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrK0W9LDIN-SYcnKz50g8QLm6LYpYsHkM",
  authDomain: "millo-347519.firebaseapp.com",
  projectId: "millo-347519",
  storageBucket: "millo-347519.appspot.com",
  messagingSenderId: "362610178133",
  appId: "1:362610178133:web:314199486e9e5cf1b4bcdc",
  measurementId: "G-FG7G5SZQ8V"
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export const getProducts = async ({ type = 0, from, to }) => {
  const q = query(collection(firestore, "products"),
    orderBy("id"),
    startAt(from),
    endAt(--to)
  )
  
  return getDocs(q)
}
