import {brandsstrip,email2,review_tags,services,testimonial} from "./export.js"

document.getElementById("middle-5").innerHTML=brandsstrip();
document.getElementById("review-5").innerHTML=review_tags();
document.getElementById("testimonial-5").innerHTML=testimonial();
document.getElementById("services-5").innerHTML=services();
document.getElementById("email-5").innerHTML=email2();

