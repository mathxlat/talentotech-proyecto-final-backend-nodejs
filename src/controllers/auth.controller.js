import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({
            error: "Email y contraseña son requeridos",
        });
    }

    if (
        email !== process.env.DEMO_EMAIL ||
        password !== process.env.DEMO_PASSWORD
    ) {
        return res.status(401).json({
            error: "Credenciales incorrectas",
        });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.json({ token });
};
