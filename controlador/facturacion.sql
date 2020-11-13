DROP DATABASE IF EXISTS facturacion;

CREATE DATABASE facturacion;

CREATE TABLE usuarios(
	usuario varchar (20) NOT NULL PRIMARY KEY,
	clave varchar (44) NOT NULL
);

create table productos(
			id int (10) NOT NULL  AUTO_INCREMENT PRIMARY KEY,
			codigo int(3),
			tipo varchar(20),
			descripcion varchar(30),
		    precio  float(10) NOT NULL,
			cant int(4) 
			);

CREATE TABLE clientes(
	id int (10) NOT NULL  AUTO_INCREMENT PRIMARY KEY, 
	razonsocial varchar (40) NOT NULL,
	cuit  varchar(20) NOT NULL, 
	telefono  varchar(48) NOT NULL,
	mail varchar(50),
	localidad varchar (35)
	);


CREATE TABLE fichas(
id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
razonsocial varchar(40) NOT NULL,
cta varchar(40) NOT NULL, 
debe float (10)
);

CREATE TABLE ventas(
id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
numero int(30) NOT NULL,
idproducto int(10),
detalle varchar(30),
preciouni float(15),
cant float(10),
total float(12),
descuento float(20),
FOREIGN KEY (idproducto) REFERENCES productos(id)
);


INSERT INTO usuarios VALUES 
('second',SHA1('1234'));




