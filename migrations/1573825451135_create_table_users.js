module.exports = {
    "up": "CREATE TABLE feeds (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, account_id INT(11) NOT NULL, details VARCHAR(32) NOT NULL, type VARCHAR(32) NOT NULL, created_at VARCHAR(32) NOT NULL, updated_at VARCHAR(32), deleted_at VARCHAR(32))",
    "down": "DROP TABLE feeds"
}