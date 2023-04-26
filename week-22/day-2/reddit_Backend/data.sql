    CREATE DATABASE IF NOT EXISTS reddit;

    USE reddit;

    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
        title VARCHAR (256) NOT NULL,
        url TEXT,
        timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
        score INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY(id)
    );