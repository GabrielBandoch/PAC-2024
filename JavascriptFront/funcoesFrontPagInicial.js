function abrirHamburguer() {
    document.getElementById("menu-hamburguer").classList.toggle("active-hamburguer");
  }

  const element = document.getElementById("menu-hamburguer");
  const computedStyle = window.getComputedStyle(element);
  const width = computedStyle.width;
  console.log(width);

  if (width == 200 + "px") {
    document.getElementById("itens").classList.toggle(".show-hamburguer");
  }



  

  window.onclick = function(event) {
    if (!event.target.matches('.hamburguer')) {
      var dropdowns = document.getElementsByClassName("menu-hamburguer");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active-hamburguer')) {
          openDropdown.classList.remove('active-hamburguer');
          
        }
      }
    }
  }