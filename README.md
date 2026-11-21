# Entrega Proyecto Final - Mathias Latronico

Este repositorio es mi solución a partir de los requerimientos compartidos para la entrega del proyecto final del curso de Backend con Node.js de Talento Tech.

API REST para la gestión de productos, con las siguientes funcionalidades:

- Obtener todos los productos
- Obtener un producto por ID
- Crear un producto (autenticación requerida)
- Modificar un producto (autenticación requerida)
- Eliminar un producto (autenticación requerida)

## Requisitos

- Tener instalado Node.js 18 o superior para ejecutar la aplicación.
- Tener instalado Git Bash para clonar el repositorio.
- Firebase de Google Cloud Platform con Firestore habilitado.
- se debe crear un archivo `.env` en la raíz del proyecto siguiendo el formato del archivo `.env.example` y completando los valores con la información de tu proyecto de Firebase.

## Preparacion del proyecto

1. Descargar o clonar este repositorio.
2. Crear un archivo `.env` en la raíz del proyecto siguiendo el formato del archivo `.env.example` y completando los valores con la información de tu proyecto de Firebase.
3. Instalar las dependencias:

```bash
  npm install
```

4. Iniciar la aplicación:

```bash
npm start
```

## Uso de la API

### Obtener todos los productos

- **GET** `/api/products`

### Obtener un producto por ID

- **GET** `/api/products/:id`

### Crear un producto (autenticación requerida)

- **POST** `/api/products`
- Body (JSON):

```json
{
    "title": "Nombre del producto",
    "price": 100
}
```

### Modificar un producto (autenticación requerida)

- **PUT** `/api/products/:id`
- Body (JSON):

```json
{
    "title": "Nuevo nombre del producto",
    "price": 150
}
```

### Eliminar un producto (autenticación requerida)

- **DELETE** `/api/products/:id`

### Autenticación

- **POST** `/api/auth/login`
- Body (JSON):

```json
{
    "email": "usuario@ejemplo.com",
    "password": "contraseña"
}
```

## Tecnologías utilizadas

- node.js
- express.js
- firebase (firestore)
- dotenv
- jsonwebtoken
- bcryptjs
- cors
