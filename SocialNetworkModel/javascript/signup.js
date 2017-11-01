function validate2(){
  var username = document.getElementById("username").value;
  var password = document.getElementById('password').value;

  if(username == "" ){
    document.getElementById("nameError").innerHTML = "Please enter your username";
  }
  else if(password == ""){
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "Please enter your password";
  }
  else if(password != document.getElementById('password2').value ){
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordMatch").innerHTML = "Passwords do not match";
  }
  else{
    localStorage.username = document.getElementById("username").value;
    localStorage.password = document.getElementById('password').value;
    alert("Success! You will be redirected to the sign in page.");
    location.href = 'login.html';
  }
}
