-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 02:26 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_03_28_071328_create_products_table', 1),
(6, '2023_03_28_071550_add_role_to_users_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `expires_at`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', NULL, 1, 'token-name', '5bf240a07cd66f716f67cf69f49da568f88812939773c29562a3d491760ffcc7', '[\"*\"]', NULL, '2023-03-28 03:06:38', '2023-03-28 03:06:38'),
(2, 'App\\Models\\User', NULL, 1, 'token-name', 'bfe228886c29b76904c3e79f20e6ee10309463008817d3c0f03b574b4bee198b', '[\"*\"]', NULL, '2023-03-28 03:09:32', '2023-03-28 03:09:32'),
(3, 'App\\Models\\User', NULL, 1, 'token-name', '998f20af18999c8549accc2c4be44d55fa58a0e599de354c050f70e855cf4eac', '[\"*\"]', NULL, '2023-03-28 03:10:41', '2023-03-28 03:10:41'),
(4, 'App\\Models\\User', NULL, 1, 'token-name', '67abe3e69584123fbd5c62d42d325dc9749586e13ae28c69f0f0ea3ef5452173', '[\"*\"]', NULL, '2023-03-28 03:11:45', '2023-03-28 03:11:45'),
(5, 'App\\Models\\User', NULL, 1, 'token-name', 'b96df26a1f2a75efb1f7aa5632168b2f94ab8a9aa05b3c24bdf88cfe815edace', '[\"*\"]', NULL, '2023-03-28 03:12:13', '2023-03-28 03:12:13'),
(6, 'App\\Models\\User', NULL, 1, 'token-name', '7ca116a173a0748ea6e39d16b9a7215a57e8d04e6544feaf8d7854b913bb6d26', '[\"*\"]', NULL, '2023-03-28 03:13:00', '2023-03-28 03:13:00'),
(7, 'App\\Models\\User', NULL, 1, 'token-name', '86a31d63307b2fe017811997b8f0f6a98a662cf44ea768c4015b738e7971ae9c', '[\"*\"]', NULL, '2023-03-28 03:14:16', '2023-03-28 03:14:16'),
(8, 'App\\Models\\User', NULL, 1, 'token-name', 'fbf633ca6b172aaed02e21a612994b353e3381b2f6cf9f22531fa69aee5e771e', '[\"*\"]', NULL, '2023-03-28 03:22:26', '2023-03-28 03:22:26'),
(9, 'App\\Models\\User', NULL, 1, 'token-name', '7fac6fd0a54b979fe63453c1a0bafd1d63f451f243690dc0b502edfefd372184', '[\"*\"]', '2023-03-28 06:10:21', '2023-03-28 03:25:24', '2023-03-28 06:10:21'),
(10, 'App\\Models\\User', NULL, 1, 'token-name', 'f06f2afe88abca84604f69ed4b9062bbae317d9d014d6e8d08b80ca3d311c68c', '[\"*\"]', '2023-03-28 04:54:50', '2023-03-28 04:50:45', '2023-03-28 04:54:50'),
(11, 'App\\Models\\User', NULL, 1, 'token-name', '43b3c45bdc872d5d6055394ddf89b3fb808d1631ea49ec6ffe4d0f178123a2a1', '[\"*\"]', '2023-03-28 06:38:19', '2023-03-28 04:51:20', '2023-03-28 06:38:19'),
(12, 'App\\Models\\User', NULL, 1, 'token-name', '3aae539e87e353267c311b04a114fdc2ccf483bd127b2ed667f9a5074af60a76', '[\"*\"]', '2023-03-28 04:57:58', '2023-03-28 04:55:47', '2023-03-28 04:57:58'),
(13, 'App\\Models\\User', NULL, 1, 'token-name', '28d43f3c41cc4a41ed84bf761a318ce5f51d78a28f973940dda756e91eb09693', '[\"*\"]', '2023-03-28 05:08:23', '2023-03-28 04:58:32', '2023-03-28 05:08:23'),
(14, 'App\\Models\\User', NULL, 1, 'token-name', '670e9f8cdb171e8f1ea6cdd73c11e4bd3be3395cf44ca5a7ef000ada0e8ddd03', '[\"*\"]', '2023-03-28 05:13:32', '2023-03-28 05:12:53', '2023-03-28 05:13:32'),
(15, 'App\\Models\\User', NULL, 1, 'token-name', 'cba1a5b3a96907a8ddb9f5e9281578376a6c00c807b293cbd7e06bfd68110d9e', '[\"*\"]', '2023-03-28 05:15:24', '2023-03-28 05:15:23', '2023-03-28 05:15:24'),
(16, 'App\\Models\\User', NULL, 1, 'token-name', 'c567c26dcfe16777053b73dc002911018c9b5ecacb183c95ad834b78648c0ae2', '[\"*\"]', '2023-03-28 05:18:21', '2023-03-28 05:16:23', '2023-03-28 05:18:21'),
(17, 'App\\Models\\User', NULL, 1, 'token-name', 'd4c91481e3972ef15d54635eca1599d686dc8482e9c70f49c1f60fd1c33cc4f2', '[\"*\"]', '2023-03-28 05:19:31', '2023-03-28 05:19:31', '2023-03-28 05:19:31'),
(18, 'App\\Models\\User', NULL, 1, 'token-name', '3fc193fdf4e921609f6c61c7e669c0def07eaf3c5c296f307d2fedcc559d9144', '[\"*\"]', '2023-03-28 05:32:14', '2023-03-28 05:19:55', '2023-03-28 05:32:14'),
(19, 'App\\Models\\User', NULL, 1, 'token-name', 'b64efd2f53cc6e903924968c065001340c86a80ab580695600b20c203c0a3c68', '[\"*\"]', '2023-03-28 06:24:56', '2023-03-28 05:32:32', '2023-03-28 06:24:56'),
(20, 'App\\Models\\User', NULL, 4, 'token-name', 'dd5c094fe7b21186b10a2de567ad2b6f188e01576183313f73691e16784d57a1', '[\"*\"]', '2023-03-28 06:25:31', '2023-03-28 06:25:21', '2023-03-28 06:25:31'),
(21, 'App\\Models\\User', NULL, 3, 'token-name', 'af2f04fffd1d6413e781bb00a09763b39ad0712c9ff51fa133ee3b9cb4c33a71', '[\"*\"]', '2023-03-28 06:25:45', '2023-03-28 06:25:44', '2023-03-28 06:25:45'),
(22, 'App\\Models\\User', NULL, 1, 'token-name', '1d5b807813e0abc3505240cef7eb006f49659ded4488808d1973a414a4fff4f9', '[\"*\"]', '2023-03-28 06:37:24', '2023-03-28 06:34:58', '2023-03-28 06:37:24'),
(23, 'App\\Models\\User', NULL, 1, 'token-name', '90c1215aeaaf9b5c27ba42e39dcc65656ad4bb8f79b4e14ad7d95737461bd949', '[\"*\"]', '2023-03-28 06:48:18', '2023-03-28 06:37:53', '2023-03-28 06:48:18'),
(24, 'App\\Models\\User', NULL, 1, 'token-name', 'e0ea3b5c0e5987c5142b80bd3f5510ebbe34f2d20abf87663e1dd90129e64870', '[\"*\"]', '2023-03-28 06:49:47', '2023-03-28 06:48:58', '2023-03-28 06:49:47'),
(25, 'App\\Models\\User', NULL, 3, 'token-name', 'b6783efcdd0f52eb0f1efb901fe42f78c6548a16d5b63229c337374fe0011501', '[\"*\"]', '2023-03-28 06:49:56', '2023-03-28 06:49:56', '2023-03-28 06:49:56'),
(26, 'App\\Models\\User', NULL, 4, 'token-name', 'befe18bf249191d43455e9bb8a00f20468679e9cd4d8d3f6331de369cbe90736', '[\"*\"]', '2023-03-28 06:50:46', '2023-03-28 06:50:22', '2023-03-28 06:50:46');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
(2, 'Table_edit145', 'Test', 200, 123, '2023-03-28 04:35:13', '2023-03-28 06:50:30'),
(4, 'Chair', 'Descriptions', 100, 22, '2023-03-28 06:19:11', '2023-03-28 06:19:11'),
(5, 'product34', 'test', 12, 2, '2023-03-28 06:24:33', '2023-03-28 06:24:42'),
(6, 'we', '1233', 1, 1, '2023-03-28 06:47:40', '2023-03-28 06:47:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'client'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(1, 'Admin User', 'admin@gmail.com', NULL, '$2y$10$F16a2U9tZr1qGnRtuo552.wkMFKKgumlY5HfeJDFNxZ9ftz3o7Unq', NULL, '2023-03-28 03:03:13', '2023-03-28 03:03:13', 'Admin'),
(3, 'client', 'client@gmail.com', NULL, '$2y$10$WIlBu5ysmlqjYcaUEyBCueHQ0nc5M55/H1eVKximbT.RMjHeua2T6', NULL, '2023-03-28 06:13:47', '2023-03-28 06:13:47', 'Client'),
(4, 'Moderator', 'moderator@gmail.com', NULL, '$2y$10$sntnuDrAVLbuDVD47dNfc.hPlwLkLFn34RWQwruV2SP1osSQojmoO', NULL, '2023-03-28 06:14:36', '2023-03-28 06:14:36', 'Moderator'),
(6, 'Test', 'test@gmail.com', NULL, '$2y$10$d6CKPpRclZzCaai8eEsT7uTLH.Z6FsBiQ8.YBuL79qbqNTIp7c.Om', NULL, '2023-03-28 06:16:05', '2023-03-28 06:16:05', 'Admin'),
(7, 'tests2', 'tests2@gmail.com', NULL, '$2y$10$3HdAP.B.zdjayxJWHGy2bud4gONbs5HbCYEG9RApcydKd5OEKkl16', NULL, '2023-03-28 06:19:56', '2023-03-28 06:19:56', 'Moderator'),
(8, 'test', '233@aa.co', NULL, '$2y$10$MfoF9gYSB.6qrYEwa4xL5ugYZ7KxzfA6Pn99T3SQvbQV1Wu.csPEm', NULL, '2023-03-28 06:20:47', '2023-03-28 06:20:47', 'Client'),
(9, 'dd113456', 'asd@sss', NULL, '$2y$10$tYXep5qGdY1yKaxojtvcUe8C/quWWr2BAOnEEJ3B0O7hVHN6jOqiW', NULL, '2023-03-28 06:21:31', '2023-03-28 06:23:37', 'Client'),
(10, 'ss', 'sss@gmail.com', NULL, '$2y$10$xAqxvUDFh0LEcRFEWyZvKuU/9DUG1TZFPs5SvpFEi4kNVPVc2MPeO', NULL, '2023-03-28 06:48:16', '2023-03-28 06:48:16', 'Moderator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
