export const creatUsersTable = `
CREATE TABLE IF NOT EXISTS users(
id INT SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
role VARCHAR(10) DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
