import { conexion } from "../../conexionDB.js";

const crear = async (indicadoresDesempeno)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO indicadoresDesempeno SET ?";
    await connection.query(query, indicadoresDesempeno);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idId, saberSaber, saberHacer, saberSer FROM indicadoresDesempeno");
    connection.release();
    return rows;
}

const detalle = async (idCeu)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idId, saberSaber, saberHacer, saberSer FROM indicadoresDesempeno WHERE idId = ?";
    const [rows] = await connection.query(query, [idCeu]);
    connection.release();
    return rows[0] || {};
}

const detalleUsuarioPresentacion = async (idUsuario)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idUsuario FROM usuarioGuiaAprendizaje";
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (indicadoresDesempenoDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE indicadoresDesempeno SET ? WHERE idId = ?";
    await connection.query(query, [indicadoresDesempenoDetalle, indicadoresDesempenoDetalle.idId]);
    connection.release();
}

const eliminar = async (idId)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM indicadoresDesempeno WHERE idId = ?";
    await connection.query(query, [idId]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}