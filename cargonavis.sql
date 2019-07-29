-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2019 at 12:17 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cargonavis`
--

-- --------------------------------------------------------

--
-- Table structure for table `izlazne_fakture`
--

CREATE TABLE `izlazne_fakture` (
  `id_izlazne_fakture` int(11) NOT NULL,
  `broj_fakture` varchar(50) NOT NULL,
  `datum_fakture` date NOT NULL,
  `valuta_fakture` date NOT NULL,
  `datum_kreiranja` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_naloga` int(11) NOT NULL,
  `iznos` decimal(50,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kontejneri`
--

CREATE TABLE `kontejneri` (
  `id_kontejnera` int(11) NOT NULL,
  `broj_kontejnera` varchar(15) NOT NULL,
  `vrsta_kontejnera` varchar(50) NOT NULL,
  `id_naloga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `partneri`
--

CREATE TABLE `partneri` (
  `id_partneri` int(11) NOT NULL,
  `ime_partnera` varchar(50) NOT NULL,
  `drzava` varchar(50) NOT NULL,
  `grad` varchar(50) DEFAULT NULL,
  `adresa` varchar(100) DEFAULT NULL,
  `broj_telefona` varchar(30) DEFAULT NULL,
  `partneri_napomena` varchar(350) DEFAULT NULL,
  `tip_suradnje` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `partneri`
--

INSERT INTO `partneri` (`id_partneri`, `ime_partnera`, `drzava`, `grad`, `adresa`, `broj_telefona`, `partneri_napomena`, `tip_suradnje`) VALUES
(8, 'Petar', '', 'Banja Luka', 'Cara Dusana', '65432543', ' ', 0),
(9, 'fgfhgfh', '', '', '', '', NULL, 0),
(10, 'hello there', '', '', '', '', NULL, 0),
(11, 'someone', '', '', '', '', NULL, 1),
(12, 'partner5', '', '', '', '', NULL, 1),
(13, 'jkljlkj', '', '', '', '', NULL, 1),
(14, 'hjkhjkh', '', '', '', '', NULL, 0),
(17, 'sdfsdfsdfs', '', '', '', '', NULL, 2),
(18, '12345', '', '', '', '', NULL, 1),
(19, '12345567', '', '', '', '', NULL, 1),
(20, 'sdfs4343', 'sdfsfsfs', 'sdfsdfs', 'sdfsdfsdfs', '343543', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `poslovi`
--

CREATE TABLE `poslovi` (
  `id` int(11) NOT NULL,
  `id_partneri` int(11) NOT NULL,
  `paritent` varchar(20) NOT NULL,
  `bl` varchar(50) NOT NULL,
  `bl2` varchar(50) NOT NULL,
  `luka_polazka` varchar(50) NOT NULL,
  `luka_dolaska` varchar(50) NOT NULL,
  `datum_polaska` date NOT NULL,
  `datum_dolaska` date NOT NULL,
  `napomena` varchar(500) NOT NULL,
  `datum_ponude` date NOT NULL,
  `kreirano` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `poslovi`
--

INSERT INTO `poslovi` (`id`, `id_partneri`, `paritent`, `bl`, `bl2`, `luka_polazka`, `luka_dolaska`, `datum_polaska`, `datum_dolaska`, `napomena`, `datum_ponude`, `kreirano`) VALUES
(12, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:46'),
(19, 8, 'DAP', '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:43:27'),
(25, 17, 'DAP', '5675675', '5656565', 'fgfhgfghf', 'gfghfghf', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-07-01 23:33:37');

-- --------------------------------------------------------

--
-- Table structure for table `provajderi_po_poslu`
--

CREATE TABLE `provajderi_po_poslu` (
  `id_provajdera_po_poslu` int(11) NOT NULL,
  `id_provajdera` int(11) NOT NULL,
  `id_naloga` int(11) NOT NULL,
  `cijena` decimal(50,2) NOT NULL,
  `valuta` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ulazne_fakture`
--

CREATE TABLE `ulazne_fakture` (
  `id_ulazne_fakture` int(11) NOT NULL,
  `broj_ulazne_fakture` varchar(20) NOT NULL,
  `id_provajdera` int(11) NOT NULL,
  `id_naloga` int(11) NOT NULL,
  `datum_fakture` date NOT NULL,
  `valuta_fakture` date NOT NULL,
  `valuta_placanja` varchar(10) NOT NULL,
  `iznos_strana_valuta` decimal(50,2) NOT NULL,
  `iznos_domaca_valuta` decimal(50,2) NOT NULL,
  `datum_kreiranja_fakture` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ulazne_fakture`
--

INSERT INTO `ulazne_fakture` (`id_ulazne_fakture`, `broj_ulazne_fakture`, `id_provajdera`, `id_naloga`, `datum_fakture`, `valuta_fakture`, `valuta_placanja`, `iznos_strana_valuta`, `iznos_domaca_valuta`, `datum_kreiranja_fakture`) VALUES
(16, '676876', 13, 12, '0000-00-00', '0000-00-00', 'KM', '0.00', '0.00', '2019-07-02 00:07:27'),
(17, '343543543', 18, 19, '0000-00-00', '0000-00-00', 'KM', '0.00', '0.00', '2019-07-02 00:10:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  ADD PRIMARY KEY (`id_izlazne_fakture`),
  ADD KEY `id` (`id_naloga`);

--
-- Indexes for table `kontejneri`
--
ALTER TABLE `kontejneri`
  ADD PRIMARY KEY (`id_kontejnera`),
  ADD KEY `id` (`id_naloga`);

--
-- Indexes for table `partneri`
--
ALTER TABLE `partneri`
  ADD PRIMARY KEY (`id_partneri`),
  ADD UNIQUE KEY `ime_partnera` (`ime_partnera`);

--
-- Indexes for table `poslovi`
--
ALTER TABLE `poslovi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_partneri` (`id_partneri`);

--
-- Indexes for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  ADD PRIMARY KEY (`id_provajdera_po_poslu`),
  ADD KEY `id_partnera` (`id_provajdera`),
  ADD KEY `id_naloga` (`id_naloga`);

--
-- Indexes for table `ulazne_fakture`
--
ALTER TABLE `ulazne_fakture`
  ADD PRIMARY KEY (`id_ulazne_fakture`),
  ADD KEY `id_partneri` (`id_provajdera`),
  ADD KEY `id` (`id_naloga`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  MODIFY `id_izlazne_fakture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kontejneri`
--
ALTER TABLE `kontejneri`
  MODIFY `id_kontejnera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `partneri`
--
ALTER TABLE `partneri`
  MODIFY `id_partneri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `poslovi`
--
ALTER TABLE `poslovi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  MODIFY `id_provajdera_po_poslu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `ulazne_fakture`
--
ALTER TABLE `ulazne_fakture`
  MODIFY `id_ulazne_fakture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  ADD CONSTRAINT `izlazne_fakture_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kontejneri`
--
ALTER TABLE `kontejneri`
  ADD CONSTRAINT `kontejneri_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `poslovi`
--
ALTER TABLE `poslovi`
  ADD CONSTRAINT `poslovi_ibfk_1` FOREIGN KEY (`id_partneri`) REFERENCES `partneri` (`id_partneri`);

--
-- Constraints for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  ADD CONSTRAINT `provajderi_po_poslu_ibfk_2` FOREIGN KEY (`id_provajdera`) REFERENCES `partneri` (`id_partneri`),
  ADD CONSTRAINT `provajderi_po_poslu_ibfk_3` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ulazne_fakture`
--
ALTER TABLE `ulazne_fakture`
  ADD CONSTRAINT `ulazne_fakture_ibfk_2` FOREIGN KEY (`id_provajdera`) REFERENCES `partneri` (`id_partneri`),
  ADD CONSTRAINT `ulazne_fakture_ibfk_3` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
