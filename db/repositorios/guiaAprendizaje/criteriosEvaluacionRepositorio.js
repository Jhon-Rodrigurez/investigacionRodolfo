import { conexion } from "../../conexionDB.js";

const crear = async (criteriosEvaluacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO criteriosEvaluacion SET ?";
    await connection.query(query, criteriosEvaluacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idCea, criterio FROM criteriosEvaluacion");
    connection.release();
    return rows;
}

const detalle = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idCea, criterio FROM criteriosEvaluacion WHERE idCea = ?";
    const [rows] = await connection.query(query, [idCea]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (criteriosEvaluacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE criteriosEvaluacion SET ? WHERE idCea = ?";
    await connection.query(query, [criteriosEvaluacionDetalle, criteriosEvaluacionDetalle.idCea]);
    connection.release();
}

const eliminar = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM criteriosEvaluacion WHERE idCea = ?";
    await connection.query(query, [idCea]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}