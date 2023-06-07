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
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                let cell3 = row.insertCell();

                cell1.innerHTML = data[i].dept;
                cell2.innerHTML = data[i].courseNum;
                cell3.innerHTML = data[i].courseName;
            }
        });
}
//____________________________________________________________________________________________
