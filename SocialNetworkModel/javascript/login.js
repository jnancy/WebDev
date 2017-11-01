function validate(){
  var user =  document.getElementById("username").value;
  var password = document.getElementById('password').value;

  if(user == "" ){
    document.getElementById("nameError").innerHTML = "Please enter your username";
  }
  else if(password == ""){
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "Please enter your password";
  }
  else if(password != localStorage.password || user != localStorage.username){
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "Incorrect username/password combination";
  }
  else{
    location.href = 'home.html';
  }
}
