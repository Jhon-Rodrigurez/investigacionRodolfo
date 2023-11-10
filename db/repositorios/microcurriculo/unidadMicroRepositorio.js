import { conexion } from "../../conexionDB.js";

const crear = async (unidad) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO unidad SET ?";
  await connection.query(query, unidad);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT unidad.idUn, unidad.titulo, unidad.competenciaEspecifica, contenidoTematico.idCt, contenidoTematico.tema, contenidoTematico.subTema FROM unidad INNER JOIN contenidoTematico ON unidad.idUn = contenidoTematico.idUn");
  connection.release();
  return rows;
}

const detalle = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT unidad.idUn, unidad.titulo, unidad.competenciaEspecifica, contenidoTematico.idCt, contenidoTematico.tema, contenidoTematico.subTema, contenidoTematico.idUn FROM unidad INNER JOIN contenidoTematico ON unidad.idUn = contenidoTematico.idUn WHERE unidad.idUn = ?";
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUnidad = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM unidad WHERE idUn = ?";
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (unidadDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = "UPDATE unidad SET ? WHERE idUn = ?";
  await connection.query(query, [unidadDetalle, unidadDetalle.idUn]);
  connection.release();
}

const eliminar = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM unidad WHERE idUn = ?";
  await connection.query(query, [idUn]);
  connection.release();
}

export default {crear, leer, detalle, detalleUnidad, actualizar, eliminar}