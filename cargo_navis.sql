-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2019 at 10:23 AM
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
(3, 'GLDU3663369', '20DV', 2, '0000-00-00 00:00:00'),
(4, 'TRHU1970528 ', '20DV', 2, '0000-00-00 00:00:00'),
(5, 'MEDU3668418', '20DV', 2, '0000-00-00 00:00:00'),
(7, 'sdasdads', '20DV', 3, '2019-03-03 17:37:25'),
(8, 'asdasda', '20DV', 3, '2019-03-03 17:37:25'),
(9, 'asdadsa', '20DV', 3, '2019-03-03 17:37:25'),
(22, 'con1', '20DV', 8, '2019-03-03 20:15:09'),
(23, 'con2', '20DV', 8, '2019-03-03 20:15:09'),
(28, 'con4', '40DV', 8, '2019-03-03 20:15:37'),
(29, '1', '20DV', 11, '2019-03-08 00:48:47'),
(30, '2', '20DV', 11, '2019-03-08 00:48:47'),
(31, '3', '20DV', 11, '2019-03-08 00:48:47'),
(32, '4', '20DV', 11, '2019-03-08 00:48:47'),
(33, '5', '20DV', 11, '2019-03-08 00:48:48'),
(34, '6', '40DV', 11, '2019-03-08 00:48:48'),
(35, '7', '40DV', 11, '2019-03-08 00:48:48'),
(36, '8', '40DV', 11, '2019-03-08 00:48:48'),
(37, '9', '40DV', 11, '2019-03-08 00:48:48'),
(38, '0', '40DV', 11, '2019-03-08 00:48:48'),
(56, '1', '20DV', 12, '2019-03-19 00:21:27'),
(57, '2', '20DV', 12, '2019-03-19 00:21:28'),
(58, '3', '20DV', 12, '2019-03-19 00:21:28'),
(59, '4', '20DV', 12, '2019-03-19 00:21:28'),
(60, '5', '20DV', 12, '2019-03-19 00:21:28'),
(61, '1', '20DV', 12, '2019-03-19 00:22:33'),
(62, '2', '20DV', 12, '2019-03-19 00:22:33'),
(63, '3', '20DV', 12, '2019-03-19 00:22:33'),
(64, '4', '20DV', 12, '2019-03-19 00:22:33'),
(65, '1', '20DV', 13, '2019-03-19 00:23:55'),
(66, '2', '20DV', 13, '2019-03-19 00:23:55'),
(67, '3', '20DV', 13, '2019-03-19 00:23:55'),
(68, '4', '20DV', 13, '2019-03-19 00:23:55'),
(69, 'a', '40DV', 13, '2019-03-19 00:23:55'),
(70, 's', '40DV', 13, '2019-03-19 00:23:55'),
(71, 'd', '40DV', 13, '2019-03-19 00:23:55'),
(72, 'f', '40DV', 13, '2019-03-19 00:23:55'),
(85, '2', '20DV', 13, '2019-03-19 00:29:51'),
(86, '3', '20DV', 13, '2019-03-19 00:29:51'),
(87, '4', '20DV', 13, '2019-03-19 00:29:51'),
(88, '5', '20DV', 13, '2019-03-19 00:29:51'),
(89, '', '20DV', 13, '2019-03-19 00:29:51'),
(90, '1', '20DV', 13, '2019-03-19 00:30:01'),
(91, '2', '20DV', 13, '2019-03-19 00:30:01'),
(92, '3', '20DV', 13, '2019-03-19 00:30:01'),
(98, 'hjkhjkh', '20DV', 24, '2019-03-26 23:22:22'),
(99, 'asdadsa', '20DV', 0, '2019-04-03 10:44:10'),
(100, 'sdasdasda', '20DV', 0, '2019-04-03 10:44:10'),
(101, 'sadsasd', '20DV', 5, '2019-04-15 11:38:55'),
(102, 'asdasda', '20DV', 5, '2019-04-15 11:38:55'),
(103, 'asdasda', '20DV', 5, '2019-04-15 11:38:55'),
(109, 'dfgdfgdfgd', '45HC', 1, '2019-04-16 12:58:08'),
(111, 'ghjgjhg', '45HCPW', 6, '2019-04-16 10:09:36'),
(112, 'ghjgjhg', '45HCPW', 6, '2019-04-16 10:09:36'),
(113, 'ghghjgj', '45HCPW', 6, '2019-04-16 10:09:36');

-- --------------------------------------------------------

--
-- Table structure for table `fakture_ulaz`
--

CREATE TABLE `fakture_ulaz` (
  `id` int(32) NOT NULL,
  `ulaz_provajder` varchar(100) NOT NULL,
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

INSERT INTO `fakture_ulaz` (`id`, `ulaz_provajder`, `broj_fakture`, `datum_fakture`, `valuta_placanja`, `iznos_s_val`, `iznos`, `id_jobs`, `job_date`) VALUES
(5, '', '111 112/18', '2018-03-04', 'EUR', '1199.88', '2346.00', 1, '0000-00-00 00:00:00'),
(17, '', '123, 124, 125/18', '2018-03-26', 'EUR', '2935.08', '3784.68', 2, '2019-02-03 18:54:57'),
(22, '', 'neka faktura', '2019-03-13', 'EUR', '2000.00', '3911.66', 8, '2019-03-03 20:13:13'),
(25, '121231', '', '0000-00-00', 'EUR', '1212.00', '2370.47', 8, '2019-03-03 20:55:08'),
(27, 'werwrw', '', '0000-00-00', 'KM', '0.00', '0.00', 13, '2019-03-24 23:58:08'),
(29, 'sdsdfs', '', '0000-00-00', 'KM', '0.00', '0.00', 2, '2019-04-04 01:28:02'),
(30, 'sdsdfs', '', '0000-00-00', 'KM', '0.00', '0.00', 2, '2019-04-04 01:28:41'),
(31, 'sdsdfs', '', '0000-00-00', 'KM', '0.00', '0.00', 2, '2019-04-04 01:29:15'),
(32, 'sdsdfs', '', '0000-00-00', 'KM', '0.00', '0.00', 2, '2019-04-04 01:29:35'),
(33, 'asadsa', '', '0000-00-00', 'KM', '0.00', '0.00', 1, '2019-04-14 11:37:35'),
(34, 'asadsa', '', '0000-00-00', 'KM', '0.00', '0.00', 1, '2019-04-14 11:37:36'),
(35, 'asadsa', '', '0000-00-00', 'KM', '0.00', '0.00', 1, '2019-04-14 11:37:37'),
(36, 'provajder', '12.456/435', '2019-10-10', 'EUR', '1000.00', '1955.83', 1, '2019-04-15 11:47:30');

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
(16, '008/18', '2018-03-23', '9094.61', 2, '2019-02-03 18:56:27'),
(18, 'dsadas', '0000-00-00', '2000.00', 8, '2019-03-03 20:13:22'),
(21, 'sdfsdfs', '0000-00-00', '323243.00', 11, '2019-03-25 00:09:18'),
(23, '5656', '0000-00-00', '56565.00', 11, '2019-03-26 19:19:05'),
(24, 'cvcbvcbvc', '0000-00-00', '0.00', 1, '2019-04-05 11:12:52');

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
(1, 'MLADEGS-PAK DOO Prnjavor', 'DAP', 'nije definisano', '', 'XINGANG', 'PRNJAVOR', '2017-11-26', '2018-02-04', '1000', '2000', '2019-01-23 14:02:54'),
(2, 'ENMON', 'DAP', 'asada', '', 'Valencie ', 'Ramici', '2017-09-01', '2017-12-30', '10000', '12000', '2019-01-24 02:38:40'),
(5, 'Komitent', 'FCA', 'JDKLFJSDLKFJ', '4234235', 'Banja Luka', 'Luka Banja', '2018-12-10', '2019-02-09', '0', '0', '2019-04-15 11:48:29'),
(6, 'komitent2', 'CFR', 'jhjkhjk', '', 'Banja luka', '', '2017-09-10', '0000-00-00', '0', '0', '2019-04-16 10:09:17');

-- --------------------------------------------------------

--
-- Table structure for table `provajderi`
--

CREATE TABLE `provajderi` (
  `id` int(11) NOT NULL,
  `provajder_name` varchar(100) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provajderi`
--

INSERT INTO `provajderi` (`id`, `provajder_name`, `job_date`) VALUES
(10, 'asd', '0000-00-00 00:00:00'),
(12, 'asda', '0000-00-00 00:00:00'),
(14, 'xzse', '0000-00-00 00:00:00'),
(15, 'awdsz', '0000-00-00 00:00:00'),
(16, 'asesac', '0000-00-00 00:00:00'),
(24, 'asdad', '0000-00-00 00:00:00'),
(28, 'asdaa', '0000-00-00 00:00:00'),
(29, 'asdas', '2019-04-15 12:09:42'),
(32, 'axasdx', '2019-04-15 12:12:22'),
(36, 'sdsdfc', '2019-04-15 12:13:04'),
(38, 'asdsa', '2019-04-15 12:13:58'),
(43, 'xzczs', '2019-04-15 12:17:18'),
(45, 'zxszwwa', '2019-04-15 12:56:58'),
(46, 'asdzw', '2019-04-15 12:57:43'),
(47, 'asdzwa', '2019-04-15 12:58:15'),
(48, 'zwewaw', '2019-04-15 12:58:24'),
(49, 'asawdz', '2019-04-15 12:59:18'),
(50, 'Intergral', '2019-04-15 11:49:00'),
(51, 'provajder1', '2019-04-16 12:58:29'),
(52, 'provajer2', '2019-04-16 12:58:43'),
(53, 'provajder3', '2019-04-16 12:58:58'),
(54, 'provajder', '2019-04-16 10:09:29');

-- --------------------------------------------------------

--
-- Table structure for table `provajderi_po_poslu`
--

CREATE TABLE `provajderi_po_poslu` (
  `id` int(11) NOT NULL,
  `provajder_id` int(11) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `dogovorena_cijena` decimal(32,2) NOT NULL,
  `valuta_placanja` varchar(10) NOT NULL,
  `note` varchar(1000) NOT NULL,
  `job_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provajderi_po_poslu`
--

INSERT INTO `provajderi_po_poslu` (`id`, `provajder_id`, `jobs_id`, `dogovorena_cijena`, `valuta_placanja`, `note`, `job_date`) VALUES
(16, 0, 38, '0.00', 'KM', '', '2019-04-15 12:14:14'),
(17, 0, 38, '0.00', 'KM', '', '2019-04-15 12:15:42'),
(26, 51, 1, '1000.00', 'KM', '', '2019-04-16 12:58:29'),
(27, 52, 1, '1200.00', 'EUR', '', '2019-04-16 12:58:43'),
(28, 53, 1, '900.00', 'USD', '', '2019-04-16 12:58:58'),
(29, 54, 6, '1000.00', 'USD', 'gjhgjhg', '2019-04-16 10:09:29');

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `provajder_name` (`provajder_name`);

--
-- Indexes for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `containers`
--
ALTER TABLE `containers`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `fakture_ulaz`
--
ALTER TABLE `fakture_ulaz`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `izlazne_fakture`
--
ALTER TABLE `izlazne_fakture`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `provajderi`
--
ALTER TABLE `provajderi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `provajderi_po_poslu`
--
ALTER TABLE `provajderi_po_poslu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
