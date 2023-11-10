import { conexion } from "../../conexionDB.js";

const crear = async (glosario)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO glosarioLexico SET ?";
    await connection.query(query, glosario);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idGl, palabras FROM glosarioLexico");
    connection.release();
    return rows;
}

const detalle = async (idGl)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idGl, palabras FROM glosarioLexico WHERE idGl = ?";
    const [rows] = await connection.query(query, [idGl]);
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

const actualizar = async (glosarioDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE glosarioLexico SET ? WHERE idGl = ?";
    await connection.query(query, [glosarioDetalle, glosarioDetalle.idGl]);
    connection.release();
}

const eliminar = async (idGl)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM glosarioLexico WHERE idGl = ?";
    await connection.query(query, [idGl]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}