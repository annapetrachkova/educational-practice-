SELECT name FROM task11.user WHERE (user_id) in
((SELECT user_id FROM task11.ad group by user_id, created_at having count(*) > 3
AND date(ad.created_at) > date('2021-05-11')))