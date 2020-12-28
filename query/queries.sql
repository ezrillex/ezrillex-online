drop database  eonlinedb;
create database eonlinedb;
use eonlinedb;

CREATE TABLE Users (
    UserId int primary key auto_increment not null,
    Username varchar(50) not null unique ,
    UserEmail varchar(50) not null unique, -- to do drop table or alter
    UserPassword varchar(255) not null,
    RegisterDate datetime not null,
    LastLogin datetime not null
);

create table Series (
    SeriesId int primary key auto_increment not null ,
    SeriesName varchar(512) not null,
    SeriesQuote varchar(2048),
    SeriesQuoteAuthor varchar(255),
    SeriesSynopsis varchar(2048),
    SeriesPosterFileName varchar(512),
    SeriesCustomTitleFont varchar(512)
);

create table Episodes (
    EpisodeId int primary key auto_increment not null ,
    EpisodeName varchar(2048),
    EpisodeSource varchar(2048) not null, /*this is the link to the mp4*/
    EpisodeOrder int not null,
    EpisodeSeries int not null,
    foreign key (EpisodeSeries) references Series(SeriesId)
);

CREATE TABLE SeriesComments (
    SeriesCommentId int PRIMARY KEY auto_increment not null ,
    PosterId int not null,
    CommentContent varchar (1000) not null,
    PostTime datetime not null default current_timestamp,
    CommentedOn int not null,
    foreign key (PosterId) references Users(UserId),
    foreign key (CommentedOn) references Episodes(EpisodeId)
);

insert into Users(username, useremail, userpassword, registerdate, lastlogin)
value ('debug', 'debug@debug.con', '$2y$10$t8dNwXNTzCGJ4LgqQ8RsA.gv.oTre9RoLQqxY2ebBe90ncxZBn5K6', CURRENT_TIMESTAMP, current_timestamp);

-- this order is important because episode series on the series table depends on the id which is based on this order.
insert into Series(seriesname, seriesquote, seriesquoteauthor, seriessynopsis, seriesposterfilename, seriescustomtitlefont)
values ('Steins;Gate', 'El Psy Congroo', 'Okabe Rintaro', 'Epica historia de Viajes en el Tiempo', 'steinsgate.jpg', 'NanumMyeongjo'),
       ('Erased', 'Todo lo que se avecina aún está por determinar. El fin está en algún lugar lejano del futuro y es desconocido.', 'Airi Katagiri', 'Un hombre de repente regresa al pasado y debe descubrir quien fue el culpable de los asesinatos de niños que sucedieron hace muchos años', 'erased.jpg', '');

insert into Episodes(episodename, episodesource, episodeorder, episodeseries)
values ('1: Ráfagas ante mis ojos', 'erased/1', 1, 2),
        ('2: Palmas', 'erased/2', 2, 2),
        ('3: Moretones', 'erased/3', 3, 2),
        ('4: Misión Cumplida','erased/4',4,2),
        ('5: Huida','erased/5',5,2),
        ('6: Shinigami', 'erased/6',6,2),
        ('7: Perdiendo el control','erased/7',7,2),
        ('8: Espiral','erased/8', 8,2),
        ('9: Desenlace','erased/9',9,2),
        ('10: Placer','erased/10',10,2),
        ('11: Futuro','erased/11',11,2),
        ('12: Tesoro' , 'erased/12',12,2);

insert into Episodes(episodename, episodesource, episodeorder, episodeseries)
values ('1: Prólogo del principio y el fin', 'sgf/sg/1',1,1),
       ('2: Paranoia de viajes en el tiempo', 'sgf/sg/2',2,1),
       ('3: Paranoia de procesos paralelos', 'sgf/sg/3',2,1),
       ('4: Encuentro de fluctuaciones abstractas', 'sgf/sg/4',4,1),
       ('5: Encuentro de cargas eléctricas en conflicto', 'sgf/sg/5',5,1),
       ('6: Divergencia del efecto mariposa', 'sgf/sg/6',6,1),
       ('7: Divergencia de la singularidad', 'sgf/sg/7',7,1),
       ('8: Homeoestasis de la teoría del caos', 'sgf/sg/8',8,1),
       ('9: Homeostasis de ilusiones', 'sgf/sg/9',9,1),
       ('10: Homeostasis de complementos', 'sgf/sg/10',10,1),
       ('11: Dogma de las fronteras espacio-tiempo', 'sgf/sg/11',11,1),
       ('12: Dogma de límites estáticos', 'sgf/sg/12',12,1),
       ('13: Necrosis metafísica', 'sgf/sg/13',13,1),
       ('14: Necrosis física', 'sgf/sg/14',14,1),
       ('15: Necrosis del eslabón perdido', 'sgf/sg/15',15,1),
       ('16: Necrosis irreversible', 'sgf/sg/16',16,1),
       ('17: Pretensión de distorsión compleja', 'sgf/sg/17',17,1),
       ('18: Andrógino de autosemejanza', 'sgf/sg/18',18,1),
       ('19: Apoptosis de cadena infinita', 'sgf/sg/19',19,1),
       ('20: Apoptosis de extinción del odio', 'sgf/sg/20',20,1),
       ('21: Fundición de la ley de causalidad', 'sgf/sg/21',21,1),
       ('22: Fundición de la comprensión existencial', 'sgf/sg/22',22,1),
       ('23β: Abre el Enlace Perdido', 'sgf/sg/23b',23,1),
       ('1: Ultima Pieza del Aniquilador: Absolute Zero', 'sgf/sg0/1',24,1),
       ('2: Epigraph of the Closed Curve: Closed Epigraph', 'sgf/sg0/2',25,1),
       ('3: Protocol of the Two-sided Gospel: X-Day Protocol', 'sgf/sg0/3',26,1),
       ('4: Solitude of the Mournful Flow: A Stray Sheep', 'sgf/sg0/4',27,1),
       ('5: Solitude of the Astigmatism: Entangled Sheep', 'sgf/sg0/5',28,1),
       ('6: Eclipse of Orbital Ordering: The Orbital Eclipse', 'sgf/sg0/6',29,1),
       ('7: Eclipse of Vibronic Transition: Vibronic Transition', 'sgf/sg0/7',30,1),
       ('8: Dual of Antinomy: Antinomic Dual', 'sgf/sg0/8',31,1),
       ('9: Pandora of Eternal Return: Pandora''s Box', 'sgf/sg0/9',32,1),
       ('9.5 (OVA): Especial San Valentin: Valentine''s of Crystal Polymorphism: Bittersweet Intermedio', 'sgf/sg0/ova',33,1),
       ('10: Pandora of Provable Existence: Forbidden Cubicle', 'sgf/sg0/10',34,1),
       ('11: Pandora of Forgotten Existence: Sealed Reliquary', 'sgf/sg0/11',35,1),
       ('12: Mother Goose of Mutual Recursion: Recursive Mother Goose', 'sgf/sg0/12',36,1),
       ('13: Mother Goose of Diffractive Recitativo: Diffraction Mother Goose', 'sgf/sg0/13',37,1),
       ('14: Recognition of the Elastic Limit: Presage or Recognize', 'sgf/sg0/14',38,1),
       ('15: Recognition of the Asymptotic Line: Recognize Asymptote', 'sgf/sg0/15',39,1),
       ('16: Altair of the Point at Infinity: Vega and Altair', 'sgf/sg0/16',40,1),
       ('17: Altair of the Hyperbolic Plane: Beltrami Pseudosphere', 'sgf/sg0/17',41,1),
       ('18: Altair of Translational Symmetry: Translational Symmetry', 'sgf/sg0/18',42,1),
       ('19: Altair of the Cyclic Coordinate: Time-Leap Machine', 'sgf/sg0/19',43,1),
       ('20: Rinascimento of the Unwavering Promise: Promised Rinascimento', 'sgf/sg0/20',44,1),
       ('21: Rinascimento of Image Formation: Return of Phoenix', 'sgf/sg0/21',45,1),
       ('22: Rinascimento of Projection: Project Amadeus', 'sgf/sg0/22',46,1),
       ('23: Arclight of the Point at Infinity: Arclight of the Sky', 'sgf/sg0/23',47,1),
       ('23: Steins Gate, plano en la frontera', 'sgf/sg/23',48,1),
       ('24: Prólogo del fin y el principio', 'sgf/sg/24',49,1),
       ('OVA: Poriomanía del egoísmo', 'sgf/sg/ova',50,1),
       ('Película: El déjà vu del área de carga negativa', 'sgf/m',51,1);



-- select * from Episodes;
