ALTER TABLE "public"."ticket" DROP CONSTRAINT "FK_121841c48524caa8ab4c1c05c79" CASCADE;
ALTER TABLE "public"."ticket" DROP CONSTRAINT "fk_ticket_ticket_1" CASCADE;
ALTER TABLE "public"."ticket" DROP CONSTRAINT "fk_ticket_ticket_2" CASCADE;

ALTER TABLE "public"."client" DROP CONSTRAINT "PK_96da49381769303a6515a8785c7" CASCADE;
ALTER TABLE "public"."service" DROP CONSTRAINT "PK_85a21558c006647cd76fdce044b" CASCADE;
ALTER TABLE "public"."technical" DROP CONSTRAINT "PK_0071c7d8a6bae24482194122df9" CASCADE;
ALTER TABLE "public"."ticket" DROP CONSTRAINT "PK_d9a0835407701eb86f874474b7c" CASCADE;

DROP TABLE IF EXISTS "public"."client" CASCADE;
DROP TABLE IF EXISTS "public"."service" CASCADE;
DROP TABLE IF EXISTS "public"."technical" CASCADE;
DROP TABLE IF EXISTS "public"."ticket" CASCADE;

CREATE TABLE "public"."client" (
  "id" int4 NOT NULL DEFAULT nextval('client_id_seq'::regclass),
  "firstName" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(15) COLLATE "pg_catalog"."default" NOT NULL,
  "status" int4 NOT NULL DEFAULT 1,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")
);
ALTER TABLE "public"."client" OWNER TO "postgres";

CREATE TABLE "public"."service" (
  "id" int4 NOT NULL DEFAULT nextval('service_id_seq'::regclass),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "status" int4 NOT NULL DEFAULT 1,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id")
);
ALTER TABLE "public"."service" OWNER TO "postgres";

CREATE TABLE "public"."technical" (
  "id" int4 NOT NULL DEFAULT nextval('technical_id_seq'::regclass),
  "firstName" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(15) COLLATE "pg_catalog"."default" NOT NULL,
  "status" int4 NOT NULL DEFAULT 1,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "yearsService" int4 NOT NULL,
  "outsourcing" bool NOT NULL,
  CONSTRAINT "PK_0071c7d8a6bae24482194122df9" PRIMARY KEY ("id")
);
ALTER TABLE "public"."technical" OWNER TO "postgres";

CREATE TABLE "public"."ticket" (
  "id" int4 NOT NULL DEFAULT nextval('ticket_id_seq'::regclass),
  "technical_fk" int4,
  "client_fk" int4 NOT NULL,
  "service_fk" int4 NOT NULL,
  "status" int4 NOT NULL DEFAULT 1,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id")
);
ALTER TABLE "public"."ticket" OWNER TO "postgres";

ALTER TABLE "public"."ticket" ADD CONSTRAINT "FK_121841c48524caa8ab4c1c05c79" FOREIGN KEY ("service_fk") REFERENCES "public"."service" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."ticket" ADD CONSTRAINT "fk_ticket_ticket_1" FOREIGN KEY ("client_fk") REFERENCES "public"."client" ("id");
ALTER TABLE "public"."ticket" ADD CONSTRAINT "fk_ticket_ticket_2" FOREIGN KEY ("technical_fk") REFERENCES "public"."technical" ("id");

