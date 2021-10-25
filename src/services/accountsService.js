const db = require('../environment/database');

async function getAllAccounts () {
    let response;
    try{
        response = await db.query(
            `SELECT * FROM accounts`,
        );
        if(response.rows.length === 0) throw 'The accounts table is empty. Please insert data';
    }catch(e){
        console.error('Cannot get accounts from database', e);
    }
    return response.rows;
}

module.exports =  getAllAccounts;