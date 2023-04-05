function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Check if username and password are correct
    if (username == "admin" && password == "password") {
      alert("Login successful!");
      return true;
    } else {
      alert("Incorrect username or password");
      return false;
    }
  }
  