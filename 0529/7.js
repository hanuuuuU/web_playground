word=["school","game","piano","science","hotel","mountain"];
newWord=[]
for(w in word){
    if(word[w].length>=6){
        newWord.push(word[w]);
    }
}
console.log(newWord)


for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}

n=prompt("숫자 입력")
for(let i=1; i<=n; i++){
    if(i%3===0 && i%5===0){
        console.log("3과 5의 공배수");
    }
    else if(i%3===0){
        console.log("3의 공배수");
    }
    else if(i%5===0){
        console.log("5의 공배수");
    }
    else{
        console.log(i);
    }
}