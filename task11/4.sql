SELECT user_id, name FROM task11.user WHERE (user_id) in
(SELECT user_id FROM task11.post group by user_id having count(*) > 3 AND valid_until > date(NOW()))