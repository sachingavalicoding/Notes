const counter = document.getElementById("couter");
const add = document.getElementById("add");
const minus = document.getElementById("minus");


let count = 0;

window.addEventListener("load" , () => {
    counter.textContent = count;
})
add.addEventListener("click" , ()=> {
    count = count + 1;
    counter.textContent = count;
});

minus.addEventListener("click" , () => {
    count = count - 1;
    counter.textContent = count;
})


/* 

// optimize code 

const counter = document.getElementById("counter");
const updateCounter = (delta) => (counter.textContent = (count += delta));

let count = 0;
window.addEventListener("load", () => updateCounter(0));
document.getElementById("add").addEventListener("click", () => updateCounter(1));
document.getElementById("minus").addEventListener("click", () => updateCounter(-1));

*/