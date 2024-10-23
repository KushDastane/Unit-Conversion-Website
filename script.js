function temperature(){
    let celsius=document.getElementById("celsius").value;//we retrieved value
    if(isNaN(celsius)||celsius==''){
        alert("Please enter a valid  number for Celcius.");
        return;}
    let fahrenheit=(celsius*9/5)+32;
    document.getElementById("fahrenheit").value =fahrenheit.toFixed(2);
}

function weight(){
    let kilo=document.getElementById("kilo").value;
    if(isNaN(kilo)||kilo==''||kilo<0){
        alert("Please enter a valid number for kilogram");
        return;
    }
    let pound=kilo*2.20462;
    document.getElementById("pounds").value=pound.toFixed(2);
}

function distance(){
    let kilometers=document.getElementById("km").value;
    if(isNaN(kilometers)||kilometers==''||kilometers<0){
        alert("Please enter valid number for kilometers.");
        return;
    }
    let miles=kilometers*0.62137;
    document.getElementById("miles").value= miles.toFixed(2);
}

function height(){
    let centimeters=document.getElementById("cm").value;
    if(isNaN(centimeters)||centimeters==''||centimeters<0){
        alert("Please enter valid number for height in centimeters.");
        return;
    }
    let feet=centimeters/30.48;
    document.getElementById("ft").value=feet.toFixed(2);
}