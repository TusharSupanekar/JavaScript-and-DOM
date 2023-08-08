// function Goa(name,village) {
//     this.name=name;
//     this.village=village; 
// }

// let attender1=new Goa("raju","goa");
// console.log(attender1);
// console.log(attender1.name);

function student(Name,Rollno,Standard) {
    this.Name=Name;
    this.Rollno=Rollno;
    this.Standard=Standard;
}

let stu1=new student("Raghu",72,"12th");
console.log(stu1);
console.log(stu1.Name);

let stu2=new student("Raju",12,"12th");
console.log(stu2);
console.log(stu2.Name);

let stu3=new student("Rahul",1,"12th");
console.log(stu3);
console.log(stu3.Name);