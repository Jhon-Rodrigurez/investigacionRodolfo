import { conexion } from "../../conexionDB.js";
import { TABLE_CONOCIMIENTOPREVIO } from "../../constants/constantes.js";

const crear = async (conocimientosPrevios)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_CONOCIMIENTOPREVIO} SET ?`;
    await connection.query(query, conocimientosPrevios);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idCp, descripcionCp FROM ${TABLE_CONOCIMIENTOPREVIO}`);
    connection.release();
    return rows;
}

const detalle = async (idCp)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idCp, descripcionCp FROM ${TABLE_CONOCIMIENTOPREVIO} WHERE idCp = ?`;
    const [rows] = await connection.query(query, [idCp]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (conocimientosPreviosDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_CONOCIMIENTOPREVIO} SET ? WHERE idCp = ?`;
    await connection.query(query, [conocimientosPreviosDetalle, conocimientosPreviosDetalle.idCp]);
    connection.release();
}

const eliminar = async (idCp)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_CONOCIMIENTOPREVIO} WHERE idCp = ?`;
    await connection.query(query, [idCp]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}