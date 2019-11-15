module.exports = {
    "up": "CREATE TABLE ms_messages (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, ms_group_id INT(11) NOT NULL, account_id INT(11) NOT NULL, message VARCHAR(224) NOT NULL, created_at VARCHAR(32) NOT NULL, updated_at VARCHAR(32), deleted_at VARCHAR(32))",
    "down": "DROP TABLE ms_messages"
}