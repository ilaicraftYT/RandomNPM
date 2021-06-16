 const chistes = [
  "Mi empleador vino corriendo hacia mí y me dijo: ¡Te estuve buscando todo el día! ¿Dónde has estado? Le respondí: Los buenos empleados son difíciles de encontrar", 
  "¿Cual es el cafe mas peligroso? El ex-preso.", 
  "Mi ordenador me gana al agedrez, pero yo boxeando.",
  "- Uff me cayo mal el estofado\n- ¡Pues no le hables hombre!", 
  "- ¡Soldado, ice la bandera!\n- ¿Si? Pues le quedo muy bonita.",
  "¿Que es un pez en un cine? Un mero espectador", 
  "¿Que le dice un huevo a un sartén? Me tienes frito", 
  "Si los zombies se deshacen con el tiempo ¿Zombiedegradables?", 
  "¿Porque el mar no se seca? Porque no tiene toalla", 
  "Una persona compro una casa en hawaii. A ver cuando la desaloha", 
  "¿Que hace una abeja en el gimnasio? Zumba" 
  ] 
 
 // @return {string} | Chiste alealtorio
 function chiste(){
   return chistes[Math.floor(Math.random() * chistes.length)];
  } 


module.exports = {
  chiste
} 
