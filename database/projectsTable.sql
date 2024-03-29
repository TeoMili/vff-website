--creates the table of projects for the database

DROP TABLE IF EXISTS projects;

CREATE TABLE projects(
    ID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Description TEXT NOT NULL
);