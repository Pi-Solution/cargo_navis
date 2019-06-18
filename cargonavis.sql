-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2019 at 02:54 PM
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

--
-- Dumping data for table `izlazne_fakture`
--

INSERT INTO `izlazne_fakture` (`id_izlazne_fakture`, `broj_fakture`, `datum_fakture`, `valuta_fakture`, `datum_kreiranja`, `id_naloga`, `iznos`) VALUES
(0, '232432', '2019-05-31', '2019-06-04', '2019-06-18 12:00:27', 5, '3434535.00'),
(0, '565675', '0000-00-00', '0000-00-00', '2019-06-18 12:07:48', 5, '7765675.00'),
(0, 'rtyry', '0000-00-00', '0000-00-00', '2019-06-18 12:08:42', 5, '56576576.00'),
(0, '3434', '0000-00-00', '0000-00-00', '2019-06-18 12:08:58', 5, '45454.00'),
(0, '565675', '0000-00-00', '0000-00-00', '2019-06-18 12:09:20', 5, '567565.00'),
(0, '34343', '0000-00-00', '0000-00-00', '2019-06-18 12:54:35', 6, '44343.00');

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

--
-- Dumping data for table `kontejneri`
--

INSERT INTO `kontejneri` (`id_kontejnera`, `broj_kontejnera`, `vrsta_kontejnera`, `id_naloga`) VALUES
(1, 'ghjgjh', '40HC', 5),
(2, 'ghjgjh', '40HC', 5),
(3, 'ghjgjh', '40HC', 5),
(4, 'ghjgjh', '40HC', 5),
(5, 'ghjgjh', '40HC', 5),
(6, 'ghjgjhg', '40DV', 5),
(7, 'ghjgjhg', '40DV', 5),
(8, 'ghjgjhg', '40DV', 5),
(9, 'gjhgjhg', '40PW', 5),
(10, 'gjhgjhg', '40PW', 5),
(11, 'gjhgjhg', '40PW', 5),
(12, 'hgjhgjh', '40 Flat rack container', 5),
(13, 'hgjhgjh', '40 Flat rack container', 5),
(14, 'hgjhgjh', '40 Flat rack container', 5),
(15, 'hgjhgjh', '40 Flat rack container', 5),
(16, 'hgjhgjh', '40 Flat rack container', 5),
(17, 'hgjhgjh', '40 Flat rack container', 5),
(18, 'sfd', '40PW', 5),
(19, 'fghfgf', 'Offshore TANK container', 5),
(20, 'gjhgjhgjg', '40HC', 5),
(21, 'fghfgf', 'Offshore TANK container', 5),
(22, 'fghfgf', 'Offshore TANK container', 5),
(23, 'sdfsdfsdf', '20RFHC', 5),
(24, 'asdasda', '40HC', 5),
(25, 'sdasdasda', '40HC', 5),
(26, 'sasasa', '40HC', 5),
(27, 'adsasdas', 'Special offshore', 5),
(28, 'sasaas', 'Special offshore', 5),
(29, 'sasdasda', 'Special offshore', 5),
(30, 'sdasdasda', 'Special offshore', 5),
(31, 'gfghfhg', '40HC', 6),
(32, 'fgfgfg', '40HC', 6),
(33, 'fgfgfgf', '40HC', 6);

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
(19, '12345567', '', '', '', '', NULL, 1);

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
(5, 8, 'DAB', 'JKLLKJKL', '789789789', 'HONG KONG', 'Banja Luka', '2018-12-12', '2019-10-12', 'ghgjhg', '2019-07-08', '2019-06-08 23:32:21'),
(6, 8, 'DAP', 'hjhjkhu', '565675765', 'HONG KONG', 'Banja Luka', '2019-06-09', '2019-06-04', '', '2019-06-20', '2019-06-09 22:25:49'),
(7, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', 'sdfsdfsasdasdasd\nkjhkljkljklj', '0000-00-00', '2019-06-09 22:28:41'),
(8, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:45'),
(9, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:45'),
(10, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:46'),
(11, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:46'),
(12, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:46'),
(13, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:47'),
(14, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:47'),
(15, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:47'),
(16, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:48'),
(17, 8, 'CFR', 'ghjgjhg', '5675675', 'ASD', 'DAS', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:28:48'),
(18, 8, 'DAP', 'ghgjhg', '', '565675', '5675765', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:42:48'),
(19, 8, 'DAP', '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:43:27'),
(20, 8, 'DAP', '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-09 22:49:13'),
(21, 8, 'DAP', 'dfgdfg', '546546', 'dfdfg', '564564', '2019-06-03', '2019-06-03', '', '2019-06-13', '2019-06-09 22:49:26'),
(22, 14, 'DAP', '', '', '', '', '0000-00-00', '0000-00-00', '', '0000-00-00', '2019-06-14 13:22:59');

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

--
-- Dumping data for table `provajderi_po_poslu`
--

INSERT INTO `provajderi_po_poslu` (`id_provajdera_po_poslu`, `id_provajdera`, `id_naloga`, `cijena`, `valuta`) VALUES
(4, 8, 5, '56.45', 'KM'),
(5, 8, 5, '77.45', 'KM'),
(6, 12, 5, '4546.00', 'KM'),
(7, 17, 5, '4564.57', 'EUR'),
(8, 12, 5, '4564.57', 'EUR'),
(9, 12, 5, '4564.57', 'EUR'),
(10, 12, 5, '4564.57', 'EUR'),
(11, 12, 5, '4564.57', 'EUR'),
(12, 12, 5, '4564.57', 'EUR'),
(13, 12, 5, '55675675.00', 'KM'),
(14, 12, 5, '55675675.00', 'KM'),
(15, 13, 5, '787897.00', 'KM'),
(16, 13, 6, '54544.00', 'KM'),
(17, 12, 5, '78787.00', 'KM');

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
(1, '3453543', 12, 5, '2019-06-04', '2019-06-18', 'KM', '232342.00', '232342.00', '2019-06-18 09:52:05'),
(2, '56567576', 12, 5, '2019-06-05', '2019-06-18', 'KM', '5656.00', '5656.00', '2019-06-18 10:05:43'),
(3, '545456', 13, 5, '2019-05-29', '2019-06-17', 'KM', '4343.00', '4343.00', '2019-06-18 10:07:51'),
(4, '56565', 12, 5, '2019-06-04', '2019-06-10', 'KM', '55454.00', '55454.00', '2019-06-18 10:09:15'),
(5, '6565', 13, 5, '2019-06-18', '2019-06-18', 'KM', '45454.00', '45454.00', '2019-06-18 10:10:05'),
(6, '5656', 12, 5, '2019-06-04', '2019-06-09', 'USD', '40.00', '56.00', '2019-06-18 10:11:02'),
(7, '76767', 11, 5, '2019-05-29', '2019-05-28', 'KM', '5656.00', '5656.00', '2019-06-18 10:20:00'),
(8, '5644656', 17, 5, '0000-00-00', '0000-00-00', 'KM', '454.00', '454.00', '2019-06-18 11:21:52'),
(9, '45454', 13, 8, '2019-06-05', '2019-06-04', 'KM', '23232.00', '23232.00', '2019-06-18 12:00:43'),
(10, '565675', 17, 8, '2019-05-30', '2019-06-11', 'KM', '56565.00', '56565.00', '2019-06-18 12:00:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
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
-- AUTO_INCREMENT for table `kontejneri`
--
ALTER TABLE `kontejneri`
  MODIFY `id_kontejnera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `partneri`
--
ALTER TABLE `partneri`
  MODIFY `id_partneri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `poslovi`
--
ALTER TABLE `poslovi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  MODIFY `id_provajdera_po_poslu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `ulazne_fakture`
--
ALTER TABLE `ulazne_fakture`
  MODIFY `id_ulazne_fakture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  ADD CONSTRAINT `izlazne_fakture_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`);

--
-- Constraints for table `kontejneri`
--
ALTER TABLE `kontejneri`
  ADD CONSTRAINT `kontejneri_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`);

--
-- Constraints for table `poslovi`
--
ALTER TABLE `poslovi`
  ADD CONSTRAINT `poslovi_ibfk_1` FOREIGN KEY (`id_partneri`) REFERENCES `partneri` (`id_partneri`);

--
-- Constraints for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  ADD CONSTRAINT `provajderi_po_poslu_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`),
  ADD CONSTRAINT `provajderi_po_poslu_ibfk_2` FOREIGN KEY (`id_provajdera`) REFERENCES `partneri` (`id_partneri`);

--
-- Constraints for table `ulazne_fakture`
--
ALTER TABLE `ulazne_fakture`
  ADD CONSTRAINT `ulazne_fakture_ibfk_1` FOREIGN KEY (`id_naloga`) REFERENCES `poslovi` (`id`),
  ADD CONSTRAINT `ulazne_fakture_ibfk_2` FOREIGN KEY (`id_provajdera`) REFERENCES `partneri` (`id_partneri`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
