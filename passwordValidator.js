function validate(){
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    let length = password.length;

    if (password != cpassword){
        alert("The passwords entered don't match!");
    }

    if (length < 8 ){
        alert("The passwords are not atleast 8 characters long!");
    }

    else if(password == cpassword){
        alert("Passwords Match!")
    }
}