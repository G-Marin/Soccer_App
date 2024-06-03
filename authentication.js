import bcrypt from 'bcrypt';
import session from 'express-session';
import { getUserDB } from './database.js';
import { getUserSQL} from './sql.js';

const hashPassword = async (password) => {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
}

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


