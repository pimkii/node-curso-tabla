const fs = require("fs");

// Añadiendole el async al método, lo convierte automaticamente en una promesa.
const writeInFile = async (base, listar, hasta) => {
  try {
    let salida = "";

    for (let x = 0; x <= hasta; x++) {
      salida += `${base} * ${x} = ${base * x} \n`;
      listar && console.log(`${base} * ${x} = ${base * x}`);
    }

    // Metodo que crea el fichero y escribe dentro de el.
    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

  } catch (error) {
    throw error;
  }
};

// De esta forma exportamos los metodos que queramos.
module.exports = { writeInFile };
