
const container=document.querySelector(".box-container");

for (let i = 1; i <= 1000; i++) {
    if (i%3==0 && i%5==0){
        container.innerHTML += '<div class="box bg-35">fizzbuzz</div>';
    }
    else if (i%3==0){
        container.innerHTML += '<div class="box bg-3">fizz</div>';
    }
    else if (i%5==0){
        container.innerHTML += '<div class="box bg-5">buzz</div>';
    }
    else{
        container.innerHTML += `<div class="box bg"> ${i}</div>`;
    }
    
}