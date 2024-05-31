document.addEventListener("click", function(event) {
    var dropdownContent = document.getElementById("dropdownContent");
    var dropdownMenu = document.getElementById("dropdownMenu");
    
    // Verifica se o clique foi dentro do dropdown
    if (!dropdownMenu.contains(event.target)) {
        // Fecha o dropdown se ele estiver aberto
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
});
    function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdownContent");
        if (dropdownContent.style.display === "none") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    }