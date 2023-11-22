import { conexion } from "../../conexionDB.js";
import { TABLE_PRESENTACIONGUIA } from "../../constants/constantes.js";

const crear = async (presentacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_PRESENTACIONGUIA} SET ?`;
    await connection.query(query, presentacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idPt, descripcionPg FROM ${TABLE_PRESENTACIONGUIA}`);
    connection.release();
    return rows;
}

const detalle = async (idPt)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idPt, descripcionPg FROM ${TABLE_PRESENTACIONGUIA} WHERE idPt = ?`;
    const [rows] = await connection.query(query, [idPt]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (presentacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_PRESENTACIONGUIA} SET ? WHERE idPt = ?`;
    await connection.query(query, [presentacionDetalle, presentacionDetalle.idPt]);
    connection.release();
}

const eliminar = async (idPt)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_PRESENTACIONGUIA} WHERE idPt = ?`;
    await connection.query(query, [idPt]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}