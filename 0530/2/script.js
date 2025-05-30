const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

function onClickEvent(e){
    e.stopPropagation(); // 이벤트 전파 안하겠음
    console.log('클릭 이벤트');
}

box1.addEventListener('click',onClickEvent);
box2.addEventListener('click',onClickEvent);
box3.addEventListener('click',onClickEvent);