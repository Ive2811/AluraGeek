import { getProducts, deleteProduct } from './api.js';

// Función para crear una tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product');
    card.dataset.id = product.id; // Asignar el ID del producto al data-attribute

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = `Imagen de ${product.name}`;

    const info = document.createElement('div');
    info.classList.add('product_info');

    const name = document.createElement('p');
    name.textContent = product.name;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('product_info_price');

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete_button');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', async () => {
        const confirmation = await Swal.fire({
            title: '¿Estás seguro?',
            text: `Estás a punto de eliminar el producto "${product.name}". Esta acción no se puede deshacer.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                title: 'swal2-title',
                content: 'swal2-content'
            }
        });

        if (confirmation.isConfirmed) {
            try {
                await deleteProduct(product.id);
                card.remove(); // Eliminar la tarjeta del DOM
                await Swal.fire({
                    title: 'Eliminado',
                    text: 'El producto ha sido eliminado.',
                    icon: 'success',
                    customClass: {
                        title: 'swal2-title',
                        content: 'swal2-content'
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (document.querySelectorAll('.product').length === 0) {
                            showNoProductsMessage();
                        }
                        setTimeout(() => {
                            location.reload(); // Recargar la página después de mostrar el mensaje
                        }, 2000); // Esperar 2 segundos antes de recargar la página
                    }
                });
            } catch (error) {
                await Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al eliminar el producto. Por favor, inténtalo de nuevo.',
                    icon: 'error',
                    customClass: {
                        title: 'swal2-title',
                        content: 'swal2-content'
                    }
                });
            }
        }
    });

    priceContainer.appendChild(price);
    priceContainer.appendChild(deleteButton);
    info.appendChild(name);
    info.appendChild(priceContainer);
    card.appendChild(image);
    card.appendChild(info);

    return card;
}

// Función para mostrar el mensaje de "No hay productos disponibles"
function showNoProductsMessage() {
    const productsGrid = document.querySelector('.products_grid');
    const noProductsMessage = document.createElement('p');
    noProductsMessage.textContent = 'No hay productos disponibles';
    noProductsMessage.classList.add('no-products-message');
    productsGrid.appendChild(noProductsMessage);
}

// Función para listar los productos
async function listProducts() {
    const products = await getProducts();
    const productsGrid = document.querySelector('.products_grid');

    if (products.length === 0) {
        showNoProductsMessage();
    } else {
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
}

// Ejecuta la función para listar los productos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', listProducts);
