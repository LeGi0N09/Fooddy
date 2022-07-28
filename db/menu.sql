DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `price` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;

insert into menu (id, name, price) values (1, 'Y-find', 876);
insert into menu (id, name, price) values (2, 'Zathin', 597);
insert into menu (id, name, price) values (3, 'Stim', 705);
insert into menu (id, name, price) values (4, 'Greenlam', 711);
insert into menu (id, name, price) values (5, 'Viva', 282);
insert into menu (id, name, price) values (6, 'Gembucket', 307);
insert into menu (id, name, price) values (7, 'Subin', 431);
insert into menu (id, name, price) values (8, 'It', 922);
insert into menu (id, name, price) values (9, 'Otcom', 757);
insert into menu (id, name, price) values (10, 'Overhold', 716);
insert into menu (id, name, price) values (11, 'Vagram', 652);
insert into menu (id, name, price) values (12, 'Tampflex', 153);
insert into menu (id, name, price) values (13, 'Fixflex', 250);
insert into menu (id, name, price) values (14, 'Cookley', 628);
insert into menu (id, name, price) values (15, 'Ronstring', 648);
insert into menu (id, name, price) values (16, 'Mat Lam Tam', 112);
insert into menu (id, name, price) values (17, 'Mat Lam Tam', 424);
insert into menu (id, name, price) values (18, 'Duobam', 867);
insert into menu (id, name, price) values (19, 'Stim', 694);
insert into menu (id, name, price) values (20, 'Zamit', 914);
insert into menu (id, name, price) values (21, 'Viva', 100);
insert into menu (id, name, price) values (22, 'Hatity', 615);
insert into menu (id, name, price) values (23, 'Asoka', 839);
insert into menu (id, name, price) values (24, 'Latlux', 176);
insert into menu (id, name, price) values (25, 'Zoolab', 929);
insert into menu (id, name, price) values (26, 'Y-Solowarm', 386);
insert into menu (id, name, price) values (27, 'Subin', 212);
insert into menu (id, name, price) values (28, 'Pannier', 971);
insert into menu (id, name, price) values (29, 'Fix San', 857);
insert into menu (id, name, price) values (30, 'Lotlux', 601);
COMMIT;
