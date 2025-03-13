import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts";

export const fetchFirestoreData = async (
  collectionName: string
): Promise<object[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
