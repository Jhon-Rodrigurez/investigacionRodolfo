import { conexion } from "../../conexionDB.js";

const crear = async (presentacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO presentacionGuia SET ?";
    await connection.query(query, presentacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idPt, descripcionPg FROM presentacionGuia");
    connection.release();
    return rows;
}

const detalle = async (idPt)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idPt, descripcionPg FROM presentacionGuia WHERE idPt = ?";
    const [rows] = await connection.query(query, [idPt]);
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

const actualizar = async (presentacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE presentacionGuia SET ? WHERE idPt = ?";
    await connection.query(query, [presentacionDetalle, presentacionDetalle.idPt]);
    connection.release();
}

const eliminar = async (idPt)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM presentacionGuia WHERE idPt = ?";
    await connection.query(query, [idPt]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}