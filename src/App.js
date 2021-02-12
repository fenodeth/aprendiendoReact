import React, { Fragment, useState } from 'react';
import Headera from "./components/Headera";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado de productos
  //Arrray Destructuring
  //El state no se modifica, se usa la funcion useState
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Camisa1', precio: 150 },
    { id: 3, nombre: 'Camisa2', precio: 20 },
    { id: 4, nombre: 'Camisa3', precio: 30 },
    { id: 5, nombre: 'Camisa4', precio: 60 },
  ]);

  //State para carrito de compras
  const [carrito, agregarProducto] = useState([]);
  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Headera 
        titulo='Tienda Virtual :3'
      />

      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        productos={productos}
        agregarProducto={agregarProducto}/>
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;