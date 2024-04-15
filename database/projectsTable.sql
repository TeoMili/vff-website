--creates the table of projects for the database

DROP TABLE IF EXISTS projects;

CREATE TABLE projects(
    ID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    S_Description TEXT NOT NULL,
    L_Description TEXT NOT NULL,
    Images TEXT
);