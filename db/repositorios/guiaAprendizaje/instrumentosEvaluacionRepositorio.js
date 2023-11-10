import { conexion } from "../../conexionDB.js";

const crear = async (instrumentosEvaluacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO instrumentosEvaluacion SET ?";
    await connection.query(query, instrumentosEvaluacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idIea, instrumento FROM instrumentosEvaluacion");
    connection.release();
    return rows;
}

const detalle = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idIea, instrumento FROM instrumentosEvaluacion WHERE idIea = ?";
    const [rows] = await connection.query(query, [idCea]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (instrumentosEvaluacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE instrumentosEvaluacion SET ? WHERE idIea = ?";
    await connection.query(query, [instrumentosEvaluacionDetalle, instrumentosEvaluacionDetalle.idIea]);
    connection.release();
}

const eliminar = async (idIea)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM instrumentosEvaluacion WHERE idIea = ?";
    await connection.query(query, [idIea]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}