import { conexion } from "../../conexionDB.js";

const crear = async (contenidoTematico) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO contenidoTematico SET ?";
  await connection.query(query, contenidoTematico);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT * FROM contenidoTematico");
  connection.release();
  return rows;
}

const detalle = async (idCt) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM contenidoTematico WHERE idCt = ?";
  const [rows] = await connection.query(query, [idCt]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (contenidoTematicoDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = "UPDATE contenidoTematico SET ? WHERE idCt = ?";
  await connection.query(query, [contenidoTematicoDetalle, contenidoTematicoDetalle.idCt]);
  connection.release();
}

const eliminar = async (idCt) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM contenidoTematico WHERE idCt = ?";
  await connection.query(query, [idCt]);
  connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}