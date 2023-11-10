import { conexion } from "../../conexionDB.js";

const crear = async (guiaAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = "INSERT INTO guiaAprendizaje SET ?";
    await connection.query(query, guiaAprendizaje);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query("SELECT * FROM guiaAprendizaje AS ga JOIN usuarioGuiaAprendizaje AS uga ON ga.idGa = uga.idGa JOIN usuarios AS us ON uga.idUsuario = us.idUsuario JOIN presentacionGuia AS ptga ON ga.idPt = ptga.idPt JOIN evaluacionAprendizaje AS eva ON ga.idEa = eva.idEa JOIN microcurriculoGuiaAprendizaje AS mga ON ga.idGa = mga.idGa JOIN microcurriculo AS m ON m.idMc = mga.idMc JOIN datosGenerales AS dgm ON m.idDg = dgm.idDg JOIN unidad AS und ON m.idUn = und.idUn JOIN competenciaGeneral AS cgm ON m.idCg = cgm.idCg JOIN indicadoresDesempeno AS idg ON ga.idGa = idg.idGa JOIN desarrolloUnidadAprendizaje AS duga ON ga.idGa = duga.idGa JOIN comoHacerloDesarrolloUnidad AS chdun ON duga.idDua = chdun.idDua JOIN criteriosEvaluacion AS ceg ON eva.idEa = ceg.idEa JOIN instrumentosEvaluacion AS iga ON eva.idEa = iga.idEa JOIN bibliografiaGuia AS biga ON ga.idGa = biga.idGa JOIN glosarioLexico AS glga ON ga.idGa = glga.idGa");
    connection.release()
    return rows;
}

const detalle = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT * FROM guiaAprendizaje AS ga JOIN usuarioGuiaAprendizaje AS uga ON ga.idGa = uga.idGa JOIN usuarios AS us ON uga.idUsuario = us.idUsuario JOIN presentacionGuia AS ptga ON ga.idPt = ptga.idPt JOIN evaluacionAprendizaje AS eva ON ga.idEa = eva.idEa JOIN microcurriculoGuiaAprendizaje AS mga ON ga.idGa = mga.idGa JOIN microcurriculo AS m ON m.idMc = mga.idMc JOIN datosGenerales AS dgm ON m.idDg = dgm.idDg JOIN unidad AS und ON m.idUn = und.idUn JOIN competenciaGeneral AS cgm ON m.idCg = cgm.idCg JOIN indicadoresDesempeno AS idg ON ga.idGa = idg.idGa JOIN desarrolloUnidadAprendizaje AS duga ON ga.idGa = duga.idGa JOIN comoHacerloDesarrolloUnidad AS chdun ON duga.idDua = chdun.idDua JOIN criteriosEvaluacion AS ceg ON eva.idEa = ceg.idEa JOIN instrumentosEvaluacion AS iga ON eva.idEa = iga.idEa JOIN bibliografiaGuia AS biga ON ga.idGa = biga.idGa JOIN glosarioLexico AS glga ON ga.idGa = glga.idGa WHERE ga.idGa = ?";
    const [rows] = await connection.query(query, [idGa]);
    connection.release();
    return rows[0] || {};
}

const detalleGuiaAprendizaje = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT * FROM guiaAprendizaje WHERE idGa = ?";
    const [rows] = await connection.query(query, [idGa]);
    connection.release();
    return rows[0] || {};
}

const detalleUsuarioGuiaAprendizaje = async (idUsuario)=> {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT idUsuario FROM usuarioGuiaAprendizaje";
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (guiaAprendizajeDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = "UPDATE guiaAprendizaje SET ? WHERE idGa = ?";
    await connection.query(query, [guiaAprendizajeDetalle, guiaAprendizajeDetalle.idGa]);
    connection.release();
}

const eliminar = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = "DELETE FROM guiaAprendizaje WHERE idGa = ?";
    await connection.query(query, [idGa]);
    connection.release();
}

const misGuiasAprendizaje = async (idUsuario) => {
    const connection = await conexion.clienteMySQL();
    const query = "SELECT * FROM guiaAprendizaje AS ga JOIN usuarioGuiaAprendizaje AS uga ON ga.idGa = uga.idGa JOIN usuarios AS us ON uga.idUsuario = us.idUsuario JOIN presentacionGuia AS ptga ON ga.idPt = ptga.idPt JOIN evaluacionAprendizaje AS eva ON ga.idEa = eva.idEa JOIN microcurriculoGuiaAprendizaje AS mga ON ga.idGa = mga.idGa JOIN microcurriculo AS m ON m.idMc = mga.idMc JOIN datosGenerales AS dgm ON m.idDg = dgm.idDg JOIN unidad AS und ON m.idUn = und.idUn JOIN competenciaGeneral AS cgm ON m.idCg = cgm.idCg JOIN indicadoresDesempeno AS idg ON ga.idGa = idg.idGa JOIN desarrolloUnidadAprendizaje AS duga ON ga.idGa = duga.idGa JOIN comoHacerloDesarrolloUnidad AS chdun ON duga.idDua = chdun.idDua JOIN criteriosEvaluacion AS ceg ON eva.idEa = ceg.idEa JOIN instrumentosEvaluacion AS iga ON eva.idEa = iga.idEa JOIN bibliografiaGuia AS biga ON ga.idGa = biga.idGa JOIN glosarioLexico AS glga ON ga.idGa = glga.idGa WHERE uga.idUsuario = ?";
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows || [];
}

export default {crear, leer, detalle, detalleGuiaAprendizaje, detalleUsuarioGuiaAprendizaje, actualizar, eliminar, misGuiasAprendizaje}