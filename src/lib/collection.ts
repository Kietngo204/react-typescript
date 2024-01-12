import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

interface MobileType {
  id: string;
  name: string;
  screen: string;
  ram: string;
  rom: string;
  price: number;
}

