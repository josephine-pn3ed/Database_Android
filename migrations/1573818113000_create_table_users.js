module.exports = {
    "up": "CREATE TABLE accounts (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(32) UNIQUE NOT NULL, email VARCHAR(32) NOT NULL, password VARCHAR(32) NOT NULL, type VARCHAR(32) NOT NULL, created_at VARCHAR(32) NOT NULL, updated_at VARCHAR(32), deleted_at VARCHAR(32))",
    "down": "DROP TABLE accounts"
}