var email = document.getElementById("email");
function validate(){
    let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(reg.test(email.value)==false){
        alert("Enter a valid email!");
        return false;
    }
}