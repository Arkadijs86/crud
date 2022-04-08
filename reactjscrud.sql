-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2022 at 11:37 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactjscrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `ctext` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`cid`, `pid`, `uname`, `ctext`, `date`) VALUES
(1, 3, 'dsdasddas', 'asdasdasd', '2022-04-08'),
(2, 3, 'gfgfg', 'gfgfgfd', '2022-04-08'),
(3, 7, 'fdfdfd', 'fdfdfdfdf', '2022-04-08'),
(4, 7, 'fff', 'fff', '2022-04-08'),
(5, 11, 'hhh', 'xxx', '2022-04-08'),
(6, 3, 'xxx', 'ccccc', '2022-04-08'),
(7, 3, '333', '333', '2022-04-08');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `text` varchar(255) NOT NULL,
  `category` varchar(30) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `text`, `category`, `date`) VALUES
(2, 'dssdsd', 'sdsds', 'sdsds', '0000-00-00'),
(3, 'dssdsd', 'sdsds', 'sdsds', '2022-04-08'),
(4, 'dssdsd', 'sdsds', 'sdsds', '2022-04-08'),
(5, 'dssdsd', 'sdsds', 'sdsds', '2022-04-08'),
(6, 'dssdsd', 'sdsds', 'cat 2', '2022-04-08'),
(7, 'fddfdf', 'dfdfdf', '', '2022-04-08'),
(8, 'dsdasdas', 'dasdasdasda', 'cat 2', '2022-04-08'),
(10, 'dsadsa', 'dasdasd', 'cat 1', '2022-04-08'),
(11, 'jjjjjjjjjjjjj', 'jjjjjjjjjjjjjjjjjjjjjjjjjj', 'cat 2', '2022-04-08'),
(12, '', 'sdsds', '', '2022-04-08'),
(13, 'dsdsds', 'dsdsds', 'cat 1', '2022-04-08'),
(14, 'ddsfsdf', 'fdsfdsfsfdsfsdfdsfdsfdsfs', 'cat 1', '2022-04-08'),
(15, 'd', 'd', 'cat 2', '2022-04-08'),
(16, 'd', 'd', 'cat 2', '2022-04-08'),
(17, 'fgfgdf', 'gfdgdfgdf', 'cat 1', '2022-04-06'),
(18, 'dssdsd', 'xxxxxxxxxxxxxxx', 'cat 2', '2022-04-08'),
(19, 'sdsdsd', 'sdsdasd', 'cat 2', '2022-04-08'),
(20, 'dsdsd', 'sdsds', 'cat 1', '2022-04-08'),
(21, 'bbbbbbbbbbb', 'bbbbbbbbbbbb', 'cat 2', '2022-04-08'),
(22, 'sadasdas', 'ddsadasda', 'cat 1', '2022-04-08'),
(23, 'dwdwa', 'wadawawda', 'cat 1', '2022-04-08'),
(24, 'dasdasd', 'sadasdasd', 'cat 1', '2022-04-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
