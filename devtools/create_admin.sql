INSERT INTO public.app_user(name, email, creationdate, lastupdateddate, isblocked, roles)
	VALUES ('admin', 'admin@gmail.com', '2020-04-19 14:32:06.199+02', '2020-04-19 14:32:06.199+02', 'false', '["admin"]');

INSERT INTO public.app_user_credentials(password, userid)
	VALUES ('$2a$10$PT5d6d.Pz9KMw8To/OPvwOgKiDE.btjczpUkTUNOucKhGOWi1.5mm', 1);