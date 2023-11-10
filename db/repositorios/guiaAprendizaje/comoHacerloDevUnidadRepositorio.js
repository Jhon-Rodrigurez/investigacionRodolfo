import { conexion } from "../../conexionDB.js";

const crear = async (comoHacerloDevUnidad)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO comoHacerloDesarrolloUnidad SET ?";
    await connection.query(query, comoHacerloDevUnidad);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idCh, descripcionCh FROM comoHacerloDesarrolloUnidad");
    connection.release();
    return rows;
}

const detalle = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idCh, descripcionCh FROM comoHacerloDesarrolloUnidad WHERE idCh = ?";
    const [rows] = await connection.query(query, [idCh]);
    connection.release();
    return rows[0] || {};
}

const detalleUsuarioPresentacion = async (idUsuario)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idUsuario FROM usuarioGuiaAprendizaje";
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (comoHacerloDevUnidadDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE comoHacerloDesarrolloUnidad SET ? WHERE idCh = ?";
    await connection.query(query, [comoHacerloDevUnidadDetalle, comoHacerloDevUnidadDetalle.idCh]);
    connection.release();
}

const eliminar = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM comoHacerloDesarrolloUnidad WHERE idCh = ?";
    await connection.query(query, [idCh]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}