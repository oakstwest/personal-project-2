insert into doctors (doctor_name, email, phone, user_id)
values ($1, $2, $3, $4)
returning *;



