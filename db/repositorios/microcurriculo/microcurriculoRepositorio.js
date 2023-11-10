import { conexion } from "../../conexionDB.js";

const crear = async (microcurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = "INSERT INTO microcurriculo SET ?";
  await connection.query(query, microcurriculo);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query("SELECT * FROM microcurriculo AS m JOIN usuarioMicrocurriculo AS um ON m.idMc = um.idMc JOIN usuarios AS users ON um.idUsuario = users.idUsuario JOIN datosGenerales AS dg ON m.idDg = dg.idDg JOIN competenciaGeneral AS cg ON m.idCg = cg.idCg JOIN articulacionSaberes AS asm ON m.idAs = asm.idAs JOIN conocimientosPrevios AS cp ON m.idCp = cp.idCp JOIN unidad AS u ON m.idUn = u.idUn JOIN contenidoTematico AS ctm ON u.idUn = ctm.idUn JOIN bibliografia AS b ON m.idBg = b.idBg JOIN lecturaBasica AS lb ON b.idBg = lb.idBg JOIN lecturaComplementaria AS lc ON b.idBg = lc.idBg");
  connection.release();
  return rows;
}

const detalle = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM microcurriculo AS m JOIN usuarioMicrocurriculo AS um ON m.idMc = um.idMc JOIN usuarios AS users ON um.idUsuario = users.idUsuario JOIN datosGenerales AS dg ON m.idDg = dg.idDg JOIN competenciaGeneral AS cg ON m.idCg = cg.idCg JOIN articulacionSaberes AS asm ON m.idAs = asm.idAs JOIN conocimientosPrevios AS cp ON m.idCp = cp.idCp JOIN unidad AS u ON m.idUn = u.idUn JOIN contenidoTematico AS ctm ON u.idUn = ctm.idUn JOIN bibliografia AS b ON m.idBg = b.idBg JOIN lecturaBasica AS lb ON b.idBg = lb.idBg JOIN lecturaComplementaria AS lc ON b.idBg = lc.idBg WHERE m.idMc = ?";
  const [rows] = await connection.query(query, [idMc]);
  connection.release();
  return rows[0] || {};
}

const detalleMicrocurriculo = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM microcurriculo WHERE idMc = ?";
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUsuarioMirocurriculo = async (idUsuario)=> {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT idUsuario FROM usuariomicrocurriculo";
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (microcurriculoDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = "UPDATE microcurriculo SET ? WHERE idMc = ?";
  await connection.query(query, [microcurriculoDetalle, microcurriculoDetalle.idMc]);
  connection.release();
}

const eliminar = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = "DELETE FROM microcurriculo WHERE idMc = ?";
  await connection.query(query, [idMc]);
  connection.release();
}

const misMicrocurriculos = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = "SELECT * FROM microcurriculo AS m JOIN usuarioMicrocurriculo AS um ON m.idMc = um.idMc JOIN usuarios AS users ON um.idUsuario = users.idUsuario JOIN datosGenerales AS dg ON m.idDg = dg.idDg JOIN competenciaGeneral AS cg ON m.idCg = cg.idCg JOIN articulacionSaberes AS asm ON m.idAs = asm.idAs JOIN conocimientosPrevios AS cp ON m.idCp = cp.idCp JOIN unidad AS u ON m.idUn = u.idUn JOIN contenidoTematico AS ctm ON u.idUn = ctm.idUn JOIN bibliografia AS b ON m.idBg = b.idBg JOIN lecturaBasica AS lb ON b.idBg = lb.idBg JOIN lecturaComplementaria AS lc ON b.idBg = lc.idBg WHERE um.idUsuario = ?";
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows || [];
}

const buscarIdMicrocurriculo = async (idMc)=> {
  
  const connection = await conexion.clienteMySQL();

  try {
    const [rows, _]= await connection.query("SELECT idMc FROM microcurriculo", [idMc]);
    return rows[0] || null;

  } catch (err) {
    throw err;
  }
}

export default {crear, leer, detalle, detalleUsuarioMirocurriculo,
  detalleMicrocurriculo, actualizar, eliminar, misMicrocurriculos, buscarIdMicrocurriculo}