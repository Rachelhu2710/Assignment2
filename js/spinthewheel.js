let wheels = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
let a = 1
spinBtn.addEventListener('click', function() {
    turn = value + 25
    wheels.style.transform = "rotate("+turn +"deg)";
    wheels.style.transition = "transform 11s ease-in-out";
})

// countselect = 360-(((value/360)-Math.floor(value/360))360)
wheels.addEventListener("transitionend", function() {
    values = value
    while (values>360)
    {
        values -=360
    }
    countselect= 360 - values 
    console.log(values);
    if (countselect<=45)
    {
        var prize=document.getElementById("1");

    }
    else if (countselect<=90)
    {
        var prize=document.getElementById("2");
    }
    else if (countselect<=135)
    {
        var prize=document.getElementById("3");
    }
    else if (countselect<=180)
    {
        var prize=document.getElementById("4");
    }
    else if (countselect<=225)
    {
        var prize=document.getElementById("5");
    }
    else if (countselect<=270)
    {
        var prize=document.getElementById("6");
    }
    else if (countselect<=315)
    {
        var prize=document.getElementById("7");
    }
    else if (countselect<=360)
    {
        var prize=document.getElementById("8");
    }
    rotate = Math.ceil(Math.random()*3600)
    value +=rotate;
    // to display the won value 
    let voucher = prize.querySelector('span').innerHTML
    console.log(voucher)
    localStorage.setItem("prize"+a,voucher)
    alert("congratulations you have won " + voucher)
    a+=1
})