select * from users u
join friends f on u.user_id = f.user_id
where u.user_id = $1;