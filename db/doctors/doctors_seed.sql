drop table if exists doctors;
create table doctors (
    doctor_id serial primary key,
    doctor_name varchar (180),
    email varchar (180),
    phone text,
    user_id integer references users(user_id)
)
