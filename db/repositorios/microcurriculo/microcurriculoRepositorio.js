import { conexion } from "../../conexionDB.js";
import { TABLE_MICROCURRICULO, TABLE_USUARIOMICROCURRICULO, TABLE_USUARIO, TABLE_DATOGENERAL, TABLE_COMPETENCIAGENERAL,
TABLE_ARTICULACIONSABER, TABLE_CONOCIMIENTOPREVIO, TABLE_UNIDAD, TABLE_CONTENIDOTEMATICO, TABLE_BIBLIOGRAFIAMICROCURRICULO,
TABLE_LECTURABASICA, TABLE_LECTURACOMPLEMENTARIA} from "../../constants/constantes.js";

const crear = async (microcurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_MICROCURRICULO} SET ?`;
  await connection.query(query, microcurriculo);
  connection.release();
}

const crearUsuarioMicrocurriculo = async (usuarioMicrocurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOMICROCURRICULO} SET ?`;
  await connection.query(query, usuarioMicrocurriculo);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.idMc = um.idMc JOIN ${TABLE_USUARIO} AS user ON um.idUsuario = user.idUsuario JOIN ${TABLE_DATOGENERAL} AS dg ON m.idDg = dg.idDg JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.idCg = cg.idCg JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.idAs = asm.idAs JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.idCp = cp.idCp JOIN ${TABLE_UNIDAD} AS u ON m.idUn = u.idUn JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.idUn = ctm.idUn JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.idBg = bmc.idBg JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.idBg = lb.idBg JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.idBg = lc.idBg ORDER BY fechaCreado DESC LIMIT 20`);
  connection.release();
  return rows;
}

const detalle = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.idMc = um.idMc JOIN ${TABLE_USUARIO} AS user ON um.idUsuario = user.idUsuario JOIN ${TABLE_DATOGENERAL} AS dg ON m.idDg = dg.idDg JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.idCg = cg.idCg JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.idAs = asm.idAs JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.idCp = cp.idCp JOIN ${TABLE_UNIDAD} AS u ON m.idUn = u.idUn JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.idUn = ctm.idUn JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.idBg = bmc.idBg JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.idBg = lb.idBg JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.idBg = lc.idBg WHERE m.idMc = ?`;
  const [rows] = await connection.query(query, [idMc]);
  connection.release();
  return rows[0] || {};
}

const detalleMicrocurriculo = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} WHERE idMc = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUsuarioMirocurriculo = async (idUsuario)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idUsuario FROM ${TABLE_USUARIOMICROCURRICULO}`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (microcurriculoDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_MICROCURRICULO} SET ? WHERE idMc = ?`;
  await connection.query(query, [microcurriculoDetalle, microcurriculoDetalle.idMc]);
  connection.release();
}

const eliminar = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_MICROCURRICULO} WHERE idMc = ?`;
  await connection.query(query, [idMc]);
  connection.release();
}

const misMicrocurriculos = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.idMc = um.idMc JOIN ${TABLE_USUARIO} AS user ON um.idUsuario = user.idUsuario JOIN ${TABLE_DATOGENERAL} AS dg ON m.idDg = dg.idDg JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.idCg = cg.idCg JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.idAs = asm.idAs JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.idCp = cp.idCp JOIN ${TABLE_UNIDAD} AS u ON m.idUn = u.idUn JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.idUn = ctm.idUn JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.idBg = bmc.idBg JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.idBg = lb.idBg JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.idBg = lc.idBg WHERE um.idUsuario = ? ORDER BY fechaCreado DESC LIMIT 20`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows || [];
}

const buscarIdMicrocurriculo = async (idMc)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT idMc FROM ${TABLE_MICROCURRICULO}`;
  const [rows] = await connection.query(query, [idMc]);
  connection.release();
  return rows[0] || null;
}

export default {crear, crearUsuarioMicrocurriculo, leer, detalle, detalleUsuarioMirocurriculo,
  detalleMicrocurriculo, actualizar, eliminar, misMicrocurriculos, buscarIdMicrocurriculo}