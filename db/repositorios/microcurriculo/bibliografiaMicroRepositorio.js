import { conexion } from "../../conexionDB.js";
import { TABLE_BIBLIOGRAFIAMICROCURRICULO, TABLE_LECTURABASICA, TABLE_LECTURACOMPLEMENTARIA } from "../../constants/constantes.js";

const crear = async (bibliografiaMicrocurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_BIBLIOGRAFIAMICROCURRICULO} SET ?`;
  await connection.query(query, bibliografiaMicrocurriculo);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bgm JOIN ${TABLE_LECTURABASICA} AS lb ON bgm.idBg = lb.idBg JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bgm.idBg = lc.idBg`);
  connection.release();
  return rows;
}

const detalle = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bgm JOIN ${TABLE_LECTURABASICA} AS lb ON bgm.idBg = lb.idBg JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bgm.idBg = lc.idBg WHERE bgm.idBg = ?`;
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const detalleBibliografia = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idBg FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} WHERE idBg = ?`;
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const eliminar = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} WHERE idBg = ?`;
  await connection.query(query, [idBg]);
  connection.release();
}
 

export default {crear, leer, detalle, detalleBibliografia, eliminar}