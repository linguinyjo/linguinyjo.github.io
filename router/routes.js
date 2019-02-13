// Load the MySQL pool connection
const pool = require('../data/config');

// Route the app
const router = app => {
    // Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to the Node.js Express REST API!'
        });
    });

    // Display all dailytarget
    app.get('/dailytarget', (request, response) => {
        pool.query('SELECT * FROM dailytarget', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    
    // Display a single user by ID
    app.get('/dailytarget/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM dailytarget WHERE id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    // Add a new entry
    app.post('/dailytarget', (request, response) => {
        pool.query('INSERT INTO dailytarget SET ?', request.body, (error, result) => {
            if (error) throw error;
    
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

    // Update an existing user
    app.put('/dailytarget/:id', (request, response) => {
        const id = request.params.id;
    
        pool.query('UPDATE dailytarget SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;
    
            response.send('User updated successfully.');
        });
    });
    // Delete a user
    app.delete('/dailytarget/:id', (request, response) => {
        const id = request.params.id;
    
        pool.query('DELETE FROM dailytarget WHERE id = ?', id, (error, result) => {
            if (error) throw error;
    
            response.send('User deleted.');
        });
    });
}
// Export the router
module.exports = router;