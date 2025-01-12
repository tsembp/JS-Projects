const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // form validation (both fields are NOT empty)
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please fill in both fields');
        msg.classList.add('error'); // add css styling error to msg
        msg.innerHTML = 'Please fill in both fields.';

        setTimeout(() => msg.remove(), 3000); // remove msg alert after 3 sec
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }


}

