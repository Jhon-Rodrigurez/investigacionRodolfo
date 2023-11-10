import { conexion } from "../../conexionDB.js";

const crear = async (bibliografiaGuia)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO bibliografiaGuia SET ?";
    await connection.query(query, bibliografiaGuia);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idBgGa, referencias FROM bibliografiaGuia");
    connection.release();
    return rows;
}

const detalle = async (idBgGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idBgGa, referencias FROM bibliografiaGuia WHERE idBgGa = ?";
    const [rows] = await connection.query(query, [idBgGa]);
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

const actualizar = async (bibliografiaGuiaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE bibliografiaGuia SET ? WHERE idBgGa = ?";
    await connection.query(query, [bibliografiaGuiaDetalle, bibliografiaGuiaDetalle.idBgGa]);
    connection.release();
}

const eliminar = async (idBgGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM bibliografiaGuia WHERE idBgGa = ?";
    await connection.query(query, [idBgGa]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}