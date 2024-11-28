let signin = document.querySelector("#signin");


let email = document.querySelector("#email");
let password = document.querySelector("#password");

signin.addEventListener("click" , (e) => {
    e.preventDefault();
    // check given data is same as local storage data

    if((email.value == localStorage.getItem("userEmail")) && (password.value == localStorage.getItem("userPassword"))){
        alert(` Welcome ${localStorage.getItem("userName")} in SHOP MAX `);

        window.location.href = 
        "../index.html";
    }
    else{
        alert(` Invalid Credentials`);
    }
})