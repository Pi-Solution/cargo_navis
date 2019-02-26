-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2019 at 10:07 AM
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
-- Database: `cargo_navis`
--

-- --------------------------------------------------------

--
-- Table structure for table `containers`
--

CREATE TABLE `containers` (
  `id` int(32) NOT NULL,
  `container_id` varchar(32) NOT NULL,
  `container_type` varchar(32) NOT NULL,
  `jobs_id` int(32) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `containers`
--

INSERT INTO `containers` (`id`, `container_id`, `container_type`, `jobs_id`, `job_date`) VALUES
(1, 'TEMU4357199', '20DV', 1, '0000-00-00 00:00:00'),
(2, 'DRYU2257454', '20DV', 1, '0000-00-00 00:00:00'),
(3, 'GLDU3663369', '20DV', 2, '0000-00-00 00:00:00'),
(4, 'TRHU1970528 ', '20DV', 2, '0000-00-00 00:00:00'),
(5, 'MEDU3668418', '20DV', 2, '0000-00-00 00:00:00'),
(6, 'ASDSDA132', '20VD', 3, '2019-02-24 11:12:23'),
(7, 'JKJLKJ343', '20VD', 3, '2019-02-24 11:12:23'),
(8, '2KJKJ3233', '20VD', 3, '2019-02-24 11:12:23'),
(9, 'dgfdfgd', '20VD', 6, '2019-02-25 23:55:32'),
(10, 'dfgdfgd', '20VD', 6, '2019-02-25 23:55:32'),
(11, 'dfgdgfd', '20VD', 6, '2019-02-25 23:55:32'),
(12, 'dfgdfgd', '20VD', 6, '2019-02-25 23:55:32'),
(13, 'dfgdfgd', '20VD', 6, '2019-02-25 23:55:32'),
(14, 'hkjhjkh', '20VD', 7, '2019-02-25 23:57:00'),
(15, 'hjkhjkh', '20VD', 7, '2019-02-25 23:57:00'),
(16, 'hjkhjkh', '20VD', 7, '2019-02-25 23:57:00'),
(17, 'hjkhkjh', '20VD', 7, '2019-02-25 23:57:00'),
(18, 'hjhjhhj', '20VD', 7, '2019-02-25 23:57:00'),
(19, 'sdfsfdsfd', '20VD', 8, '2019-02-26 01:36:26'),
(20, 'sdfsdfsdfs', '20VD', 8, '2019-02-26 01:36:26'),
(21, 'sdfsdfsfds', '20VD', 8, '2019-02-26 01:36:26'),
(22, 'dfsfsdfsdfd', '20VD', 3, '2019-02-26 09:36:43'),
(23, 'sdfsdfdfssf', '20VD', 3, '2019-02-26 09:36:43'),
(24, 'sdfsdfsdfdf', '20VD', 3, '2019-02-26 09:36:43'),
(25, 'dfsdfsdfffd', '20VD', 3, '2019-02-26 09:36:43'),
(26, 'sdfdfsdfsdf', '20VD', 3, '2019-02-26 09:36:43'),
(27, 'hgjhgjhgjhg', '40VD', 3, '2019-02-26 09:36:43'),
(28, 'ghjgjhgjhgjh', '40VD', 3, '2019-02-26 09:36:43'),
(29, '', '20VD', 3, '2019-02-26 09:36:43'),
(30, '', '20VD', 3, '2019-02-26 09:36:43'),
(31, '', '20VD', 3, '2019-02-26 09:36:43');

-- --------------------------------------------------------

--
-- Table structure for table `fakture_ulaz`
--

CREATE TABLE `fakture_ulaz` (
  `id` int(32) NOT NULL,
  `broj_fakture` varchar(32) NOT NULL,
  `datum_fakture` date NOT NULL,
  `valuta_placanja` varchar(32) NOT NULL,
  `iznos_s_val` decimal(15,2) NOT NULL,
  `iznos` decimal(15,2) NOT NULL,
  `id_jobs` int(32) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fakture_ulaz`
--

INSERT INTO `fakture_ulaz` (`id`, `broj_fakture`, `datum_fakture`, `valuta_placanja`, `iznos_s_val`, `iznos`, `id_jobs`, `job_date`) VALUES
(4, '112/IFD/1', '2018-03-04', 'EUR', '1590.00', '3109.77', 1, '0000-00-00 00:00:00'),
(5, '111 112/18', '2018-03-04', 'EUR', '1199.88', '2346.00', 1, '0000-00-00 00:00:00'),
(17, '123, 124, 125/18', '2018-03-26', 'EUR', '2935.08', '3784.68', 2, '2019-02-03 18:54:57');

-- --------------------------------------------------------

--
-- Table structure for table `izlazne_fakture`
--

CREATE TABLE `izlazne_fakture` (
  `id` int(32) NOT NULL,
  `broj_fakture` varchar(32) NOT NULL,
  `datum_fakture` date NOT NULL,
  `iznos` decimal(15,2) NOT NULL,
  `jobs_id` int(32) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `izlazne_fakture`
--

INSERT INTO `izlazne_fakture` (`id`, `broj_fakture`, `datum_fakture`, `iznos`, `jobs_id`, `job_date`) VALUES
(15, '4343', '2019-02-26', '232342.00', 1, '2019-02-03 16:40:51'),
(16, '008/18', '2018-03-23', '9094.61', 2, '2019-02-03 18:56:27');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(32) NOT NULL,
  `qkomitent` varchar(32) NOT NULL,
  `paritet` varchar(32) NOT NULL,
  `bl` varchar(32) NOT NULL,
  `bl2` varchar(32) NOT NULL,
  `port_from` varchar(32) NOT NULL,
  `port_to` varchar(32) NOT NULL,
  `port_from_date` date NOT NULL,
  `port_to_date` date NOT NULL,
  `price_in` decimal(20,0) NOT NULL,
  `price_out` decimal(20,0) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `qkomitent`, `paritet`, `bl`, `bl2`, `port_from`, `port_to`, `port_from_date`, `port_to_date`, `price_in`, `price_out`, `job_date`) VALUES
(1, 'MLADEGS-PAK DOO Prnjavor', 'DAB', 'nije definisano', '', 'XINGANG', 'PRNJAVOR', '2017-11-26', '2018-02-04', '1000', '2000', '2019-01-23 14:02:54'),
(2, 'ENMON', 'DAB', 'Baldocer', '', 'Valencie ', 'Ramici', '2017-09-01', '2017-12-30', '10000', '12000', '2019-01-24 02:38:40');

-- --------------------------------------------------------

--
-- Table structure for table `provajderi`
--

CREATE TABLE `provajderi` (
  `id` int(32) NOT NULL,
  `provajeri_name` varchar(32) NOT NULL,
  `dogovorena_cijena` decimal(32,2) NOT NULL,
  `jobs_id` int(32) NOT NULL,
  `job_date` datetime NOT NULL,
  `note` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provajderi`
--

INSERT INTO `provajderi` (`id`, `provajeri_name`, `dogovorena_cijena`, `jobs_id`, `job_date`, `note`) VALUES
(1, 'PROFITRANS', '0.00', 1, '0000-00-00 00:00:00', ''),
(2, 'VUKMIR', '0.00', 1, '0000-00-00 00:00:00', 'Vec je sve placeno'),
(3, 'TRADE TRANS LOG', '0.00', 2, '0000-00-00 00:00:00', ''),
(4, 'VUKMIR', '0.00', 2, '0000-00-00 00:00:00', 'Nije jos plation'),
(88, 'provajder1', '2000.00', 3, '2019-02-24 11:12:11', 'ovo sada radi druze'),
(89, 'provajder2', '2000.00', 3, '2019-02-24 11:12:11', 'mislim druze da i ovo sad radi'),
(90, 'fgfg', '454.00', 6, '2019-02-25 23:55:24', ''),
(91, 'gfgf', '454.00', 6, '2019-02-25 23:55:24', ''),
(92, 'hjh', '0.00', 7, '2019-02-25 23:56:54', ''),
(93, 'hjhj', '0.00', 7, '2019-02-25 23:56:54', ''),
(94, 'hjh', '0.00', 7, '2019-02-25 23:56:54', ''),
(95, 'dfdfgd', '0.00', 8, '2019-02-26 01:36:20', ''),
(96, 'dfdfd', '0.00', 8, '2019-02-26 01:36:20', ''),
(97, 'dfd', '0.00', 8, '2019-02-26 01:36:20', ''),
(98, 'hjkhjkh', '78787.00', 3, '2019-02-26 09:35:42', ''),
(99, 'hgjg', '676.00', 3, '2019-02-26 09:35:42', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `containers`
--
ALTER TABLE `containers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fakture_ulaz`
--
ALTER TABLE `fakture_ulaz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provajderi`
--
ALTER TABLE `provajderi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `containers`
--
ALTER TABLE `containers`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `fakture_ulaz`
--
ALTER TABLE `fakture_ulaz`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `provajderi`
--
ALTER TABLE `provajderi`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
