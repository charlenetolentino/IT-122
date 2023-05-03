let firstName = "Charlene"
let lastName = "Tolentino";
let yearsOfStudy = 1;
let  goal = 'become a technical project manager';

//("My name is " + firstName + " " + lastName + ". I have been at SCC for " + yearsOfStudy + " years and plan to " + goal + " after completing my courses.");


let introduction = `My name is ${firstName} ${lastName}. I have been at Seattle Central College for ${yearsOfStudy} year and plan to ${goal} after completing my courses.`; 

document.getElementById("introduction").innerHTML = introduction;