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
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    if (hours < 10) {
      hours = "0" + hours;
    }
    
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
    setTimeout(updateClock, 1000);
  }
  
  updateClock();
  
  