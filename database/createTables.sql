CREATE TYPE projectType as ENUM ('Proiect', 'Club', 'Petrecere');

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects(
    ID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    S_Description TEXT NOT NULL,
    L_Description TEXT NOT NULL,
    Tag projectType
);

DROP TABLE IF EXISTS images;

CREATE TABLE images(
    ID SERIAL PRIMARY KEY,
    Project_ID INT NOT NULL, 
    Image TEXT NOT NULL,
    CONSTRAINT fk_project_id
        FOREIGN KEY (Project_ID)
        REFERENCES projects(ID)
);

DROP TABLE IF EXISTS rooms CASCADE;

CREATE TABLE rooms(
    ID SERIAL PRIMARY KEY,
    Join_Code INTEGER UNIQUE
);