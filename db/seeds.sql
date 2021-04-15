USE employees;

INSERT INTO department(dept_name)
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

INSERT INTO employee(first_name, last_name, role_id, manager_name)
VALUES
('Martha', 'Stewart', 1, 'John Stripes')
('Rachel', 'Roy', 2, 'Samantha Jones')
('Kit', 'Aid', 2 , 'Samantha Jones')
('Bial', 'Etti', 3 , 'Terry Cast')
('Calph', 'Alon', 3,'Terry Cast');

