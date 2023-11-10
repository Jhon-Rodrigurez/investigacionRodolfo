import { conexion } from "../conexionDB.js";

const crear = async () => {
  const connection = await conexion.clienteMySQL();
  try {
    // Verificar si ya existen roles en la tabla 'roles'
    const [existingRows] = await connection.query("SELECT COUNT(*) as count FROM roles");
    const rowCount = existingRows[0].count;

    if (rowCount > 0) {
      // Si ya existen roles, no es necesario volver a insertar
      return rowCount;
    }

    const tiposRoles = ["Administrador", "Director", "Docente"];

    for (let i = 0; i < tiposRoles.length; i++) {
      const rol = {
        idRol: `${i + 1}`,
        tipo: tiposRoles[i],
      }

      // Insertar rol en la tabla 'roles'
      await connection.query("INSERT INTO roles (idRol, tipo) VALUES (?, ?)", [rol.idRol, rol.tipo]);
    }

  } catch (error) {
    throw error;
  }
};

const buscarId = async (idRol) => {
  const connection = await conexion.clienteMySQL();
  try {
    // Buscar rol por ID en la tabla 'roles'
    const [rows] = await connection.query("SELECT * FROM roles WHERE idRol = ?", [idRol]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw error;
  }
};

export default { crear, buscarId };