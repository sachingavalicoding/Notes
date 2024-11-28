let signup = document.querySelector("#signup");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

signup.addEventListener("click" , (e) => {
    e.preventDefault();
    // validate 
    if(name.value && email.value && password.value){
        // set to localstorage 
        localStorage.setItem("userName",name.value);
        localStorage.setItem("userEmail",email.value);
        localStorage.setItem("userPassword",password.value);

        window.location.href = "signin.html";
       
    }
    else{
        alert( ` Please fill the form`);
    }
})