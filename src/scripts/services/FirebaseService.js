import { initializeApp } from "firebase/app"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  where,
  startAt,
  limit
} from "firebase/firestore/lite"

import firebaseConfig from "@db"

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

export const getProduct = async ({ id }) => {
  const q = query(collection(firestore, "products"),
    where("id", "==", Number(id))
  )

  return getDocs(q)
}
