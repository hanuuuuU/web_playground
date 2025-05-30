const myBtn=document.getElementById('my-btn');
console.log(myBtn);
// case1
// myBtn.addEventListener('click',function(e){
//     console.log("element is clicked");
//     console.log(e);

//     console.log(e.type);
//     console.log(e.target);
// })

// case2
// myBtn.onclick=function(e){
//     console.log("element is clicked");
//     console.log(e);

//     console.log(e.type);
//     console.log(e.target);
// }

let leftInput=document.getElementById('left');
let rightInput=document.getElementById('right');
const result=document.getElementById('res');

function sum(e){
    const a = parseFloat(leftInput.value)===NaN ? 0 : parseFloat(leftInput.value);
    const b = parseFloat(rightInput.value)===NaN ? 0 : parseFloat(rightInput.value);
    result.innerText=a+b;
}
leftInput.addEventListener('input',sum)
rightInput.addEventListener('input',sum)
