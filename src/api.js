/*export async function syncSucursal(sucursal) {
  const res = await fetch(`http://localhost:3000/sync/${sucursal}`)
  return await res.json()
}*/

export async function apiSync() {
  
  try {

    const r = await fetch(`https://script.google.com/macros/s/AKfycbzRQ06mKREFyvWBQPkzf9U9QwzGiz1j62jtcodGm1G6MsUthVBW5oZB4HKGZR5dW-r7/exec`)

    if (!r.ok) throw new Error(`API down: ${r.status}`);
    const data = await r.text(); // recibe JSON del script
  //console.log("Datos recibidos:", data); // log en consola
    return data;
  } catch (error) {
    console.error("Error real:", error); // muestra el error real (incluyendo CORS)
    throw error; // opcional, si quieres que suba el error
  }
}


