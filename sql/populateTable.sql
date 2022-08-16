INSERT INTO user
(id, email, password)
VALUES
(1, 'mramdanf@gmail.com', 'test123'),
(2, 'nadmar@gmail.com', 'test123');

INSERT INTO doctor
(id, user_id, name)
VALUES
(1, 1, 'ramdan');

INSERT INTO patient
(id, user_id, name)
VALUES
(1, 2, 'nadmar');