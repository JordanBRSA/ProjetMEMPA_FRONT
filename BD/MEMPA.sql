-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 24 mars 2026 à 18:27
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mempa`
--

-- --------------------------------------------------------

--
-- Structure de la table `appartenir`
--

CREATE TABLE `appartenir` (
  `id_play` int(11) NOT NULL,
  `id_mus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `appartenir`
--

INSERT INTO `appartenir` (`id_play`, `id_mus`) VALUES
(1, 2),
(1, 3),
(1, 32),
(1, 33),
(1, 34),
(4, 7),
(4, 31),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 19),
(5, 20),
(5, 21),
(5, 22),
(5, 23),
(5, 25),
(5, 26),
(5, 27),
(5, 28),
(5, 29),
(5, 30),
(6, 24);

-- --------------------------------------------------------

--
-- Structure de la table `contribution`
--

CREATE TABLE `contribution` (
  `id_util` int(11) NOT NULL,
  `id_play` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contribution`
--

INSERT INTO `contribution` (`id_util`, `id_play`) VALUES
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `musique`
--

CREATE TABLE `musique` (
  `id_mus` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `lien` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `musique`
--

INSERT INTO `musique` (`id_mus`, `titre`, `auteur`, `lien`) VALUES
(2, 'Levitating', 'Dua Lipa', 'https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9'),
(3, 'Watermelon Sugar', 'Harry Styles', 'https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY'),
(4, 'Stay', 'Justin Bieber', 'https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20'),
(5, 'Peaches', 'Justin Bieber', 'https://open.spotify.com/track/4iJyoBOLtHqaWYs3wyiFhx'),
(6, 'Save Your Tears', 'The Weeknd', 'https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g'),
(7, 'bad guy', 'Billie Eilish', 'https://open.spotify.com/track/2Fxmhks0live0iYgc3GUIW'),
(8, 'postman', 'posman', 'httpgoogle'),
(9, 'postman', 'posman', 'httpgoogle'),
(10, 'postman', 'posman', 'httpgoogle'),
(11, 'postman', 'posman', 'httpgoogle'),
(12, 'postman', 'posman', 'httpgoogle'),
(13, 'postman', 'posman', 'httpgoogle'),
(14, 'postman', 'posman', 'httpgoogle'),
(15, 'postman', 'posman', 'httpgoogle'),
(19, 'postman', 'posman', 'httpgoogle'),
(20, 'postman', 'posman', 'httpgoogle'),
(21, 'postman', 'posman', 'httpgoogle'),
(22, 'postman', 'posman', 'httpgoogle'),
(23, 'postman', 'posman', 'httpgoogle'),
(24, 'postman', 'posman', 'httpgoogle'),
(25, 'postman', 'posman', 'httpgoogle'),
(26, 'postman', 'posman', 'httpgoogle'),
(27, 'postman', 'posman', 'httpgoogle'),
(28, 'postman', 'posman', 'httpgoogle'),
(29, 'postman', 'posman', 'httpgoogle'),
(30, 'postman', 'posman', 'httpgoogle'),
(31, 'postman', 'posman', 'httpgoogle'),
(32, 'postman', 'posman', 'httpgoogle'),
(33, 'postman', 'posman', 'httpgoogle'),
(34, 'postman', 'posman', 'httpgoogle');

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE `playlist` (
  `id_playlist` int(11) NOT NULL,
  `nom_playlist` varchar(255) NOT NULL,
  `style_musique` varchar(100) DEFAULT NULL,
  `nbClick` int(11) NOT NULL DEFAULT 0,
  `id_createur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `playlist`
--

INSERT INTO `playlist` (`id_playlist`, `nom_playlist`, `style_musique`, `nbClick`, `id_createur`) VALUES
(1, 'Chill Vibes', 'Pop', 0, 1),
(4, 'Indie Mood', 'Indie', 0, 3),
(5, 'Ma playlist', 'Pop', 0, 1),
(6, 'Ma postman playlist aura farming postman', 'Pop', 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_util` int(11) NOT NULL,
  `nom_util` varchar(100) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_util`, `nom_util`, `mot_de_passe`) VALUES
(1, 'Alice', 'password123'),
(2, 'Bob', 'password456'),
(3, 'Charlie', 'password789'),
(4, 'postman', 'postman'),
(5, 'postman', 'posman'),
(6, 'postman', 'posman'),
(7, 'postman', 'posman'),
(8, 'postman', 'posman'),
(9, 'postman', 'posman');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appartenir`
--
ALTER TABLE `appartenir`
  ADD PRIMARY KEY (`id_play`,`id_mus`),
  ADD KEY `id_mus` (`id_mus`);

--
-- Index pour la table `contribution`
--
ALTER TABLE `contribution`
  ADD PRIMARY KEY (`id_util`,`id_play`),
  ADD KEY `id_play` (`id_play`);

--
-- Index pour la table `musique`
--
ALTER TABLE `musique`
  ADD PRIMARY KEY (`id_mus`);

--
-- Index pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id_playlist`),
  ADD KEY `id_createur` (`id_createur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_util`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `musique`
--
ALTER TABLE `musique`
  MODIFY `id_mus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id_playlist` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_util` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appartenir`
--
ALTER TABLE `appartenir`
  ADD CONSTRAINT `appartenir_ibfk_1` FOREIGN KEY (`id_play`) REFERENCES `playlist` (`id_playlist`) ON DELETE CASCADE,
  ADD CONSTRAINT `appartenir_ibfk_2` FOREIGN KEY (`id_mus`) REFERENCES `musique` (`id_mus`) ON DELETE CASCADE;

--
-- Contraintes pour la table `contribution`
--
ALTER TABLE `contribution`
  ADD CONSTRAINT `contribution_ibfk_1` FOREIGN KEY (`id_util`) REFERENCES `utilisateur` (`id_util`) ON DELETE CASCADE,
  ADD CONSTRAINT `contribution_ibfk_2` FOREIGN KEY (`id_play`) REFERENCES `playlist` (`id_playlist`) ON DELETE CASCADE;

--
-- Contraintes pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`id_createur`) REFERENCES `utilisateur` (`id_util`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
