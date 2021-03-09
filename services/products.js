import admin from "../firebase/nodeApp";

export const getAll = async () => {
  const snapshot = await admin.firestore().collection("products").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
