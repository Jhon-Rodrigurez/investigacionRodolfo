import { conexion } from "../../conexionDB.js";

const crear = async (datosGenerales) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO datosGenerales SET ?";
  await connection.query(query, datosGenerales);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT * FROM datosGenerales");
  connection.release();
  return rows;
}

const detalle = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM datosGenerales WHERE idDg = ?";
  const [rows] = await connection.query(query, [idDg]);
  connection.release();
  return rows[0] || {};
}

const detalleUsuarioDatosGenerales = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT idUsuario FROM usuariomicrocurriculo";
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (datosGeneralesDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = "UPDATE datosGenerales SET ? WHERE idDg = ?";
  await connection.query(query, [datosGeneralesDetalle, datosGeneralesDetalle.idDg]);
  connection.release();
}

const eliminar = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM datosGenerales WHERE idDg = ?";
  await connection.query(query, [idDg]);
  connection.release();
}

const buscarAsignatura = async (asignatura) => {
  const connection = await conexion.clienteMySQL();
  try {
    const [rows, _] = await connection.query(
      "SELECT * FROM datosGenerales WHERE asignatura = ?", [asignatura]);
    return rows[0] || null;

  } catch (error) {
    throw error;
  }
};

export default {crear, leer, detalle, detalleUsuarioDatosGenerales, actualizar, eliminar, buscarAsignatura}