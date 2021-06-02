// var num=Math.max(45,87,88,96,42,12);
// console.log(num);

// var myObj={};
// Object.assign(myObj,{a:"apple",b:"ball",c:"cat"},{1:"one",2:"two"});
// console.log(myObj);


//spread operator converts array into individual value,

// function sumOne(a,b){
//     return a+b;
// }
// console.log(sumOne(4,10));
// var myA=[4,10];
// console.log(sumOne(...myA));//spread operator


//rest operator is vice-versa of spread operator,
// function sumTwo(...args){   //rest operator,
//     console.log(args);
//     let sum=0;
//     for (const i of args) {
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(sumTwo(1,2,3,4,5));


function sumTwo(a,b,...args){   //rest operator,
    console.log(args);
    let multi=a*b;
    let sum=0;
    for (const i of args) {
        sum=sum+i;
    }
    return [sum,multi];
}
console.log(sumTwo(1,2,3,4,5));


