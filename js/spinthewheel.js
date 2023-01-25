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

















let wheel = $(".wheel");
let spinBtn=$(".spinBtn");
let value = Math.ceil(Math.random()*3600);
spinBtn.onclick=function(){
    wheel.style.transform=`rotate(${value}deg)`
    value+=Math.ceil(Math.random()*3600)
    let price=value/10


    
}
