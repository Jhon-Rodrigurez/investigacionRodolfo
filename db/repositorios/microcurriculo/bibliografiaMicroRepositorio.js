import { conexion } from "../../conexionDB.js";

const crear = async (bibliografia) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO bibliografia SET ?";
  await connection.query(query, bibliografia);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT * FROM bibliografia AS bgm JOIN lecturaBasica AS lb ON bgm.idBg = lb.idBg JOIN lecturaComplementaria AS lc ON bgm.idBg = lc.idBg");
  connection.release();
  return rows;
}

const detalle = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM bibliografia AS bgm JOIN lecturaBasica AS lb ON bgm.idBg = lb.idBg JOIN lecturaComplementaria AS lc ON bgm.idBg = lc.idBg WHERE bgm.idBg = ?";
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const detalleBibliografia = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT idBg FROM bibliografia WHERE idBg = ?";
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const eliminar = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM bibliografia WHERE idBg = ?";
  await connection.query(query, [idBg]);
  connection.release();
}
 

export default {crear, leer, detalle, detalleBibliografia, eliminar}