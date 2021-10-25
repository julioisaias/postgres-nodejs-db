-- Table: public.cities

-- DROP TABLE public.cities;

CREATE TABLE IF NOT EXISTS public.cities
(
    id SERIAL PRIMARY KEY,
    description character varying(150) COLLATE pg_catalog."default"
)


TABLESPACE pg_default;

ALTER TABLE public.cities
    OWNER to postgres;