// // function gcd(a,b){
// //     while(b!=0){
// //         let temp = b;
// //         b = a % b;
// //         a = temp;
// //     }
// //     return a;      
// // }
// // console.log(gcd(48,18));            
// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
   
// }
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let res=arr.filter((num)=>{
//     return num%2==0;
// });
// let sum=res.reduce((prev,curr)=>{
//     return prev+curr;
// },0);
// console.log(sum);
// let subjects=[
//     {
//         name:"Math",
//         marks:85
//     },{
//         name:"Science",
//         marks:90
//     },{
//         name:"History",
//         marks:30
//     },{
//         name:"English",
//         marks:15
//     }
// ];
// let totalMarks=subjects.some((subject)=>{
//     return subject.marks<33;
// });
// console.log(totalMarks);
// let student ={
//     name:"John",
//     class:10,
//     roll_no:5
// }
// console.log(Object.keys(student).length);
let student= {
  name:"Jainsi",
  age:20,
  course:"BTECH",
  city:"Vadodara"
};
console.log(student.name);
console.log(student.age);

let user = {
    name:"Shivani",
    age:22
};
user.city = "Chennai";
delete user.age;
console.log(user);

