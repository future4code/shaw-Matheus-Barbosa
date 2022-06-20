
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

VARCHAR(255) = UMA STRING DE NO MAXIMO 255 CARACTERES 
DATE - TIPO DATA 
VARCHAR(6) = STRING DE NO MAX 6 CARACTERES
PRIMARY KEY = CHAVE PRIMARIA
NO NULL = O CAMPO DEVE SER PREENCHIDO

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

SHOW DATABASES = MOSTRA MEUS BANCOS DE DADOS
SHOW TABLES = MOSTRA MINHAS TABELAS

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

MOSTRA A ESTRUTURA DA TABELA, COM AS COLUNAS E TIPOS DE DADOS

///////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
aconteceu porque o id estava duplicado
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

/////////////////////////////////////////////////////////////////////////////////////////////////////7

a) *Escreva uma query que retorne todas as informações das atrizes*

SELECT * FROM Actor WHERE gender="female"

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

SELECT salary FROM Actor WHERE name = 'Tony Ramos'

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

SELECT * FROM Actor WHERE gender = "invalid"
Não retorna nada , pois nao tem salario invalid

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

SELECT id , name, salary FROM Actor WHERE salary <= 500000

e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

A query está pedindo uma coluna que nao existe
/////////////////////////////////////////////////////////////////////////////////////////////////////////

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000


a) *Explique com as suas palavras a query acima*

busca nomes iniciados com A ou J e que tenham salario maior que 300000

b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 35000000

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%"

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

SELECT * FROM Actor WHERE
name LIKE "%a%" OR
name LIKE "%A%" OR
name LIKE "%G%" OR
name LIKE "%g%" AND 
salary BETWEEN 35000000 AND 90000000;

////////////////////////////////////////////////////////////////////////////////////////////////////////


Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data DATE NOT NULL,
    nota VARCHAR(6) NOT NULL
);

INSERT INTO Movie (id, nome, sinopse, data, nota)
VALUES(
  "001", 
  "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2016-01-06", 
  7
);

INSERT INTO Movie (id, nome, sinopse, data, nota)
VALUES(
  "002", 
  "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Movie (id, nome, sinopse, data, nota)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Movie (id, nome, sinopse, data, nota)
VALUES(
  "004", 
  "Meu nome não é Jhonny",
    "João estrela é um playboy no rio de janeiro que se envolve no trafico de drogas para fins de uso e quando se da conta e um dos maiores traficantes do rio de janeiro.",
  "2008-11-02", 
  10
);

///////////////////////////////////////////////////////////////////////////////////////////////////
















