// search-bar.js

document.getElementById("search-bar").addEventListener("input", function () {
    var searchValue = this.value.toLowerCase();
    var rows = document.querySelectorAll(".table tbody tr");

    rows.forEach(function (row) {
        var brandName = row.querySelector(".column0").textContent.toLowerCase();
        var fragranceName = row.querySelector(".column1").textContent.toLowerCase();

        if (brandName.includes(searchValue) || fragranceName.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
