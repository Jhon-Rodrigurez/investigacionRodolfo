import { conexion } from "../../conexionDB.js";
import { TABLE_COMOHACERLODEVUNIDAD } from "../../constants/constantes.js";

const crear = async (comoHacerloDevUnidad)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_COMOHACERLODEVUNIDAD} SET ?`;
    await connection.query(query, comoHacerloDevUnidad);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idCh, descripcionCh FROM ${TABLE_COMOHACERLODEVUNIDAD}`);
    connection.release();
    return rows;
}

const detalle = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idCh, descripcionCh FROM ${TABLE_COMOHACERLODEVUNIDAD} WHERE idCh = ?`;
    const [rows] = await connection.query(query, [idCh]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (comoHacerloDevUnidadDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_COMOHACERLODEVUNIDAD} SET ? WHERE idCh = ?`;
    await connection.query(query, [comoHacerloDevUnidadDetalle, comoHacerloDevUnidadDetalle.idCh]);
    connection.release();
}

const eliminar = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_COMOHACERLODEVUNIDAD} WHERE idCh = ?`;
    await connection.query(query, [idCh]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}