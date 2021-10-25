CREATE TABLE IF NOT EXISTS public.accounts
(
    id SERIAL PRIMARY KEY,
    firstname character varying(150) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(150) COLLATE pg_catalog."default" NOT NULL,
    email character varying(150) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(150) COLLATE pg_catalog."default" NOT NULL,
    address character varying(300) COLLATE pg_catalog."default",
    gender character varying(10) COLLATE pg_catalog."default" NOT NULL,
    cityid bigint NOT NULL,
    food character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT fk_cities FOREIGN KEY (cityid)
        REFERENCES public.cities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.accounts
    OWNER to postgres;
-- Index: fki_fk_cities

-- DROP INDEX public.fki_fk_cities;

CREATE INDEX fki_fk_cities
    ON public.accounts USING btree
    (cityid ASC NULLS LAST)
    TABLESPACE pg_default;