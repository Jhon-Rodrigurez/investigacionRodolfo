import { conexion } from "../../conexionDB.js";
import { TABLE_DATOGENERAL } from "../../constants/constantes.js";

const crear = async (datosGenerales) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_DATOGENERAL} SET ?`;
  await connection.query(query, datosGenerales);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_DATOGENERAL}`);
  connection.release();
  return rows;
}

const detalle = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_DATOGENERAL} WHERE idDg = ?`;
  const [rows] = await connection.query(query, [idDg]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (datosGeneralesDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_DATOGENERAL} SET ? WHERE idDg = ?`;
  await connection.query(query, [datosGeneralesDetalle, datosGeneralesDetalle.idDg]);
  connection.release();
}

const eliminar = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_DATOGENERAL} WHERE idDg = ?`;
  await connection.query(query, [idDg]);
  connection.release();
}

const buscarAsignatura = async (asignatura) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT asignatura FROM ${TABLE_DATOGENERAL} WHERE asignatura = ?`;
  const [rows] = await connection.query(query, [asignatura]);
  connection.release();
  return rows[0] || null;
}

export default {crear, leer, detalle, actualizar, eliminar, buscarAsignatura}