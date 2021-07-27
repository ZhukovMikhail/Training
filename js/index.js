const userForm = document.querySelector('.user-form');
userForm.addEventListener('input', saveUserData);

const userInputData = {};

console.dir(userForm);

function saveUserData(evt) {
  userInputData[evt.target.name] = evt.target.value;
  //   console.dir(evt.target.name);
  localStorage.setItem('userData', JSON.stringify(userInputData));
}
function loadUserData() {
  if (localStorage.getItem('userData')) {
    userForm['user-name'].value = JSON.parse(localStorage.getItem('userData'))[
      'user-name'
    ];
    userForm['user-email'].value = JSON.parse(localStorage.getItem('userData'))[
      'user-email'
    ];
    userForm['user-gender'].value = JSON.parse(
      localStorage.getItem('userData'),
    )['user-gender'];
    userForm['check-box-label'].value = JSON.parse(
      localStorage.getItem('userData'),
    )['check-box-label'];
  }
}
loadUserData();

console.dir(userForm['user-name']);
console.dir(JSON.parse(localStorage.getItem('userData'))['user-name']);
