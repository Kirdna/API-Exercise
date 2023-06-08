"use strict";
//____________________________________________________________________________________________
const courseDetails = document.getElementById("courseCardDetails");
//____________________________________________________________________________________________
window.onload = function() {
    showCardDetails();
}
//____________________________________________________________________________________________
function showCardDetails() {
    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid")
        console.log(id);

        let courseIdUrl = "http://localhost:8081/api/courses/" + id;
        fetch(courseIdUrl)
            .then((response) => response.json())
            .then(course => {
                console.log(course);
                showDetailCourse(course);

            })
    }
}
//____________________________________________________________________________________________
function showDetailCourse(course) {

    let row = courseDetails.insertRow(-1);

    let cell0 = row.insertCell(0);
    cell0.innerHTML = course.instructor;

    let cell1 = row.insertCell(1);
    cell1.innerHTML = course.startDate;

    let cell2 = row.insertCell(2);
    cell2.innerHTML = course.numDays;
}
//____________________________________________________________________________________________