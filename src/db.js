
/*import { openDB } from "idb"

export const db = openDB("preciosDB", 1, {
  upgrade(db) {
    db.createObjectStore("productos", { keyPath: "codigo" })
    db.createObjectStore("meta")
  }
})*/

import { openDB } from "idb";

export const db = openDB("preciosDB", 6, {
  upgrade(db, oldVersion, newVersion, transaction) {  //  transaction agregado

    let productosStore;

    // 1 Crear store si no existe
    if (!db.objectStoreNames.contains("productos")) {
      productosStore = db.createObjectStore("productos", {
        keyPath: "codigo"
      });
    } else {
      productosStore = transaction.objectStore("productos"); //  ahora sí existe
    }

    // 2 Crear índices si no existen
    if (!productosStore.indexNames.contains("codigo")) {
      productosStore.createIndex("codigo", "codigo", { unique: true });
    }

    if (!productosStore.indexNames.contains("lista_codigo")) {
      productosStore.createIndex(
        "lista_codigo",
        ["listapre", "codigo"],
        { unique: true }
      );
    }

    if (!productosStore.indexNames.contains("cod_barras")) {
      productosStore.createIndex(
        "cod_barras",
        "cod_barras",
        { unique: false }
      );
    }

    // 3 Store meta
    if (!db.objectStoreNames.contains("meta")) {
      db.createObjectStore("meta");
    }
  }
});



// Función para guardar productos

export const guardarProductos = async (productos) => {
  const database = await db;
  const tx = database.transaction("productos", "readwrite");
  const store = tx.objectStore("productos");

  for (const producto of productos) {
    try {
      console.log("Guardando producto:", producto); 
      await store.put(producto);
    } catch (err) {
      console.error("Error guardando producto:", producto, err);
    }
  }

  await tx.done;
};
/*export const guardarProductos = async (productos) => {
  const database = await db;
  const tx = database.transaction("productos", "readwrite");
  const store = tx.objectStore("productos");

  // Guardar cada producto en la base de datos
  productos.forEach((producto) => {
    store.put(producto); // 'put' inserta o actualiza el producto si ya existe
  });

  await tx.done; // Aseguramos que la transacción se haya completado
};*/

// Función para obtener todos los productos
export const obtenerProductos = async () => {
  const database = await db;
  const tx = database.transaction("productos", "readonly");
  const store = tx.objectStore("productos");

  return await store.getAll(); // Devuelve todos los productos
};
export const obtenerProductoPorCodBarras = async (cod_barras) => {
  const database = await db;
  const tx = database.transaction("productos", "readonly");
  const store = tx.objectStore("productos");
  const index = store.index("cod_barras");
  // Convertir a número si tus códigos son números (para coincidir con keyPath)
  //const codBarrasNorm = Number(cod_barras);
  const codBarrasNorm = cod_barras;
  return await index.get(codBarrasNorm); // Devuelve un solo producto o undefined si no existe
};

export const obtenerProductoPorCodigo = async (codigo) => {
  const database = await db;
  const tx = database.transaction("productos", "readonly");
  const store = tx.objectStore("productos");
  const index = store.index("codigo");

  // Convertir a número si tus códigos son números (para coincidir con keyPath)
  const codigoNorm = Number(codigo);

  return await index.get(codigoNorm); // Devuelve un solo producto o undefined si no existe
};

export const obtenerProductoPorListaYCodigo = async (lista, codigo) => {
   
/*  console.log({
  lista,
  tipoLista: typeof lista,
  codigo,
  tipoCodigo: typeof codigo
});*/
 
  const database = await db;
  const tx = database.transaction("productos", "readonly");
  const store = tx.objectStore("productos");
  const index = store.index("lista_codigo");

  return await index.get([lista, codigo]); }// Buscar por índice compuesto

// Función para guardar la fecha en la base de datos 'meta'
/*export const guardarFecha = async (fecha) => {
  const database = await db;
  const tx = database.transaction("meta", "readwrite");
  const store = tx.objectStore("meta");

  // Guardar la fecha de sincronización
  await store.put(fecha, "fecha"); // 'fecha' es la clave
  await tx.done;
};*/

export const guardarFecha = async () => {
  const fechaFormateada = obtenerFechaFormateada(); // Obtiene la fecha en formato dd/mm/aaaa HH:MM:SS
  const database = await db;
  const tx = database.transaction("meta", "readwrite");
  const store = tx.objectStore("meta");

  await store.put(fechaFormateada, "fecha"); // Guardar con clave "fecha"
  await tx.done;

  return fechaFormateada; // Retornamos la fecha para actualizar el estado en React
};

export function obtenerFechaFormateada() {
  const fecha = new Date();

  const dd = String(fecha.getDate()).padStart(2, "0");
  const mm = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses van de 0 a 11
  const yyyy = fecha.getFullYear();

  const hh = String(fecha.getHours()).padStart(2, "0");
  const min = String(fecha.getMinutes()).padStart(2, "0");
  const ss = String(fecha.getSeconds()).padStart(2, "0");

  return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
};
// Función para obtener la fecha de la base de datos 'meta'
export const obtenerFecha = async () => {
  const database = await db;
  const tx = database.transaction("meta", "readonly");
  const store = tx.objectStore("meta");

  return await store.get("fecha"); // Obtener la fecha guardada
};

