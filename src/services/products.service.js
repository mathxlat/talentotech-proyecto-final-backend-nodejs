import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../models/products.model.js";

export const listProducts = async () => {
    return await getAllProducts();
};

export const findProduct = async (id) => {
    return await getProductById(id);
};

export const addProduct = async (newProduct) => {
    return await createProduct(newProduct);
};

export const modifyProduct = async (id, newProduct) => {
    return await updateProduct(id, newProduct);
};

export const removeProduct = async (id) => {
    return await deleteProduct(id);
};
