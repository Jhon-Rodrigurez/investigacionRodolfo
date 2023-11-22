import { conexion } from "../../conexionDB.js";
import { TABLE_UNIDAD, TABLE_CONTENIDOTEMATICO } from "../../constants/constantes.js";

const crear = async (unidad) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_UNIDAD} SET ?`;
  await connection.query(query, unidad);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT ${TABLE_UNIDAD}.idUn, ${TABLE_UNIDAD}.titulo, ${TABLE_UNIDAD}.competenciaEspecifica, ${TABLE_CONTENIDOTEMATICO}.idCt, ${TABLE_CONTENIDOTEMATICO}.tema, ${TABLE_CONTENIDOTEMATICO}.subTema FROM ${TABLE_UNIDAD} INNER JOIN ${TABLE_CONTENIDOTEMATICO} ON ${TABLE_UNIDAD}.idUn = ${TABLE_CONTENIDOTEMATICO}.idUn`);
  connection.release();
  return rows;
}

const detalle = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TABLE_UNIDAD}.idUn, ${TABLE_UNIDAD}.titulo, ${TABLE_UNIDAD}.competenciaEspecifica, ${TABLE_CONTENIDOTEMATICO}.idCt, ${TABLE_CONTENIDOTEMATICO}.tema, ${TABLE_CONTENIDOTEMATICO}.subTema FROM ${TABLE_UNIDAD} INNER JOIN ${TABLE_CONTENIDOTEMATICO} ON ${TABLE_UNIDAD}.idUn = ${TABLE_CONTENIDOTEMATICO}.idUn WHERE ${TABLE_UNIDAD}.idUn = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUnidad = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_UNIDAD} WHERE idUn = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (unidadDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_UNIDAD} SET ? WHERE idUn = ?`;
  await connection.query(query, [unidadDetalle, unidadDetalle.idUn]);
  connection.release();
}

const eliminar = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_UNIDAD} WHERE idUn = ?`;
  await connection.query(query, [idUn]);
  connection.release();
}

export default {crear, leer, detalle, detalleUnidad, actualizar, eliminar}