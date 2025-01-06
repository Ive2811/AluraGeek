import { createProduct } from './api.js';

// Función para manejar el envío del formulario
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('[name="nombre"]').value;
    const price = parseFloat(form.querySelector('[name="precio"]').value);
    const image = form.querySelector('[name="imagen"]').value;

    const newProduct = { name, price, image };

    try {
        const createdProduct = await createProduct(newProduct);
        if (createdProduct) {
            form.reset(); 
            await Swal.fire({
                title: 'Producto creado',
                text: 'El producto ha sido creado exitosamente.',
                icon: 'success',
                customClass: {
                    title: 'swal2-title',
                    content: 'swal2-content'
                }
            }).then(() => {
                location.reload(); 
            });
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al crear el producto. Por favor, inténtalo de nuevo.',
            icon: 'error',
            customClass: {
                title: 'swal2-title',
                content: 'swal2-content'
            }
        });
    }
}

// Agregar el escuchador de eventos al formulario
document.querySelector('.products_form__campos').addEventListener('submit', handleFormSubmit);
