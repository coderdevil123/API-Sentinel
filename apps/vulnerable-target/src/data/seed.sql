DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS audit_logs;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
);

CREATE TABLE audit_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name,email,password_hash,role)
VALUES
('John Doe','john@test.com','hash123','user'),
('Alice Smith','alice@test.com','hash456','user'),
('Admin User','admin@test.com','adminhash','admin');

INSERT INTO products (name,price)
VALUES
('Laptop',85000),
('Keyboard',2500),
('Monitor',18000),
('Phone',45000);