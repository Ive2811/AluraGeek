import { getProducts } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const products = await getProducts();
    console.log(products);
   });
