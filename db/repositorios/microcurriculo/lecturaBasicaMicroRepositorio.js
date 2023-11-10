import { conexion } from "../../conexionDB.js";

const crear = async (lecturaBasica)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO lecturaBasica SET ?";
    await connection.query(query, lecturaBasica);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idLb, referenciaLb FROM lecturaBasica");
    connection.release();
    return rows;
}

const detalle = async (idLb)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idLb, referenciaLb FROM lecturaBasica WHERE idLb = ?";
    const [rows] = await connection.query(query, [idLb]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (lecturaBasicaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE lecturaBasica SET ? WHERE idLb = ?";
    await connection.query(query, [lecturaBasicaDetalle, lecturaBasicaDetalle.idLb]);
    connection.release();
}

const eliminar = async (idLb)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM lecturaBasica WHERE idLb = ?";
    await connection.query(query, [idLb]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}