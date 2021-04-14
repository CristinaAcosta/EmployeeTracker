USE employees;

INSERT INTO department(name)
VALUES
('Executive'),
('Research'),
('Human Resources');

INSERT INTO role(title, salary,department_id)
VALUES
('CEO', 250000,1),
('Scientist', 80000, 2)
('Associate Scientist', 70000, 2)
('HR Reprisentative',70000,3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Martha', 'Stewart', 1, NULL)
('Rachel', 'Roy', 2, 1)
