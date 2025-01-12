let items = ["Water the plants", "Walk the dog"];

const itemsDiv = document.getElementById("items");
const inputField = document.getElementById("itemInput");
const storageKey = "items";

function renderItems(){
    itemsDiv.innerHTML = null;

    items.forEach((item)=> {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => removeItem(item);

        container.appendChild(text);
        container.appendChild(btn);

        itemsDiv.appendChild(container);
    })
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey);
    if(oldItems){
        items = JSON.parse(oldItems); // convert JSON to JS Array
    }
    renderItems();
}

function saveItems(){
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);


}

function addItem(){
    const value = inputField.value;
    if(!value){
        alert("Cannot add empty item.");
        return;
    }

    items.push(value);
    renderItems();
    inputField.value = ''; // clear input field
    saveItems();
}

function removeItem(itemToRemove){
    items = items.filter(item => item !== itemToRemove);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);