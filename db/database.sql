-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ibf
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `full_name` varchar(225) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  `current_address` varchar(225) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_admin_user` (`user_id`),
  CONSTRAINT `fk_admin_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,9,'fullName','0123456789','address','currentAddress','2023-01-08 07:53:38','2023-01-08 14:53:38'),(2,10,'Họ và tên','0123456789','địa chỉ','địa chỉ thường chú','2023-01-09 11:46:17','2023-01-09 18:46:17'),(3,11,'họ và tên other admin','0298391823','address','Địa chỉ nơi ở hiện tại','2023-01-09 12:04:33','2023-01-09 19:04:33');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(225) NOT NULL,
  `user_id` int unsigned NOT NULL,
  `phone` varchar(25) NOT NULL,
  `email` varchar(225) NOT NULL,
  `subscription` tinyint(1) DEFAULT '0',
  `current_money` float DEFAULT '0',
  `total_money` float DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_customer_user_id_users` (`user_id`),
  CONSTRAINT `fk_customer_user_id_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (2,'other',2,'0123456789','customer@customer.com',0,179880,200000,'2022-12-31 03:58:23','2023-01-12 17:40:12'),(7,'qwe',7,'0123456789','qwe@qwe.qwe',0,0,0,'2023-01-01 12:54:09','2023-01-01 19:54:09'),(8,'',8,'','',0,0,0,'2023-01-01 13:06:31','2023-01-01 20:06:31');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_balance_history`
--

DROP TABLE IF EXISTS `customers_balance_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_balance_history` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `balance` float DEFAULT '0',
  `balance_income` float DEFAULT '0',
  `new_balance` float DEFAULT '0',
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_balance_customer_id_customers` (`customer_id`),
  CONSTRAINT `fk_balance_customer_id_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_balance_history`
--

LOCK TABLES `customers_balance_history` WRITE;
/*!40000 ALTER TABLE `customers_balance_history` DISABLE KEYS */;
INSERT INTO `customers_balance_history` VALUES (1,2,0,20000,20000,'fullName recharge 20,000 from BANK ABCD with account 012391823','2023-01-08 07:24:17','2023-01-08 14:42:44'),(2,2,20000,30000,50000,'fullName recharge 30,000 from BANK ABCD with account 012391823','2023-01-08 07:42:05','2023-01-08 14:42:44'),(3,2,50000,0,50000,'fullName nhập vào card mobifone mệnh giá 50,000, đang chờ sử lý!','2023-01-09 07:42:40','2023-01-09 14:42:40'),(4,2,30000,100000,130000,'tét recharge 100,000 from vinaphone card with serial 0912831928391','2023-01-12 09:00:54','2023-01-12 16:00:54'),(5,2,130000,50000,180000,'tét recharge 50,000 from mobifone card with serial 123123123','2023-01-12 09:03:14','2023-01-12 16:03:14');
/*!40000 ALTER TABLE `customers_balance_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_address`
--

DROP TABLE IF EXISTS `customers_billing_address`;
DROP TABLE IF EXISTS `billing_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing_address` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `billing_name` varchar(225) NOT NULL,
  `holder` varchar(225) NOT NULL,
  `account_number` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_billing_address`
--

LOCK TABLES `billing_address` WRITE;
/*!40000 ALTER TABLE `billing_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_billing_card`
--

DROP TABLE IF EXISTS `customers_billing_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_billing_card` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `code` varchar(225) NOT NULL,
  `seri` varchar(225) NOT NULL,
  `value` float NOT NULL,
  `host` varchar(50) NOT NULL,
  `active` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_billing_card_customer_id_customers` (`customer_id`),
  CONSTRAINT `fk_billing_card_customer_id_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_billing_card`
--

LOCK TABLES `customers_billing_card` WRITE;
/*!40000 ALTER TABLE `customers_billing_card` DISABLE KEYS */;
INSERT INTO `customers_billing_card` VALUES (1,2,'code','seri',10,'viettel',0,'2023-01-09 06:35:09','2023-01-09 13:35:09'),(2,2,'981283912831','0912831928391',100000,'vinaphone',1,'2023-01-09 06:50:36','2023-01-12 16:00:54'),(3,2,'123123','123123123',50000,'mobifone',1,'2023-01-09 07:42:40','2023-01-12 16:03:14');
/*!40000 ALTER TABLE `customers_billing_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_log`
--

DROP TABLE IF EXISTS `customers_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_log` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  `balance` float DEFAULT '0',
  `new_balance` float DEFAULT '0',
  `transaction_value` float DEFAULT '0',
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_log_customer_id_customers` (`customer_id`),
  KEY `fk_log_order_id_order` (`order_id`),
  CONSTRAINT `fk_log_customer_id_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_log_order_id_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_log`
--

LOCK TABLES `customers_log` WRITE;
/*!40000 ALTER TABLE `customers_log` DISABLE KEYS */;
INSERT INTO `customers_log` VALUES (1,2,3,50000,30000,20000,'Khách hàng fullName đặt mua dịch vụ Facebook Free với gói Other package có tổng giá trị 20,000 VND!','2023-01-09 08:33:59','2023-01-09 15:33:59'),(2,2,4,180000,179880,120.12,'Khách hàng other đặt mua dịch vụ Facebook Free với gói packageName có tổng giá trị 120.12 VND!','2023-01-12 10:40:12','2023-01-12 17:40:12');
/*!40000 ALTER TABLE `customers_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `package_id` int unsigned NOT NULL,
  `target` text NOT NULL,
  `status_id` int unsigned NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `qty` int unsigned DEFAULT '0',
  `subtotal` float DEFAULT '0',
  `coupon_code` varchar(25) DEFAULT NULL,
  `discount_price` float DEFAULT '0',
  `note` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_order_package_id_packages` (`package_id`),
  KEY `fk_order_customer_id_customers` (`customer_id`),
  KEY `fk_order_status_id_status` (`status_id`),
  CONSTRAINT `fk_order_customer_id_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_order_package_id_packages` FOREIGN KEY (`package_id`) REFERENCES `services_package` (`id`),
  CONSTRAINT `fk_order_status_id_status` FOREIGN KEY (`status_id`) REFERENCES `orders_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,8,'url',1,'place_order',5,100000,NULL,0,'note','2023-01-09 08:05:47','2023-01-09 15:05:47'),(2,2,8,'https://4g5gviettel.net/cac-nha-mang-di-dong-o-viet-nam/',1,'Place order',12,240000,NULL,0,'note','2023-01-09 08:20:58','2023-01-09 15:20:58'),(3,2,8,'https://4g5gviettel.net/cac-nha-mang-di-dong-o-viet-nam/',1,'Place order',1,20000,NULL,0,'Special note','2023-01-09 08:33:59','2023-01-09 15:33:59'),(4,2,6,'https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript',1,'Place order',12,120.12,NULL,0,'Ghi chus nef','2023-01-12 10:40:12','2023-01-12 17:40:12');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_status`
--

DROP TABLE IF EXISTS `orders_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_status` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(225) NOT NULL,
  `label` varchar(225) NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_status`
--

LOCK TABLES `orders_status` WRITE;
/*!40000 ALTER TABLE `orders_status` DISABLE KEYS */;
INSERT INTO `orders_status` VALUES (1,'place_order','Place order',1,'2023-01-09 08:05:44','2023-01-09 15:05:44'), (2,'complete','Complete',1,'2023-01-09 08:05:44','2023-01-09 15:05:44'), (3,'cancel','Cancel',1,'2023-01-09 08:05:44','2023-01-09 15:05:44');
/*!40000 ALTER TABLE `orders_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'customer','customer','customer','2022-12-27 12:26:10','2022-12-27 19:26:10'),(2,'admin','admin','admin','2022-12-27 12:26:10','2022-12-27 19:26:10');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(225) NOT NULL,
  `service_name` varchar(225) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (8,'facebook','Facebook Free','2023-01-05 09:46:58','2023-01-05 16:46:58'),(9,'instagram','Instagram Free','2023-01-05 09:54:01','2023-01-05 16:54:01'),(10,'tiktok','Tiktok Free','2023-01-05 09:55:17','2023-01-05 16:55:17'),(11,'shopee','Shopee Free','2023-01-05 09:55:38','2023-01-05 16:55:38'),(12,'youtube','Youtube Free','2023-01-05 09:56:10','2023-01-05 16:56:10'),(13,'telegram','Telegram Free','2023-01-05 09:56:19','2023-01-05 16:56:19'),(14,'facebook','Facebook View','2023-01-05 09:56:44','2023-01-05 16:56:44'),(15,'youtube','Youtube view','2023-01-09 12:49:23','2023-01-09 19:49:23');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_package`
--

DROP TABLE IF EXISTS `services_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_package` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `service_id` int unsigned DEFAULT NULL,
  `package_name` varchar(225) NOT NULL,
  `price` float DEFAULT '0',
  `status` varchar(40) DEFAULT NULL,
  `note` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_service_id_services` (`service_id`),
  CONSTRAINT `fk_service_id_services` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_package`
--

LOCK TABLES `services_package` WRITE;
/*!40000 ALTER TABLE `services_package` DISABLE KEYS */;
INSERT INTO `services_package` VALUES (6,8,'packageName',10.01,'custom','note','2023-01-04 13:03:30','2023-01-06 16:54:51'),(7,15,'Test package',20,'Status','','2023-01-06 09:33:30','2023-01-09 19:53:02'),(8,15,'Other package',20000,'','<p>oto ke</p>','2023-01-06 09:54:49','2023-01-09 19:53:02');
/*!40000 ALTER TABLE `services_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(225) NOT NULL,
  `avatar` varchar(225) DEFAULT NULL,
  `email` varchar(225) NOT NULL,
  `password` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'customer123','','customer@customer.com','$2a$10$izv.joyxWJjice1dOIIb0.VJRiPiJso2OXZuw8nvXSc.mKsGPKiTe','2022-12-31 03:58:23','2022-12-31 10:58:23'),(7,'qwe','','qwe@qwe.qwe','$2a$10$6oGipntzFAUIQegfkzwbrOjXNXpV8VShJI7Sakin2aKhArV0vJR1G','2023-01-01 12:54:09','2023-01-01 19:54:09'),(8,'','','','$2a$10$f/4si1nxrq9efcI15u8HbujFfQUaCr9RHit4v1y3cpLq1twcYGEEy','2023-01-01 13:06:31','2023-01-01 20:06:31'),(9,'admin','','admin@admin.com','$2a$10$/.mHl9rPBuMbT3EB8wmsZO/xWim4qbq1AwcwSRdcBuAsBIRnVT5eq','2023-01-08 07:53:38','2023-01-08 14:53:38'),(10,'admin123','','admin123','$2a$10$pDBZVu1UYtE.tPPH3bxDj..3WZ/PdfsDSw5x7Zk4cX3ZpbIyUzZ5e','2023-01-09 11:46:17','2023-01-09 18:46:17'),(11,'otheradmin','','otheradmin@gmail.com','$2a$10$HEvRNcnjWpJ4TWIe9ChoTOtGVgpmmMLTsHHojSqvLDqs.xVsJkzDa','2023-01-09 12:04:33','2023-01-09 19:17:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_role`
--

DROP TABLE IF EXISTS `users_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_role` (
  `user_id` int unsigned NOT NULL,
  `role_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `fk_user_id_users` (`user_id`),
  KEY `fk_role_id_roles` (`role_id`),
  CONSTRAINT `fk_role_id_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_id_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_role`
--

LOCK TABLES `users_role` WRITE;
/*!40000 ALTER TABLE `users_role` DISABLE KEYS */;
INSERT INTO `users_role` VALUES (2,1,'2022-12-31 03:58:23','2022-12-31 10:58:23'),(7,1,'2023-01-01 12:54:09','2023-01-01 19:54:09'),(8,1,'2023-01-01 13:06:31','2023-01-01 20:06:31'),(9,2,'2023-01-08 07:53:38','2023-01-08 14:53:38'),(10,2,'2023-01-09 11:46:17','2023-01-09 18:46:17'),(11,2,'2023-01-09 12:04:33','2023-01-09 19:04:33');
/*!40000 ALTER TABLE `users_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-12 17:44:03
