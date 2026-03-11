DROP DATABASE IF EXISTS mempa;
CREATE DATABASE mempa;
USE mempa;

CREATE TABLE utilisateur (
    id_util        INT PRIMARY KEY AUTO_INCREMENT,
    nom_util       VARCHAR(255) NOT NULL,
    mot_de_passe   VARCHAR(255) NOT NULL
);

CREATE TABLE musique (
    id_mus    INT PRIMARY KEY AUTO_INCREMENT,
    titre      VARCHAR(255) NOT NULL,
    auteur     VARCHAR(255) NOT NULL,
    lien       VARCHAR(255) NOT NULL
);

CREATE TABLE playlist (
    id_playlist      INT PRIMARY KEY AUTO_INCREMENT,
    nom_playlist      VARCHAR(255) NOT NULL,
    style_musique    VARCHAR(255),
    id_createur      INT NOT NULL,
    nbClick          INT DEFAULT 0,
    FOREIGN KEY (id_createur) REFERENCES utilisateur(id_util)
        ON DELETE CASCADE
);

CREATE TABLE appartenir (
    id_play   INT NOT NULL,
    id_mus    INT NOT NULL,
    PRIMARY KEY (id_play, id_mus),
    FOREIGN KEY (id_play) REFERENCES playlist(id_playlist)
        ON DELETE CASCADE,
    FOREIGN KEY (id_mus) REFERENCES musique(id_mus)
        ON DELETE CASCADE
);

CREATE TABLE contribution (
    id_util   INT NOT NULL,
    id_play   INT NOT NULL,
    PRIMARY KEY (id_util, id_play),
    FOREIGN KEY (id_util) REFERENCES utilisateur(id_util)
        ON DELETE CASCADE,
    FOREIGN KEY (id_play) REFERENCES playlist(id_playlist)
        ON DELETE CASCADE
);

INSERT INTO utilisateur (nom_util, mot_de_passe) VALUES
('alice', 'pass123'),
('bob', 'pass456');

INSERT INTO musique (titre, auteur, lien) VALUES
('Bohemian Rhapsody', 'Queen', 'http://localhost:3000/musiques/bohemian.mp3'),
('Billie Jean', 'Michael Jackson', 'http://localhost:3000/musiques/billiejean.mp3'),
('Lose Yourself', 'Eminem', 'http://localhost:3000/musiques/loseyourself.mp3'),
('Blinding Lights', 'The Weeknd', 'http://localhost:3000/musiques/blindinglights.mp3'),
('Shape of You', 'Ed Sheeran', 'http://localhost:3000/musiques/shapeofyou.mp3');

INSERT INTO playlist (nom_playlist, style_musique, id_createur) VALUES
('Rock Classics', 'Rock', 1),
('Pop Hits', 'Pop', 2);

INSERT INTO appartenir (id_play, id_mus) VALUES
(1, 1),
(1, 3),
(2, 2),
(2, 4),
(2, 5);

INSERT INTO contribution (id_util, id_play) VALUES
(2, 1),
(1, 2);