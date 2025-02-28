CREATE DATABASE mawasemna;

USE mawasemna;

CREATE TABLE messages
(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    users VARCHAR(100),
    email VARCHAR(255) ,
    messageUser TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);