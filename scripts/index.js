"use strict";
//____________________________________________________________________________________________
const tableBody = document.getElementById("courseDetails");
//____________________________________________________________________________________________
window.onload = init;
//____________________________________________________________________________________________
function init() {
    showCoursesOnPage();
}
//____________________________________________________________________________________________
function showCoursesOnPage() {
    console.log("clicked");

    let theUrl = "http://localhost:8081/api/courses";
    fetch(theUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let row = tableBody.insertRow(-1);

                let cell0 = row.insertCell(0);
                cell0.innerHTML = data[i].dept;

                let cell1 = row.insertCell(1);
                cell1.innerHTML = data[i].courseNum;

                let cell2 = row.insertCell(2);
                cell2.innerHTML = data[i].courseName;

                let cell3 = row.insertCell(3);

                let anchor = document.createElement('a');                                       // creates <a> link tag.
                anchor.href = `details.html?courseid=${data[i].id}`;                                                   // links to course details page.
                anchor.text = data[i].courseName;                                           // puts the course nameon the HTML
                cell3.appendChild(anchor);

            }
        });
    }
//____________________________________________________________________________________________
