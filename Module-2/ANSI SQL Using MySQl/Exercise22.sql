 Duplicate Registrations Check:
SELECT user_id, event_id, COUNT(*) AS total
FROM Registrations
GROUP BY user_id, event_id
HAVING total > 1;
