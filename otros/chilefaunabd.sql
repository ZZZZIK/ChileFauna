-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 08:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chilefaunabd`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenaza`
--

CREATE TABLE `amenaza` (
  `IdAmenaza` int(11) NOT NULL,
  `nomAmenaza` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amenaza`
--

INSERT INTO `amenaza` (`IdAmenaza`, `nomAmenaza`, `descripcion`) VALUES
(1, 'Deforestación', 'Pérdida de bosques nativos por actividades humanas.'),
(2, 'Especies invasoras', 'Introducción de especies que compiten con las nativas.'),
(3, 'Cambio climático', 'Alteraciones en el clima que afectan los ecosistemas.'),
(4, 'Caza ilegal', 'Captura y muerte de especies protegidas.'),
(5, 'Contaminación', 'Presencia de sustancias nocivas en el medio ambiente.');

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `IdCategoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imgPrincipal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`IdCategoria`, `nombre`, `descripcion`, `imgPrincipal`) VALUES
(1, 'Mamíferos', NULL, 'pumaMAMIFERO.jpg'),
(2, 'Aves', NULL, 'caiquenAVE.jpg'),
(3, 'Reptiles', NULL, 'lagartijaREPTIL.jpg'),
(4, 'Insectos', NULL, 'chinitachilenaINSECTO.jpg'),
(5, 'Peces', NULL, 'puyePEZ.jpg'),
(6, 'Anfibios', NULL, 'ranachilenaANFIBIO.jpg'),
(7, 'Herbívoros', NULL, 'guanacoHERBIVORO.jpg'),
(8, 'Carnívoros', NULL, 'zorroculpeoCARNIVORO.jpg'),
(9, 'Insectívoros', NULL, 'piuchenINSECTIVORO.jpg'),
(10, 'Omnívoros', NULL, 'zorzalOMNIVORO.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comentario`
--

CREATE TABLE `comentario` (
  `IdComentario` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `fk_IdPublicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentario`
--

INSERT INTO `comentario` (`IdComentario`, `contenido`, `fk_IdUsuario`, `fk_IdPublicacion`) VALUES
(1, 'Totalmente de acuerdo, debemos proteger la Araucaria.', 2, 1),
(2, 'Gracias por compartir esta información sobre el Alerce.', 2, 2),
(3, 'Es alarmante lo del Sapito de Darwin, hay que actuar.', 1, 3),
(4, 'Interesante análisis sobre el Puma en zonas urbanas.', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `contenidovisual`
--

CREATE TABLE `contenidovisual` (
  `IdContenido` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `tipo` text DEFAULT NULL,
  `urlRecurso` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contenidovisual`
--

INSERT INTO `contenidovisual` (`IdContenido`, `descripcion`, `tipo`, `urlRecurso`) VALUES
(11, 'Imagen caiquenAVE', 'imagen', 'caiquenAVE.jpg'),
(12, 'Imagen chinita chilena INSECTO', 'imagen', 'chinitachilenaINSECTO.jpg'),
(13, 'Imagen conservación', 'imagen', 'conservacion.jpg'),
(14, 'Imagen guanaco HERBIVORO', 'imagen', 'guanacoHERBIVORO.jpg'),
(15, 'Imagen lagartija REPTIL', 'imagen', 'lagartijaREPTIL.jpg'),
(16, 'Imagen logo', 'imagen', 'logo.jpg'),
(17, 'Imagen news condor', 'imagen', 'news_condor00.jpeg'),
(18, 'Imagen news puma', 'imagen', 'news_puma00.jpg'),
(19, 'Imagen ranita darwin', 'imagen', 'news_ranitadarwin00.jpg'),
(20, 'Imagen zorro darwin', 'imagen', 'news_zorrodarwin00.jpg'),
(21, 'Imagen piuchen INSECTIVORO', 'imagen', 'piuchenINSECTIVORO.jpg'),
(22, 'Imagen pudú', 'imagen', 'pudu.jpg'),
(23, 'Imagen pudú 2', 'imagen', 'pudu2.jpg'),
(24, 'Imagen puma MAMIFERO', 'imagen', 'pumaMAMIFERO.jpg'),
(25, 'Imagen puye PEZ', 'imagen', 'puyePEZ.jpg'),
(26, 'Imagen rana chilena ANFIBIO', 'imagen', 'ranachilenaANFIBIO.jpg'),
(27, 'Imagen zorro culpeo CARNIVORO', 'imagen', 'zorroculpeoCARNIVORO.jpg'),
(28, 'Imagen zorzal OMNIVORO', 'imagen', 'zorzalOMNIVORO.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `especie`
--

CREATE TABLE `especie` (
  `IdEspecie` int(11) NOT NULL,
  `nomCientifico` text NOT NULL,
  `nomComun` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `gradoExtincion` int(11) DEFAULT NULL,
  `indicadorPeligro` tinyint(1) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL,
  `IdCategoria` int(11) DEFAULT NULL,
  `imgEspecie` varchar(255) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `especie`
--

INSERT INTO `especie` (`IdEspecie`, `nomCientifico`, `nomComun`, `descripcion`, `gradoExtincion`, `indicadorPeligro`, `ubicacion`, `IdCategoria`, `imgEspecie`, `categoria`) VALUES
(4, 'Rhinoderma darwinii', 'Sapito de Darwin', 'Anfibio endémico en peligro de extinción.', 4, 1, 'lat:-39.8,long:-73.2', 6, 'news_ranitadarwin00.jpg', 'Anfibios'),
(5, 'Puma concolor', 'Puma', 'Felino presente en diversas zonas de Chile.', 1, 0, 'lat:-33.5,long:-70.7', 8, 'pumaMAMIFERO.jpg', 'Carnívoros'),
(7, 'Loxodontomys micropus', 'Ratón orejudo', 'Roedor nativo de la zona austral.', 3, 1, 'lat:-51.7,long:-72.5', 1, 'ratonOrejudo00.jpg', 'Mamíferos'),
(11, 'Pudu puda', 'Pudú', 'Pequeño ciervo nativo del sur de Chile y Argentina, de hábitos tímidos y nocturnos.', 2, 1, 'lat:-41.9,long:-73.8', 7, 'pudu.jpg', 'Herbívoros'),
(12, 'Lycalopex culpaeus', 'Zorro culpeo', 'Zorro nativo del sur de América, adaptable y oportunista.', 2, 0, 'lat:-38.0,long:-70.0', 8, 'news_zorrodarwin00.jpg', 'Carnívoros');

-- --------------------------------------------------------

--
-- Table structure for table `especieamenaza`
--

CREATE TABLE `especieamenaza` (
  `IdEspecie` int(11) NOT NULL,
  `IdAmenaza` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `especieamenaza`
--

INSERT INTO `especieamenaza` (`IdEspecie`, `IdAmenaza`) VALUES
(4, 2),
(5, 4),
(7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `especiecontenidovisual`
--

CREATE TABLE `especiecontenidovisual` (
  `IdEspecie` int(11) NOT NULL,
  `IdContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `especienoticia`
--

CREATE TABLE `especienoticia` (
  `IdEspecie` int(11) NOT NULL,
  `IdNoticia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `especienoticia`
--

INSERT INTO `especienoticia` (`IdEspecie`, `IdNoticia`) VALUES
(4, 1),
(5, 4),
(7, 6);

-- --------------------------------------------------------

--
-- Table structure for table `especiezonageografica`
--

CREATE TABLE `especiezonageografica` (
  `IdEspecie` int(11) NOT NULL,
  `IdZona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `especiezonageografica`
--

INSERT INTO `especiezonageografica` (`IdEspecie`, `IdZona`) VALUES
(4, 2),
(5, 1),
(7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `favorito`
--

CREATE TABLE `favorito` (
  `fk_IdEspecie` int(11) NOT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `esFavorito` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorito`
--

INSERT INTO `favorito` (`fk_IdEspecie`, `fk_IdUsuario`, `esFavorito`) VALUES
(4, 2, 1),
(5, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `foro`
--

CREATE TABLE `foro` (
  `IdForo` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `foro`
--

INSERT INTO `foro` (`IdForo`, `titulo`, `descripcion`) VALUES
(1, 'Conservación de Especies Nativas', 'Discusión sobre la protección de la biodiversidad chilena.');

-- --------------------------------------------------------

--
-- Table structure for table `noticia`
--

CREATE TABLE `noticia` (
  `IdNoticia` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `resumen` text DEFAULT NULL,
  `urlOrigen` text DEFAULT NULL,
  `fechaPublicacion` date DEFAULT NULL,
  `imgNoticia` varchar(255) DEFAULT NULL,
  `fuente` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `noticia`
--

INSERT INTO `noticia` (`IdNoticia`, `titulo`, `resumen`, `urlOrigen`, `fechaPublicacion`, `imgNoticia`, `fuente`) VALUES
(1, 'Descubren nueva población de Sapito de Darwin', 'Investigadores hallan ejemplares en la Región de Los Ríos.', 'https://www.dw.com/es/descubren-nueva-poblaci%C3%B3n-de-sapito-de-darwin-en-chile/a-68842737', '2025-05-15', 'news_ranitadarwin00.jpg', 'DW.com'),
(4, 'Puma avistado cerca de zonas urbanas', 'Autoridades llaman a la precaución tras avistamientos.', 'https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2023/12/05/puma-es-avistado-caminando-en-calle-de-penalolen-durante-la-noche.shtml', '2025-02-05', 'news_puma00.jpg', 'BioBio Chile'),
(5, 'Monito del monte en peligro crítico', 'Estudios revelan disminución drástica en su población.', 'https://www.latercera.com/que-pasa/noticia/monito-del-monte-en-peligro-critico-de-extincion-unico-en-su-clase-y-exclusivo-de-chile/FHGV6SZ4N5G33MWCS3BOJ4R4UM/', '2025-01-25', 'monitoMonte00.jpg', 'La Tercera'),
(6, 'Ratón orejudo enfrenta nuevas amenazas', 'Cambio climático afecta su hábitat en la Patagonia.', 'https://www.biobiochile.cl/noticias/ciencia-y-tecnologia/ciencia/2023/10/11/cambio-climatico-y-perdida-de-habitat-amenazan-al-raton-orejudo-un-roedor-unico-en-chile.shtml', '2025-05-01', 'ratonOrejudo00.jpg', 'BioBio Chile'),
(11, 'Titulado estudió los nidos de los cóndores para titularse', 'Tomás Dillon investigó los nidos del cóndor andino para su tesis, identificando que factores como altura y pendiente son cruciales para su nidificación. Los hallazgos ayudan en la conservación de la especie.', 'https://forestal.uchile.cl/noticias/224628/titulado-estudio-los-nidos-de-los-condores-para-titularse?utm_source=chatgpt.com', '2024-12-20', 'news_condor00.jpeg', 'Universidad de Chile');

-- --------------------------------------------------------

--
-- Table structure for table `perfil`
--

CREATE TABLE `perfil` (
  `id_perfil` int(11) NOT NULL,
  `tipo_perfil` text NOT NULL,
  `foto` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perfil`
--

INSERT INTO `perfil` (`id_perfil`, `tipo_perfil`, `foto`, `descripcion`) VALUES
(0, 'Administrador', 'admin.jpg', 'Usuario con privilegios administrativos completos.'),
(1, 'Investigador', 'foto1.jpg', 'Especialista en flora nativa de Chile.'),
(2, 'Naturalista', 'foto2.jpg', 'Apasionado por la fauna chilena.');

-- --------------------------------------------------------

--
-- Table structure for table `publicacion`
--

CREATE TABLE `publicacion` (
  `IdPublicacion` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` date DEFAULT NULL,
  `fk_IdUsuario` int(11) NOT NULL,
  `fk_IdForo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publicacion`
--

INSERT INTO `publicacion` (`IdPublicacion`, `contenido`, `fecha`, `fk_IdUsuario`, `fk_IdForo`) VALUES
(1, 'La Araucaria es fundamental para los ecosistemas andinos.', '2025-05-20', 1, 1),
(2, 'El Alerce es un símbolo de longevidad en nuestros bosques.', '2025-05-21', 1, 1),
(3, 'Preocupante situación del Sapito de Darwin en el sur.', '2025-05-22', 2, 1),
(4, 'El Puma y su interacción con zonas urbanas.', '2025-05-23', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `correo` text NOT NULL,
  `contrasena` text NOT NULL,
  `nomUsuario` text NOT NULL,
  `id_perfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `correo`, `contrasena`, `nomUsuario`, `id_perfil`) VALUES
(1, 'ana.perez@example.com', 'contrasena123', 'AnaPerez', 1),
(2, 'carlos.lopez@example.com', 'contrasena456', 'CarlosLopez', 2),
(3, 'edu@hola.com', '$2b$10$kilI6kZqtLhNQaMIEis6fOmXbvX.cBnWLW6ARLvWuHewsKTwoQabm', 'edu', 0);

-- --------------------------------------------------------

--
-- Table structure for table `zonageografica`
--

CREATE TABLE `zonageografica` (
  `IdZona` int(11) NOT NULL,
  `nomZona` text NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zonageografica`
--

INSERT INTO `zonageografica` (`IdZona`, `nomZona`, `descripcion`) VALUES
(1, 'Zona Central', 'Región comprendida entre Valparaíso y el Biobío.'),
(2, 'Zona Sur', 'Región comprendida entre La Araucanía y Los Lagos.'),
(3, 'Zona Austral', 'Región comprendida entre Aysén y Magallanes.'),
(4, 'Zona Norte', 'Región comprendida entre Arica y Coquimbo.'),
(5, 'Zona Antártica', 'Territorio chileno en la Antártida.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amenaza`
--
ALTER TABLE `amenaza`
  ADD PRIMARY KEY (`IdAmenaza`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IdCategoria`);

--
-- Indexes for table `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`IdComentario`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`),
  ADD KEY `fk_IdPublicacion` (`fk_IdPublicacion`);

--
-- Indexes for table `contenidovisual`
--
ALTER TABLE `contenidovisual`
  ADD PRIMARY KEY (`IdContenido`);

--
-- Indexes for table `especie`
--
ALTER TABLE `especie`
  ADD PRIMARY KEY (`IdEspecie`),
  ADD KEY `fk_especie_categoria` (`IdCategoria`);

--
-- Indexes for table `especieamenaza`
--
ALTER TABLE `especieamenaza`
  ADD PRIMARY KEY (`IdEspecie`,`IdAmenaza`),
  ADD KEY `IdAmenaza` (`IdAmenaza`);

--
-- Indexes for table `especiecontenidovisual`
--
ALTER TABLE `especiecontenidovisual`
  ADD PRIMARY KEY (`IdEspecie`,`IdContenido`),
  ADD KEY `IdContenido` (`IdContenido`);

--
-- Indexes for table `especienoticia`
--
ALTER TABLE `especienoticia`
  ADD PRIMARY KEY (`IdEspecie`,`IdNoticia`),
  ADD KEY `IdNoticia` (`IdNoticia`);

--
-- Indexes for table `especiezonageografica`
--
ALTER TABLE `especiezonageografica`
  ADD PRIMARY KEY (`IdEspecie`,`IdZona`),
  ADD KEY `IdZona` (`IdZona`);

--
-- Indexes for table `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`fk_IdEspecie`,`fk_IdUsuario`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`);

--
-- Indexes for table `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`IdForo`);

--
-- Indexes for table `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`IdNoticia`);

--
-- Indexes for table `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id_perfil`);

--
-- Indexes for table `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`IdPublicacion`),
  ADD KEY `fk_IdUsuario` (`fk_IdUsuario`),
  ADD KEY `fk_IdForo` (`fk_IdForo`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD KEY `id_perfil` (`id_perfil`);

--
-- Indexes for table `zonageografica`
--
ALTER TABLE `zonageografica`
  ADD PRIMARY KEY (`IdZona`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amenaza`
--
ALTER TABLE `amenaza`
  MODIFY `IdAmenaza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `comentario`
--
ALTER TABLE `comentario`
  MODIFY `IdComentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contenidovisual`
--
ALTER TABLE `contenidovisual`
  MODIFY `IdContenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `especie`
--
ALTER TABLE `especie`
  MODIFY `IdEspecie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `foro`
--
ALTER TABLE `foro`
  MODIFY `IdForo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `noticia`
--
ALTER TABLE `noticia`
  MODIFY `IdNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `IdPublicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zonageografica`
--
ALTER TABLE `zonageografica`
  MODIFY `IdZona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`fk_IdPublicacion`) REFERENCES `publicacion` (`IdPublicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `especie`
--
ALTER TABLE `especie`
  ADD CONSTRAINT `fk_especie_categoria` FOREIGN KEY (`IdCategoria`) REFERENCES `categoria` (`IdCategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `especieamenaza`
--
ALTER TABLE `especieamenaza`
  ADD CONSTRAINT `especieamenaza_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especieamenaza_ibfk_2` FOREIGN KEY (`IdAmenaza`) REFERENCES `amenaza` (`IdAmenaza`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `especiecontenidovisual`
--
ALTER TABLE `especiecontenidovisual`
  ADD CONSTRAINT `especiecontenidovisual_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especiecontenidovisual_ibfk_2` FOREIGN KEY (`IdContenido`) REFERENCES `contenidovisual` (`IdContenido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `especienoticia`
--
ALTER TABLE `especienoticia`
  ADD CONSTRAINT `especienoticia_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especienoticia_ibfk_2` FOREIGN KEY (`IdNoticia`) REFERENCES `noticia` (`IdNoticia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `especiezonageografica`
--
ALTER TABLE `especiezonageografica`
  ADD CONSTRAINT `especiezonageografica_ibfk_1` FOREIGN KEY (`IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `especiezonageografica_ibfk_2` FOREIGN KEY (`IdZona`) REFERENCES `zonageografica` (`IdZona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `favorito_ibfk_1` FOREIGN KEY (`fk_IdEspecie`) REFERENCES `especie` (`IdEspecie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorito_ibfk_2` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`fk_IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `publicacion_ibfk_2` FOREIGN KEY (`fk_IdForo`) REFERENCES `foro` (`IdForo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_perfil`) REFERENCES `perfil` (`id_perfil`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
