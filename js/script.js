const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const boxThree = document.querySelector('.box3');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slide = 500;
let count  = 0;


next.addEventListener('click', () => {
   
    if(count === 2){
        count = 2;
    }else{
        count++;
    }
    boxOne.style.transform = `translateY(${-(slide * count)}px)`;
    boxTwo.style.transform = `translateY(${-(slide * count)}px)`;
    boxThree.style.transform = `translateY(${-(slide * count)}px)`;
   
   
})
prev.addEventListener('click', () => {
    if(count === 0){
        count = 0;
    }else{
        count--;
    }

    boxOne.style.transform = `translateY(-${slide * (count )}px)`;
    boxTwo.style.transform = `translateY(-${slide * (count) }px)`;
    boxThree.style.transform = `translateY(-${slide * (count)}px)`;
})

