create schema crud;
use crud;

create table ciudades
(
ciudad varchar(50)not null primary key
);

create table departamentos
(
departamento varchar(50)not null primary key,
ciudad varchar(50)not null,
FOREIGN KEY (ciudad) REFERENCES ciudades (ciudad)
);


insert into ciudades values ("Bogotá");
insert into departamentos values ("Cundinamarca","Bogotá"); 

insert into ciudades values ("Neiva");
insert into departamentos values ("Huila","Neiva"); 


