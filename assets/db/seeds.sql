INSERT INTO department (name)
VALUES ("Accounting"),
       ("Management"),
       ("Investing");

INSERT INTO roles (title, salary, department_id)
VALUES ("CEO", 1500000, 2),
       ("Intern", 0, 2),
       ("Actuary", 145000, 3),
       ("Financial Analyst", 245000, 3),
       ("Mint Treasurer", 300000, 3),
       ("Accountant", 115000, 1);
       
INSERT INTO employees (first_name, last_name, roles_id)
VALUES ("David", "King", 2),
       ("Pedro", "Vasquez", 1),
       ("Bill", ":Bose", 3),
       ("Patricia", "Hammonds", 4),
       ("Ozwald", "Helmsdottir", 5);



