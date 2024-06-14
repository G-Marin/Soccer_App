import { pool } from './connection.js';


// Add a user to the database
async function addUserDB(query, user_data) {
    try{
        const result = await pool.query(query, user_data);
        return result.rows[0];
    }

    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }
}


// Add a user to the database
async function getUserDB(query, username) {

    try{
        const result = await pool.query(query, [username]);
       
        return result.rows[0];
    }

    catch (error) {
        console.error('User not found:', error), false;
      }
}

// Add favorite for user to the database
async function addFavoriteDB(query, data) {
    try{
        const result = await pool.query(query, data);
        return result.rows[0];
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }


}

// Remove favorite for user from the database
async function removeFavoriteDB(query, data) {

    try{

        console.log("Data: ", data)
        const result = await pool.query(query, data);
        console.log("Result: ", result)
        return result.rows[0];
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }

}

// Get favorite for user from the database
async function getFavoriteDB(query, data) {
    try{
        console.log("Data: ", data)
        console.log("Query: ", query)

        const result = await pool.query(query, data);
        return result.rows[0];
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }

}


// Get favorite for user from the database
async function getUserIdDB(query, data) {
    try{

        const result = await pool.query(query, [data]);

        return result.rows[0];
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }

}

// Get favorite for user from the database
async function getTeamIdDB(query, data) {

    try{
    
        const result = await pool.query(query, [data]);
        return result.rows[0];
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
      }

}



export { addUserDB, addFavoriteDB, removeFavoriteDB, getFavoriteDB, getUserDB, getUserIdDB, getTeamIdDB} 