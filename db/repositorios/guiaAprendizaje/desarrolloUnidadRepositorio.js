import { conexion } from "../../conexionDB.js";
import { TABLE_DESARROLLOUNIDADAPRENDIZAJE, TABLE_COMOHACERLODEVUNIDAD } from "../../constants/constantes.js";

const crear = async (desarrolloUnidad)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} SET ?`;
    await connection.query(query, desarrolloUnidad);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} AS devua JOIN ${TABLE_COMOHACERLODEVUNIDAD} AS chdud ON devua.idDua = chdud.idDua`);
    connection.release();
    return rows;
}

const detalle = async (idDua)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idDua, fechas, queHacer, contenidosTematicos, idGa FROM ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} WHERE idDua = ?`;
    const [rows] = await connection.query(query, [idDua]);
    connection.release();
    return rows[0] || {};
}

const detalleDesarrolloUnidad = async (idDua)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} AS devua JOIN ${TABLE_COMOHACERLODEVUNIDAD} AS chdud ON devua.idDua = chdud.idDua WHERE devua.idDua = ?`;
    const [rows] = await connection.query(query, [idDua]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (desarrolloUnidadDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} SET ? WHERE idDua = ?`;
    await connection.query(query, [desarrolloUnidadDetalle, desarrolloUnidadDetalle.idDua]);
    connection.release();
}

const eliminar = async (idDua)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} WHERE idDua = ?`;
    await connection.query(query, [idDua]);
    connection.release();
}

export default {crear, leer, detalle, detalleDesarrolloUnidad, actualizar, eliminar}