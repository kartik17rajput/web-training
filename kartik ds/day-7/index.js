/*console. log ("---- welcome in js ----")
const title = document.getElementById("title")
console.log(title);
title.innerText = " hi i am kartik"; 
const heading = document.getElementsByClassName("heading")
// heading[0].innerText="first world";
// heading[1].innerText="second world";
for( let i=0; i < heading.length;i++){
    if(i%2===0){
        heading[i].innerText = "even";
    }
    else{
        heading[i].innerText = "odd";
    }
}*/

// array
const arr = [10,9,8,7,6,5,4,3,2,1]
// print specific element of an arra:
// syntex : array_name [index] 
// length of an array : array_name.length 

//const firstElement = arr[0]
//console.log(firstElement);


/*for(i=1;i<arr.length;i++){
    if(i%2===0){
        console.log("even",i);
    }
    else{
        console.log("odd",i);
    }
}
*/


//print sum of all elements:
//print sum of all number:
// print Elements : divisible by 3 and 5 

let sum= 0;
for( let i=0; i<arr.length;i++){
    sum=sum+i;
    console.log(sum);
    
}

  