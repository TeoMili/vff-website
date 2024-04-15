--adds previous projects to the corresponding table
INSERT INTO projects(Name, S_Description, L_Description, Images)
    VALUES
        ('Project 1',
         'descriptions/short/project1.txt', 
         'descriptions/long/project1.txt',
         'images/project1'),
        ('Project 2',
         'descriptions/short/project2.txt', 
         'descriptions/long/project2.txt',
         'images/project2')