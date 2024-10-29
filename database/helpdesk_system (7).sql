-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 10:47 AM
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
-- Database: `helpdesk_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chatId` int(11) NOT NULL,
  `ticketId` int(11) DEFAULT NULL,
  `chatLog` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chatId`, `ticketId`, `chatLog`, `createdAt`) VALUES
(8, 55, 'หมวย: ช่วยหน่อยนะคะ', '2024-10-26 10:35:57'),
(9, 55, 'staff: กำลังแก้ให้ครับ', '2024-10-26 10:42:50'),
(10, 60, 'asd: asd', '2024-10-29 09:29:46');

-- --------------------------------------------------------

--
-- Table structure for table `knowledgebase`
--

CREATE TABLE `knowledgebase` (
  `articleId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdBy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knowledgebase`
--

INSERT INTO `knowledgebase` (`articleId`, `title`, `content`, `createdBy`) VALUES
(1, 'How to reset password', 'To reset your password, go to the settings page and click on \"Reset Password\".', NULL),
(2, 'How to create a ticket', 'To create a ticket, click on \"Create Ticket\" and fill out the required fields.', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `permissionId` int(11) NOT NULL,
  `permissionName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`permissionId`, `permissionName`) VALUES
(4, 'Assign Ticket'),
(11, 'Chat'),
(1, 'Create Ticket'),
(3, 'Delete Ticket'),
(10, 'editQueue'),
(5, 'GenReport'),
(8, 'knowledgeBase'),
(6, 'ManageUsers'),
(9, 'SolveProblem'),
(7, 'TrackTicket'),
(12, 'Verify'),
(2, 'View Ticket');

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

CREATE TABLE `queue` (
  `queueId` int(11) NOT NULL,
  `priorityLevel` varchar(50) NOT NULL,
  `ticketId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `queue`
--

INSERT INTO `queue` (`queueId`, `priorityLevel`, `ticketId`) VALUES
(18, '2', 60),
(19, '1', 61),
(20, '3', 62),
(21, '4', 63);

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `reportId` int(11) NOT NULL,
  `reportType` varchar(50) NOT NULL,
  `reportData` text NOT NULL,
  `generatedBy` int(11) NOT NULL,
  `generated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`reportId`, `reportType`, `reportData`, `generatedBy`, `generated_at`) VALUES
(5, 'Ticket Queue', '[{\"queueId\":15,\"priorityLevel\":\"1\",\"ticketId\":57,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ฉันไม่แน่ใจว่าต้องตั้งค่าการแจ้งเตือนอย่างไรในระบบ ช่วยแนะนำขั้นตอนให้ฉันได้ไหมค่ะ/ครับ ขอบคุณค่ะ/ครับ!\\r\\n\\r\\n\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:01.000Z\",\"assignedBy\":null,\"solution\":null},{\"queueId\":16,\"priorityLevel\":\"2\",\"ticketId\":58,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ขณะนี้ฉันประสบปัญหากับระบบที่ไม่สามารถอัปโหลดเอกสารได้ รบกวนช่วยตรวจสอบให้ด้วยค่ะ/ครับ ขอบคุณค่ะ/ครับ!\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:10.000Z\",\"assignedBy\":null,\"solution\":null}]', 10, '2024-10-27 07:59:06'),
(6, 'Ticket Status', '[{\"ticketId\":55,\"status\":\"Closed\"},{\"ticketId\":56,\"status\":\"Closed\"},{\"ticketId\":57,\"status\":\"NEW\"},{\"ticketId\":58,\"status\":\"NEW\"}]', 10, '2024-10-27 08:03:19'),
(7, 'User Tickets', '[]', 10, '2024-10-27 08:03:21'),
(8, 'Ticket Queue', '[{\"queueId\":15,\"priorityLevel\":\"1\",\"ticketId\":57,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ฉันไม่แน่ใจว่าต้องตั้งค่าการแจ้งเตือนอย่างไรในระบบ ช่วยแนะนำขั้นตอนให้ฉันได้ไหมค่ะ/ครับ ขอบคุณค่ะ/ครับ!\\r\\n\\r\\n\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:01.000Z\",\"assignedBy\":null,\"solution\":null},{\"queueId\":16,\"priorityLevel\":\"2\",\"ticketId\":58,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ขณะนี้ฉันประสบปัญหากับระบบที่ไม่สามารถอัปโหลดเอกสารได้ รบกวนช่วยตรวจสอบให้ด้วยค่ะ/ครับ ขอบคุณค่ะ/ครับ!\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:10.000Z\",\"assignedBy\":null,\"solution\":null}]', 10, '2024-10-27 08:04:42'),
(9, 'Ticket Status', '[{\"ticketId\":55,\"status\":\"Closed\"},{\"ticketId\":56,\"status\":\"Closed\"},{\"ticketId\":57,\"status\":\"NEW\"},{\"ticketId\":58,\"status\":\"NEW\"}]', 10, '2024-10-27 08:04:43'),
(10, 'Assigned Tickets', '[]', 10, '2024-10-27 08:04:44'),
(11, 'Ticket Queue', '[{\"queueId\":15,\"priorityLevel\":\"1\",\"ticketId\":57,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ฉันไม่แน่ใจว่าต้องตั้งค่าการแจ้งเตือนอย่างไรในระบบ ช่วยแนะนำขั้นตอนให้ฉันได้ไหมค่ะ/ครับ ขอบคุณค่ะ/ครับ!\\r\\n\\r\\n\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:01.000Z\",\"assignedBy\":null,\"solution\":null},{\"queueId\":16,\"priorityLevel\":\"2\",\"ticketId\":58,\"userId\":12,\"description\":\"สวัสดีค่ะ/ครับ ขณะนี้ฉันประสบปัญหากับระบบที่ไม่สามารถอัปโหลดเอกสารได้ รบกวนช่วยตรวจสอบให้ด้วยค่ะ/ครับ ขอบคุณค่ะ/ครับ!\",\"status\":\"NEW\",\"createdDate\":\"2024-10-26T10:35:10.000Z\",\"assignedBy\":null,\"solution\":null}]', 10, '2024-10-27 08:07:07'),
(12, 'Ticket Status', '[{\"ticketId\":55,\"status\":\"Closed\"},{\"ticketId\":56,\"status\":\"Closed\"},{\"ticketId\":57,\"status\":\"NEW\"},{\"ticketId\":58,\"status\":\"NEW\"}]', 10, '2024-10-27 08:07:08');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleId` int(11) NOT NULL,
  `roleName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleId`, `roleName`) VALUES
(1, 'Admin'),
(3, 'Staff'),
(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `roleId` int(11) NOT NULL,
  `permissionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rolepermissions`
--

INSERT INTO `rolepermissions` (`roleId`, `permissionId`) VALUES
(1, 5),
(1, 6),
(2, 1),
(2, 7),
(2, 8),
(2, 11),
(2, 12),
(3, 4),
(3, 8),
(3, 9),
(3, 10),
(3, 11);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `ticketId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL,
  `createdDate` datetime DEFAULT current_timestamp(),
  `queueId` int(11) DEFAULT NULL,
  `assignedBy` int(11) DEFAULT NULL,
  `solution` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`ticketId`, `userId`, `description`, `status`, `createdDate`, `queueId`, `assignedBy`, `solution`) VALUES
(55, 12, 'สวัสดีค่ะ/ครับ ทีมสนับสนุน ฉันไม่สามารถเข้าสู่ระบบบัญชีของฉันได้ เมื่อฉันพยายามล็อกอิน ฉันได้รับข้อความว่า \"ข้อมูลประจำตัวไม่ถูกต้อง\" ฉันได้รีเซ็ตรหัสผ่านหลายครั้งแล้ว แต่ยังคงประสบปัญหาอยู่ กรุณาช่วยตรวจสอบปัญหานี้ให้ฉันด้วยค่ะ/ครับ ขอบคุณมากค่ะ/ครับ!\r\n\r', 'Closed', '2024-10-26 17:34:49', NULL, 11, 'ผมรีเซ็ทให้แล้ว'),
(56, 12, 'สวัสดีค่ะ/ครับ ฉันต้องการสอบถามสถานะของตั๋วที่ฉันได้ส่งเมื่อสัปดาห์ที่แล้ว รบกวนช่วยอัปเดตให้หน่อยค่ะ/ครับ ขอบคุณค่ะ/ครับ!\r\n\r\n', 'Closed', '2024-10-26 17:34:55', NULL, 11, 'asdasdasd'),
(57, 12, 'สวัสดีค่ะ/ครับ ฉันไม่แน่ใจว่าต้องตั้งค่าการแจ้งเตือนอย่างไรในระบบ ช่วยแนะนำขั้นตอนให้ฉันได้ไหมค่ะ/ครับ ขอบคุณค่ะ/ครับ!\r\n\r\n', 'Closed', '2024-10-26 17:35:01', NULL, 11, 'asdasd'),
(58, 12, 'สวัสดีค่ะ/ครับ ขณะนี้ฉันประสบปัญหากับระบบที่ไม่สามารถอัปโหลดเอกสารได้ รบกวนช่วยตรวจสอบให้ด้วยค่ะ/ครับ ขอบคุณค่ะ/ครับ!', 'Reopened', '2024-10-26 17:35:10', NULL, 11, 'asdasda'),
(59, 12, 'sadasd', 'In Progress', '2024-10-27 19:01:09', NULL, 11, NULL),
(60, 12, 'a', 'NEW', '2024-10-29 13:54:38', 18, NULL, NULL),
(61, 12, 'asdasd', 'NEW', '2024-10-29 14:02:07', 19, NULL, NULL),
(62, 12, 'asdasdasdasd', 'NEW', '2024-10-29 14:02:09', 20, NULL, NULL),
(63, 12, 'a', 'NEW', '2024-10-29 16:29:41', 21, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `password`, `created_at`, `updated_at`) VALUES
(10, 'admin', '1', '2024-10-26 10:15:49', '2024-10-26 10:15:49'),
(11, 'staff', '1', '2024-10-26 10:16:34', '2024-10-26 10:16:34'),
(12, 'user', '1', '2024-10-26 10:16:43', '2024-10-26 10:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`userId`, `roleId`) VALUES
(10, 1),
(11, 3),
(12, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chatId`),
  ADD KEY `ticketId` (`ticketId`);

--
-- Indexes for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD PRIMARY KEY (`articleId`),
  ADD KEY `createdBy` (`createdBy`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`permissionId`),
  ADD UNIQUE KEY `permissionName` (`permissionName`);

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`queueId`),
  ADD KEY `ticketId` (`ticketId`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`reportId`),
  ADD KEY `generatedBy` (`generatedBy`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleId`),
  ADD UNIQUE KEY `roleName` (`roleName`);

--
-- Indexes for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`roleId`,`permissionId`),
  ADD KEY `permissionId` (`permissionId`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticketId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `queueId` (`queueId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`userId`,`roleId`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chatId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  MODIFY `articleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `permissionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `queue`
--
ALTER TABLE `queue`
  MODIFY `queueId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `reportId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticketId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`ticketId`) REFERENCES `ticket` (`ticketId`);

--
-- Constraints for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD CONSTRAINT `knowledgebase_ibfk_1` FOREIGN KEY (`createdBy`) REFERENCES `user` (`userId`) ON DELETE SET NULL;

--
-- Constraints for table `queue`
--
ALTER TABLE `queue`
  ADD CONSTRAINT `queue_ibfk_1` FOREIGN KEY (`ticketId`) REFERENCES `ticket` (`ticketId`) ON DELETE CASCADE;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`generatedBy`) REFERENCES `user` (`userId`);

--
-- Constraints for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `rolepermissions_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`roleId`) ON DELETE CASCADE,
  ADD CONSTRAINT `rolepermissions_ibfk_2` FOREIGN KEY (`permissionId`) REFERENCES `permission` (`permissionId`) ON DELETE CASCADE;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE SET NULL,
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`queueId`) REFERENCES `queue` (`queueId`) ON DELETE SET NULL,
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`queueId`) REFERENCES `queue` (`queueId`) ON DELETE CASCADE;

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `userroles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE,
  ADD CONSTRAINT `userroles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `role` (`roleId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
