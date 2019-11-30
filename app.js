const inputs =document.getElementsByTagName('input');
const label = document.querySelectorAll('.label');


const form = document.querySelector('#signup-form');


form.addEventListener('submit',checkForm);

function checkForm(e){

  console.log(label)

  for(input of inputs){

   
    input.nextElementSibling.style.display ='none';
    input.previousElementSibling.style.display='none';

     if((input.type === 'text'|| input.type ==='password') && input.value === ''){
    
      input.nextElementSibling.style.display = 'flex';
      input.previousElementSibling.style.display='block';

   }else if(input.type === 'email' && !input.value.includes('@' && '.')){
    input.nextElementSibling.style.display = 'flex';
         
    }else{
    input.nextElementSibling.style.display = 'none';

    }
    
  }
      e.preventDefault();
  
  
    
}
