CREATE TABLE `quiz_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`whatsapp` varchar(50) NOT NULL,
	`city` varchar(255) NOT NULL,
	`legalArea` varchar(100) NOT NULL,
	`description` text,
	`hasProcess` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `quiz_leads_id` PRIMARY KEY(`id`)
);
