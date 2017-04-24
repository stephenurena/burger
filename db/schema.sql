###Schema

CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE burgers
(
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);