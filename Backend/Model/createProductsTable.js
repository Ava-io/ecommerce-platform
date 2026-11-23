export const createProductsTable = `
CREATE TABLE IF NOT EXISTS products(
id INT SERIAL PRIMARY KEY,
category_id INT REFERENCES categories(id) ON DELETE CASCADE,
name VARCHAR(100) NOT NULL,
description VARCHAR(225) NOT NULL,
price DECIMAL,
stock_quantity INT NOT NULL,
image_url TEXT NOT NULL,
is_active VARCHAR(20) DEFAULT 'in-stock' CHECK (is_active IN ('in_stock', 'out_of_stock')),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
