BEGIN TRANSACTION;
DROP TABLE IF EXISTS "challenges";
CREATE TABLE IF NOT EXISTS "challenges" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"title"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"image"	TEXT DEFAULT 'img_standard_challenge.png',
	"score"	NUMERIC DEFAULT 0
);
DROP TABLE IF EXISTS "donations";
CREATE TABLE IF NOT EXISTS "donations" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"score"	NUMERIC NOT NULL DEFAULT 0,
	"objective"	TEXT
);
DROP TABLE IF EXISTS "challenge_user";
CREATE TABLE IF NOT EXISTS "challenge_user" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"status"	TEXT NOT NULL DEFAULT 'in-progress',
	"user_id"	INTEGER,
	"challenge_id"	INTEGER,
	FOREIGN KEY("challenge_id") REFERENCES "challenges"("id"),
	FOREIGN KEY("user_id") REFERENCES "users"("id")
);
DROP TABLE IF EXISTS "users";
CREATE TABLE IF NOT EXISTS "users" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"user_name"	TEXT NOT NULL UNIQUE,
	"password"	TEXT NOT NULL,
	"image"	TEXT,
	"score"	NUMERIC,
	"biography"	TEXT,
	"person_id"	INTEGER,
	FOREIGN KEY("person_id") REFERENCES "persons"("id")
);
DROP TABLE IF EXISTS "persons";
CREATE TABLE IF NOT EXISTS "persons" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"first_name"	INTEGER,
	"last_name"	INTEGER,
	"age"	TEXT,
	"email"	TEXT UNIQUE
);
INSERT INTO "users" ("id","user_name","password","image","score","biography","person_id") VALUES (1,'vidmore','12345678',NULL,NULL,NULL,1);
INSERT INTO "persons" ("id","first_name","last_name","age","email") VALUES (1,NULL,NULL,NULL,NULL);
INSERT INTO "persons" ("id","first_name","last_name","age","email") VALUES (2,NULL,NULL,NULL,NULL);
COMMIT;
