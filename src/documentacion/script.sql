CREATE TABLE  public.usuarios
(
    id_usuario SERIAL PRIMARY KEY,
	    username varchar(20) NOT NULL,
    pass varchar(20) NOT NULL,
    fecha_registro date DEFAULT CURRENT_DATE
)