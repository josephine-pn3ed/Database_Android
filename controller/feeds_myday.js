const mysql = require('mysql')

const response = { error: false, success: false, data: null }

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbandroid'
})

let get_daily_daily = (req, res) => {
    let statement = `INSERT INTO tblaccounts(Usernames, Passwords) VALUES ('${username}','${password}')`
    connection.query(statement, function (err) {
        if (err) throw err
    })
    connection.end()
    res.send("saved")
}

module.exports = { get_daily_daily }