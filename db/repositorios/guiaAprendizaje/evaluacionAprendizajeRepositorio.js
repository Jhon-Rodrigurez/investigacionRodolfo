import { conexion } from "../../conexionDB.js";
import { TABLE_EVALUACIONAPRENDIZAJE } from "../../constants/constantes.js";

const crear = async (evaluacionAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_EVALUACIONAPRENDIZAJE} SET ?`;
    await connection.query(query, evaluacionAprendizaje);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idEa, tipo, evidenciasAprendizaje FROM ${TABLE_EVALUACIONAPRENDIZAJE}`);
    connection.release();
    return rows;
}

const detalle = async (idEa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idEa, tipo, evidenciasAprendizaje FROM ${TABLE_EVALUACIONAPRENDIZAJE} WHERE idEa = ?`;
    const [rows] = await connection.query(query, [idEa]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (evaluacionAprendizajeDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_EVALUACIONAPRENDIZAJE} SET ? WHERE idEa = ?`;
    await connection.query(query, [evaluacionAprendizajeDetalle, evaluacionAprendizajeDetalle.idEa]);
    connection.release();
}

const eliminar = async (idEa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_EVALUACIONAPRENDIZAJE} WHERE idEa = ?`;
    await connection.query(query, [idEa]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}