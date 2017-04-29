###Schema

USE `heroku_b2cac2b68edc9dc`;

CREATE TABLE burgers
(
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` TIMESTAMP,
	PRIMARY KEY (`id`)
);