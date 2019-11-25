const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const label = document.querySelector('.label');
const warning = document.querySelector('.warning');
const warning1 = document.querySelectorAll('.warning');


const input = document.querySelector('.signup-input');

document.getElementById('signup-form').addEventListener('submit',signupRegister);

function signupRegister(e){
  if(firstName.value === ''){
    warning1[1].style.display='flex';
  }
  e.preventDefault();

  console.log(warning1);
}







