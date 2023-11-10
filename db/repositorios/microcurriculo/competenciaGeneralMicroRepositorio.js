import { conexion } from "../../conexionDB.js";

const crear = async (competenciaGeneral) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO competenciaGeneral SET ?";
  await connection.query(query, competenciaGeneral);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT * FROM competenciaGeneral");
  connection.release();
  return rows;
}

const detalle = async (idCg) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM competenciaGeneral WHERE idCg = ?";
  const [rows] = await connection.query(query, [idCg]);
  connection.release();
  return rows[0] || {};
}

const detalleUsuarioCompetenciaGeneral = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT idUsuario FROM usuariomicrocurriculo";
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (competenciaGeneralDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = "UPDATE competenciaGeneral SET ? WHERE idCg = ?";
  await connection.query(query, [competenciaGeneralDetalle, competenciaGeneralDetalle.idCg]);
  connection.release();
}

const eliminar = async (idCg) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM competenciaGeneral WHERE idCg = ?";
  await connection.query(query, [idCg]);
  connection.release();
}

export default {crear, leer, detalle, detalleUsuarioCompetenciaGeneral, actualizar, eliminar}