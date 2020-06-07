let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let email = document.getElementById('emailAddress');
let password = document.getElementById('password');
let labels = document.querySelectorAll('label');

document.querySelector('.btn').addEventListener('click',(event) => {
   if (firstname.value === '' || firstname.value.length < 3){
       firstname.classList.add('input-error');
       firstname.classList.add('icon-error');
       labels[0].style.visibility = 'visible';
   }

   if (lastname.value === '' || lastname.value.length < 3){
    lastname.classList.add('input-error');
    lastname.classList.add('icon-error');
    labels[1].style.visibility = 'visible';
    }

    if (email.value === '' || email.value.length < 3){
        email.classList.add('input-error');
        email.classList.add('icon-error');
        labels[2].style.visibility = 'visible';
    }

    if (password.value === '' || password.value.length < 3){
        password.classList.add('input-error');
        password.classList.add('icon-error');
        labels[3].style.visibility = 'visible';
    }
})

