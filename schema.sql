DROP DATABASE IF EXISTS ParkiZone;

CREATE DATABASE ParkiZone;

USE ParkiZone;

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(10) NOT NULL,
    lastName varchar(10) NOT NULL,
    email varchar(20) NOT NULL,
    password varchar(255) NOT NULL,
    phoneNumber varchar(12),
    points int NOT NULL,
    PRIMARY KEY (ID)
);


INSERT INTO user (id, firstName, lastName, email, password, phoneNumber, points) values (1,"Dali","Hili","dalihili@gmail.com","dali1234","27921440",1000)