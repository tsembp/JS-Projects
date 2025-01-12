// Get single element from index.html
// const form = document.getElementById("my-form");
// console.log(form);

// Get multiple elements from index.html
const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove(); // item 3 remove
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "World"
// ul.lastElementChild.innerHTML = "<h1>Hello<h1>"; // html formatting

const btn = document.querySelector(".btn");
// btn.style.background = "red"; // styling
btn.addEventListener("click", function(e){
    e.preventDefault();

    // on click apply style class from style.css
    document.querySelector("body").classList.add("bg-dark");

    ul.lastElementChild.innerHTML = "<h1>Hello<h1>";
});
// mouseover : hover
// mouseout : ...