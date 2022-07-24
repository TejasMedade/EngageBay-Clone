
   document.querySelector("#Yearly").addEventListener("click",change)
function change(){
    document.querySelector(".adjust-4-2").innerHTML="13.99"
    document.querySelector(".adjust-4-2-green").innerHTML="44.99"
    document.querySelector(".adjust-4-2-pro").innerHTML="89.99"
}

document.querySelector("#Monthly").addEventListener("click",change1)
function change1(){
    document.querySelector(".adjust-4-2").innerHTML="14.99"
    document.querySelector(".adjust-4-2-green").innerHTML="49.99"
    document.querySelector(".adjust-4-2-pro").innerHTML="99.99"
}


document.querySelector("#Beinnial").addEventListener("click",change2)
function change2(){
    document.querySelector(".adjust-4-2").innerHTML="11.99"
    document.querySelector(".adjust-4-2-green").innerHTML="39.99"
    document.querySelector(".adjust-4-2-pro").innerHTML="79.99"
}



import {email2,review_tags} from "/export.js"
document.getElementById("email_div-4").innerHTML=email2()
document.getElementById("review-4").innerHTML=review_tags()




