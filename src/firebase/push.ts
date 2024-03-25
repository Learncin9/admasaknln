import { addDoc, collection } from "firebase/firestore";
import { DB } from "./init";

const push = async (data: object) => {
    addDoc(collection(DB, "results"), data)
}

export { push }