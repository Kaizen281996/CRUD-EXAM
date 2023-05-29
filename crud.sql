-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 06:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(12) NOT NULL,
  `Age` int(20) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  `Month` varchar(10) NOT NULL,
  `Day` varchar(10) NOT NULL,
  `Year` varchar(10) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Firstname` varchar(100) NOT NULL,
  `Middlename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `Age`, `Address`, `Contact`, `Month`, `Day`, `Year`, `Lastname`, `Firstname`, `Middlename`) VALUES
(93, 26, 'MALOLOS, BULACAN', '09709399562', 'October', '28', '1996', 'HILARIO', 'JUSTINE', 'MALINGIN'),
(96, 26, 'MALOLOS, BULACAN', '09709399526', 'May', '30', '2023', 'SAMPLE', 'SAMPLE', 'SAMPLE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
