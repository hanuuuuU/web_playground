import * as fs from 'fs'
const url = 'https://jsonplaceholder.typicode.com/posts';
const headers = {"Content-Type": "application/json",};

(async ()=>{
    try{
        const response = await fetch(url, {
            headers,
            method: "POST",
            body: JSON.stringify({
                title: '제목',
                body: '내용',
            })
        });
        
        if(response.ok){console.log("성공")}
        console.log(response.status);
        console.log(response.headers);
        const data = await response.text();
        console.log(data);
    } catch(err){console.error(err);}
})()