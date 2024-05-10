function createUser(tableName, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const sql = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${values.map(value => `'${value}'`).join(', ')})`;

    return sql;
}

function updateUser(tableName, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const sql = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${values.map(value => `'${value}'`).join(', ')})`;

    return sql;
}

function addFavorite(tableName, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const sql = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${values.map(value => `'${value}'`).join(', ')})`;

    return sql;
}

function removeFavorite(tableName, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const sql = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${values.map(value => `'${value}'`).join(', ')})`;

    return sql;
}


export { createUser, updateUser, addFavorite, removeFavorite };