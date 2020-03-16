CREATE DATABASE barebones
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

create table app_user(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	creationdate timestamp NOT NULL,
	lastupdateddate timestamp NOT NULL,
	isblocked boolean DEFAULT false
)