-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 04 fév. 2023 à 21:09
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bd_igl_tp`
--

-- --------------------------------------------------------

--
-- Structure de la table `app_annance_annance`
--

CREATE TABLE `app_annance_annance` (
  `id` bigint(20) NOT NULL,
  `titre` varchar(200) NOT NULL,
  `categorie` varchar(50) DEFAULT NULL,
  `type` varchar(200) NOT NULL,
  `surface` varchar(200) NOT NULL,
  `description` longtext DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `wilaya` varchar(50) NOT NULL,
  `commune` varchar(50) NOT NULL,
  `adresse` longtext NOT NULL,
  `date` date DEFAULT NULL,
  `EmailAnnanceur` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `app_annance_annance`
--

INSERT INTO `app_annance_annance` (`id`, `titre`, `categorie`, `type`, `surface`, `description`, `prix`, `wilaya`, `commune`, `adresse`, `date`, `EmailAnnanceur`) VALUES
(54, 'terain blida', 'Vente', 'terrain', '12341', 'c\'est un terrain', 150000000, 'blida', 'beni tamo', 'rue amrane ali', '2022-12-28', 'ky_larbaoui@esi.dz'),
(55, 'logement au bout de mer', 'Location_Vacances', 'maison', '48485', 'c\'est une maison pour les vacances', 300000, 'tipaza', 'tipaza', 'rue de stade', '2023-01-13', 'kz_abbaci@esi.dz'),
(57, 'maison rahma', 'Vente', 'maison', '12341', 'c\'est une maison', 300000, 'tipaza', 'tipaza', 'rue de stade', '2023-02-04', 'kz_abbaci@esi.dz'),
(58, 'zahra location', 'Location', 'appartement', '12341', 'c\'est une appartement', 300000, 'blida', 'beni tamo', 'rue amrane ali', '2023-02-04', 'kz_abbaci@esi.dz'),
(59, 'terain alger', 'Vente', 'terrain', '48485', 'c\'est un terrain', 150000000, 'Alger', 'HARECHE', 'rue de stade', '2023-02-04', 'kz_abbaci@esi.dz'),
(60, 'maison abbaci', 'Vente', 'maison', '4848', 'c\'est une maison', 300000, 'Bouira', 'nador', 'rue de stade', '2023-02-04', 'kz_abbaci@esi.dz');

-- --------------------------------------------------------

--
-- Structure de la table `app_annance_message`
--

CREATE TABLE `app_annance_message` (
  `id` bigint(20) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `contenu` longtext NOT NULL,
  `userSource` varchar(254) DEFAULT NULL,
  `userDestination` varchar(254) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `titreAnnance` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `app_annance_message`
--

INSERT INTO `app_annance_message` (`id`, `status`, `contenu`, `userSource`, `userDestination`, `date`, `titreAnnance`) VALUES
(2, 'read', 'je veux cette appartement', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-02', 'appartement zahra'),
(3, 'read', 'je veux ce maison', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-02', 'logement au bout de mer'),
(4, 'read', 'je veux cette maison pour une année ferme', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-03', 'maison abbaci f5'),
(5, 'read', 'waw !!! i want this home', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-04', 'logement au bout de mer'),
(6, 'read', 'je veux cette maison puor une année', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-04', 'maison rahma'),
(7, 'read', 'je veux ce terrain', 'kz_abbaci@esi.dz', 'kz_abbaci@esi.dz', '2023-02-04', 'terain alger');

-- --------------------------------------------------------

--
-- Structure de la table `app_annance_photo`
--

CREATE TABLE `app_annance_photo` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `titreAnnance` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `app_annance_photo`
--

INSERT INTO `app_annance_photo` (`id`, `image`, `titreAnnance`) VALUES
(46, 'annonce_imgs/3_JZM1BW3.jpg', 'appartement F5'),
(47, 'annonce_imgs/maison_mer2_bDoqdzK.jpg', 'logement au bout de mer'),
(48, 'annonce_imgs/terrain2.jpg', 'terain blida'),
(49, 'annonce_imgs/images_audemer_MxP2T7s.jpg', 'maison rahma'),
(50, 'annonce_imgs/Appartement1_YHNqzcU.jpg', 'zahra location'),
(51, 'annonce_imgs/terrain3_sWifEtW.jpg', 'terain alger'),
(52, 'annonce_imgs/images_location_c5sbw2a.jpg', 'maison abbaci');

-- --------------------------------------------------------

--
-- Structure de la table `app_annance_profile`
--

CREATE TABLE `app_annance_profile` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `email` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `app_annance_profile`
--

INSERT INTO `app_annance_profile` (`id`, `nom`, `prenom`, `telephone`, `adresse`, `email`) VALUES
(4, 'abbaci', 'tassenime', '0712 34 45 36', 'tipaza rue de stade', 'kz_abbaci@esi.dz'),
(5, 'Larbaoui ', 'yasmine', '0634258563', 'alger bab ezzouar  ', 'ky_larbaoui@esi.dz');

-- --------------------------------------------------------

--
-- Structure de la table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add annance', 7, 'add_annance'),
(26, 'Can change annance', 7, 'change_annance'),
(27, 'Can delete annance', 7, 'delete_annance'),
(28, 'Can view annance', 7, 'view_annance'),
(29, 'Can add message', 8, 'add_message'),
(30, 'Can change message', 8, 'change_message'),
(31, 'Can delete message', 8, 'delete_message'),
(32, 'Can view message', 8, 'view_message'),
(33, 'Can add profile', 9, 'add_profile'),
(34, 'Can change profile', 9, 'change_profile'),
(35, 'Can delete profile', 9, 'delete_profile'),
(36, 'Can view profile', 9, 'view_profile'),
(37, 'Can add photo', 10, 'add_photo'),
(38, 'Can change photo', 10, 'change_photo'),
(39, 'Can delete photo', 10, 'delete_photo'),
(40, 'Can view photo', 10, 'view_photo');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$390000$y5ITqRyqzfI7rIqzMl5WRB$8ozAgLIGmRB0JpcOD7ubMLa0F4b3uIgV6hrDw2H0Mgw=', '2023-02-02 11:17:47.133564', 1, 'abbaci', '', '', 'kz_abbaci@esi.dz', 1, 1, '2023-02-02 11:17:29.130792');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-02-02 11:19:44.009001', '2', 'abbaci', 1, '[{\"added\": {}}]', 9, 1),
(2, '2023-02-02 11:20:57.470328', '3', 'fatma', 1, '[{\"added\": {}}]', 9, 1),
(3, '2023-02-02 11:21:58.074845', '1', 'maison rahma', 1, '[{\"added\": {}}]', 7, 1),
(4, '2023-02-02 11:23:05.273091', '2', 'terrin d\'alger', 1, '[{\"added\": {}}]', 7, 1),
(5, '2023-02-02 11:23:58.570805', '3', 'logement au bout de mer', 1, '[{\"added\": {}}]', 7, 1),
(6, '2023-02-02 11:24:24.148890', '1', 'Photo object (1)', 1, '[{\"added\": {}}]', 10, 1),
(7, '2023-02-02 11:24:51.317561', '2', 'Photo object (2)', 1, '[{\"added\": {}}]', 10, 1),
(8, '2023-02-02 11:25:02.639977', '3', 'Photo object (3)', 1, '[{\"added\": {}}]', 10, 1),
(9, '2023-02-02 11:26:32.962308', '1', 'Message object (1)', 1, '[{\"added\": {}}]', 8, 1),
(10, '2023-02-02 15:48:43.362279', '16', 'Photo object (16)', 1, '[{\"added\": {}}]', 10, 1),
(11, '2023-02-04 09:31:35.717819', '54', 'terain blida', 1, '[{\"added\": {}}]', 7, 1),
(12, '2023-02-04 09:32:59.998130', '55', 'logement au bout de mer', 1, '[{\"added\": {}}]', 7, 1),
(13, '2023-02-04 09:35:46.669797', '56', 'appartement F5', 1, '[{\"added\": {}}]', 7, 1),
(14, '2023-02-04 09:36:46.517922', '46', 'Photo object (46)', 1, '[{\"added\": {}}]', 10, 1),
(15, '2023-02-04 09:37:19.929547', '47', 'Photo object (47)', 1, '[{\"added\": {}}]', 10, 1),
(16, '2023-02-04 09:37:55.708862', '48', 'Photo object (48)', 1, '[{\"added\": {}}]', 10, 1);

-- --------------------------------------------------------

--
-- Structure de la table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(7, 'app_annance', 'annance'),
(8, 'app_annance', 'message'),
(10, 'app_annance', 'photo'),
(9, 'app_annance', 'profile'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Structure de la table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-02-02 11:15:25.653654'),
(2, 'auth', '0001_initial', '2023-02-02 11:15:27.082209'),
(3, 'admin', '0001_initial', '2023-02-02 11:15:27.160738'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-02-02 11:15:27.172765'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-02-02 11:15:27.186755'),
(6, 'app_annance', '0001_initial', '2023-02-02 11:15:27.297805'),
(7, 'app_annance', '0002_alter_photo_idannance', '2023-02-02 11:15:27.405872'),
(8, 'app_annance', '0003_alter_photo_idannance', '2023-02-02 11:15:27.521653'),
(9, 'contenttypes', '0002_remove_content_type_name', '2023-02-02 11:15:27.576600'),
(10, 'auth', '0002_alter_permission_name_max_length', '2023-02-02 11:15:27.612142'),
(11, 'auth', '0003_alter_user_email_max_length', '2023-02-02 11:15:27.633131'),
(12, 'auth', '0004_alter_user_username_opts', '2023-02-02 11:15:27.647121'),
(13, 'auth', '0005_alter_user_last_login_null', '2023-02-02 11:15:27.681038'),
(14, 'auth', '0006_require_contenttypes_0002', '2023-02-02 11:15:27.684034'),
(15, 'auth', '0007_alter_validators_add_error_messages', '2023-02-02 11:15:27.698028'),
(16, 'auth', '0008_alter_user_username_max_length', '2023-02-02 11:15:27.718016'),
(17, 'auth', '0009_alter_user_last_name_max_length', '2023-02-02 11:15:27.733006'),
(18, 'auth', '0010_alter_group_name_max_length', '2023-02-02 11:15:27.751816'),
(19, 'auth', '0011_update_proxy_permissions', '2023-02-02 11:15:27.770806'),
(20, 'auth', '0012_alter_user_first_name_max_length', '2023-02-02 11:15:27.788794'),
(21, 'sessions', '0001_initial', '2023-02-02 11:15:27.811786'),
(22, 'app_annance', '0004_remove_profile_username', '2023-02-02 14:19:02.017077'),
(23, 'app_annance', '0005_remove_annance_idannanceur_remove_photo_idannance_and_more', '2023-02-02 15:32:30.716451');

-- --------------------------------------------------------

--
-- Structure de la table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('n1qb0ig8q483cjdlp9qaavitxec7axwj', '.eJxVjEEOwiAQRe_C2hAYWqQu3fcMZAZmpGpoUtqV8e7apAvd_vfef6mI21ri1niJU1YXZdXpdyNMD647yHest1mnua7LRHpX9EGbHufMz-vh_h0UbOVbgwB4K0zG5xTC4HsyA3Rg0TG5zrMEcWCtAwnkOIsABpME4SzcO1LvD9sDOCo:1pNXb9:zsnMyV4HnoeISz6OD-bNGiENJRQrm4WYQ0Ni0jhS6ok', '2023-02-16 11:17:47.137560');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `app_annance_annance`
--
ALTER TABLE `app_annance_annance`
  ADD PRIMARY KEY (`id`,`titre`);

--
-- Index pour la table `app_annance_message`
--
ALTER TABLE `app_annance_message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `app_annance_photo`
--
ALTER TABLE `app_annance_photo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `app_annance_profile`
--
ALTER TABLE `app_annance_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Index pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Index pour la table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Index pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Index pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Index pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Index pour la table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Index pour la table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `app_annance_annance`
--
ALTER TABLE `app_annance_annance`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT pour la table `app_annance_message`
--
ALTER TABLE `app_annance_message`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `app_annance_photo`
--
ALTER TABLE `app_annance_photo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT pour la table `app_annance_profile`
--
ALTER TABLE `app_annance_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Contraintes pour la table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Contraintes pour la table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Contraintes pour la table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Contraintes pour la table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
