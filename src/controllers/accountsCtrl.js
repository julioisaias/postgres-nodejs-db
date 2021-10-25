const db = require('../environment/database');
const validateAccountRegister = require('../middlewares/accountsMiddleware');
const getAllCities = require('../services/citiesService');
const getAllAccounts = require('../services/accountsService');


const getAllData = async (req, res, next) => {
    const cities = await getAllCities();
    const accounts = await getAllAccounts();
    return res.render('index', { cities, accounts });
};


const createAccount = async (req, res, next) => {
  
  const { ...data } =  req.body;
  const errors = validateAccountRegister(data);
  const cities = await getAllCities();
  let accounts = await getAllAccounts();

  if(errors && errors.length){
    res.render('index', { cities, accounts, error_message: 'List of errors', errors });
  }else{

    if(Array.isArray(data.food)){
      data.food = data.food.filter(v => v != '').join(', ');
    } 
    
    try {
      const response = await db.query(
        'INSERT INTO accounts (firstname, lastname, email, phone, address, gender, cityid, food) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [data.firstname, data.lastname, data.email, data.phonenumber, data.address, data.gender, data.city, data.food],
      );
      console.log('[-] INSERTED');
    }catch(e){
      throw 'Error in transaction: ' + e
    }
 
    accounts = await getAllAccounts();
    res.render('index', { cities, accounts, message: 'Saved successfully!' });  
  }

};

module.exports = {
  getAllData,
  createAccount
};