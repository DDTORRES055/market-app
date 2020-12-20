CREATE DATABASE market_app_database;

USE market_app_database;

-- PRODUCTS TABLE
CREATE TABLE products (
  _id INT(11) NOT NULL,
  barcode VARCHAR(13) NOT NULL,
  name VARCHAR(25) NOT NULL,
  quantity INT(11) NOT NULL,
  price DECIMAL(8,2),
  enabled BOOLEAN ,
  created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE products
  ADD PRIMARY KEY (_id);

ALTER TABLE products
  MODIFY _id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE products;