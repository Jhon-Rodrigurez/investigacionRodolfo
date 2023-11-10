import { conexion } from "../conexionDB.js";

const crear = async (usuario) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO usuarios SET ?";
  await connection.query(query, usuario);
  connection.release();
}

const asignarCarreraUsuario = async (usuarioCarrera) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO usuarioCarreras SET ?";
  await connection.query(query, usuarioCarrera);
  connection.release();
}

const asignarRolUsuario = async (usuarioRol) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO usuarioRoles SET ?";
  await connection.query(query, usuarioRol);
  connection.release();
}

const buscarUsername = async (username) => {
  const connection = await conexion.clienteMySQL();
  try {
    const [rows, _] = await connection.query(
      "SELECT * FROM usuarios WHERE username = ?",
      [username]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

const buscarEmail = async (email) => {
  const connection = await conexion.clienteMySQL();
  try {
    const [rows, _] = await connection.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

const buscarById = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  try {
    const [rows, _] = await connection.query(
      "SELECT idUsuario FROM usuarios",
      [idUsuario]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

const buscarRolDirector = async (idRol)=> {
  const connection = await conexion.clienteMySQL();

  try {
    const [rows, _] = await connection.query(
      "SELECT idRol FROM usuarioroles WHERE idRol = '2'",
      [idRol]
    );
    return rows[0] || null;

  } catch (error) {
    throw error;
  }
}

const buscarRolDocente = async (idRol)=> {
  const connection = await conexion.clienteMySQL();

  try {
    const [rows, _] = await connection.query(
      "SELECT idRol FROM usuarioroles WHERE idRol = '3'",
      [idRol]
    );
    return rows[0] || null;

  } catch (error) {
    throw error;
  }
}

export default { crear, buscarEmail, buscarUsername, buscarById, asignarCarreraUsuario, asignarRolUsuario,
   buscarRolDirector, buscarRolDocente };