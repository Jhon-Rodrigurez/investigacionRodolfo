import { conexion } from "../../conexionDB.js";
import { TABLE_ARTICULACIONSABER } from "../../constants/constantes.js";

const crear = async (articulacionSaberes)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_ARTICULACIONSABER} SET ?`;
    await connection.query(query, articulacionSaberes);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idAs, descripcionAs FROM ${TABLE_ARTICULACIONSABER}`);
    connection.release();
    return rows;
}

const detalle = async (idAs)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idAs, descripcionAs FROM ${TABLE_ARTICULACIONSABER} WHERE idAs = ?`;
    const [rows] = await connection.query(query, [idAs]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (articulacionSaberesDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_ARTICULACIONSABER} SET ? WHERE idAs = ?`;
    await connection.query(query, [articulacionSaberesDetalle, articulacionSaberesDetalle.idAs]);
    connection.release();
}

const eliminar = async (idAs)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_ARTICULACIONSABER} WHERE idAs = ?`;
    await connection.query(query, [idAs]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}