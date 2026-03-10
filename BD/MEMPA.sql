

CREATE TABLE Utilisateur (
    id_util        INT PRIMARY KEY AUTO_INCREMENT,
    nom_util       VARCHAR NOT NULL,
    mot_de_passe   VARCHAR NOT NULL
);

CREATE TABLE Musique (
    id_mus    INT PRIMARY KEY,
    titre     VARCHAR NOT NULL,
    auteur    VARCHAR NOT NULL,
    lien      VARCHAR NOT NULL
);

CREATE TABLE Playlist (
    id_playlist      INT PRIMARY KEY AUTO_INCREMENT,
    nom_playlist     VARCHAR NOT NULL,
    style_musique    VARCHAR,
    id_createur      INT NOT NULL,
    nbClick          INT DEFAULT 0,
    FOREIGN KEY (id_createur) REFERENCES Utilisateur(id_util)
        ON DELETE CASCADE
);

CREATE TABLE Appartenir (
    id_play   INT NOT NULL,
    id_mus    INT NOT NULL,
    PRIMARY KEY (id_play, id_mus),
    FOREIGN KEY (id_play) REFERENCES Playlist(id_playlist)
        ON DELETE CASCADE,
    FOREIGN KEY (id_mus) REFERENCES Musique(id_mus)
        ON DELETE CASCADE
);

CREATE TABLE Contribution (
    id_util   INT NOT NULL,
    id_play   INT NOT NULL,
    PRIMARY KEY (id_util, id_play),
    FOREIGN KEY (id_util) REFERENCES Utilisateur(id_util)
        ON DELETE CASCADE,
    FOREIGN KEY (id_play) REFERENCES Playlist(id_playlist)
        ON DELETE CASCADE
);
