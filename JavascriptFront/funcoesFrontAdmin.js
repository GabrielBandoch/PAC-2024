function myFunction() {
    document.getElementById("btn-login").classList.toggle("active");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("login-icon-rotate").classList.toggle("rotate")
}

function dropdown(id_content, id_icon){
    document.getElementById(id_content).classList.toggle("not-visible")
    document.getElementById(id_icon).classList.toggle("rotate")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        
      }
    }
  }
}

var minhaDiv = document.getElementById("btn-login");
document.addEventListener("click", function(event) {
  if (!minhaDiv.contains(event.target) && minhaDiv.classList.contains("active")) {
    minhaDiv.classList.remove("active");
    document.getElementById("login-icon-rotate").classList.remove("rotate");
  }
});

document.getElementById("myDropdown").style.width = document.getElementById("btn-login").offsetWidth + "px";

