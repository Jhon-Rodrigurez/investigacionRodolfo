import { conexion } from "../../conexionDB.js";

const crear = async (conocimientosPrevios)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO conocimientosPrevios SET ?";
    await connection.query(query, conocimientosPrevios);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idCp, descripcionCp FROM conocimientosPrevios");
    connection.release();
    return rows;
}

const detalle = async (idCp)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idCp, descripcionCp FROM conocimientosPrevios WHERE idCp = ?";
    const [rows] = await connection.query(query, [idCp]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (conocimientosPreviosDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE conocimientosPrevios SET ? WHERE idCp = ?";
    await connection.query(query, [conocimientosPreviosDetalle, conocimientosPreviosDetalle.idCp]);
    connection.release();
}

const eliminar = async (idCp)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM conocimientosPrevios WHERE idCp = ?";
    await connection.query(query, [idCp]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}