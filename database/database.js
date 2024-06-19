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


// Get user information from database
async function getUserDB(query, username) {

    try{
        const result = await pool.query(query, [username]);
        return result.rows[0];
    }

    catch (error) {
        return [error, "Error getting user"];
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


// Get user_id corresponding to username
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

// Get team_id corresponding to team 
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

// Get all teams
async function getTeamsDB(query){


    try {
        const result = await pool.query(query);
        

        const values = [];

        for ( const [key, value] of Object.entries(result.rows)){
            values.push(value.team_name);
        }

        console.log("Values: ", values)

        return values;
    }
    catch (error){

        console.error('Error fetching teams', error);
        throw new Error("Error fetching teams")

    }

}




export { addUserDB, addFavoriteDB, removeFavoriteDB, getFavoriteDB, getUserDB, getUserIdDB, getTeamIdDB, getTeamsDB} 