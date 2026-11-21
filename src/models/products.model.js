import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    const snapshot = await getDocs(productsCollection);

    const products = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return products;
};

export const getProductById = async (id) => {
    const reference = doc(db, "products", id);
    const snapshot = await getDoc(reference);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    return { ...snapshot.data(), id: snapshot.id };
};

export const createProduct = async (newProduct) => {
    const reference = await addDoc(productsCollection, newProduct);

    if (!reference) {
        throw new Error("Error al crear el producto");
    }

    const snapshot = await getDoc(reference);

    if (!snapshot.exists()) {
        throw new Error("Error al obtener el producto creado");
    }

    return { ...snapshot.data(), id: snapshot.id };
};

export const updateProduct = async (id, newProduct) => {
    const reference = doc(db, "products", id);

    const snapshot = await getDoc(reference);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    await updateDoc(reference, newProduct);

    return {
        ...snapshot.data(),
        ...newProduct,
        id: snapshot.id,
    };
};

export const deleteProduct = async (id) => {
    const reference = doc(db, "products", id);

    const snapshot = await getDoc(reference);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    await deleteDoc(reference);

    return {
        ...snapshot.data(),
        id: snapshot.id,
    };
};
