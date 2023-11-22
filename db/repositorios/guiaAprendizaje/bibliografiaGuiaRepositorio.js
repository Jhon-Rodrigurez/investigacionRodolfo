import { conexion } from "../../conexionDB.js";
import { TABLE_BIBLIOGRAFIAGUIA } from "../../constants/constantes.js";

const crear = async (bibliografiaGuia)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_BIBLIOGRAFIAGUIA} SET ?`;
    await connection.query(query, bibliografiaGuia);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idBgGa, referencias FROM ${TABLE_BIBLIOGRAFIAGUIA}`);
    connection.release();
    return rows;
}

const detalle = async (idBgGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_BIBLIOGRAFIAGUIA} WHERE idBgGa = ?`;
    const [rows] = await connection.query(query, [idBgGa]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (bibliografiaGuiaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_BIBLIOGRAFIAGUIA} SET ? WHERE idBgGa = ?`;
    await connection.query(query, [bibliografiaGuiaDetalle, bibliografiaGuiaDetalle.idBgGa]);
    connection.release();
}

const eliminar = async (idBgGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_BIBLIOGRAFIAGUIA} WHERE idBgGa = ?`;
    await connection.query(query, [idBgGa]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}