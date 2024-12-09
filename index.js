// flow of tasks
// 1> added event listner to the form to store the input value in variables
// 2> hiding the error mssgs and error fields
// 3> when gets clicked it will do the validation of the inputs
// 4> if all flags are true then go to the success page
// 5> make the eye button working

let form = document.querySelector(".form");
let eyeButton = document.querySelector(".btn");
let loginButton = document.querySelector(".button");
let firstName, lastName, email, password;
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let fnTarget, lnTarget, emailTarget, pwdTarget;
let fnFlag, lnFlag, eFlag, pwdFlag;
let bugFnFlag, bugLnFlag, bugEmailFlag, bugPwdFlag;


//creating the regex for input values
let nameRegex = /^[A-Za-z]+$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'.,<>?/-]).{8,20}$/;


for (let item of errorMessages) {
    item.classList.add("d-none");
}

for (let item of emptyFields) {
    item.classList.add("d-none");
}
//using event delegation
form.addEventListener("keyup", (event) => {
    let field = event.target.dataset.key;
    //using switch case 
    switch (field) {
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});


loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    // firstName validation
    if (firstName) {
        emptyFields[0].classList.add("d-none");
        if (nameRegex.test(firstName)) {
            fnFlag = true;
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
        } else {
            fnFlag = false;
            bugFnFlag = true;
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
        }
    } else {
        if (bugFnFlag) {
            errorMessages[0].classList.add("d-none");
        }
        emptyFields[0].classList.remove("d-none");
    }

    //lastName validaton
    if (lastName) {
        emptyFields[1].classList.add("d-none");
        if (nameRegex.test(lastName)) {
            lnFlag = true;
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
        } else {
            lnFlag = false;
            bugLnFlag = true;
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
        }
    } else {
        if (bugLnFlag) {
            errorMessages[1].classList.add("d-none");
        }
        emptyFields[1].classList.remove("d-none");
    }

    //email validation
    if (email) {
        emptyFields[2].classList.add("d-none");
        if (emailRegex.test(email)) {
            eFlag = true;
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
        } else {
            eFlag = false;
            bugEmailFlag = true;
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
        }
    } else {
        if (bugEmailFlag) {
            errorMessages[2].classList.add("d-none");
        }
        emptyFields[2].classList.remove("d-none");
    }

    //password validation
    if (password) {
        emptyFields[3].classList.add("d-none");
        if (pwdRegex.test(password)) {
            pwdFlag = true;
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
        } else {
            pwdFlag = false;
            bugPwdFlag = true;
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
        }
    } else {
        if (bugPwdFlag) {
            errorMessages[3].classList.add("d-none");
        }
        emptyFields[3].classList.remove("d-none");
    }

    if (fnFlag && lnFlag && eFlag && pwdFlag) {
        fnFlag = false;
        lnFlag = false;
        eFlag = false;
        pwdFlag = false;
        console.log({ firstName, lastName, email, password });
        firstName = lastName = email = password = "";
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "./success.html";
    }
});


eyeButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (pwdTarget.value) {
        if (pwdTarget.getAttribute('type') === "password") {
            pwdTarget.setAttribute("type", "text");
        }
        else {
            pwdTarget.setAttribute("type", "password");
        }
    }

});