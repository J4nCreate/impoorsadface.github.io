

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



function Loader2() {
  myVar = setTimeout(showPage2, 1000);
}

function showPage2() {
  document.getElementById("loader2").style.display = "none";
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

 