import { useRef, useState, useEffect, use } from "react"
import { guardarProductos, obtenerProductoPorListaYCodigo, obtenerProductos,obtenerProductoPorCodBarras,obtenerProductoPorCodigo, guardarFecha, obtenerFecha } from './db';
//import { ftpSync } from "./ftpFallback";
import { apiSync } from "./api";
import { parseCSV } from "./csvParser"
import "./ui.css"
import BarcodeScanner from "./BarcodeScanner";

export default function App() {
  const [codigo, setCodigo] = useState("")
  const [cod_barras, setCodBarras] = useState("")
  const [producto, setProducto] = useState(null)
  const [fecha, setFecha] = useState("")
  const [lista, setLista] = useState("PRESUCU")
  const scannerRef = useRef(null);
  const skipFetch = useRef(false); 
  /// IDEAS 
  // a terminar un barra o lago cuando esta cargando el csv por ahora solo muestro alerta
  const [isLoading, setIsLoading] = useState(false)  // Estado para controlar el loading
  const [sucursal, setSucursal] = useState("1") // Sucursal fija por ahora
  const [showScanner, setShowScanner] = useState(false); // Ver si cuando se muestra el scanner no mostrar nada mas que el video

   const handleDetected = (text) => {
      skipFetch.current = true; // Evitar fetch automático

      setCodBarras(text);
      setShowScanner(false);
    };
 
  // Leer la fecha de sincronización desde la base de datos cuando el componente se monte
 useEffect(() => {
    async function fetchFecha() {
      const fechaGuardada = await obtenerFecha();
      if (fechaGuardada) {
        setFecha(fechaGuardada);
      }
    }

    fetchFecha();
  }, []); // Solo se ejecuta una vez al montar el componente
 useEffect(() => {
    if (skipFetch.current) {
      skipFetch.current = false;  
      return; // Saltar esta ejecución
    }

    async function fetchProducto() {
      if ((parseInt(codigo, 10) == 0 || codigo === "") && (cod_barras === ""|| parseInt(cod_barras, 13) == 0)) 
       {
         setProducto(null);
      } else {
        //  alert("Buscando producto con código: " + codigo);
        const prod = await obtenerProductoPorCodigo(parseInt(codigo, 10)); 
        setProducto(prod);
    }
      
    }
    fetchProducto();
  }, [lista, codigo ]); // Se ejecuta cada vez q cambia lista de precio y codigo 
  
  useEffect(() => {
    
      if (cod_barras) 
       {
         buscarProducto(cod_barras, null);
      } else {
        //  alert("Buscando producto con código: " + codigo);
        setProducto(null);
    }
          
  }, [cod_barras]); // Se ejecuta cada vez q cambia lista de precio y codigo      

async function sincronizar() {
    try {
      const data = await apiSync();
      console.log("CSV recibido:", data);

      const rows = parseCSV(data);
      console.log("Productos parseados:", rows);
      const productos = normalizeProductos(rows);
      //const jsonProductos = JSON.stringify(productos);
      await guardar(productos, data.updated);
    } catch {
      console.log("API falló, intentando FTP...");
     // const csv = await ftpSync(sucursal)
     // const items = parseCSV(csv)
     // await guardar(items, new Date().toISOString())
    }

  }
    // Función para guardar los productos y la fecha en IndexedDB
  async function guardar(productos, fecha) {

  
  

    // Guardar los productos en IndexedDB
    await guardarProductos(productos);

     // Guardar la fecha en formato dd/mm/aaaa HH:MM:SS
    const fechaFormateada = await guardarFecha();

    setFecha(fechaFormateada); // Actualizar estado de React
    alert("Datos sincronizados y guardados localmente");
    
   
  }
function normalizeProductos(rows) {
  return rows.map(r => ({
    codigo: Number.parseInt(r.codigo),
    cod_barras:r.cod_barras,
    des_l: r.des_l,
    col_l: r.col_l,
    can_nomina: r.can_nomina,
    lista: r.lista,
    descripcion: r.descripcion,
    precio: Number(r.precio),
    fecha: r.fecha ?? new Date().toISOString(),
    origen: r.origen,
    prelis: Number(r.prelis),
    preprocf: Number(r.preprocf),
    dto: Number(r.dto),
    dtop: Number(r.dtop),
  }));
}
function formatNumber(value, locale = "es-ES") {
  if (value === null || value === undefined || value === "") return "0,00";

  const number = Number(value);

  if (isNaN(number)) return value;

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

  async function buscarProducto(cod_barras, codigo) {
  //  Primero buscamos offline
  console.log("Buscando producto offline con cod_barras: ", cod_barras, " y codigo: ", codigo);
 // alert("Scanned: " + cod_barras + " / " + codigo);
  //const productoLocal = await obtenerProductoPorListaYCodigo(lista, parseInt(codigo, 10));
  //const productoLocal = await obtenerProductoPorCodBarras(parseInt(cod_barras, 13));
 
  
  const productoLocal = await obtenerProductoPorCodBarras(cod_barras);
  setCodigo(productoLocal ? String(productoLocal.codigo) : "");
  if (!productoLocal && codigo) {  
     const productoLocal = await obtenerProductoPorCodigo(parseInt(codigo, 10)); 
  }
   // console.log("Producto offline:", productoLocal);
  if (productoLocal) {
    
    setProducto(productoLocal);
    
    return productoLocal;
  }

  // 🔹 Si no existe, podrías ir a la API
  console.log("No existe offline");
  return null;
}


  return (
    <>
      <div className="topbar">
        <p className="sync-date">{fecha && `Última actualización: ${fecha}`}</p>
        <button className="sync-btn" onClick={sincronizar}>🔄</button>
      </div>
      
      <div className="app">

      <div className="row">
        <div className="label">SKU</div>
          <input
            className="input"
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
          />
           <button  className="camera-btn"  onClick={() => {
             setCodigo("");
             setCodBarras("");
             setProducto(null);
             scannerRef.current.startCamera(false);
            }}>📷</button> 

          {/*!showScanner && (  <button  className="camera-btn"  onClick={() => setShowScanner(true) && scannerRef.current.startCamera()}>📷</button> )*/}
      </div>
        

      <div className="row">
           <div className="label"></div>
          <div className="barcode-text">{producto?.cod_barras}</div>
      </div>
        <div className="row">
          <div className="label">DESCRIPCION</div>
          <div className="value">{producto?.des_l}</div>
        </div>

        <div className="row">
          <div className="label">COLOR</div>
          <div className="value">{producto?.col_l}</div>
        </div>

        <div className="row">
          <div className="label">MEDIDA</div>
          <div className="value">{producto?.can_nomina} {producto?.origen}</div>
        </div>

        <div className="row">
          <div className="label">LISTA</div>
          <select className="select" value={lista} onChange={e => setLista(e.target.value)}>
            <option>PRESUCU</option>
            <option>PROCARD</option>
          </select>
        </div>

        <div className="row">
          <div className="label">PRELIS</div>
          <div className="value">$ {formatNumber(producto?.prelis)}</div>
        </div>

        {(producto === null || producto === undefined) && (
          <><div className="row">
            <div className="label">DTO</div>
            <div className="value">  % </div>
          </div><div className="row">
              <div className="label-bold">PRECIO</div>
              <div className="value-bold">$ </div>
            </div></>
        )}
       {lista === "PROCARD" && producto && (
          <div className="row">
            <div className="label">DTO</div>
            <div className="value">
              {formatNumber(producto.dto)}% + {formatNumber(producto.dtop)}%
            </div>
          </div>
        )}

        {lista === "PRESUCU" && producto && (
          <div className="row">
            <div className="label">DTO</div>
           <div className="value"> {producto.dto} % </div>
          </div>
        )}

        {lista === "PRESUCU" && producto && (
          <div className="row">
          <div className="label-bold">PRECIO</div>
          <div className="value-bold">$ {formatNumber(producto?.precio)}</div>
        </div>
        )}

         {lista === "PROCARD" && producto && (
        <div className="row">
          <div className="label-bold">PRECIO</div>
          <div className="value-bold">$ {formatNumber(producto?.preprocf)}</div>
        </div>
        )}

        <button  className="search-btn" onClick={() => buscarProducto(cod_barras, codigo)}>  Buscar</button>

      </div>
       
      <BarcodeScanner ref={scannerRef}  onDetected={handleDetected} />
      
      
    </>
  )
}





/*import { useState } from "react"
import { db } from "./db"
import { apiSync } from "./api"
import { ftpSync } from "./ftpFallback"
import { parseCSV } from "./csvParser"
import "./ui.css"

export default function App() {
  const [codigo, setCodigo] = useState("")
  const [producto, setProducto] = useState(null)
  const [sucursal, setSucursal] = useState("1")
  const [fecha, setFecha] = useState("")

  async function sincronizar() {
    try {
      const data = await apiSync(sucursal)
      await guardar(data.items, data.updated)
    } catch {
      const csv = await ftpSync(sucursal)
      const items = parseCSV(csv)
      await guardar(items, new Date().toISOString())
    }
  }

  async function guardar(items, fecha) {
    const d = await db
    const tx = d.transaction("productos","readwrite")
    items.forEach(p => tx.store.put(p))
    await tx.done
    await d.put("meta", fecha, "fecha")
    setFecha(fecha)
    alert("Datos sincronizados")
  }

  async function buscar() {
    const d = await db
    const p = await d.get("productos", codigo)
    setProducto(p)
  }

  return (
    <div className="app">
      <h2>Lista de Precios</h2>
      <div>Actualizado: {fecha}</div>

      <select onChange={e => setSucursal(e.target.value)}>
        <option value="1">Sucursal 1</option>
        <option value="2">Sucursal 2</option>
      </select>

      <button onClick={sincronizar}>🔄 Sincronizar</button>

      <input
        placeholder="Código"
        value={codigo}
        onChange={e => setCodigo(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>
      <button>📷 Cámara</button>

      {producto && (
        <div className="result">
          <b>{producto.des_l}</b>
          <div>Precio: ${producto.precio}</div>
          <div>Medida: {producto.origen}</div>
        </div>
      )}
    </div>
  )
}



/*import { useState } from "react"
import "./ui.css"

export default function App() {
  const [codigo, setCodigo] = useState("")
  const [producto, setProducto] = useState(null)

  function buscar() {
    setProducto({
      des_l: "ZAPATILLA MONTAÑA",
      precio: "12500",
      origen: "PAR"
    })
  }

  return (
    <div className="app">
      <h2>Lista de Precios</h2>

      <input
        placeholder="Código"
        value={codigo}
        onChange={e => setCodigo(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>
      <button>📷 Cámara</button>

      {producto && (
        <div className="result">
          <b>{producto.des_l}</b>
          <div>Precio: ${producto.precio}</div>
          <div>Medida: {producto.origen}</div>
        </div>
      )}
    </div>
  )
}*/
