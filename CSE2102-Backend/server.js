const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const db_pass = process.env.DB_PASS;

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: db_pass,
    database: 'health_center_database'
})

app.get('/', (re, res) => {
    return res.json("From Backend Side")
})

app.get('/admin-staff', (re, res) => {
    const sql = "SELECT * FROM staff;"
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/admin-staff/:value', (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM staff WHERE Staff_ID LIKE '%" + value + "%' OR First_Name LIKE '%" + value + "%' OR Last_Name LIKE '%" + value + "%' OR Role LIKE '%" + value + "%' OR Specialty LIKE '%" + value + "%' OR Contact_Number LIKE '%" + value + "%' OR Email LIKE '%" + value + "%'";
    
    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening...")
})