import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts";

export const fetchFirestoreData = async (
  collectionName: string
): Promise<string[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    console.log("Desde query:", querySnapshot);
    return querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot) => doc.data().name
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
