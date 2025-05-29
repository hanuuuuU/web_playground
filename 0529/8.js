let n=0;
do{
    n=parseInt(prompt("100보다 큰 숫자를 입력해주세요."));
}while(n<100);
console.log(n);

function limitCalls(func, n) {
    // 여기에 코드를 작성하세요.
    let count = 0;
    return function(){
      if (count < n){
          func();
      }
      count++;
    }
}

const limitedHello = limitCalls(() => console.log("Hello!"), 2);
limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // 아무 일도 일어나지 않음.
