CREATE TABLE `doctor`
(
  `id`            INT(11) NOT NULL auto_increment,
  `user_id`       INT(11),
  `name`          VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;