CREATE DATABASE ag_shop;
USE ag_shop;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  price DECIMAL(10,2),
  image VARCHAR(255)
);

INSERT INTO products (title, price, image) VALUES
('White T-Shirt', 19.99, 'img/product1.jpg'),
('Blue Jeans', 29.99, 'img/product2.jpg'),
('Leather Jacket', 99.99, 'img/product3.jpg');

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT
);
