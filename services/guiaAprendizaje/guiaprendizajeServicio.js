import { conexion } from "../../db/conexionDB.js";
import guiaprendizajeRepositorio from "../../db/repositorios/guiaAprendizaje/guiaprendizajeRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import microcurriculoRepositorio from "../../db/repositorios/microcurriculo/microcurriculoRepositorio.js"
import { GuiaprendizajeEntity, MicrocurriculoGuiaAprendizajeDatosResModel } from "../../models/guiaAprendizaje/GuiaprendizajeModelo.js";
import { UsuarioGuiaAprendizajeEntity } from "../../models/UsuarioModelo.js";
import crypto from "crypto";

const crearGuiaAprendizaje = async (guiaAprendizaje, idUsuario, idMc)=> {

    if(!guiaAprendizaje.idPt || !guiaAprendizaje.idEa) {
        throw new Error("Datos vacios");
    }

    validarRol();

    const guiaAprendizajeEntity = new GuiaprendizajeEntity(guiaAprendizaje);
    guiaAprendizajeEntity.idGa = crypto.randomUUID();
    guiaAprendizajeEntity.fechaCreada = new Date();

    const usuario = await usuarioRepositorio.buscarById(idUsuario);
    const microcurriculo = await microcurriculoRepositorio.buscarIdMicrocurriculo(idMc);
    
    const usuarioEntity = new UsuarioGuiaAprendizajeEntity({
        idUsuario: usuario.idUsuario,
        idGa: guiaAprendizajeEntity.idGa
    });

    const microcurriculoGuia = new MicrocurriculoGuiaAprendizajeDatosResModel({
        idMc: microcurriculo.idMc,
        idGa: guiaAprendizajeEntity.idGa
    });

    const connection = await conexion.clienteMySQL();

    try{
        await connection.beginTransaction();
        await guiaprendizajeRepositorio.crear(guiaAprendizajeEntity);

        const query2 = "INSERT INTO usuarioGuiaAprendizaje SET ?";
        await connection.query(query2, usuarioEntity);

        const query3 = "INSERT INTO microcurriculoGuiaAprendizaje SET ?";
        await connection.query(query3, microcurriculoGuia);

        await connection.commit();
        // connection.release();

        return await guiaprendizajeRepositorio.detalleGuiaAprendizaje(guiaAprendizajeEntity.idGa, usuarioEntity.idUsuario, microcurriculoGuia.idGa);
    } catch (err) {
        await connection.rollback();
        // connection.release();
        throw err;
    }
}

const leerGuiaAprendizaje = async ()=> {
    return await guiaprendizajeRepositorio.leer();
}

const detalleGuiaAprendizaje = async (idGa)=> {
    return await guiaprendizajeRepositorio.detalle(idGa);
}

const actualizarGuiaAprendizaje = async (idGa, guiaAprendizaje, idUsuario)=> {

    if(!guiaAprendizaje.idPt || !guiaAprendizaje.idEa) {
        throw new Error("Datos vacios");
    }

    validarRol();

    const guiaAprendizajeDetalle = await guiaprendizajeRepositorio.detalleGuiaAprendizaje(idGa);
    const usuarioGuiaAprendizaje = await guiaprendizajeRepositorio.detalleUsuarioGuiaAprendizaje(idUsuario);
    const usuario = await usuarioRepositorio.buscarById(idUsuario);

    if(usuarioGuiaAprendizaje.idUsuario != usuario.idUsuario) {
        throw new Error("No se puede actualizar la guia de aprendizaje");
    }

    guiaAprendizajeDetalle.idPt = guiaAprendizaje.idPt;
    guiaAprendizajeDetalle.idEa = guiaAprendizaje.idEa;

    await guiaprendizajeRepositorio.actualizar(guiaAprendizajeDetalle);

    return await guiaprendizajeRepositorio.detalleGuiaAprendizaje(guiaAprendizajeDetalle.idGa);
}

const eliminarGuiaAprendizaje = async (idGa, idUsuario)=> {

    const guiaAprendizajeDetalle = await guiaprendizajeRepositorio.detalleGuiaAprendizaje(idGa);
    const usuarioGuiaAprendizaje = await guiaprendizajeRepositorio.detalleUsuarioGuiaAprendizaje(idUsuario);
    const usuario = await usuarioRepositorio.buscarById(idUsuario);

    if(usuarioGuiaAprendizaje.idUsuario != usuario.idUsuario) {
        throw new Error("No se puede actualizar la guia de aprendizaje");
    }

    validarRol();

    return await guiaprendizajeRepositorio.eliminar(guiaAprendizajeDetalle.idGa);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente");
    }
}

export default {crearGuiaAprendizaje, leerGuiaAprendizaje, detalleGuiaAprendizaje, actualizarGuiaAprendizaje, eliminarGuiaAprendizaje}