const promise = new Promise((resolve, reject)=>{
    // resolve, reject는 함수.
    // resolve: 성공시 호출할 함수.
    // reject: 실패시 호출할 함수
})

// fastFunction 1초 후 data*2
// slowFunction 3초 후 data+10
function fastFunction(data){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            const result = data * 2;
            resolve(result);
        }, 1000)
    })
}

function slowFunction(data){
    // Promise 객체를 만들 때 함수 인자를 하나 받는데, 이 함수는 resolve,reject 두 개의 인자를 가지고 있다.
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            if(data===0){
                reject(new Error("data가 0이 되어서는 안됩니다."))
            }
            const result = data + 10;
            resolve(result);
        }, 3000)
    })
}
// 이거는 reject 유도하기 위한 코드
slowFunction(0).then(data=>{
    console.log("slowFunction 호출 결과");
    console.log(data);
}).catch(err=>{
    console.error(err);
})

const result=fastFunction(10);
// then은 resolve된 인수(result)를 인자(data)로 받는 함수를 인자로 받는다 
result.then(data=>{ 
    console.log('fastFunction의 실행 결과');
    console.log(data);
    return data;
}).then(data=>{
    return slowFunction(data);
}).then(data=>{
    console.log("slowFunction의 결과");
    console.log(data);
})