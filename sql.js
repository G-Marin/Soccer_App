function addUserSQL() {
    const sql = `INSERT INTO users ( user_id, username, password, email) VALUES (
        $1::integer, $2::character varying, $3::character varying, $4::character varying)
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

function removeFavoriteSQL() {
    const sql = `DELETE FROM public.users_teams
    WHERE (user_id, team_id) IN
        (($1, $2));`

    return sql;
}

function getFavoriteSQL () {
    
    const sql = `SELECT * FROM public.users_teams WHERE user_id = $1::integer;`

    return sql;
}



function getNewsQuery (team) {
    
    let query = "https://newsapi.org/v2/everything?q="

    query += team

    query += "&searchIn=title&sources=espn&sortBy=publishedAt&apiKey=205ce2358e0842109aa663110ed7166d"

    return query;
}



export { addUserSQL, addFavoriteSQL, removeFavoriteSQL, getFavoriteSQL, getNewsQuery};