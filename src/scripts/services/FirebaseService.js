import { initializeApp } from "firebase/app"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  where,
  startAt,
  limit,
  onSnapshot
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

export const getProductsWithSales = async ({ count }) => {
  const q = query(collection(firestore, "products"),
    where("price.old", "!=", false),
    limit(count)
  )
  
  return getDocs(q)
}

export const getProducts = async ({ type, offset }) => {
  const q = query(collection(firestore, "products"),
    where("type", "==", Number(type)),
    orderBy("id"),
    startAt(++offset),
    limit(13)
  )

  return getDocs(q)
}
