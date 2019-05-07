DROP DATABASE IF EXISTS AuctionHouse_db;

CREATE DATABASE AuctionHouse_db;

USE AuctionHouse_db;

CREATE TABLE items (
 id INT NOT NULL AUTO_INCREMENT,
 itemTitle VARCHAR(100) NULL,
 price DECIMAL(10,2) NULL,
 PRIMARY KEY (id)
);

INSERT INTO items (itemTitle, price)
VALUES ("Monkey's Paw", '100000.00');
