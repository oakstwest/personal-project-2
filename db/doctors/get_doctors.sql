select * from users u
join doctors d on u.user_id = d.user_id
where u.user_id = $1;
