function addUserSQL() {
    const sql = `INSERT INTO users (username, password, email) VALUES (
        $1::character varying, $2::character varying, $3::character varying)
         returning user_id; `

   return sql; 
}

function addFavoriteSQL() {
    const sql = `INSERT INTO public.users_teams (
        user_id, team_id) VALUES (
        $1::integer, $2::integer)
         returning user_id,team_id;`
    
    return sql;
}

function getUserSQL() {

    const sql = `SELECT password FROM users WHERE username = $1::character varying;`

    return sql; 
}

function getUserIdSQL() {
    const sql = `SELECT user_id FROM users WHERE username = $1::character varying;`

    return sql; 
}

function removeFavoriteSQL() {
    const sql = `DELETE FROM public.users_teams
    WHERE (user_id, team_id) IN
        (($1, $2));`

    return sql;
}

function getFavoriteSQL () {
    
    const sql = `SELECT t.team_name FROM users u JOIN users_teams ut ON u.user_id = ut.user_id JOIN teams t ON ut.team_id = t.team_id WHERE u.username = $1::character varying;`

    return sql;
}

function getTeamIdSQL() {
    const sql = `SELECT team_id FROM teams WHERE team_name = $1::character varying;`

    return sql;
}



function getNewsQuery (team) {
    
    let query = "https://newsapi.org/v2/everything";

    return query;
}



export { addUserSQL, addFavoriteSQL, removeFavoriteSQL, getFavoriteSQL, getNewsQuery, getUserSQL, getUserIdSQL, getTeamIdSQL};