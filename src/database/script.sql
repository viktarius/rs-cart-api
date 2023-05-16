insert into users (first_name, second_name, email) values
	('John', 'Doe', 'John_Doe@gmail.com'),
	('Bread', 'Pit', 'Bread_Pit@gmail.com')

insert into carts (created_at, updated_at, status) values
	(current_date, current_date, 'open'),
	(current_date, current_date, 'open'),
	(current_date, current_date, 'open'),
	(current_date, current_date, 'open'),
	(current_date, current_date, 'ordered'),
	(current_date, current_date, 'ordered'),
	(current_date, current_date, 'ordered'),
	(current_date, current_date, 'ordered'),
	(current_date, current_date, 'open'),
	(current_date, current_date, 'ordered')

insert into cart_info (cart_id, count) values
	((select id from carts limit 1 offset 0), 100),
	((select id from carts limit 1 offset 1), 200),
	((select id from carts limit 1 offset 2), 300),
	((select id from carts limit 1 offset 3), 300),
	((select id from carts limit 1 offset 4), 320),
	((select id from carts limit 1 offset 5), 100),
	((select id from carts limit 1 offset 6), 10),
	((select id from carts limit 1 offset 7), 120),
	((select id from carts limit 1 offset 8), 80)

insert into orders (comments, status, total, payment, delivery) values ('comments', 'open', 123, '{}', '{}')
