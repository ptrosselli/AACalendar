document.addEventListener('DOMContentLoaded', function() {

    var prev = document.getElementById("prev_month");
    var next = document.getElementById("next_month");
    var grid = document.getElementById("cal");
    var header = document.getElementById("header");

    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();

    function updateCalendar(verbose) {
        month += verbose;
        if (month % 12 == 0) {
            if (verbose > 0) {
                month = 0;
                year++;
            }
            else {
                month = 11;
                year--;
            }
        }

        console.log("DATE", date);
        console.log("MONTH", month);
        console.log("YEAR", year)

        var firstDayOfMonth = new Date(year, month, 1);
        var firstDayIndex = firstDayOfMonth.getDay();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        header.textContent = months[month] + " " + year;
        header.style.textAlign = 'center';

        grid.innerHTML = ""; // Clear everything except the grid headers

        const DOW = ["S", "M", "T", "W", "R", "F", "S"];

        for (var i = 0 ; i < 7 ; i ++) {
            var gridHeader = document.createElement("div");
            gridHeader.classList.add("grid-header");
            gridHeader.innerHTML = DOW[i];
            grid.append(gridHeader);
        }

        for (var i = 0; i < firstDayIndex; i++) {
            var falseItem = document.createElement("div");
            falseItem.classList.add("blank");
            grid.append(falseItem);
        }

        for (var i = 0; i < daysInMonth; i++) {
            var gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.textContent = i + 1;
            gridItem.style.textAlign = "center"; // Center the text content
            grid.append(gridItem);
        }

        const gridItems = document.querySelectorAll(".grid-item");

        gridItems.forEach(item => {
            item.addEventListener('click', function() {
                gridItems.forEach(item => {
                    if (item !== this) {
                        item.classList.remove("clicked");
                    }
                });
                this.classList.toggle("clicked");
            });
        });
    }

    updateCalendar(0);

    prev.addEventListener("click", function() {
        updateCalendar(-1);
    });

    next.addEventListener("click", function() {
        updateCalendar(1);
    });
});