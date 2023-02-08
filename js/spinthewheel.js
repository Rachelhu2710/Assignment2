// let wheel = $(".wheel");
// let spinBtn = $(".spinBtn");
// let value=Math.ceil(Math.random(3600));
// spinBtn.click(function(){
//     wheel.style.transform="rotate("+value+"deg)";
// })
// let x=1;
// $("span").forEach(element => {
//     element.attr("id",`${x}`)
//     x++
    
// });

// let prizes=[
//    prize1={

//     name:"puma points",
//     quantityofpoints:10,
//     indexofprize:1,

//  },
//  prize2={

//     name:"puma points",
//     quantityofpoints:20,
//     indexofprize:2,

//  }
// ,
// prize3={

//     name:"puma points",
//     quantityofpoints:30,
//     indexofprize:3,

//  },
//  prize4={

//     name:"nothing",
//     indexofprize:4

//  },
//  prize5={

//     name:"discount",
//     discountpercent:10,
//     indexofprize:5

//  },
//  prize6={

//     name:"discount",
//     discountpercent:15,
//     indexofprize:6

//  },
//  prize7={

//     name:"discount",
//     discountpercent:30,
//     indexofprize:7

//  },
//  prize5={

//     name:"nothing",
//     indexofprize:8

//  }




// ]

// prizes.forEach(element => {


//     let name=element.name;
//     $("").inne
    
// });


// class prizes{

//     constructor(name,prizeid)
//     {this.name=name
//     this.prizeid=prizeid
// }
// }

// const prize1=new prizes("hello",1);
// console.log(prize1)

















// let wheel =document.querySelectorAll('wheel') ;
// let spinBtn=document.querySelectorAll('spinBtn');
// let value = Math.ceil(Math.random()*3600);
// spinBtn.onclick=function(){
//     wheel.style.transform=`rotate(${value}deg)`
//     value+=Math.ceil(Math.random()*3600)
// //     // let price=value/10


    
//  }
let wheels = document.querySelectorAll('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
// spinBtn.addEventListener('click', function() {
//     for (let i = 0; i < wheels.length; i++) {
//         value += Math.ceil(Math.random() * 3600);
//         wheels[i].style.transform = `rotate(${value}deg)`;
//     }
// });
// spinBtn.addEventListener('click', function() {
//     for (let i = 0; i < wheels.length; i++) {
//         let value = Math.ceil(Math.random() * 3600);
//         wheels[i].style.transform = `rotate(${value}deg)`;
//         wheels[i].addEventListener('transitionend', (function(index) {
//             return function() {
//                 let prize = getFinalPrize(this);
//                 let prizeValue = prize.getAttribute('data-value');
//                 setTimeout(function() {
//                     console.log(prizeValue)
//                     document.getElementById('value').innerHTML = prizeValue;
//                 }, index * 1000);
//             }
//         })(i));
//     }
// });



// function getFinalPrize(wheel) {
//     // get all prizes
//     let prizes = wheel.querySelectorAll('.prizes');
//     console.log(prizes)
//     // get wheel's transform matrix
//     let matrix = window.getComputedStyle(wheel)
//         .getPropertyValue('transform');
//     // get wheel's rotation angle
//     let angle = parseInt(
//         matrix.split(',')[0].split('(')[1]
//     );
//     // find the prize that's closest to the top of the wheel
//     let closestPrizeIndex = Math.round(
//         (angle % 360) / (360 / prizes.length)
//     );
//     // return the closest prize
//     return prizes[closestPrizeIndex];
// }


spinBtn.addEventListener('click', function() {
    for (let i = 0; i < wheels.length; i++) {
        value += Math.ceil(Math.random() * 3600);
        wheels[i].style.transform = `rotate(${value}deg)`;
        let desiredPrize = getFinalPrize(wheels[i], 'prize_1');
        console.log(desiredPrize);
    }
});

function getFinalPrize(wheel, prizeId) {
    // get all prizes
    let prizes = wheel.querySelectorAll('.prizes');

    // find the prize with the specified data-id
    let desiredPrize = Array.from(prizes).find(prize => prize.getAttribute('data-id') === prizeId);

    return desiredPrize;
}