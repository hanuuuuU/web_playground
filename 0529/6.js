let x=[3,6,9,20,-7,5];
for(let key in x){
    x[key]*=10;
    console.log(x[key]);
}

let y={"math":70, "science":80, "english":20}
for(let key in y){
    y[key]+=10;
    console.log(y[key]);
}

n=prompt("숫자 입력");
for(i=1;i<10;i++){
    console.log(`${n}*${i}=${n*i}`);
}