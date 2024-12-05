// ---Welcome to js---
    

// input from the user
// const num = prompt("Enter any number");
// if(num >=1){
//     for(let i =num ; i>0 ;i--)
//     {
//         console.log(i);
//     }
// }else{
//     console.log("Invalid Input");
// }
// const h1 = document.getElementById("title");
// console.log(h1);
// const newcontent = "Hello world ";
// h1.innerText = newcontent;

// const h2 = document.getElementsByClassName("msg");
// console.log(h1, h2);
// const newcontent1 = "hi aditya";
// h2[1].innerText = newcontent1;

const p = document.getElementsByClassName("msg");
console.log(p);
const newcontent2 = "even: ";
const newcontent3 = "Odd: ";
for(let i=0; i<p.length; i++){
    if(i%2==0){
        p[i].innerText = newcontent2+i;
    }else{
        p[i].innerText = newcontent3+i;
    }
}
document.querySelectorAll(".msg");

