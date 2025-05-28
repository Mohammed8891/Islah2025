// script.js
document.getElementById("dropdownButton").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block"; // إظهار القائمة
    } else {
        dropdownMenu.style.display = "none"; // إخفاء القائمة
    }
});

// إخفاء القائمة عند النقر في أي مكان آخر
window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}