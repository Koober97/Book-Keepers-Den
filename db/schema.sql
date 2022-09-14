DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email /*isAuthenticated.js*/,
);

CREATE TABLE reviews (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    book_name VARCHAR(150) NOT NULL,
    review TEXT
)