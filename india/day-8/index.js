/*console.log("-----welcome in js-----");
let arr = [1,2,3,4,5,6,7,8,"hello", true];
for( let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.push("gaurav");
console.log("..................");
arr.pop();

for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/

/*const Arr = [5,5,6,4,3,5,4,56,4,3]
let c=0;

for( let i = 0 ; i< Arr.length;i++){
    if(arr[i]===5){
        c++;
    }
}*/

/*const Arr = [5,5,6,4,3,5,4,56,4,3]
for( let i = 0 ; i< Arr.length;i++){
    if(i%2===0){
        console.log("even",i);
    }
}*/

/*const Arr = [5,5,6,4,3,5,4,56,4,3]
for( let i = 0 ; i< Arr.length;i++){
    if(Arr[i]===5){Arr.splice(i,1)
    }

}*/

/*
// sum of all odd number:
let sum = 0;
const arr = [5,5,6,4,3,5,4,56,4,3]
for(let i = 0; i<arr.lenght;i++){
    if(arr[i]%2!==0){
        let sum = sum + arr[i];

    }
}
console.log(sum);
*/

/*// sum of all odd number:

let sum = 0;
const arr = [5,5,6,4,3,5,4,56,4,3]
for(let i = 0; i<100;i++){
    if(arr[i]%2===0){
        let sum = sum + arr[i];

    }
}
  console.log(sum);
*/

/*const arr = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i<arr.length;i++){
    if(arr[i]%2===0)arr.splice(
    ){
        let sum = sum + arr[i];

    }
*/

let student_id_card = {
    identity : "Kartik",
    rollnumber : "24DS027",
    address : "acgx",
    Group : "A" ,
    course : "B.Tech",
    branch: "Computer Science Engineering",
};

const identity = student_id_card.identity;
const rollnumber = student_id_card.rollnumber;
const address = student_id_card.address;
const Group = student_id_card.Group;
const course = student_id_card.course;
const branch = student_id_card.branch;
const result = student_id_card.result;
console.log(identity,rollnumber,address,Group,course,branch);

// for add any object : 

student_id_card.result= "pass";
console.log(identity,rollnumber,address,Group,course,branch,result);
//for delete any object : 
delete student_id_card.identity;
console.log(student_id_card);


