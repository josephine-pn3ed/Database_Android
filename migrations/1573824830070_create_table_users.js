module.exports = {
    "up": "CREATE TABLE accounts_informations (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, account_id INT(11) NOT NULL, first_name VARCHAR(32) NOT NULL, last_name VARCHAR(32) NOT NULL, age INT(11) NOT NULL, birth_date VARCHAR(32) NOT NULL, gender VARCHAR(32) NOT NULL, contact_number INT(11) NOT NULL, created_at VARCHAR(32) NOT NULL, updated_at VARCHAR(32), deleted_at VARCHAR(32))",
    "down": "DROP TABLE accounts"
}