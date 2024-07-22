document.addEventListener("DOMContentLoaded", function () {
    // Get all table rows
    var table = document.querySelectorAll(".table");
    
    var rows = document.querySelectorAll(".table tbody tr");

    // Add click event listener to each row
    rows.forEach(function (row) {
        row.addEventListener("click", function () {
            // Check if this row is already clicked
            var isClicked = this.classList.contains("clicked");

            // Remove 'clicked' class from all rows
            rows.forEach(function (r) {
                r.classList.remove("clicked");
            });

            // Toggle 'clicked' class on the clicked row
            if (!isClicked) {
                this.classList.add("clicked");
            }
        });
    });

    // Add event listener to the search bar
    document.getElementById("search-input").addEventListener("keyup", function () {
        var searchValue = this.value.toLowerCase();
        var rows = document.querySelectorAll(".table tbody tr");

        // Hide all rows initially
        rows.forEach(function (row) {
            row.style.display = 'none';
        });

        // Show rows that match the search value
        rows.forEach(function (row) {
            var name = row.cells[0].textContent.toLowerCase();
            if (name.startsWith(searchValue)) {
                row.style.display = '';
            }
        });
    });
});