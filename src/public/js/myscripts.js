function toggleTo1() {
    let tr = document.querySelector('#step1-tab');
    let tab = new bootstrap.Tab(tr);
    tab.show();
}

function toggleTo2() {
    if (checkValidationPersonalInfo() == true) {
        let tr = document.querySelector('#step2-tab');
        let tab = new bootstrap.Tab(tr);
        tab.show();
    }
}

function toggleTo3() {
    if (validatePreferences() == true) {
        let tr = document.querySelector('#step3-tab');
        let tab = new bootstrap.Tab(tr);
        tab.show();
        finalValues();
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function finalValues() {
    document.getElementById('first_name_label').innerHTML = document.getElementsByName("firstname")[0].value;
    document.getElementById('last_name_label').innerHTML = document.getElementsByName("lastname")[0].value;
    document.getElementById('email_label').innerHTML = document.getElementsByName("email")[0].value;
    document.getElementById('phone_label').innerHTML = document.getElementsByName("phonenumber")[0].value;
    document.getElementById('address_label').innerHTML = document.getElementsByName("address")[0].value;
    document.getElementById('gender_label').innerHTML = document.getElementsByName("gender")[0].value;

    let cityOption = document.getElementById("city").value;
    document.getElementById('city_label').innerHTML = document.getElementById("city")[cityOption].text;

    let food_elements = Array.from(document.querySelectorAll("input[type=checkbox][name=food]:checked")).map(e => e.value);
    let foods = food_elements.filter(v => v != '').join(', ');

    document.getElementById('food_label').innerHTML = foods;
}


function checkValidationPersonalInfo() {

    var valid = false;

    if (document.getElementsByName("firstname")[0].value == '') {
        document.getElementById('firstname_message').style.display = 'block';
        return false
    } else {
        document.getElementById('firstname_message').style.display = 'none';
        valid = true
    }

    if (document.getElementsByName("lastname")[0].value == '') {
        document.getElementById('lastname_message').style.display = 'block';
        return false
    } else {
        document.getElementById('lastname_message').style.display = 'none';
        valid = true
    }

    if (document.getElementsByName("email")[0].value == '') {
        document.getElementById('email_message').style.display = 'block';
        return false
    } else {
        document.getElementById('email_message').style.display = 'none';
        let email = document.getElementsByName("email")[0].value;
        let re = /\S+@\S+\.\S+/;
        if (re.test(email)) {
            document.getElementById('email_message').style.display = 'none';
            document.getElementById('email_format_message').style.display = 'none';
            valid = true;
        } else {
            document.getElementById('email_format_message').style.display = 'block';
            return false;
        };

    }

    if (document.getElementsByName("phonenumber")[0].value == '') {
        document.getElementById('phone_message').style.display = 'block';
        return false
    } else {
        document.getElementById('phone_message').style.display = 'none';
        valid = true
    }


    if (document.querySelector('input[name="gender"]:checked') == null) {
        document.getElementById('gender_message').style.display = 'block';
        return false
    } else {
        //let gender = document.querySelector('input[name="gender"]:checked').value;
        document.getElementById('gender_message').style.display = 'none';
        valid = true
    }

    return valid;

}

function validatePreferences() {
    var valid = false;
    let ddl = document.getElementById("city");
    let selectedValue = ddl.options[ddl.selectedIndex].value;
    console.log(selectedValue);

    if (selectedValue == "Choose") {
        document.getElementById('city_message').style.display = 'block';
        return false
    } else {
        document.getElementById('city_message').style.display = 'none';
        valid = true;
    }

    if (document.querySelector('input[name="food"]:checked') == null) {
        document.getElementById('food_message').style.display = 'block';
        return false
    } else {
        //let gender = document.querySelector('input[name="gender"]:checked').value;
        document.getElementById('food_message').style.display = 'none';
        valid = true
    }
    return valid;
}