function validateAccountRegister (fields) {
    const messages = {
        firstname: 'First name is empty',
        lastname: 'Last name is empty',
        email: 'Email is empty',
        phonenumber: 'Phone number is empty',
        // address: 'Address is empty',
        gender: 'Gender was not selected',
        city: 'City is empty',
        food: 'Favorite food is empty'
    };
    let errors = [];
    for (let key in fields) {
       if(fields[key] == '' && key in messages){
            errors.push(messages[key]);
       }
    }
    return errors;
}

module.exports =  validateAccountRegister;