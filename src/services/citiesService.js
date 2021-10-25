const db = require('../environment/database');

async function getAllCities () {
    let response;
    try{
        response = await db.query(
            `SELECT * FROM cities`,
        );
        if(response.rows.length === 0) throw 'The cities table is empty. Please insert data';
    }catch(e){
        console.error('Cannot get cities from database', e);
    }
    return response.rows;
}

module.exports =  getAllCities;