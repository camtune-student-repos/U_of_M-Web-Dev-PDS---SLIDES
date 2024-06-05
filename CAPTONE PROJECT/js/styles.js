
/* Form Validation and Bootstrap toast trigger */

const search = document.querySelector('.navbarSearch');

 const form = document.querySelector('.signup-form');
 const feedback = document.querySelector('.feedback');

 form.addEventListener('submit', e => {
  e.preventDefault();
const firstNameUser = form.firstname.value;
const lastNameUser = form.lastname.value;
const firstLast = firstNameUser + lastNameUser;
const email = form.exampleInputEmail1.value;
const usernamePattern = /^[a-zA-Z]{3,12}$/;
const emailPattern = /^[a-zA-z]/g;
var specialChars = /[^a-zA-Z]/g;

if (firstLast === '' && email === '') {
  feedback.textContent = "Enter full name and email!"
}

else if (usernamePattern.test(firstNameUser && lastNameUser) && emailPattern.test(email)) {
  feedback.textContent = "Thanks for joining!";
  document.querySelector('.signup-form').reset();
}

else if (usernamePattern.test(firstNameUser) && usernamePattern.test(lastNameUser)) {
  feedback.textContent = "Enter email!";
}

else if (usernamePattern.test(firstNameUser)) {
  feedback.textContent = "Enter last name!";
}
else if (usernamePattern.test(lastNameUser)) {
  feedback.textContent = "Enter first name!";
}
else if (emailPattern.test(email)) {
  feedback.textContent = "Enter full name!";
}

else if (firstNameUser.match(specialChars) || lastNameUser.match(specialChars)) {
  feedback.textContent = "Only Letters allowed!";  
}
 else if (firstNameUser.match(specialChars) && lastNameUser.match(specialChars)) {
  feedback.textContent = "Only Letters allowed!"    
}  
  
 });

 const toastTrigger = document.getElementById('liveToastBtn')
 const toastLiveExample = document.getElementById('liveToast')
 
 if (toastTrigger) {
   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
   toastTrigger.addEventListener('click', () => {
     toastBootstrap.show()
   })
 };  