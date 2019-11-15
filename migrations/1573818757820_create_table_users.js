module.exports = {
    "up": "UPDATE accounts SET username = 'John Snow' WHERE username = 'John'",
    "down": "UPDATE accounts SET username = 'John' WHERE username = 'John Snow'"
}