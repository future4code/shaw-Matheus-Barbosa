USE `shaw-21814915-barbosa` ;

SET SQL_SAFE_UPDATES = 0;

/* 
A) Remove a coluna salary
B) Troca a coluna gender por sex
C) Aumenta o num de caracteres na string da coluna gender


*/


ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Pedro Cardoso", birth_date = "1970-02-05"
WHERE id = "003";

SELECT * FROM Actor;

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET name = "Seu Jorge", salary = "100000" , birth_date = "1975-02-08" , gender = "male"
WHERE id = "005";

UPDATE Actor
SET name = "Seu Jorge", salary = "100000" , birth_date = "1975-02-08" , gender = "male"
WHERE id = "0111";

/* a query nao gerou erro , porem constou que nenhuma linha foi afetada, pois o id nao existia*/


DELETE FROM Actor WHERE name = "Fernanda Montenegro";

SELECT * FROM Actor;

DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;


SELECT COUNT(*) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
/*esta query agrupa os tipos diferentes de entradas em uma coluna no caso a gender*


