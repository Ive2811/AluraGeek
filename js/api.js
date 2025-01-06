const API_URL = 'http://localhost:3000/products';

// Función asincrónica para obtener los productos
async function getProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Función asincrónica para crear un nuevo producto
async function createProduct(product) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newProduct = await response.json();
        return newProduct;
    } catch (error) {
        console.error('Error creating product:', error);
    }
}

// Función asincrónica para eliminar un producto
async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

export { getProducts, createProduct, deleteProduct };
