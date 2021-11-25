create database if not exists dataWarehouse

use dataWarehouse

create table if not exists user_type (
	ID_user_type int not null primary key auto_increment,
	name_user_type varchar(255) not null
);

insert into user_type(name_user_type)
values('Admin'),
	('User');

select *
from user_type ut ;

create table if not exists user (
	ID_user int not null primary key auto_increment,
	name_user varchar(255) not null,
	lastName varchar(255) not null,
	mail varchar(255) not null,
	pass varchar(8) not null,
	ID_user_type int,
	foreign key (ID_user_type) references user_type(ID_user_type)	
);

insert into user(name_user, lastName, mail, pass, ID_user_type)
values('Diana', 'Romero', 'diana@romero.com', 12345678, 1),
	('user', 'Romero', 'user@romero.com', 'user', 2);

select *
from user u;

create table if not exists region (
	ID_region int not null primary key auto_increment,
	name_region varchar(255) not null
);

insert into region(name_region)
values('Europa'),
	('África'),
	('América'),
	('Caribe'),
	('Asia');

select *
from region r;

create table if not exists country (
	ID_country int not null primary key auto_increment,
	name_country varchar(255) not null,
	ID_region int,
	foreign key (ID_region) references region(ID_region)	
);

insert into country(name_country, ID_region)
values('Reino Unido', 1),
	('Sudáfrica', 2),
	('México', 3),
	('Bahamas', 4),
	('Singapur', 5);

select *
from country c;

create table if not exists city (
	ID_city int not null primary key auto_increment,
	name_city varchar(255) not null,
	ID_country int,
	foreign key (ID_country) references country(ID_country)
);

insert into city(name_city, ID_country)
values('Londres', 1),
	('Johannesburgo', 2),
	('Ciudad de México', 3),
	('Nasáu', 4),
	('Singapur', 5);

select *
from city;

create table if not exists company (
	ID_company int not null primary key auto_increment,
	name_company varchar(255) not null,
	address_company varchar(255) not null,
	mail varchar(255) not null,
	phoneNumber varchar(255) not null,
	ID_city int,
	ID_user int,
	foreign key (ID_city) references city(ID_city),
	foreign key (ID_user) references user(ID_user)
);

insert into company(name_company, address_company, mail, phoneNumber, ID_city, ID_user)
values('Empresa de Londres', 'direccion de Londres', 'correo@londres', 123456, 1, 1),
	('Empresa de Johannesburgo', 'direccion de Johannesburgo','correo@Johannesburgo', 789012, 2, 1),
	('Empresa de Ciudad de México','direccion de Ciudad de México', 'correo@México',345678, 3, 1),
	('Empresa de Nasáu','direccion de Nasáu', 'correo@Nasáu',901234, 4, 1),
	('Empresa de Singapur', 'direccion de Singapur','correo@Singapur',567890, 5, 1);

select *
from company;

create table if not exists channel (
	ID_channel int not null primary key auto_increment,
	name_channel varchar(255) not null
);

insert into channel(name_channel)
values('Facebook'),
	('Instagram'),
	('LinkedIn');

select *
from channel;

create table if not exists contact (
	ID_contact int not null primary key auto_increment,
	name_contact varchar(255) not null,
	lastName varchar(255) not null,
	mail varchar(255) not null,
	position varchar(255) not null,
	address_contact varchar(255) not null,
	interests varchar(255) not null,
	ID_company int,
	ID_city int,
	foreign key (ID_company) references company(ID_company),
	foreign key (ID_city) references company(ID_city)
);

insert into contact(name_contact, lastName, mail, position, address_contact, interests, ID_company, ID_city)
values('Mariana', 'Sanchez', 'mariana@sanchez', 'Manager', 'direccion de mariana', '25%', 1, 1),
	('Marcelo', 'Martinez', 'marcelo@martinez', 'CEO', 'direccion de marcelo', '50%', 2, 2),
	('Luisa', 'Lopez', 'luisa@lopez', 'Ventas', 'direccion de luisa', '75%', 1, 1),
('Lorena', 'Mejia', 'lorena@mejia', 'Desarrolladora forntEnd', 'direccion de lorena', '100%', 2,2);

select *
from contact;

create table if not exists contact_with_channel (
	ID_contact_with_channel int not null primary key auto_increment,
	user_account varchar(255) not null,
	preference varchar(255) not null,
	ID_contact int,
	ID_channel int,
	foreign key (ID_contact) references contact(ID_contact),
	foreign key (ID_channel) references channel(ID_channel)
);

insert into contact_with_channel(user_account, preference, ID_contact, ID_channel)
values('@cuentaFace', 'No molestar', 1, 1),
	('@cuentaInstagram', 'Canal favorito', 1, 2),
	('@cuentaInstagram', 'Canal favorito', 4, 2),
	('@cuentaLinkedIn', 'No molestar', 4, 3),
('@cuentaFace', 'Canal favorito', 4, 1);

select *
from contact_with_channel;

select * from pedido p WHERE ID_pedido=89 ;