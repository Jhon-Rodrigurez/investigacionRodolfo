import { conexion } from "../../conexionDB.js";

const crear = async (evaluacionAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO evaluacionAprendizaje SET ?";
    await connection.query(query, evaluacionAprendizaje);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idEa, tipo, evidenciasAprendizaje FROM evaluacionAprendizaje");
    connection.release();
    return rows;
}

const detalle = async (idEa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idEa, tipo, evidenciasAprendizaje FROM evaluacionAprendizaje WHERE idEa = ?";
    const [rows] = await connection.query(query, [idEa]);
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

const actualizar = async (evaluacionAprendizajeDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE evaluacionAprendizaje SET ? WHERE idEa = ?";
    await connection.query(query, [evaluacionAprendizajeDetalle, evaluacionAprendizajeDetalle.idEa]);
    connection.release();
}

const eliminar = async (idEa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM evaluacionAprendizaje WHERE idEa = ?";
    await connection.query(query, [idEa]);
    connection.release();
}

export default {crear, leer, detalle, detalleUsuarioPresentacion, actualizar, eliminar}