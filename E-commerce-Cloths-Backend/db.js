const mariadb = require('mariadb');

async function getConnection() {
    return await mariadb.createConnection({
        host:'localhost',
        user:'root',
        password:'shiv3069',
        database:'ecommerce_db'
    });
}
module.exports = getConnection;