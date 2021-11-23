create database if not exists dataWarehouse

use dataWarehouse

create table if not exists user_type (
	ID_user_type int not null primary key auto_increment,
	name_user_type varchar(255) not null
);

create table if not exists user (
	ID_user int not null primary key auto_increment,
	name_user varchar(255) not null,
	lastName varchar(255) not null,
	mail varchar(255) not null,
	pass varchar(8) not null,
	ID_user_type int,
	foreign key (ID_user_type) references user_type(ID_user_type)	
);

create table if not exists region (
	ID_region int not null primary key auto_increment,
	name_region varchar(255) not null
);

create table if not exists country (
	ID_country int not null primary key auto_increment,
	name_country varchar(255) not null,
	ID_region int,
	foreign key (ID_region) references region(ID_region)	
);

create table if not exists city (
	ID_city int not null primary key auto_increment,
	name_city varchar(255) not null,
	ID_country int,
	foreign key (ID_country) references country(ID_country)
);

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

create table if not exists channel (
	ID_channel int not null primary key auto_increment,
	name_channel varchar(255) not null
);

create table if not exists contact (
	ID_contact int not null primary key auto_increment,
	name_contact varchar(255) not null,
	lastName varchar(255) not null,
	mail varchar(255) not null,
	position varchar(255) not null,
	address_contact varchar(255) not null,
	interests varchar(255) not null,
	ID_company datetime,
	ID_city int,
	foreign key (ID_company) references company(ID_company),
	foreign key (ID_city) references city(ID_city)
);

create table if not exists contact_with_channel (
	ID_contact_with_channel int not null primary key auto_increment,
	user_account varchar(255) not null,
	preference varchar(255) not null,
	ID_contact int,
	ID_channel int,
	foreign key (ID_contact) references contact(ID_contact),
	foreign key (ID_channel) references channel(ID_channel)
);