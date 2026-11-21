import {
    listProducts,
    findProduct,
    addProduct,
    modifyProduct,
    removeProduct,
} from "../services/products.service.js";

export const getProducts = async (req, res) => {
    try {
        const products = await listProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await findProduct(id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { title, price } = req.body ?? {};

    if (!title || !price) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    if (typeof title !== "string" || typeof price !== "number") {
        return res.status(400).json({ error: "Tipo de dato incorrecto" });
    }

    if (price < 0) {
        return res
            .status(400)
            .json({ error: "El precio no puede ser negativo" });
    }

    if (title.trim() === "") {
        return res
            .status(400)
            .json({ error: "El título no puede estar vacío" });
    }

    try {
        const newProduct = await addProduct({ title, price });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const { title, price } = req.body;

    if (!title || !price) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    if (typeof title !== "string" || typeof price !== "number") {
        return res.status(400).json({ error: "Tipo de dato incorrecto" });
    }

    if (price < 0) {
        return res
            .status(400)
            .json({ error: "El precio no puede ser negativo" });
    }

    if (title.trim() === "") {
        return res
            .status(400)
            .json({ error: "El título no puede estar vacío" });
    }

    try {
        const updatedProduct = await modifyProduct(id, { title, price });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await removeProduct(id);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.status(204).json({ message: "Producto eliminado", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
