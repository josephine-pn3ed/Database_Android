module.exports = {
    "up": "CREATE TABLE feed_images (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, account_id INT(11) NOT NULL, url VARCHAR(224) NOT NULL, created_at VARCHAR(32) NOT NULL, updated_at VARCHAR(32), deleted_at VARCHAR(32))",
    "down": "DROP TABLE feed_images"
}