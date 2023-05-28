-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2023 at 07:01 PM
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
  `Name` varchar(100) NOT NULL,
  `Age` int(20) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  `Month` varchar(10) NOT NULL,
  `Day` varchar(10) NOT NULL,
  `Year` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `Name`, `Age`, `Address`, `Contact`, `Month`, `Day`, `Year`) VALUES
(71, 'fdff', 34, 'erfewr', '23424', 'Janaury', '02', '2011'),
(74, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(75, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(76, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(77, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(78, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(79, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(80, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(82, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(83, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(84, 'sample', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(85, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(86, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(87, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(88, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(89, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(90, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(91, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample'),
(92, 'fdff', 12, 'sample', 'sample', 'sample', 'sample', 'sample');

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
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
