DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT Primary Key,
    dept_name VARCHAR(30) UNIQUE NOT NULL 
);


CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT Primary Key,
    title VARCHAR(30) UNIQUE NOT NULL, 
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL
);

CREATE TABLE employee(
    id INT UNSIGNED AUTO_INCREMENT Primary Key,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_name VARCHAR(50) 
);
