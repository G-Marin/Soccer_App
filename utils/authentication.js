import bcrypt from 'bcrypt';
import session from 'express-session';
import { getUserDB } from '../database/database.js';
import { getUserSQL} from './sql.js';


// Hashes password with salt for secure storage
const hashPassword = async (password) => {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
}


// Authenticates user 
const authenticateUser = async (username, password) => {
    
    const query = getUserSQL();

    let hash= await getUserDB(query, username);

    console.log("Hash:", hash)
    console.log("Password:", password)

    const isMatch = await bcrypt.compare(password, hash.password);
    if (isMatch) {
        return true;
    }
    return false;
}

export { hashPassword, authenticateUser};


