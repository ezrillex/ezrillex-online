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
    EpisodeOrder int not null unique,
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

insert into series(seriesname, seriesquote, seriesquoteauthor, seriessynopsis, seriesposterfilename, seriescustomtitlefont)
values ('Steins;Gate', 'El Psy Congroo', 'Okabe Rintaro', 'Epica historia de Viajes en el Tiempo', 'steinsgate.jpg', 'NanumMyeongjo'),
       ('Erased', 'Todo lo que se avecina aún está por determinar. El fin está en algún lugar lejano del futuro y es desconocido.', 'Airi Katagiri', 'Un hombre de repente regresa al pasado y debe descubrir quien fue el culpable de los asesinatos de niños que sucedieron hace muchos años', 'erased.jpg', '')

insert into Episodes(episodename, episodesource, episodeorder, episodeseries)
values ('1: Ráfagas ante mis ojos', 'https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162239&authkey=AOzhxQbOGcsMCxc', 1, 2),
        ('2: Palmas', 'https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162238&authkey=AGqQM3s4fBZz_R4', 2, 2),
        ('3: Moretones', 'https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162232&authkey=APNR2awFJO9aD-c', 3, 2),
        ('4: Misión Cumplida','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162237&authkey=AK_XqA7oszbcniA',4,2),
        ('5: Huida','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162230&authkey=ANNgL5ShmqXIwKA',5,2),
        ('6: Shinigami', 'https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162233&authkey=AAW75q1mugmjKRk',6,2),
        ('7: Perdiendo el control','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162235&authkey=AC6C3V1NuGemp9Y',7,2),
        ('8: Espiral','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162234&authkey=AE61r-_ouMODFzE', 8,2),
        ('9: Desenlace','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162231&authkey=AFsuBflvLuAdbh4',9,2),
        ('10: Placer','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162241&authkey=ABr3x_P4s1IqNqM',10,2),
        ('11: Futuro','https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162240&authkey=AGy9WkdclfK9bsU',11,2),
        ('12: Tesoro' , 'https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162236&authkey=ACDlGOMenFowJ64',12,2)





