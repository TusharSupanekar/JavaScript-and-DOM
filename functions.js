// console.log("start");
// function xyz(){
//     console.log("I am first");
//     function lmn(){
//         console.log("I am Second");  
//     }
//     return lmn;
// }
// xyz ()();



                           
// var x =3;
// var y = x++;
// var z = ++x;
// console.log(y);
// console.log(x);

// <=====Higher order and call back functions===>
// function calci(a,b,task){
//     return task(a,b);
// }

// function add(a,b){
//     return a+b;
// }
// console.log(calci(10,20,add));











// <=====arrow functions=====>

let a=(a,b)=>{
    return a+b;
}
console.log(a("Hi there! I am Tushar."," I am from Satara, Karad."));

let c=(d,e)=>d+e;
console.log(c("Hi there! I am Tushar."," I am from Satara, Karad."));

// let addi=(a,b)=>{
//     return a+b;
// }
// console.log(addi(10,20));

// let add=(a,b)=>a+b
// console.log(add(10,40));

// let sub=(a,b)=>{
//     return a-b;
// }
// console.log(sub(10,20));


// =====function expression====
// var a = function add(a,b)
// {
//     return a+b

// }
// console.log(a(10,20));

// function add(a,b)
// {
//     return a+b
// }
// console.log(add(20,30));
// console.log(add(20,40));
// console.log(add(250,70));
// console.log(add(200,3245));

// function add(){
//     return 10+20
// }
// console.log(add());