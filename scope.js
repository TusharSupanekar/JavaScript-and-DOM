var a;
a=20;
function hello(){
    var a=40;
    console.log(a);
    console.log(this.a);
}
hello();