// <=========Asynchronous Await========>
console.log("start");
async function tushar() {
    console.log("I am Tushar");
    const data =await fetch('https://jsonplaceholder.typicode.com/users')
    console.log("before data");
    const user=data.json()
    console.log("data received");
    return user;
}
console.log("before calling tuhsar");
let d=tushar();
console.log(d);
d.then((e)=>{
    console.log(e);
}).catch((i)=>{
    console.log(i);
})
console.log("the end");


// <=========Promise inside a function========>
function tushar() {
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const samay={age:22,id:3}
        if(samay){
            resolve("I am here")
        }else{
            reject("error could not get data")
        }
    },3000)
    })
}
tushar().then((e)=>{
    console.log(e);
}).catch((i)=>{
    console.log(i);
})


// <=========Promise with set time out========>
let b=new Promise((resolve, reject) => {
    setTimeout(() => {
       var c="hello world"
       resolve("done") 
    },1000);
})
b.then((b)=>{
    alert(b);

}).catch(()=>{
    console.log();
})


// <=========Promise========>
let a=new Promise((resolve, reject) => {
    const a=10;
    const b=20;
    const result=a+b;
    if(result==30){
        resolve("yes")
    }else{
        reject("no")
    }
})
a.then((e)=>{
    console.log(e);

}).catch((i)=>{
    console.log(i);
})


// <=========set time out=======>






