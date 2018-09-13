drop table if exists friends;
create table friends (
    friend_id serial primary key,
    friend_name varchar (180),
    email varchar (180),
    phone text,
    user_id integer references users(user_id)
)
