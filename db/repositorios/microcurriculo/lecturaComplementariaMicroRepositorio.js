import { conexion } from "../../conexionDB.js";

const crear = async (lecturaComplementaria)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO lecturaComplementaria SET ?";
    await connection.query(query, lecturaComplementaria);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT idLc, referenciaLc FROM lecturaComplementaria");
    connection.release();
    return rows;
}

const detalle = async (idLc)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idLc, referenciaLc FROM lecturaComplementaria WHERE idLc = ?";
    const [rows] = await connection.query(query, [idLc]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (lecturaComplementariaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE lecturaComplementaria SET ? WHERE idLc = ?";
    await connection.query(query, [lecturaComplementariaDetalle, lecturaComplementariaDetalle.idLc]);
    connection.release();
}

const eliminar = async (idLc)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM lecturaComplementaria WHERE idLc = ?";
    await connection.query(query, [idLc]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}