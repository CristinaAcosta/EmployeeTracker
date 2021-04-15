USE employees;

INSERT INTO department(name)
VALUES
('Finance'),
('Marketing'),
('Human Resources');

INSERT INTO role(title, salary,department_id)
VALUES
('Accoutant', 60000,1),
('Data Scientist', 80000, 2)
('Social Media', 80000, 2)
('HR Reprisentative',70000,3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Martha', 'Stewart', 1, 1)
('Rachel', 'Roy', 2, 2)
('Kit', 'Aid', 2 , 2)
('Bial', 'Etti', 3 , 3)
('Calph', 'Alon', 3, 3)

INSERT INTO manager (name)
VALUES 
('John Stripes')
('Samantha Jones')
('Terry Cast')