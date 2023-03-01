
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')

var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

// breaking down baseURL for page navigation

var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
console.log(baseURL);


// sign up validation
function signupValidation (){
    if (signupName.value == '' || signupEmail.value  == '' || signupPassword.value  == ''){
        return false;
    }else {
        return true;
    }
}

// Array
var cartona =[];

if (localStorage.getItem ('users')!= null){
    cartona = JSON.parse (localStorage.getItem ('users'))
} else {cartona = []}

// check if mail exist
function isEmailExist (){
    for (var userIndex = 0; userIndex < cartona.length; userIndex++){
        if (cartona[userIndex].email.toLowerCase() == signupEmail.value.toLowerCase()){
            console.log('user already exist');
            return false;
        }else {return true};
    }
}

// add user
function addUser (){
    var newUser = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
        
    }
    cartona.push (newUser);
    localStorage.setItem ('users', JSON.stringify (cartona));
}
// input fields error msg
var errorMsg = document.getElementById('exist');
var incorrect = document.getElementById('incorrect');
function signUp(){
    if (signupValidation() == false) {
        errorMsg.innerHTML = `
        <span class="text-danger m-3">All inputs is required</span>
        `;
        return;
    } 
    if (isEmailExist ()=== false){
        errorMsg.innerHTML = `
        <span class="text-danger m-3">email already exists</span>
        `;
        return;
    }
    addUser ();
    errorMsg.innerHTML = `
    <span class="text-success m-3">Success</span>
    `;
    return;
}

// sign in validation

function signinValidation (){
    if (signinEmail.value  == '' || signinPassword.value  == ''){
        return false;
    }else {
        return true;
    }
}
function login(){
    if (signinValidation() == false) {
        console.log('please enter all fields');
        incorrect.innerHTML = `
        <span class="text-danger m-3">All inputs is required</span>
        `;
        return false;
    } 

 for (var i = 0; i < cartona.length; i++){
        if (cartona[i].email.toLowerCase() === signinEmail.value.toLowerCase() && cartona[i].password.toLowerCase() === signinPassword.value.toLowerCase()){
            console.log('osama');
            localStorage.setItem ('loggedinUsers', cartona[i].name)
                if (baseURL == '/') {
                    location.replace(location.hostname + '/home.html')
    
                } else {
                    location.replace('/' + baseURL + '/home.html')
                }
        } else { 
            incorrect.innerHTML = `<span class="text-danger m-3">wrong email or password</span> `; 
            return false;
        }
    } 
}
// to say welcome in home page

var username = localStorage.getItem('loggedinUsers')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

// logout

function logout(){
    window.localStorage.removeItem('loggedinUsers');
}

// no home page navigation for non logged in users

var homePage = ''
if (localStorage.getItem ('loggedinUsers') == null ){
    homePage = '/' + baseURL + '/index.html'
} 

