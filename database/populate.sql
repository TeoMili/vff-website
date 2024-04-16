--adds previous projects to the corresponding table
INSERT INTO projects(Name, S_Description, L_Description)
    VALUES
        ('Project 1', 'descriptions/short/project1.txt', 'descriptions/long/project1.txt'),
        ('Project 2', 'descriptions/short/project2.txt', 'descriptions/long/project2.txt');

INSERT INTO images(Project_ID, Image)
    VALUES
        (1, 'images/project1/i1.jpg'),
        (1, 'images/project1/i2.jpg'),
        (1, 'images/project1/i3.jpg'),
        (1, 'images/project1/i4.jpg'),
        (1, 'images/project1/i5.jpg'),
        (1, 'images/project1/i6.jpg'),
        (1, 'images/project1/i7.jpg');   