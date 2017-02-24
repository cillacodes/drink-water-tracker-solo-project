//create table for users info
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(200),
	password VARCHAR(200)
);

//create table for water intake info
CREATE TABLE intake (
	id SERIAL PRIMARY KEY,
	date DATE,
	time TIME,
	volume INTEGER
);

// create table to link user_id to specific intake data
CREATE TABLE users_intake (
	users_id INTEGER NOT NULL REFERENCES users,
	intake_id INTEGER NOT NULL REFERENCES intake
);

//test sql query to grab intake by day
SELECT date, volume FROM intake WHERE date = '2017-02-23';

//query to select date and volume from table and package by day
SELECT date, SUM(volume) as total FROM intake GROUP BY date;
