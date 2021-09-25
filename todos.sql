-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: localhost    Database: homemembers_todos
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `homemembers`
--

DROP TABLE IF EXISTS `homemembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homemembers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `nickname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homemembers`
--

LOCK TABLES `homemembers` WRITE;
/*!40000 ALTER TABLE `homemembers` DISABLE KEYS */;
INSERT INTO `homemembers` VALUES (1,'misha','father','mishka'),(2,'sasha','mother','sashka'),(3,'masha','sister','mashka'),(4,'pasha','brother','pashka'),(5,'dasha','dog','dashka');
/*!40000 ALTER TABLE `homemembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `homemember_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `todos_ibfk_1` (`homemember_id`),
  CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`homemember_id`) REFERENCES `homemembers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (1,'Throw garbage','2021-08-08 00:00:00',2),(5,'Throw garbage','2021-08-08 00:00:00',2),(6,'dgsd gsf bdf gd','2021-08-04 00:00:00',4),(7,'asgfsd df dhf fhd fdf','2021-08-04 00:00:00',5),(8,'sfda sfgh sdfh dfs fh ds ','2021-08-07 00:00:00',2),(9,'Throw garbage','2021-08-08 00:00:00',2),(11,'asgfsd df dhf fhd fdf','2021-08-04 00:00:00',5),(12,'sfda sfgh sdfh dfs fh ds ','2021-08-07 00:00:00',2),(13,'Throw garbage','2021-08-08 00:00:00',2),(14,'dgsd gsf bdf gd','2021-08-04 00:00:00',4),(15,'asgfsd df dhf fhd fdf','2021-08-04 00:00:00',5),(16,'sfda sfgh sdfh dfs fh ds ','2021-08-07 00:00:00',2),(19,'dgsd gsf bdf gd','2021-08-04 00:00:00',4),(20,'as dg sdg dg sd','2021-08-17 00:00:00',2),(21,'asf sfagad. dgs ds','2021-08-24 00:00:00',4);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-05 19:54:59
