"use strict";
//____________________________________________________________________________________________
const tbody = document.getElementById("courseDetails");

window.onload = () => {
    console.log("First console Window load");

    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        document.getElementById("error").innerHTML = "";
        id = urlParams.get("courseid")
        console.log(id);

        let courseIdUrl ="http://localhost:8081/api/courses/" + id;
        fetch(courseIdUrl)
        .then((response) => response.json())
        .then(course => {
            console.log(course);
            showDetailforCourse(course);
            
        });
    }
    else{
        document.getElementById("error").innerHTML = "Oh no! there's no querystring... you should get to this page through a hyperlink."
    }

}

function showDetailforCourse(course){
    // fill in html elements to describe the course that was passed in.
}

function showCourseDetails() {
    fetch("http://localhost:8081/api/courses")

        .then((response) => response.json())
        .then((courses) => {
            console.log(courses);

            for (let i = 0; i < courses.length; i++) {
                let row = tbody.insertRow(-1);

                let cell1 = row.insertCell(0);
                cell1.className = "text-center px-2";
                cell1.innerHTML = courses[i].instructor;

                let cell2 = row.insertCell(1);
                cell2.className = "text-center px-2";
                cell2.innerHTML = courses[i].startDate;

                let cell3 = row.insertCell(2);
                cell3.className = "text-center mx-5";
                cell3.innerHTML = courses[i].numDays;
            }
        });
    }