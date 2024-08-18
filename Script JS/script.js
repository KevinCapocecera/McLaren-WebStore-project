/* Quando o usuário clica no botão,
alterna entre esconder e mostrar o conteúdo do dropdown */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Feche o menu dropdown se o usuário clicar fora dele
window.onclick = function (event) {
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


function search() {
    document.getElementById("search-button").value;

    var input = document.getElementById("search-button").value;
    if (input == "") {
        document.getElementById("search-button").value = "Search";
    }






}