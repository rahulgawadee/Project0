const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Database connection setup
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rahul@123", // Ensure this is correct
    database: "participant_crud" // Ensure this matches your database name
});

// Connect to the MySQL database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Route to create a new participant
app.post("/create", (req, res) => {
    const {
        firstName, middleName, lastName, designation, email,
        mobile, organization, address, city, pincode, gender, caste
    } = req.body;

    // Log the incoming data to ensure it's correct
    console.log("Received data:", req.body);

    // SQL query to insert participant data
    const query = `INSERT INTO participants (
        firstName, middleName, lastName, designation, email,
        mobile, organization, address, city, pincode, gender, caste
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [
        firstName, middleName, lastName, designation, email,
        mobile, organization, address, city, pincode, gender, caste
    ], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ error: 'Failed to insert participant', details: err });
        } else {
            console.log('Participant added successfully:', result);
            res.status(200).send({ message: 'Participant added successfully', result });
        }
    });
});

// Route to get all participants
app.get("/participants", (req, res) => {
    db.query('SELECT * FROM participants', (err, result) => {
        if (err) {
            console.error('Error fetching participants:', err);
            res.status(500).send({ error: 'Failed to fetch participants', details: err });
        } else {
            res.status(200).send(result);
        }
    });
});

// Route to delete a participant
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    
    db.query('DELETE FROM participants WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error deleting participant:', err);
            res.status(500).send({ error: 'Failed to delete participant', details: err });
        } else {
            res.status(200).send({ message: 'Participant deleted successfully', result });
        }
    });
});
app.post("/admin/login", (req, res) => {
    const { username, password } = req.body;

    // Query to find the user in the database
    db.query("SELECT * FROM admins WHERE username = ?", [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Database error" });
        }

        // Check if user exists
        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid username or password" });
        }

        // Compare the password with the stored hashed password
        const admin = results[0];
        // Uncomment the line below when using hashed passwords
        // bcrypt.compare(password, admin.password, (err, isMatch) => { ... });
        
        // For demonstration, using plain text password check (not recommended for production)
        if (admin.password === password) { // Use hashed password check in production
            res.status(200).json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    });
});

// Start the server
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
