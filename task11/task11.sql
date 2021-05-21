create database if not exists task11;
use task11;

create table if not exists user(
    user_id bigint not null auto_increment,
    name varchar(200) not null,
    primary key(user_id));


create table ad(
    ad_id bigint not null auto_increment,
    user_id bigint not null,
    title varchar(100) not null,
    description varchar(250) not null,
    created_at datetime not null,
    photo_link varchar(10000) default null,
    discount int not null,
    valid_until datetime not null,
    rating double default null,
    reviews int default null,
    foreign key (user_id) references user (user_id));

create table review
(
    review_id bigint not null auto_increment,
    ad_id bigint not null,
    user_id bigint not null,
    created_at datetime not null,
    comment varchar(1000) not null,
    foreign key (ad_id) references ad (ad_id),
    foreign key (user_id) references user (user_id));

insert user (user_id, name, is_vendor)
values
(1, 'Анна', false),
(3, 'Евгения', false),
(4, 'Алеся', true),
(5, 'Саша', false),
(6, 'Надя', true),
(7, 'Ваня', true),
(8, 'Анна1', true),
(9, 'Бонетти', true),
(10, 'Салон', false),
(11, 'бгу', true),
(12, 'smth', true),
(13, 'whois', true);

insert ad (ad_id, title, description, created_at, photo_link, discount, valid_until, rating, reviews, user_id)
values
(1001, 't1','description1', '2021-02-03 23:59:00', NULL, 20, '2021-07-03 23:59:00', 2.9, 2, 1),
(1002, 't2','description2', NOW(), NULL, 70, '2021-07-04 23:59:00', 4.7, 2, 4),
(1003, 't3','description3', '2021-01-04 23:59:00', NULL, 20, '2021-08-22 23:59:00', NULL, NULL, 6),
(1004, 't4','description4', NOW(), NULL, 30, '2021-08-08 23:59:00', NULL, NULL, 7),
(1005, 't5','description5', '2021-03-03 23:59:00', NULL, 5, '2021-09-10 23:59:00', 4.0, 3, 8),
(1006, 't6','description6', '2021-03-13 23:59:00', NULL, 20, '2021-09-19 23:59:00', 3.5, 8, 9),
(1007, 't7','description7', '2021-02-27 23:59:00', NULL, 10, '2021-10-12 23:59:00', 3.7, 5, 11),
(1008, 't8','description8', '2021-04-10 23:59:00', NULL, 30, '2021-10-23 23:59:00', 3.0, 1, 12),
(1009, 't9','description9', '2021-03-20 23:59:00', NULL, 40, '2021-10-25 23:59:00', 4.7, 12, 13),
(1010, 't10','description10', '2021-04-11 23:59:00', NULL, 50, '2021-09-07 23:59:00', 4.9, 9, 14);

insert review (review_id, created_at, comment, ad_id, user_id)
values
(100001, '2021-04-12 23:59:00', 'Cool', 1001, 1),
(100002, '2021-01-05 23:59:00', 'Wow', 1001, 4),
(100003, '2021-05-04 23:59:00', 'Bad', 1001, 3),
(100004, '2021-01-12 23:59:00', 'Okay', 1002, 2),
(100005, '2021-01-17 23:59:00', 'Beautiful', 1002, 6),
(100006, '2021-02-22 23:59:00', 'Baddd', 1002, 5),
(100007, '2021-02-28 23:59:00', 'Cooool', 1002, 9),
(100008, '2021-03-14 23:59:00', 'The best', 1007, 4),
(100009, '2021-03-19 23:59:00', 'The worst', 1007, 5),
(100010, '2021-04-10 23:59:00', 'So-so', 1007, 10);