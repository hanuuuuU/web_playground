browser='Chrome';
arr=['Chrome', 'Firefox', 'Safari', 'Opera'];
if (browser==='Edge'){
    console.log("Edge를 사용하고 계시네요!");
}
else if(arr.includes(browser)){
    console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
}
else{
    console.log("현재 페이지가 괜찮아 보이길 바랍니다!");
}