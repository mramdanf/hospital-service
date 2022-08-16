CREATE TABLE `user`
(
  `id`            INT(11) NOT NULL auto_increment,
  `email`          VARCHAR(255) NOT NULL,
  `password`          VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`email`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;