var countDownDate = new Date("Jul 25, 2023 16:37:52").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s " 
    
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);

let cont = document.querySelector(".container");
let form = document.querySelector(".form")
let isShow = false;

function toogle(){
    if (isShow){
        cont.style.display = "inline";
        form.style.display = "none"

        isShow=true;
    } else {
        cont.style.display = "none";
        form.style.display = "inline"
        isShow=false;
    }

    
}

toogle()


function toogleBack(){
    if (isShow){
        cont.style.display = "none";
        form.style.display = "inline"

        isShow=true;
    } else {
        cont.style.display = "inline";
        form.style.display = "none"
        isShow=false;
    }

}

toogleBack()
