

//Hallo! This is how I know javascript in my own way, u can even understand it if u r my brain! enjoy ^^

//this whole script is only in start.html


function Loader() {
  myVar = setTimeout(showPage, 1600);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("Start").style.display = "block";
}



//script below is only in main.html


//this is the loader script, basically it will non stop show until the webpage is done loading
function Loader2() {
  myVar = setTimeout(showPage2, 1000);
}

//when it is done loading, show the page
function showPage2() {
  //this makes the loader none existent, really simply actually
  document.getElementById("loader2").style.display = "none";
  //shows page
  document.getElementById("myBody").style.display = "block";
}




function myFunction() {
  
  //run MyFunction for da button "Onclick" (see <button onclick="MyFunction"> to see what mi mean)

    var x = document.getElementById("Biography"); // x is now called "Biography"
    if (x.style.display === "none") { 
      //if clicked then it will hide the Biography page.

      x.style.display = "block";
    } else {
      x.style.display = "none"; 
      //now it u can do it forever!!!
    }
  }

  function myFunction2() {
    var x = document.getElementById("How"); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Reference() {
    var x = document.getElementById("Learned"); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Friends() {
    var x = document.getElementById("Friend"); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Projects() {
    var x = document.getElementById("Projects"); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
 

// PROJECTS //

// Password Generator

//we get the ID name "password"
var password = document.getElementById("password");

//run the password generator
 function genPassword() {
//get all the alphabets, numbers and symbols 
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//how long the password should be?
    var passwordLength = 20;
    var password = "";
//calculate and jumble all the characters into a password
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
//if its done, the input inside will be generated
        document.getElementById("password").value = password;
 }

//this function makes the copy button exactly copies the letters if it overflows.
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}