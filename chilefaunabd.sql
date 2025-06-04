-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2025 a las 03:56:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chilefaunabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amenaza`
--

CREATE TABLE `amenaza` (
  `IdAmenaza` int(11) NOT NULL,
  `nomAmenaza` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `amenaza`
--

INSERT INTO `amenaza` (`IdAmenaza`, `nomAmenaza`, `descripcion`) VALUES
(1, 'Deforestación', 'Pérdida de bosques nativos por actividades humanas.'),
(2, 'Especies invasoras', 'Introducción de especies que compiten con las nativas.'),
(3, 'Cambio climático', 'Alteraciones en el clima que afectan los ecosistemas.'),
(4, 'Caza ilegal', 'Captura y muerte de especies protegidas.'),
(5, 'Contaminación', 'Presencia de sustancias nocivas en el medio ambiente.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `IdComentario` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `fk_IdPublicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`IdComentario`, `contenido`, `fk_IdUsuario`, `fk_IdPublicacion`) VALUES
(1, 'Totalmente de acuerdo, debemos proteger la Araucaria.', 2, 1),
(2, 'Gracias por compartir esta información sobre el Alerce.', 2, 2),
(3, 'Es alarmante lo del Sapito de Darwin, hay que actuar.', 1, 3),
(4, 'Interesante análisis sobre el Puma en zonas urbanas.', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidovisual`
--

CREATE TABLE `contenidovisual` (
  `IdContenido` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `tipo` text DEFAULT NULL,
  `urlRecurso` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contenidovisual`
--

INSERT INTO `contenidovisual` (`IdContenido`, `descripcion`, `tipo`, `urlRecurso`) VALUES
(1, 'Fotografía de Araucaria en la Cordillera de los Andes.', 'imagen', 'https://example.com/araucaria.jpg'),
(2, 'Video del Alerce en la Región de Los Lagos.', 'video', 'https://example.com/alerce.mp4'),
(3, 'Imagen del Sapito de Darwin en su hábitat natural.', 'imagen', 'https://example.com/sapito.jpg'),
(4, 'Fotografía del Puma en la Región de Coquimbo.', 'imagen', 'https://example.com/puma.jpg'),
(5, 'Video del Flamenco chileno en el Salar de Atacama.', 'video', 'https://example.com/flamenco.mp4'),
(6, 'Imagen del Ratón orejudo en la Patagonia.', 'imagen', 'https://example.com/raton.jpg'),
(7, 'Fotografía del Pasto antártico en la Isla Rey Jorge.', 'imagen', 'https://example.com/pasto.jpg'),
(8, 'Imagen del Coigüe de Magallanes en Tierra del Fuego.', 'imagen', 'https://example.com/coigue.jpg'),
(9, 'Video del Monito del monte en los bosques de Valdivia.', 'video', 'https://example.com/monito.mp4'),
(10, 'Imagen de la Lenga en los Andes Patagónicos.', 'imagen', 'https://example.com/lenga.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especie`
--

CREATE TABLE `especie` (
  `IdEspecie` int(11) NOT NULL,
  `nomCientifico` text NOT NULL,
  `nomComun` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `gradoExtincion` int(11) DEFAULT NULL,
  `indicadorPeligro` tinyint(1) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especie`
--

INSERT INTO `especie` (`IdEspecie`, `nomCientifico`, `nomComun`, `descripcion`, `gradoExtincion`, `indicadorPeligro`, `ubicacion`) VALUES
(1, 'Araucaria araucana', 'Araucaria', 'Árbol endémico de Chile, símbolo nacional.', 3, 1, 'lat:-38.7,long:-71.3'),
(2, 'Fitzroya cupressoides', 'Alerce', 'Árbol milenario del sur de Chile.', 2, 1, 'lat:-42.5,long:-73.8'),
(3, 'Nothofagus pumilio', 'Lenga', 'Árbol de hojas caducas presente en la Patagonia.', 1, 0, 'lat:-45.0,long:-72.0'),
(4, 'Rhinoderma darwinii', 'Sapito de Darwin', 'Anfibio endémico en peligro de extinción.', 4, 1, 'lat:-39.8,long:-73.2'),
(5, 'Puma concolor', 'Puma', 'Felino presente en diversas zonas de Chile.', 1, 0, 'lat:-33.5,long:-70.7'),
(6, 'Phoenicopterus chilensis', 'Flamenco chileno', 'Ave de zonas salinas y lagunas.', 2, 1, 'lat:-27.0,long:-69.0'),
(7, 'Loxodontomys micropus', 'Ratón orejudo', 'Roedor nativo de la zona austral.', 3, 1, 'lat:-51.7,long:-72.5'),
(8, 'Deschampsia antarctica', 'Pasto antártico', 'Una de las dos especies de plantas con flores en la Antártida.', 1, 0, 'lat:-62.2,long:-58.9'),
(9, 'Nothofagus betuloides', 'Coigüe de Magallanes', 'Árbol siempreverde del sur de Chile.', 2, 1, 'lat:-53.1,long:-70.9'),
(10, 'Dromiciops gliroides', 'Monito del monte', 'Marsupial endémico de los bosques templados.', 4, 1, 'lat:-40.3,long:-72.1'),
(11, 'Pudu puda', 'Pudú', 'Pequeño ciervo nativo del sur de Chile y Argentina, de hábitos tímidos y nocturnos.', 2, 1, 'lat:-41.9,long:-73.8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especieamenaza`
--

CREATE TABLE `especieamenaza` (
  `IdEspecie` int(11) NOT NULL,
  `IdAmenaza` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especieamenaza`
--

INSERT INTO `especieamenaza` (`IdEspecie`, `IdAmenaza`) VALUES
(1, 1),
(2, 1),
(4, 2),
(5, 4),
(6, 3),
(7, 3),
(9, 1),
(10, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especiecontenidovisual`
--

CREATE TABLE `especiecontenidovisual` (
  `IdEspecie` int(11) NOT NULL,
  `IdContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especiecontenidovisual`
--

INSERT INTO `especiecontenidovisual` (`IdEspecie`, `IdContenido`) VALUES
(1, 1),
(2, 2),
(3, 10),
(4, 3),
(5, 4),
(6, 5),
(7, 6),
(8, 7),
(9, 8),
(10, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especienoticia`
--

CREATE TABLE `especienoticia` (
  `IdEspecie` int(11) NOT NULL,
  `IdNoticia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especienoticia`
--

INSERT INTO `especienoticia` (`IdEspecie`, `IdNoticia`) VALUES
(1, 10),
(2, 2),
(3, 9),
(4, 1),
(5, 4),
(6, 3),
(7, 6),
(8, 7),
(9, 8),
(10, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especiezonageografica`
--

CREATE TABLE `especiezonageografica` (
  `IdEspecie` int(11) NOT NULL,
  `IdZona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especiezonageografica`
--

INSERT INTO `especiezonageografica` (`IdEspecie`, `IdZona`) VALUES
(1, 2),
(2, 2),
(3, 3),
(4, 2),
(5, 1),
(6, 4),
(7, 3),
(8, 5),
(9, 3),
(10, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `fk_IdEspecie` int(11) NOT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `esFavorito` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favorito`
--

INSERT INTO `favorito` (`fk_IdEspecie`, `fk_IdUsuario`, `esFavorito`) VALUES
(1, 1, 1),
(2, 1, 1),
(4, 2, 1),
(5, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `IdForo` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`IdForo`, `titulo`, `descripcion`) VALUES
(1, 'Conservación de Especies Nativas', 'Discusión sobre la protección de la biodiversidad chilena.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `IdNoticia` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `resumen` text DEFAULT NULL,
  `urlOrigen` text DEFAULT NULL,
  `fechaPublicacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`IdNoticia`, `titulo`, `resumen`, `urlOrigen`, `fechaPublicacion`) VALUES
(1, 'Descubren nueva población de Sapito de Darwin', 'Investigadores hallan ejemplares en la Región de Los Ríos.', 'https://noticias.example.com/sapito', '2025-05-15'),
(2, 'Alerce milenario es declarado Patrimonio Natural', 'El árbol más antiguo de Chile recibe reconocimiento internacional.', 'https://noticias.example.com/alerce', '2025-04-20'),
(3, 'Flamencos regresan al Salar de Atacama', 'Aumento de población de flamencos en su hábitat natural.', 'https://noticias.example.com/flamenco', '2025-03-10'),
(4, 'Puma avistado cerca de zonas urbanas', 'Autoridades llaman a la precaución tras avistamientos.', 'https://noticias.example.com/puma', '2025-02-05'),
(5, 'Monito del monte en peligro crítico', 'Estudios revelan disminución drástica en su población.', 'https://noticias.example.com/monito', '2025-01-25'),
(6, 'Ratón orejudo enfrenta nuevas amenazas', 'Cambio climático afecta su hábitat en la Patagonia.', 'https://noticias.example.com/raton', '2025-05-01'),
(7, 'Pasto antártico muestra adaptaciones únicas', 'Investigación destaca su resistencia al frío extremo.', 'https://noticias.example.com/pasto', '2025-04-10'),
(8, 'Coigüe de Magallanes bajo presión', 'Deforestación amenaza su supervivencia.', 'https://noticias.example.com/coigue', '2025-03-15'),
(9, 'Lenga se adapta a cambios climáticos', 'Estudios muestran su resiliencia en la Patagonia.', 'https://noticias.example.com/lenga', '2025-02-20'),
(10, 'Araucaria enfrenta plagas emergentes', 'Nuevas enfermedades afectan su crecimiento.', 'https://noticias.example.com/araucaria', '2025-01-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `id_perfil` int(11) NOT NULL,
  `tipo_perfil` text NOT NULL,
  `foto` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`id_perfil`, `tipo_perfil`, `foto`, `descripcion`) VALUES
(1, 'Investigador', 'foto1.jpg', 'Especialista en flora nativa de Chile.'),
(2, 'Naturalista', 'foto2.jpg', 'Apasionado por la fauna chilena.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `IdPublicacion` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` date DEFAULT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `fk_IdForo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`IdPublicacion`, `contenido`, `fecha`, `fk_IdUsuario`, `fk_IdForo`) VALUES
(1, 'La Araucaria es fundamental para los ecosistemas andinos.', '2025-05-20', 1, 1),
(2, 'El Alerce es un símbolo de longevidad en nuestros bosques.', '2025-05-21', 1, 1),
(3, 'Preocupante situación del Sapito de Darwin en el sur.', '2025-05-22', 2, 1),
(4, 'El Puma y su interacción con zonas urbanas.', '2025-05-23', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `correo` text NOT NULL,
  `contrasena` text NOT NULL,
  `nomUsuario` text NOT NULL,
  `id_perfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `correo`, `contrasena`, `nomUsuario`, `id_perfil`) VALUES
(1, 'ana.perez@example.com', 'contrasena123', 'AnaPerez', 1),
(2, 'carlos.lopez@example.com', 'contrasena456', 'CarlosLopez', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonageografica`
--

CREATE TABLE `zonageografica` (
  `IdZona` int(11) NOT NULL,
  `nomZona` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `zonageografica`
--

INSERT INTO `zonageografica` (`IdZona`, `nomZona`, `descripcion`) VALUES
(1, 'Zona Central', 'Región comprendida entre Valparaíso y el Biobío.'),
(2, 'Zona Sur', 'Región comprendida entre La Araucanía y Los Lagos.'),
(3, 'Zona Austral', 'Región comprendida entre Aysén y Magallanes.'),
(4, 'Zona Norte', 'Región comprendida entre Arica y Coquimbo.'),
(5, 'Zona Antártica', 'Territorio chileno en la Antártida.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amenaza`
--
ALTER TABLE `amenaza`
  ADD PRIMARY KEY (`IdAmenaza`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`IdComentario`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`),
  ADD KEY `fk_IdPublicacion` (`fk_IdPublicacion`);

--
-- Indices de la tabla `contenidovisual`
--
ALTER TABLE `contenidovisual`
  ADD PRIMARY KEY (`IdContenido`);

--
-- Indices de la tabla `especie`
--
ALTER TABLE `especie`
  ADD PRIMARY KEY (`IdEspecie`);

--
-- Indices de la tabla `especieamenaza`
--
ALTER TABLE `especieamenaza`
  ADD PRIMARY KEY (`IdEspecie`,`IdAmenaza`),
  ADD KEY `IdAmenaza` (`IdAmenaza`);

--
-- Indices de la tabla `especiecontenidovisual`
--
ALTER TABLE `especiecontenidovisual`
  ADD PRIMARY KEY (`IdEspecie`,`IdContenido`),
  ADD KEY `IdContenido` (`IdContenido`);

--
-- Indices de la tabla `especienoticia`
--
ALTER TABLE `especienoticia`
  ADD PRIMARY KEY (`IdEspecie`,`IdNoticia`),
  ADD KEY `IdNoticia` (`IdNoticia`);

--
-- Indices de la tabla `especiezonageografica`
--
ALTER TABLE `especiezonageografica`
  ADD PRIMARY KEY (`IdEspecie`,`IdZona`),
  ADD KEY `IdZona` (`IdZona`);

--
-- Indices de la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`fk_IdEspecie`,`fk_IdUsuario`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`);

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`IdForo`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`IdNoticia`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id_perfil`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`IdPublicacion`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`),
  ADD KEY `fk_IdForo` (`fk_IdForo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD KEY `id_perfil` (`id_perfil`);

--
-- Indices de la tabla `zonageografica`
--
ALTER TABLE `zonageografica`
  ADD PRIMARY KEY (`IdZona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amenaza`
--
ALTER TABLE `amenaza`
  MODIFY `IdAmenaza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `IdComentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `contenidovisual`
--
ALTER TABLE `contenidovisual`
  MODIFY `IdContenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `especie`
--
ALTER TABLE `especie`
  MODIFY `IdEspecie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `IdForo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `IdNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `IdPublicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `zonageografica`
--
ALTER TABLE `zonageografica`
  MODIFY `IdZona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`fk_IdPublicacion`) REFERENCES `publicacion` (`IdPublicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `especieamenaza`
--
ALTER TABLE `especieamenaza`
  ADD CONSTRAINT `especieamenaza_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especieamenaza_ibfk_2` FOREIGN KEY (`IdAmenaza`) REFERENCES `amenaza` (`IdAmenaza`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `especiecontenidovisual`
--
ALTER TABLE `especiecontenidovisual`
  ADD CONSTRAINT `especiecontenidovisual_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especiecontenidovisual_ibfk_2` FOREIGN KEY (`IdContenido`) REFERENCES `contenidovisual` (`IdContenido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `especienoticia`
--
ALTER TABLE `especienoticia`
  ADD CONSTRAINT `especienoticia_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especienoticia_ibfk_2` FOREIGN KEY (`IdNoticia`) REFERENCES `noticia` (`IdNoticia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `especiezonageografica`
--
ALTER TABLE `especiezonageografica`
  ADD CONSTRAINT `especiezonageografica_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especiezonageografica_ibfk_2` FOREIGN KEY (`IdZona`) REFERENCES `zonageografica` (`IdZona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `favorito_ibfk_1` FOREIGN KEY (`fk_IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorito_ibfk_2` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicacion_ibfk_2` FOREIGN KEY (`fk_IdForo`) REFERENCES `foro` (`IdForo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_perfil`) REFERENCES `perfil` (`id_perfil`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
