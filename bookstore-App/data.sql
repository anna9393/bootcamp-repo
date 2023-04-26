SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `bookinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE DATABASE IF NOT EXISTS bookinfo;

USE bookinfo;

CREATE TABLE IF NOT EXISTS `author` (
 `aut_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
 `aut_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `home_city` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`aut_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`aut_name`, `country`, `home_city`) VALUES
('William Norton', 'UK', 'Cambridge'),
('William Maugham', 'Canada', 'Toronto'),
('William Anthony', 'UK', 'Leeds'),
('S.B.Swaminathan', 'India', 'Bangalore'),
('Thomas Morgan', 'Germany', 'Arnsberg'),
('Thomas Merton', 'USA', 'New York'),
('Piers Gibson', 'UK', 'London'),
('Nikolai Dewey', 'USA', 'Atlanta'),
('Marquis de Ellis', 'Brazil', 'Rio De Janerio'),
('Joseph Milton', 'USA', 'Houston'),
('John Betjeman Hunter', 'Australia', 'Sydney'),
('Evan Hayek', 'Canada', 'Vancouver'),
('E. Howard', 'Australia', 'Adelaide'),
('C. J. Wilde', 'UK', 'London'),
('Butler Andre', 'USA', 'Florida');

-- --------------------------------------------------------

--
-- Table structure for table `book_mast`
--

CREATE TABLE IF NOT EXISTS `book_mast` (
 `book_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
 `book_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `isbn_no` varchar(15) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `cate_id` INTEGER UNSIGNED NOT NULL,
 `aut_id` INTEGER UNSIGNED NOT NULL,
 `pub_id` INTEGER UNSIGNED NOT NULL,
 `dt_of_pub` date NOT NULL DEFAULT '0000-00-00',
 `pub_lang` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
 `no_page` decimal(5,0) NOT NULL DEFAULT '0',
 `book_price` decimal(8,2) NOT NULL DEFAULT '0.00',
 PRIMARY KEY (`book_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_mast`
--

INSERT INTO `book_mast` (`book_name`, `isbn_no`, `cate_id`, `aut_id`, `pub_id`, `dt_of_pub`, `pub_lang`, `no_page`, `book_price`) VALUES
('Introduction to Electrodynamics', '0000979001', 'CA001', 'AUT001', 'P003', '2001-05-08', 'English', '201', '85.00'),
('Understanding of Steel Construction', '0000979002', 'CA002', 'AUT002', 'P001', '2003-07-15', 'English', '300', '105.50'),
('Guide to Networking', '0000979003', 'CA003', 'AUT003', 'P002', '2002-09-10', 'Hindi', '510', '200.00'),
('Transfer  of Heat and Mass', '0000979004', 'CA002', 'AUT004', 'P004', '2004-02-16', 'English', '600', '250.00'),
('Conceptual Physics', '0000979005', 'CA001', 'AUT005', 'P006', '2003-07-16', NULL, '345', '145.00'),
('Fundamentals of Heat', '0000979006', 'CA001', 'AUT006', 'P005', '2003-08-10', 'German', '247', '112.00'),
('Advanced 3d Graphics', '0000979007', 'CA003', 'AUT007', 'P002', '2004-02-16', 'Hindi', '165', '56.00'),
('Human Anatomy', '0000979008', 'CA005', 'AUT008', 'P006', '2001-05-17', 'German', '88', '50.50'),
('Mental Health Nursing', '0000979009', 'CA005', 'AUT009', 'P007', '2004-02-10', 'English', '350', '145.00'),
('Fundamentals of Thermodynamics', '0000979010', 'CA002', 'AUT010', 'P007', '2002-10-14', 'English', '400', '225.00'),
('The Experimental Analysis of Cat', '0000979011', 'CA004', 'AUT011', 'P005', '2007-06-09', 'French', '225', '95.00'),
('The Nature  of World', '0000979012', 'CA004', 'AUT005', 'P008', '2005-12-20', 'English', '350', '88.00'),
('Environment a Sustainable Future', '0000979013', 'CA004', 'AUT012', 'P001', '2003-10-27', 'German', '165', '100.00'),
('Concepts in Health', '0000979014', 'CA005', 'AUT013', 'P004', '2001-08-25', NULL, '320', '180.00'),
('Anatomy & Physiology', '0000979015', 'CA005', 'AUT014', 'P008', '2000-10-10', 'Hindi', '225', '135.00'),
('Networks and Telecommunications', '00009790_16', 'CA003', 'AUT015', 'P003', '2002-01-01', 'French', '95', '45.00');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
 `cate_id`INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
 `cate_descrip` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`cate_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cate_descrip`) VALUES
('Science'),
('Technology'),
('Computers'),
('Nature'),
('Medical');

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE IF NOT EXISTS `publisher` (
 `pub_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
 `pub_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `pub_city` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `country_office` varchar(25) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
 `no_of_branch` int(3) NOT NULL DEFAULT '0',
 `estd` date NOT NULL DEFAULT '0000-00-00',
 PRIMARY KEY (`pub_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`pub_name`, `pub_city`, `country`, `country_office`, `no_of_branch`, `estd`) VALUES
('Jex Max Publication', 'New York', 'USA', 'New York', 15, '1969-12-25'),
('BPP Publication', 'Mumbai', 'India', 'New Delhi', 10, '1985-10-01'),
('New Harrold Publication', 'Adelaide', 'Australia', 'Sydney', 6, '1975-09-05'),
('Ultra Press Inc.', 'London', 'UK', 'London', 8, '1948-07-10'),
('Mountain Publication', 'Houstan', 'USA', 'Sun Diego', 25, '1975-01-01'),
('Summer Night Publication', 'New York', 'USA', 'Atlanta', 10, '1990-12-10'),
('Pieterson Grp. of Publishers', 'Cambridge', 'UK', 'London', 6, '1950-07-15'),
('Novel Publisher Ltd.', 'New Delhi', 'India', 'Bangalore', 10, '2000-01-01');

-- --------------------------------------------------------