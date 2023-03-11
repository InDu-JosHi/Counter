let count= 0;
let zero = document.querySelector(".zero");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");

increase.addEventListener("click",()=>{
    count += 1;
    zero.innerHTML = count;
});
decrease.addEventListener("click",()=>{
    count -= 1;
    zero.innerHTML = count;
});
