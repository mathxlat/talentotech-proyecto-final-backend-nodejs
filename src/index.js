import express from "express";
import cors from "cors";

import productsRouter from "./routes/products.router.js";
import authRouter from "./routes/auth.router.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Endpoint no encontrado" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
