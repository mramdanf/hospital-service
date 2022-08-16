SELECT u.id as id, u.email as email, d.name as doctor_name, p.name as patient_name
FROM user as u
LEFT JOIN doctor as d
  ON u.id = d.user_id
LEFT JOIN patient as p
  ON u.id = p.user_id;