DROP DATABASE IF EXISTS invesrodolfo;
CREATE DATABASE invesrodolfo;

USE invesrodolfo;

CREATE TABLE `carreras` (
  `idCarrera` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre`varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `roles` (
  `idRol` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo`varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usuarioCarreras` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCarrera` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usuarioRoles` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idRol` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passwordEncriptada` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creado` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usuarioMicrocurriculo` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idMc` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `microcurriculo` (
  `id` int(11) NOT NULL,
  `idMc` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaCreado` datetime NOT NULL,
  `idDg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idAs` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCp` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUn` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idBg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `datosgenerales` (
  `id` int(11) NOT NULL,
  `idDg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `asignatura` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `programa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `semestre` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metodologia` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditos` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horasPresenciales` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horasTrabajoIndependiente` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalHorasAsignatura` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `competenciaGeneral` (
  `id` int(11) NOT NULL,
  `idCg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionCg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `justificacion`varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `objetivoGeneral` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `articulacionSaberes` (
  `id` int(11) NOT NULL,
  `idAs` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionAs` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `conocimientosPrevios` (
  `id` int(11) NOT NULL,
  `idCp` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionCp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `unidad` (
  `id` int(11) NOT NULL,
  `idUn` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `competenciaEspecifica` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `contenidoTematico` (
  `id` int(11) NOT NULL,
  `idCt` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tema` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subTema` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUn` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bibliografia` (
  `id` int(11) NOT NULL,
  `idBg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `lecturaBasica` (
  `id` int(11) NOT NULL,
  `idLb` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referenciaLb` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idBg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `lecturaComplementaria` (
  `id` int(11) NOT NULL,
  `idLc` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referenciaLc` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idBg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usuarioGuiaAprendizaje` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `microcurriculoGuiaAprendizaje` (
  `id` int(11) NOT NULL,
  `idMc` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `guiaAprendizaje` (
  `id` int(11) NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaCreada` datetime NOT NULL,
  `idPt` varchar(100) COLLATE utf8mb4_unicode_ci,
  `idEa` varchar(100) COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `presentacionGuia` (
  `id` int(11) NOT NULL,
  `idPt` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionPg` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `indicadoresDesempeno` (
  `id` int(11) NOT NULL,
  `idId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saberSaber` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saberHacer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saberSer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `desarrolloUnidadAprendizaje` (
  `id` int(11) NOT NULL,
  `idDua` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechas` date NOT NULL,
  `queHacer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenidosTematicos` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `comoHacerloDesarrolloUnidad` (
  `id` int(11) NOT NULL,
  `idCh` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionCh` varchar(800) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idDua` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `evaluacionAprendizaje` (
  `id` int(11) NOT NULL,
  `idEa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `evidenciasAprendizaje` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `criteriosEvaluacion` (
  `id` int(11) NOT NULL,
  `idCea` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `criterio` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `instrumentosEvaluacion` (
  `id` int(11) NOT NULL,
  `idIea` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instrumento` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bibliografiaGuia` (
  `id` int(11) NOT NULL,
  `idBgGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referencias` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `glosarioLexico` (
  `id` int(11) NOT NULL,
  `idGl` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `palabras` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGa` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `carreras`
  ADD PRIMARY KEY (`idCarrera`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

ALTER TABLE `usuarioCarreras`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuarioRoles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `id` (`id`);

ALTER TABLE `usuarioMicrocurriculo`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `microcurriculo`
  ADD PRIMARY KEY (`idMc`),
  ADD KEY `id` (`id`);

ALTER TABLE `datosGenerales`
  ADD PRIMARY KEY (`idDg`),
  ADD KEY `id` (`id`);

ALTER TABLE `competenciaGeneral`
  ADD PRIMARY KEY (`idCg`),
  ADD KEY `id` (`id`);

ALTER TABLE `articulacionSaberes`
  ADD PRIMARY KEY (`idAs`),
  ADD KEY `id` (`id`);

ALTER TABLE `conocimientosPrevios`
  ADD PRIMARY KEY (`idCp`),
  ADD KEY `id` (`id`);

ALTER TABLE `unidad`
  ADD PRIMARY KEY (`idUn`),
  ADD KEY `id` (`id`);

ALTER TABLE `contenidoTematico`
  ADD PRIMARY KEY (`idCt`),
  ADD KEY `id` (`id`);

ALTER TABLE `bibliografia`
  ADD PRIMARY KEY (`idBg`),
  ADD KEY `id` (`id`);

ALTER TABLE `lecturaBasica`
  ADD PRIMARY KEY (`idLb`),
  ADD KEY `id` (`id`);

ALTER TABLE `lecturaComplementaria`
  ADD PRIMARY KEY (`idLc`),
  ADD KEY `id` (`id`);

ALTER TABLE `usuarioGuiaAprendizaje`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `microcurriculoGuiaAprendizaje`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `guiaAprendizaje`
  ADD PRIMARY KEY (`idGa`),
  ADD KEY `id` (`id`);

ALTER TABLE `presentacionGuia`
  ADD PRIMARY KEY (`idPt`),
  ADD KEY `id` (`id`);

ALTER TABLE `indicadoresDesempeno`
  ADD PRIMARY KEY (`idId`),
  ADD KEY `id` (`id`);

ALTER TABLE `desarrolloUnidadAprendizaje`
  ADD PRIMARY KEY (`idDua`),
  ADD KEY `id` (`id`);

ALTER TABLE `comoHacerloDesarrolloUnidad`
  ADD PRIMARY KEY (`idCh`),
  ADD KEY `id` (`id`);

ALTER TABLE `evaluacionAprendizaje`
  ADD PRIMARY KEY (`idEa`),
  ADD KEY `id` (`id`);

ALTER TABLE `criteriosEvaluacion`
  ADD PRIMARY KEY (`idCea`),
  ADD KEY `id` (`id`);

ALTER TABLE `instrumentosEvaluacion`
  ADD PRIMARY KEY (`idIea`),
  ADD KEY `id` (`id`);

ALTER TABLE `bibliografiaGuia`
  ADD PRIMARY KEY (`idBgGa`),
  ADD KEY `id` (`id`);

ALTER TABLE `glosarioLexico`
  ADD PRIMARY KEY (`idGl`),
  ADD KEY `id` (`id`);

ALTER TABLE `usuarioCarreras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `usuarioRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `usuarioMicrocurriculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `microcurriculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `datosGenerales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `competenciaGeneral`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `articulacionSaberes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `conocimientosPrevios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `unidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `bibliografia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `lecturaBasica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `lecturaComplementaria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE `contenidoTematico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

ALTER TABLE `usuarioGuiaAprendizaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

ALTER TABLE `microcurriculoGuiaAprendizaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `guiaAprendizaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

ALTER TABLE `presentacionGuia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

ALTER TABLE `indicadoresDesempeno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

ALTER TABLE `desarrolloUnidadAprendizaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

ALTER TABLE `comoHacerloDesarrolloUnidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

ALTER TABLE `evaluacionAprendizaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

ALTER TABLE `criteriosEvaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

ALTER TABLE `instrumentosEvaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

ALTER TABLE `bibliografiaGuia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

ALTER TABLE `glosarioLexico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;


ALTER TABLE `contenidoTematico`
  ADD CONSTRAINT `contenTematico_ibfk_2` FOREIGN KEY (`idUn`) REFERENCES `unidad` (`idUn`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `lecturaBasica`
  ADD CONSTRAINT `lectBasica_ibfk_2` FOREIGN KEY (`idBg`) REFERENCES `bibliografia` (`idBg`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `lecturaComplementaria`
  ADD CONSTRAINT `lectComplementaria_ibfk_2` FOREIGN KEY (`idBg`) REFERENCES `bibliografia` (`idBg`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `microcurriculo`
  ADD CONSTRAINT `microcurriculo_ibfk_2` FOREIGN KEY (`idDg`) REFERENCES `datosGenerales` (`idDg`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculo_ibfk_3` FOREIGN KEY (`idCg`) REFERENCES `competenciaGeneral` (`idCg`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculo_ibfk_4` FOREIGN KEY (`idAs`) REFERENCES `articulacionSaberes` (`idAs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculo_ibfk_5` FOREIGN KEY (`idCp`) REFERENCES `conocimientosPrevios` (`idCp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculo_ibfk_6` FOREIGN KEY (`idUn`) REFERENCES `unidad` (`idUn`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculo_ibfk_7` FOREIGN KEY (`idBg`) REFERENCES `bibliografia` (`idBg`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `usuarioRoles`
  ADD CONSTRAINT `usuarioRoles_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarioRoles_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `usuarioCarreras`
  ADD CONSTRAINT `usuarioCarreras_ibfk_2` FOREIGN KEY (`idCarrera`) REFERENCES `carreras` (`idCarrera`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarioCarreras_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `usuarioMicrocurriculo`
  ADD CONSTRAINT `usuarioMicrocurriculo_ibfk_2` FOREIGN KEY (`idMc`) REFERENCES `microcurriculo` (`idMc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarioMicrocurriculo_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `usuarioGuiaAprendizaje`
  ADD CONSTRAINT `usuarioGa_ibfk_2` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarioGa_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `microcurriculoGuiaAprendizaje`
  ADD CONSTRAINT `microcurriculoGa_ibfk_2` FOREIGN KEY (`idMc`) REFERENCES `microcurriculo` (`idMc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `microcurriculoGa_ibfk_3` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `guiaAprendizaje`
  ADD CONSTRAINT `guiaAprendizaje_ibfk_2` FOREIGN KEY (`idPt`) REFERENCES `presentacionGuia` (`idPt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `guiaAprendizaje_ibfk_3` FOREIGN KEY (`idEa`) REFERENCES `evaluacionAprendizaje` (`idEa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `indicadoresDesempeno`
  ADD CONSTRAINT `indicadoresDesempeno_ibfk_2` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `desarrolloUnidadAprendizaje`
  ADD CONSTRAINT `desarrolloUnidadAprendizaje_ibfk_2` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE;

ALTER TABLE `comoHacerloDesarrolloUnidad`
  ADD CONSTRAINT `comoHacerloDesarrolloUnidad_ibfk_2` FOREIGN KEY (`idDua`) REFERENCES `desarrolloUnidadAprendizaje` (`idDua`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `criteriosEvaluacion`
  ADD CONSTRAINT `criteriosEvaluacion_ibfk_2` FOREIGN KEY (`idEa`) REFERENCES `evaluacionAprendizaje` (`idEa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `instrumentosEvaluacion`
  ADD CONSTRAINT `instrumentosEvaluacion_ibfk_2` FOREIGN KEY (`idEa`) REFERENCES `evaluacionAprendizaje` (`idEa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `bibliografiaGuia`
  ADD CONSTRAINT `bibliografiaGuia_ibfk_2` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `glosarioLexico`
  ADD CONSTRAINT `glosarioLexico_ibfk_2` FOREIGN KEY (`idGa`) REFERENCES `guiaAprendizaje` (`idGa`) ON DELETE CASCADE ON UPDATE CASCADE;