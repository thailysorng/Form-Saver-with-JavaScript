var name1 = document.querySelector("#name");
var email1 = document.querySelector("#email");
var password1 = document.querySelector("#password");
var phone1 = document.querySelector("#phonenumber");
var tr = '';
document.querySelector("#add").onclick = function(){
    if(name1.value==''){
        alert("Please enter your name");
        return;
    }
    if(email1.value==''){
        alert("Please enter your email");
        return;
    }
    if(password1.value==''){
        alert("Please enter your password");
        return;
    }
    if(phone1.value==''){
        alert("Please enter your phone number");
        return;
    }
    tr += `<tr>
        <td>${name1.value}</td>
        <td>${email1.value}</td>
        <td>${password1.value}</td>
        <td>${phone1.value}</td>
    </tr>`;
    document.querySelector("#tbody").innerHTML = tr;
        name1.value = '';
        email1.value = '';
        password1.value = '';
        phone1.value = '';
};

document.querySelector("#clear").onclick = function() {
    tr = '';  // Clear the table rows string
    document.querySelector("#tbody").innerHTML = ''; // Clear the table content
};