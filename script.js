//handles the compute intrest button
function compute()
{
    //gets infomation from all of the input feilds on screen
    var p = parseFloat(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var intrest = p*years * rate/100;
    //rounds the intrest to the nearest cent
    intrst = Math.round(intrest * 100) / 100 ;
    var years = new Date().getFullYear()+ parseInt(years);
    var amount = intrest + p;
    //checks if the input is less than or equal to zero
    if (!(p <=0 )){
        //document.getElementById("Intrest_result").innerHTML = intrest
        document.getElementById("result").innerHTML= "If you deposit "+ "<span class='highlight'>" +p+"</span>" +",\<br\>at an interest rate of " +"<span class='highlight'>" +rate+"</span>" +"%\<br\>You will receive an amount of "+"<span class='highlight'>" +intrest+"</span>" +",\<br\>in the year "+"<span class='highlight'>" +years +"</span>" +"\<br\>for a total of " + "<span class='highlight'>" +amount +"</span>";
    }
    //if not positive then creates a alert and focuses the page on principle
    else{
        alert("enter a positive or non zero number");
        document.getElementById("principal").focus();

    }
}
//runs when the input rate slider is dragged and updates the output
function updateRate(){
    //gets input 
    var rateval = document.getElementById("rate").value;
    // changes rate_val
    document.getElementById("rate_val").innerText = rateval + "%";
}
        