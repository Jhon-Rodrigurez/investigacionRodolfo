import { conexion } from "../conexionDB.js";
import { TABLE_USUARIO, TABLE_USUARIOCARRERA, TABLE_USUARIOROL, TABLE_ROL, TABLE_CARRERA } from "../constants/constantes.js";

const crear = async (usuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIO} SET ?`;
  await connection.query(query, usuario);
  connection.release();
}

const asignarCarreraUsuario = async (usuarioCarrera) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOCARRERA} SET ?`;
  await connection.query(query, usuarioCarrera);
  connection.release();
}

const asignarRolUsuario = async (usuarioRol) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOROL} SET ?`;
  await connection.query(query, usuarioRol);
  connection.release();
}

const buscarUsername = async (username) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} WHERE username = ?`;
  const [rows] = await connection.query(query, [username]);
  connection.release();
  return rows[0] || null;
}

const buscarUsuario = async (username) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOROL} AS usrol ON user.idUsuario = usrol.idUsuario JOIN ${TABLE_ROL} AS rol ON usrol.idRol = rol.idRol WHERE username = ?`;
  const [rows] = await connection.query(query, [username]);
  connection.release();
  return rows[0] || null;
}

const buscarEmail = async (email) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT email FROM ${TABLE_USUARIO} WHERE email = ?`;
  const [rows] = await connection.query(query, [email]);
  connection.release();
  return rows[0] || null;
}

const buscarById = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idUsuario FROM ${TABLE_USUARIO} WHERE idUsuario = ?`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || null;
}

const buscarNombreRol = async (rol) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOROL} AS usrol ON user.idUsuario = usrol.idUsuario JOIN ${TABLE_ROL} AS rol ON usrol.idRol = rol.idRol`;
  const [rows] = await connection.query(query, [rol]);
  connection.release();
  return rows[0] || {};
}

const buscarNombreCarrera = async (carrera) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOCARRERA} AS uscarrera ON user.idUsuario = uscarrera.idUsuario JOIN ${TABLE_CARRERA} AS carrera ON uscarrera.idCarrera = carrera.idCarrera`;
  const [rows] = await connection.query(query, [carrera]);
  connection.release();
  return rows[0] || {};
}

const buscarRolDirector = async (idRol)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idRol FROM ${TABLE_USUARIOROL} WHERE idRol = '2'`;
  const [rows] = await connection.query(query, [idRol]);
  connection.release();
  return rows[0] || null;
}

const buscarRolDocente = async (idRol)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idRol FROM ${TABLE_USUARIOROL} WHERE idRol = '3'`;
  const [rows] = await connection.query(query, [idRol]);
  connection.release();
  return rows[0] || null;
}

export default { crear, buscarEmail, buscarUsername, buscarUsuario, buscarById, asignarCarreraUsuario, asignarRolUsuario,
   buscarRolDirector, buscarRolDocente, buscarNombreRol, buscarNombreCarrera }