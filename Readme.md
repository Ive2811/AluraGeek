# AluraGeek

## Descripción
AluraGeek es una aplicación web que permite a los usuarios administrar productos, incluyendo la creación, eliminación y visualización de productos. La aplicación utiliza JSON Server para simular una API REST, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera sencilla y eficiente.

## Características
- **Listar productos**: Muestra una lista de productos disponibles.
- **Agregar producto**: Permite agregar nuevos productos.
- **Eliminar producto**: Permite eliminar productos existentes.
- **Mostrar mensaje**: Muestra un mensaje cuando no hay productos disponibles.

## Tecnologías utilizadas
- **HTML**
- **CSS**
- **JavaScript**
- **JSON Server**
- **SweetAlert2**

## Estructura del proyecto
- **index.html:**: Archivo principal de HTML.
- **styles.css**: Archivo de estilos CSS.
- **script.js**: Archivo principal de JavaScript para la lógica de la aplicación.
- **db.json**: Archivo JSON que simula la base de datos de productos.
- **api.js:**: Archivo JavaScript para las requisiciones al servidor.
- **listProducts.js:**: Archivo JavaScript para listar los productos.
- **createProducts.j:**: Archivo JavaScript para crear nuevos productos.

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Ive2811/AluraGeek.git

2. **Instala JSON Server**:
   ```bash
   npm install -g json-server


3. **Navega al directorio del proyecto:**:
   ```bash
   cd AluraGeek

4. **Inicia JSON Server**:
   ```bash
   json-server --watch db.json

