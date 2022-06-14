
select * from Actor ;
select * from Movie;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

select * from Rating;

-- chave estrangeira é uma uma linha de uma tabela que é relacionada a uma linha em outra tabela

insert into Rating (id,comment,rate,movie_id) values (001,"filme muito bom", 8 , "001");

-- exibe um erro de falha na foreign key

alter table Movie drop column nota;

delete from Movie where id = "001";
-- exibe erro indicando que nao posso excluir pois existe uma foreign key associada

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a tabela criada acima , vai exibir uma lista dos atores e os filmes que eles participaram

insert into MovieCast (movie_id,actor_id) values 
("001","002"),
 ("001","003"),
 ("003","005"),
 ("003","005"),
 ("002","004"),
 ("004","004");
 
 select * from MovieCast;
 
 insert into MovieCast (movie_id,actor_id) values 
("001","010");
-- exibe erro dizendo que nao existe a chave estrangeira

delete from Actor where id = "004";
-- exibe erro dizendo que nao pode deletar porque possui uma chave estrangeira

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
-- o operador on faz exibir somente as linhas onde as duas tabelas tem relaçao

SELECT m.id as movie_id, r.rate as rating , m.nome as nome FROM Movie as m
INNER JOIN Rating as r ON m.id = r.movie_id;