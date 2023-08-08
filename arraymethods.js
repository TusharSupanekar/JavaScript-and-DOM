let a =[10,20,30,40,50];
a.map((value,index)=>{
    console.log(value-10);
})

console.log("======map method=======");

let b=[10,20,30,40,50];
let c=b.filter((value,index)=>{
    return value>20;
})
console.log(b);
console.log(c);

console.log("======filter method=======");

let d =[10,20,30,40,50,60,70,80];
let e = d.reduce((acc,value)=>{
    return acc+value;

},90)
console.log(d);
console.log(e);

console.log("====reduce method=====");

let f =[10,20,30,40,50];
for(hello in a){
    console.log(hello);
}
for(bye of a){
    console.log(bye);
}


console.log("=====for in and for of======");


let g=[10,20,30,40,50];
g.forEach((value,index) => {
    console.log(index,value);
    // console.log(value);
});
console.log("======for each=======");